import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { personPhoto } from '../data/images';

function Hero() {
  const heroRef = useRef(null);
  const [index, setIndex] = useState(0);

  const phrases = [
    { thin: '분석은', bold: 'TIGHT' },
    { thin: '디자인', bold: 'FAST' },
    { thin: '디테일', bold: 'PERFECT' },
  ];

  // 1. 블롭 애니메이션: 배경 전체를 자유롭게 이동
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.blob', {
        x: 'random(-300, 300)',
        y: 'random(-150, 500)', // 아래쪽 범위 확대 → about 파임 gap 채움
        scale: 'random(0.6, 2.5)',
        rotation: 'random(-360, 360)',
        duration: 'random(8, 12)',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 5,
          from: 'random'
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // 2. 텍스트 애니메이션
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIndex((prev) => (prev + 1) % phrases.length);
        },
      });

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
      .to({}, { duration: 1.5 })
      .to('.split-char', {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power4.in',
      });
    }, heroRef);
    return () => ctx.revert();
  }, [index]);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="split-parent">
        <span className="split-char">{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ));
  };

  return (
    <section className="hero" ref={heroRef}>
      {/* 배경 블롭 데코레이션: 카드 없이 전체 화면 활용 */}
      <div className="hero-bg-blobs">
        <div className="blob blob-blue" style={{ top: '15%', left: '10%' }}></div>
        <div className="blob blob-pink" style={{ top: '60%', left: '20%' }}></div>
        <div className="blob blob-accent" style={{ top: '30%', right: '15%' }}></div>
        <div className="blob blob-white" style={{ bottom: '20%', right: '10%' }}></div>
        <div className="blob blob-light" style={{ top: '50%', left: '50%' }}></div>
        <div className="blob blob-blue" style={{ bottom: '10%', left: '30%' }}></div>
      </div>

      {/* 타이틀 영역 */}
      <div className="hero-title">
        <div className="hero-title-thin">
          {splitText(phrases[index].thin)}
        </div>
        <div className="hero-title-bold">
          {splitText(phrases[index].bold)}
        </div>
      </div>

      {/* 이미지 및 말풍선 영역 */}
      <div className="hero-main-area">
        <div className="hero-image-wrapper">
          <div className="hero-chat-bubble chat-hi">
            <span className="hero-chat-text">Hi! I'm Soobin!</span>
          </div>
          <div className="hero-chat-bubble chat-resume">
            <span className="hero-chat-text">
              <FontAwesomeIcon icon={faFileLines} className="mr-2" />이력서 보기
            </span>
          </div>
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
