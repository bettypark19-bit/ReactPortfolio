import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { personPhoto } from '../data/images';

function Hero() {
  const titleRef = useRef(null);
  const [index, setIndex] = useState(0);

  const phrases = [
    { thin: '분석은', bold: 'TIGHT' },
    { thin: '디자인', bold: 'FAST' },
    { thin: '디테일', bold: 'PERFECT' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // 애니메이션 종료 후 다음 문구로 변경
          setIndex((prev) => (prev + 1) % phrases.length);
        },
      });

      // 1. 나타나는 애니메이션 (In)
      tl.fromTo(
        '.split-char',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power4.out',
        }
      )
      // 2. 유지 시간 (Pause)
      .to({}, { duration: 1.5 })
      // 3. 사라지는 애니메이션 (Out)
      .to('.split-char', {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power4.in',
      });
    }, titleRef);

    return () => ctx.revert();
  }, [index]); // index가 변경될 때마다 효과 재실행

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="split-parent">
        <span className="split-char">{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ));
  };

  return (
    <section className="hero">
      {/* 타이틀 영역: 가운데 상단 */}
      <div className="hero-title" ref={titleRef}>
        <div className="hero-title-thin">
          {splitText(phrases[index].thin)}
        </div>
        <div className="hero-title-bold">
          {splitText(phrases[index].bold)}
        </div>
      </div>
{/* ... 이하 동일 */}
{/* ... 이하 동일 */}

      <div className="hero-logo-decoration right">
        <div className="hero-logo-circle blue"></div>
      </div>
      <div className="hero-logo-decoration left">
        <div className="hero-logo-circle pink"></div>
      </div>

      {/* 이미지 및 말풍선 영역: 정중앙 */}
      <div className="hero-main-area">
        <div className="hero-image-wrapper">
          {/* 말풍선 1: Hi! */}
          <div className="hero-chat-bubble chat-hi">
            <span className="hero-chat-text">Hi! I'm Soobin!</span>
          </div>

          {/* 말풍선 2: 이력서 보기 */}
          <div className="hero-chat-bubble chat-resume">
            <span className="hero-chat-text">
              <FontAwesomeIcon icon={faFileLines} className="mr-2" />이력서 보기
            </span>
          </div>

          {/* 말풍선 3: 깃허브 보기 */}
          <div className="hero-chat-bubble chat-github">
            <span className="hero-chat-text">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />깃허브 보기
            </span>
          </div>

          <img
            className="hero-person-photo"
            src={personPhoto[0]}
            alt="박수빈"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
