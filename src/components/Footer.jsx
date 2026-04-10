import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const titleRef    = useRef(null);
  const wrapperRef  = useRef(null);
  const dotRef      = useRef(null);
  const dotInnerRef = useRef(null);

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

      const DOT = 24; // dot 크기(px) = "1em"
      const D   = 6;  // 총 duration (초, 원본과 동일)

      // 위치 계산: dot 시작 위치 = title 중앙 (원본 grid 중앙과 동일 개념)
      const wrapperRect = wrapperEl.getBoundingClientRect();
      const titleRect   = titleEl.getBoundingClientRect();
      const lastRect    = lastChar ? lastChar.getBoundingClientRect() : null;

      const startLeft = (titleRect.left  - wrapperRect.left) + (titleRect.width  - DOT) / 2;
      const startTop  = (titleRect.top   - wrapperRect.top)  + (titleRect.height - DOT) / 2;

      // dot-inner 슬라이드 목표 (원본 4.4em 비례로 계산)
      const endX      = lastRect ? (lastRect.left - wrapperRect.left) - startLeft : 0;
      const overX     = endX * (6   / 4.4); // 원본 6em 오버슈트
      const pullX     = endX * (4.3 / 4.4); // 원본 4.3em 풀백

      const bgWave    = dotEl.querySelector('.footer-dot-wave.bg');
      const fgWave    = dotEl.querySelector('.footer-dot-wave.fg');
      const bonkChars = line2Chars.slice(-3, -1); // '니', '다'

      // 초기 설정: title 중앙에 scale:3 으로 등장 (원본과 동일)
      gsap.set(dotEl,      { left: startLeft, top: startTop, x: 0, y: 0, opacity: 0, scale: 3, scaleY: 1, transformOrigin: 'center center' });
      gsap.set(dotInnerEl, { x: 0, y: 0 });

      // ── @keyframes dot 재현 (원본 % → D 기준 초 변환) ──────
      const dotTl = gsap.timeline();

      dotTl
        // 10%: 등장 (scale:3 유지)
        .to(dotEl, { opacity: 1,                           duration: D * 0.10, ease: 'none'        })
        // 15%: squish 준비 (scale:3 상태에서 y:+1.5em, scaleY:1.5)
        .to(dotEl, { y: DOT * 1.5,  scaleY: 1.5,          duration: D * 0.05, ease: 'power2.inOut' })
        // 20%: 첫 점프 (scale 3→1, y: -300% = -3em)
        .to(dotEl, { y: -(DOT * 3), scale: 1, scaleY: 1,  duration: D * 0.05, ease: 'power2.out'  })
        // 30%: 1차 착지 (y: +1em = ground, squash)
        .to(dotEl, { y:  DOT,       scaleY: 0.5,           duration: D * 0.10, ease: 'power2.in'   })
        // 40%: 2차 점프 (y: -400% = -4em)
        .to(dotEl, { y: -(DOT * 4), scaleY: 1,             duration: D * 0.10, ease: 'power2.out'  })
        // 50%: 하강 (y: -1em)
        .to(dotEl, { y:  -DOT,                              duration: D * 0.10, ease: 'power2.in'   })
        // 53%: 소 바운스 (y: -300%)
        .to(dotEl, { y: -(DOT * 3),                         duration: D * 0.03, ease: 'power2.out'  })
        // 56%: (y: -1em)
        .to(dotEl, { y:  -DOT,                              duration: D * 0.03, ease: 'power2.in'   })
        // 59%: (y: -200%)
        .to(dotEl, { y: -(DOT * 2),                         duration: D * 0.03, ease: 'power2.out'  })
        // 62%: 최종 착지 (y: +1em = ground = '.'의 y 위치)
        .to(dotEl, { y:  DOT,                               duration: D * 0.03, ease: 'power2.in'   });

      // ── @keyframes dot-inner 재현 (절대 시간 위치로 삽입) ──
      dotTl
        .to(dotInnerEl, { x: overX, duration: D * 0.10, ease: 'power2.in'    }, D * 0.70)
        .to(dotInnerEl, { x: pullX, duration: D * 0.10, ease: 'power2.inOut' })
        .to(dotInnerEl, { x: endX,  duration: D * 0.03, ease: 'power2.inOut' });

      // bonk (80%)
      dotTl.to(bonkChars, { x: -14, duration: D * 0.02, yoyo: true, repeat: 1 }, D * 0.80);

      // wave (시작부터 0.25*D 동안 채워짐, 원본과 동일)
      if (bgWave) dotTl.fromTo(bgWave, { y: '100%', x:  '110%' }, { y: '30%', x: '0%', duration: D * 0.25 * 0.95, ease: 'power2.inOut' }, 0);
      if (fgWave) dotTl.fromTo(fgWave, { y: '100%', x: '-110%' }, { y: '30%', x: '0%', duration: D * 0.25,         ease: 'power2.inOut' }, 0);

      // ── 글자 등장 + 도트 동시 실행 ──────────────────────────
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
                    <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
                  </svg>
                  <svg className="footer-dot-wave fg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                    <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
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
            <form className="footer-email-form" onSubmit={(e) => e.preventDefault()}>
              <div className="footer-form-group">
                <label htmlFor="name" className="footer-form-label">담당자명</label>
                <input type="text" id="name" className="footer-form-input" placeholder="성함을 입력해주세요" required />
              </div>
              <div className="footer-form-group">
                <label htmlFor="email" className="footer-form-label">회사 메일</label>
                <input type="email" id="email" className="footer-form-input" placeholder="email@company.com" required />
              </div>
              <div className="footer-form-group">
                <label htmlFor="subject" className="footer-form-label">제목</label>
                <input type="text" id="subject" className="footer-form-input" placeholder="문의 제목을 입력해주세요" required />
              </div>
              <div className="footer-form-group">
                <label htmlFor="message" className="footer-form-label">내용</label>
                <textarea id="message" className="footer-form-textarea" placeholder="프로젝트에 대해 설명해주세요" rows="4" required></textarea>
              </div>
              <button type="submit" className="footer-submit-btn">전송하기</button>
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
