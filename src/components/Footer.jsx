import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

function Footer() {
  const titleRef    = useRef(null);
  const wrapperRef  = useRef(null);
  const dotRef      = useRef(null);
  const dotInnerRef = useRef(null);
  const formRef     = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const titleEl    = titleRef.current;
    const wrapperEl  = wrapperRef.current;
    const dotEl      = dotRef.current;
    const dotInnerEl = dotInnerRef.current;
    if (!titleEl || !wrapperEl || !dotEl || !dotInnerEl) return;

    const D = 6;       // 총 duration (초)
    const E = 'power2.inOut';

    // 문자 분리 (1열, 2열 분리 관리)
    const lines = titleEl.querySelectorAll('.title-line');
    const line1Chars = [];
    const line2Chars = [];

    lines.forEach((line, idx) => {
      const text = line.textContent;
      line.innerHTML = '';
      [...text].forEach(char => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.textContent = char === ' ' ? '\u00A0' : char;
        line.appendChild(span);
        if (idx === 0) line1Chars.push(span);
        else line2Chars.push(span);
      });
    });

    const allChars = [...line1Chars, ...line2Chars];

    // 초기 숨김
    gsap.set(allChars, { opacity: 0 });
    gsap.set(dotEl, { opacity: 0 });

    function playAnimation() {
      // 마지막 '.' 숨기기 (도트 요소로 대체)
      const lastChar = allChars[allChars.length - 1];
      if (lastChar) gsap.set(lastChar, { visibility: 'hidden' });

      // ── 상수 (CSS padding-top: 120px 기준) ──────────────────
      const DOT      = 24;   // 도트 크기(px)
      const PAD_TOP  = 120;  // .footer-title-wrapper padding-top
      const DOT_Y0   = 10;   // wrapper 상단에서 도트 초기 top (px)
      // 도트 하단이 텍스트 상단에 정확히 닿는 y 변위 = 바운스 '바닥'
      const FLOOR_Y  = PAD_TOP - DOT_Y0 - DOT; // 120 - 10 - 24 = 86px

      // ── 위치 계산 ───────────────────────────────────────────
      const wrapperRect = wrapperEl.getBoundingClientRect();
      const lastRect    = lastChar ? lastChar.getBoundingClientRect() : null;
      const midLeft     = (wrapperRect.width - DOT) / 2; // 수평 중앙

      // '.' 최종 위치 (wrapper 기준, dot top 기준)
      const endX = lastRect ? (lastRect.left - wrapperRect.left) - midLeft  : 0;
      const endY = lastRect ? (lastRect.top  - wrapperRect.top)  - DOT_Y0   : FLOOR_Y;

      const bgWave    = dotEl.querySelector('.footer-dot-wave.bg');
      const fgWave    = dotEl.querySelector('.footer-dot-wave.fg');
      const bonkChars = line2Chars.slice(-3, -1); // '니', '다'

      // ── 초기 설정 ────────────────────────────────────────────
      gsap.set(dotEl,      { top: DOT_Y0, left: midLeft, x: 0, y: 0, opacity: 0, scale: 2.5, transformOrigin: 'center center' });
      gsap.set(dotInnerEl, { x: 0 });

      // ── 도트 바운스 타임라인 ─────────────────────────────────
      const dotTl = gsap.timeline();

      // 등장 + 첫 낙하 (scale 2.5→1, 텍스트 상단 바닥까지)
      dotTl.to(dotEl, { opacity: 1, scale: 1, y: FLOOR_Y, duration: 0.40, ease: 'power2.in' });

      // 감쇠 바운스 (scaleY 없음 → 완전한 구 유지)
      dotTl
        .to(dotEl, { y: FLOOR_Y - 70, duration: 0.22, ease: 'power2.out' }) // 1차 반등
        .to(dotEl, { y: FLOOR_Y,      duration: 0.20, ease: 'power2.in'  }) // 착지
        .to(dotEl, { y: FLOOR_Y - 42, duration: 0.18, ease: 'power2.out' }) // 2차 반등
        .to(dotEl, { y: FLOOR_Y,      duration: 0.16, ease: 'power2.in'  }) // 착지
        .to(dotEl, { y: FLOOR_Y - 18, duration: 0.13, ease: 'power2.out' }) // 3차 반등
        .to(dotEl, { y: FLOOR_Y,      duration: 0.12, ease: 'power2.in'  }) // 착지
        .to(dotEl, { y: FLOOR_Y -  6, duration: 0.08, ease: 'power2.out' }) // 4차 (미세)
        .to(dotEl, { y: FLOOR_Y,      duration: 0.08, ease: 'power2.in'  }); // 정착

      // '.' 위치로 대각 이동 (y: 텍스트 하단까지, x: dot-inner 슬라이드)
      dotTl
        .to(dotEl,      { y: endY, duration: 0.55, ease: 'power3.inOut' }, '+=0.06')
        .to(dotInnerEl, { x: endX, duration: 0.55, ease: 'power3.inOut' }, '<');

      // bonk
      dotTl.to(bonkChars, { x: -12, duration: 0.10, yoyo: true, repeat: 1, ease: 'power2.out' }, '-=0.14');

      // 웨이브 채우기 (착지 시점부터 시작, y: '-10%' 이하 → 도트 완전히 채움)
      if (bgWave) dotTl.fromTo(bgWave, { y: '100%', x:  '110%' }, { y: '-10%', x: '0%', duration: 1.4, ease: 'power2.inOut' }, 0.35);
      if (fgWave) dotTl.fromTo(fgWave, { y: '100%', x: '-110%' }, { y: '-10%', x: '0%', duration: 1.6, ease: 'power2.inOut' }, 0.20);

      // ── 글자 등장 + 도트 병렬 실행 ──────────────────────────
      gsap.timeline()
        .fromTo(line1Chars, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.04, ease: 'power2.out' }, 0)
        .fromTo(line2Chars, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.04, ease: 'power2.out' }, 0.5)
        .add(dotTl, 0);
    }

    ScrollTrigger.create({
      trigger: titleEl,
      start:   'top 85%',
      once:    true,
      onEnter: playAnimation,
    });

    return () => {
      ScrollTrigger.getAll()
        .filter(t => t.trigger === titleEl)
        .forEach(t => t.kill());
      gsap.killTweensOf([dotEl, dotInnerEl, ...allChars]);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        alert('메시지가 전송되었습니다!');
        formRef.current.reset();
      })
      .catch((error) => {
        alert('전송 실패: ' + error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-cta-card">
        <div className="footer-content-layout">
          {/* 왼쪽: 연락처 정보 */}
          <div className="footer-info-side">
            <div className="footer-title-wrapper" ref={wrapperRef}>
              <h2 className="footer-cta-title" ref={titleRef}>
                <span className="title-line">기분 좋은 시작을 함께  </span>
                <br />
                <span className="title-line">만들어보고 싶습니다.</span>
              </h2>
              <div className="footer-dot" ref={dotRef}>
                <div className="footer-dot-inner" ref={dotInnerRef}>
                  <svg className="footer-dot-wave bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                    <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v710h800V90z" />
                  </svg>
                  <svg className="footer-dot-wave fg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                    <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v710h800V90z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a href="mailto:s00bpark425@gmail.com" className="footer-contact-value">
                  s00bpark425@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <span className="footer-contact-value">010-9417-1874</span>
              </div>
            </div>
          </div>

          {/* 오른쪽: 이메일 폼 */}
          <div className="footer-form-side">
            <form className="footer-email-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="footer-form-group">
                <label htmlFor="name" className="footer-form-label">담당자명</label>
                <input type="text" id="name" name="user_name" className="footer-form-input" placeholder="성함을 입력해주세요" required />
              </div>
              <div className="footer-form-group">
                <label htmlFor="email" className="footer-form-label">회사 메일</label>
                <input type="email" id="email" name="user_email" className="footer-form-input" placeholder="email@company.com" required />
              </div>
              <div className="footer-form-group">
                <label htmlFor="subject" className="footer-form-label">제목</label>
                <input type="text" id="subject" name="user_subject" className="footer-form-input" placeholder="문의 제목을 입력해주세요" required />
              </div>
              <div className="footer-form-group">
                <label htmlFor="message" className="footer-form-label">내용</label>
                <textarea id="message" name="message" className="footer-form-textarea" placeholder="프로젝트에 대해 설명해주세요" rows="4" required></textarea>
              </div>
              <button type="submit" className="footer-submit-btn" disabled={loading}>
                {loading ? '전송 중...' : '전송하기'}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-collab-banner">
          <p className="footer-collab-text">
            원활한 소통과 성실함을 바탕으로 팀에 꼭 필요한 에너지를 더하겠습니다. 편하게 연락해 주세요.
          </p>
        </div>
      </div>

      <div className="footer-copyright">
        Copyright © 2026 by 박수빈. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
