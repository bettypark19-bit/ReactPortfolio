import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // 터치 디바이스에서는 커서 로직 실행 안 함
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    const follower = followerRef.current;

    // xPercent/yPercent로 요소 중앙 정렬 (GSAP이 transform 전체를 관리)
    gsap.set([dot, follower], { xPercent: -50, yPercent: -50 });

    // lerp용 위치 변수
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // gsap.ticker를 이용한 반복 루프 (코드펜의 TweenMax repeat:-1 방식)
    const tick = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      // 팔로워: lerp 적용된 좌표
      gsap.set(follower, { x: posX, y: posY });
      // 점 커서: 마우스 좌표 즉시 반영
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    gsap.ticker.add(tick);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // GSAP으로 hover 효과 처리 (CSS transition과 충돌 방지)
    const onMouseEnterLink = () => {
      gsap.to(dot, { scale: 0, opacity: 0.5, duration: 0.3, ease: 'back.out(2.33)' });
      gsap.to(follower, { scale: 3, opacity: 0.7, duration: 0.6, ease: 'back.out(2.33)' });
    };

    const onMouseLeaveLink = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(2.33)' });
      gsap.to(follower, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2.33)' });
    };

    window.addEventListener('mousemove', onMouseMove);

    // 모든 링크, 버튼, 그리고 'link' 클래스를 가진 요소에 이벤트 바인딩
    const links = document.querySelectorAll('a, button, .link, .navbar-logo');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}

export default CustomCursor;
