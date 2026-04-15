import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef  = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // 햄버거 ↔ X 아이콘 전환 (GSAP)
  useLayoutEffect(() => {
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    if (!l1 || !l2 || !l3) return;

    if (menuOpen) {
      gsap.to(l1, { rotation: 45,  y:  7, duration: 0.3, ease: 'power2.inOut' });
      gsap.to(l2, { opacity: 0,          duration: 0.15 });
      gsap.to(l3, { rotation: -45, y: -7, duration: 0.3, ease: 'power2.inOut' });
    } else {
      gsap.to(l1, { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
      gsap.to(l2, { opacity: 1,         duration: 0.15, delay: 0.1 });
      gsap.to(l3, { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' });
    }
  }, [menuOpen]);

  // 모바일 메뉴 패널 등장 애니메이션 (GSAP)
  useLayoutEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: 12, scale: 0.95 },
        { opacity: 1, y: 0,  scale: 1,   duration: 0.25, ease: 'power2.out' }
      );
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">S</div>

      {/* 데스크톱 네비게이션 링크 */}
      <div className="navbar-links">
        <a className="navbar-link" href="#about">About me</a>
        <a className="navbar-link" href="#skills">Skills</a>
        <a className="navbar-link" href="#projects">Projects</a>
        <a className="navbar-link" href="#other-works">Works</a>
      </div>

      {/* 모바일 전용 햄버거 버튼 */}
      <button
        className="navbar-menu-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
      >
        <span className="navbar-menu-line" ref={line1Ref}></span>
        <span className="navbar-menu-line" ref={line2Ref}></span>
        <span className="navbar-menu-line" ref={line3Ref}></span>
      </button>

      {/* 모바일 전용 드롭업 메뉴 (React state로 표시/숨김 제어) */}
      {menuOpen && (
        <div className="navbar-mobile-menu" ref={menuRef}>
          <a className="navbar-mobile-link" href="#about" onClick={closeMenu}>About me</a>
          <a className="navbar-mobile-link" href="#skills" onClick={closeMenu}>Skills</a>
          <a className="navbar-mobile-link" href="#projects" onClick={closeMenu}>Projects</a>
          <a className="navbar-mobile-link" href="#other-works" onClick={closeMenu}>Works</a>
        </div>
      )}

      <button className="navbar-connect-btn" onClick={scrollToContact}>Connect!</button>
    </nav>
  );
}

export default Navbar;
