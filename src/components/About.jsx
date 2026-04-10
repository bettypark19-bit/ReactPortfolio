import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { personPhoto } from '../data/images';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

// 상단 좌우 border-radius(≈96px) 포함한 경로
const down   = 'M0,150 Q0,0 150,0 C150,0 569,80 1139,80 S2128,0 2128,0 Q2278,0 2278,150 V683 H0 Z';   // 약한 아래 파임
const up     = 'M0,150 Q0,0 150,0 C150,0 569,-100 1139,-100 S2128,0 2128,0 Q2278,0 2278,150 V683 H0 Z'; // 위쪽 반등
const center = 'M0,150 Q0,0 150,0 C150,0 569,0 1139,0 S2128,0 2128,0 Q2278,0 2278,150 V683 H0 Z';

function About() {
  const sectionRef = useRef(null);
  const pathRef    = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path    = pathRef.current;
    if (!section || !path) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        toggleActions: 'play pause resume reverse',
        onEnter: (self) => {
          const velocity  = Math.abs(self.getVelocity());
          const variation = velocity / 5000;
          const tl = gsap.timeline({ overwrite: true });

          // 평평 → 약한 아래 파임 → 위쪽 반등 → 탄성 정착
          tl.to(path, { morphSVG: down,   duration: 0.2, ease: 'power2.in'   })
            .to(path, { morphSVG: up,     duration: 0.2, ease: 'power2.out'  })
            .to(path, { morphSVG: center, duration: 1.5, ease: `elastic.out(${0.3 + variation}, 0.45)` });
        },
      });
    }, section);

    return () => ctx.revert();
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
        <path ref={pathRef} fill="#ffffff" d={center} />
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
