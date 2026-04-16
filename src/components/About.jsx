import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { personPhoto } from '../data/images';

// cx: SVG X축 코너 길이, cy: SVG Y축 코너 길이
// CSS border-radius 96px을 뷰포트 크기에 맞게 SVG 좌표로 환산한 값을 받음
function makePaths(cx, cy) {
  const rx = 2278 - cx; // 우측 코너 시작 X
  return {
    center: `M0,${cy} Q0,0 ${cx},0 C${cx},0 569,0 1139,0 S${rx},0 ${rx},0 Q2278,0 2278,${cy} V683 H0 Z`,
    down:   `M0,${cy} Q0,0 ${cx},0 C${cx},0 569,80 1139,80 S${rx},0 ${rx},0 Q2278,0 2278,${cy} V683 H0 Z`,
    up:     `M0,${cy} Q0,0 ${cx},0 C${cx},0 569,-100 1139,-100 S${rx},0 ${rx},0 Q2278,0 2278,${cy} V683 H0 Z`,
  };
}

function About() {
  const sectionRef     = useRef(null);
  const pathRef        = useRef(null);
  const pathsRef       = useRef(makePaths(150, 150)); // 초기값: 기존 고정값으로 시작
  const isAnimatingRef = useRef(false);               // 애니메이션 진행 여부 추적

  // 섹션 크기로부터 cx/cy를 계산해 pathsRef를 갱신하고 현재 path를 즉시 반영
  function updatePaths() {
    const section = sectionRef.current;
    const path    = pathRef.current;
    if (!section || !path) return;

    const W  = section.offsetWidth;
    const H  = section.offsetHeight;
    // CSS border-radius 실제 적용값을 읽어 SVG 좌표로 환산 (breakpoint별 값 자동 반영)
    const br = parseFloat(getComputedStyle(section).borderTopLeftRadius) || 96;
    const cx = (br * 2278) / W;
    const cy = (br * 683)  / H;
    pathsRef.current = makePaths(cx, cy);

    // 애니메이션 진행 중에는 건너뜀 — 다음 onEnter 시 최신 path 자동 반영
    if (!isAnimatingRef.current) {
      path.setAttribute('d', pathsRef.current.center);
    }
  }

  useEffect(() => {
    const section = sectionRef.current;
    const path    = pathRef.current;
    if (!section || !path) return;

    // 마운트 시 첫 계산
    updatePaths();

    // 리사이즈 감지
    const observer = new ResizeObserver(() => updatePaths());
    observer.observe(section);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        toggleActions: 'play pause resume reverse',
        onEnter: (self) => {
          const velocity  = Math.abs(self.getVelocity());
          const variation = velocity / 5000;
          const { down, up, center } = pathsRef.current; // 항상 최신 path 사용
          const tl = gsap.timeline({
            overwrite: true,
            onStart:    () => { isAnimatingRef.current = true;  },
            onComplete: () => { isAnimatingRef.current = false; },
          });

          // 평평 → 약한 아래 파임 → 위쪽 반등 → 탄성 정착
          tl.to(path, { morphSVG: down,   duration: 0.2, ease: 'power2.in'   })
            .to(path, { morphSVG: up,     duration: 0.2, ease: 'power2.out'  })
            .to(path, { morphSVG: center, duration: 1.5, ease: `elastic.out(${0.3 + variation}, 0.45)` });
        },
      });
    }, section);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="about"
      id="about"
      ref={sectionRef}
      style={{ position: 'relative', background: 'transparent', zIndex: 1 }}
    >
      {/* MorphSVG 바운스 애니메이션 — .about 섹션 배경 역할 */}
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2278 683"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <path ref={pathRef} fill="#ffffff" d={pathsRef.current.center} />
      </svg>

      <div className="about-inner" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="about-title">About Me</h2>
        <div className="about-hero">
          <div className="about-avatar-group">
            <img
              src={personPhoto[1]}
              alt="박수빈"
              className="about-avatar-img"
            />
          </div>
          <h1 className="about-hero-text">
            완결을 만드는 <br /> <span className="about-highlight">디자이너 박수빈</span> 입니다.
          </h1>
        </div>

        <div className="about-info-grid">
          {/* Introduce */}
          <div className="about-info-column">
            <h3 className="about-column-title">Introduce</h3>
            <ul className="about-info-list">
              <li><span>Name</span> 박수빈</li>
              <li><span>Age</span> 2001.04.25 (24세)</li>
              <li><span>Address</span> 서울시 동작구 거주</li>
              <li><span>Phone</span> 010-9417-1874</li>
              <li><span>E-mail</span> s00bpark425@gmail.com</li>
            </ul>
          </div>

          {/* Personalities */}
          <div className="about-info-column">
            <h3 className="about-column-title">Personalities</h3>
            <div className="about-tag-container">
              <span className="about-tag">#긍정적인</span>
              <span className="about-tag">#손빠른</span>
              <span className="about-tag">#계획적인</span>
              <span className="about-tag">#INFJ</span>
              <span className="about-tag">#웃음많은</span>
              <span className="about-tag">#다재다능</span>
            </div>
          </div>

          {/* Education */}
          <div className="about-info-column">
            <h3 className="about-column-title">Education</h3>
            <ul className="about-edu-list">
              <li>
                <span className="about-edu-year">2026.04</span>
                <p>MBC 아카데미 챗GPT 생성형 AI를 활용한 반응형 웹콘텐츠 개발기획자 양성과정 수료</p>
              </li>
              <li>
                <span className="about-edu-year">2026.02</span>
                <p>국민대학교 금속공예학과 졸업</p>
              </li>
              <li>
                <span className="about-edu-year">2025.06</span>
                <p>서울중부기술교육원 컴퓨터그래픽디자인실무자양성과정 수료</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
