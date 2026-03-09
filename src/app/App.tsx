import { useEffect, useRef } from 'react';
import '../styles/portfolio.css';

import personPhoto from 'figma:asset/c759566774071b028aa620da656708bed20fab29.png';
import covivantImg from 'figma:asset/62dd12decc4f5023eff12e04d3cee579db1b3502.png';
import asesmeImg from 'figma:asset/a3f1b387717376f84400c4aaf63f6048abba092e.png';
import btwAcademyImg from 'figma:asset/0d9c91a8e1289901eb5d85bb4de9ea15032454ef.png';
import otherWorksImg from 'figma:asset/98d77422494ae79776d23ba548b394a837c8b947.png';

/* =======================================================
   NAVBAR  — 화면 가운데 하단에 고정 (div.navbar15_component)
   ======================================================= */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">W</div>
      <div className="navbar-links">
        <a className="navbar-link" href="#about">About me</a>
        <a className="navbar-link" href="#skills">Skills</a>
        <a className="navbar-link" href="#projects">Works</a>
        <a className="navbar-link" href="#other-works">Explorations</a>
      </div>
      <button className="navbar-connect-btn">Connect!</button>
    </nav>
  );
}

/* =======================================================
   HERO SECTION
   ======================================================= */
var MARQUEE_TEXT = 'BUILDING DIGITAL PRODUCTS, BRANDS, AND EXPERIENCE. ';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text-content">
        <div className="hero-location">
          <span className="hero-location-icon">📍</span>
          <span>Based in Bali</span>
        </div>
        <div className="hero-role">Product Designer</div>
      </div>

      <div className="hero-marquee-wrapper" style={{ top: '340px' }}>
        <div className="hero-marquee-track">
          <span>{MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT}</span>
        </div>
      </div>
      <div className="hero-marquee-wrapper" style={{ top: '490px' }}>
        <div className="hero-marquee-track-reverse">
          <span>{MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT}</span>
        </div>
      </div>

      <div className="hero-logo-decoration left">
        <div className="hero-logo-circle blue"></div>
      </div>
      <div className="hero-logo-decoration right">
        <div className="hero-logo-circle pink"></div>
      </div>

      <div className="hero-image-area">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div className="hero-chat-bubble">
            <span className="hero-chat-text">Hi! I'm Juli!</span>
          </div>
          <img
            className="hero-person-photo"
            src={personPhoto}
            alt="Park Soobin - Product Designer"
          />
        </div>
      </div>
    </section>
  );
}

/* =======================================================
   ABOUT ME / EXPERIENCE SECTION
   ======================================================= */
var experiences = [
  { id: 1, company: 'Fiverr',        role: 'Freelance Graphic Designer', years: '2018 - Present'   },
  { id: 2, company: 'Moonstone Co',  role: 'Font Designer',              years: '2020 - 2022'      },
  { id: 3, company: 'BTW Edutech',   role: 'UI/UX Designer',             years: 'Jul 2023 - Jul 2024' },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <h2 className="about-section-title">{'About me\n/Experience'}</h2>
        <div className="about-info">
          <div className="about-name">
            <span className="about-name-kr">박수빈</span>
            <span className="about-name-en">Park Soobin</span>
          </div>
          <p className="about-bio">
            Hey there! I'm a product designer living it up in Bali. I focus on UI/UX
            design, responsive web design, and visual development.
          </p>
        </div>
      </div>
      <div className="about-cards">
        {experiences.map(function(exp) {
          return (
            <div className="exp-card" key={exp.id}>
              <div className="exp-card-company">{exp.company}</div>
              <div className="exp-card-role">{exp.role}</div>
              <div className="exp-card-years">{exp.years}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =======================================================
   CERTIFICATION / SKILLS SECTION  — border-radius: 96px
   ======================================================= */
var certs = [
  {
    id: 1,
    name: 'Google UX Design: Specialization',
    row1: ['Design Thinking', 'User Interface Design', 'Prototyping', 'User Experience (UX)'],
    row2: ['UX Research', 'Usability Testing', 'Responsive Web Design', 'Visual Design'],
  },
  {
    id: 2,
    name: 'Google Project Management: Specialization',
    row1: ['Project Management', 'Risk Management', 'Stakeholder Relations', 'Procurement'],
    row2: ['Project Scope Development', 'Software Project Management', 'Budgeting', 'Process Improvement'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Certification / Skills</h2>
      {certs.map(function(cert) {
        return (
          <div className="cert-block" key={cert.id}>
            <div className="cert-name">{cert.name}</div>
            <div className="skills-row">
              {cert.row1.map(function(skill) {
                return <span className="skill-pill" key={skill}>{skill}</span>;
              })}
            </div>
            <div className="skills-row">
              {cert.row2.map(function(skill) {
                return <span className="skill-pill" key={skill}>{skill}</span>;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* =======================================================
   PROJECT CARDS
   — 세로 스크롤 + scroll-snap
   — 뷰포트 가운데 카드: opacity 100%, 잘리는 카드: opacity 50%
   ======================================================= */
var projects = [
  {
    id: 1,
    title: 'Roommate Finding App | Mobile App Design | UI/UX',
    tags: ['Mobile App', 'Case Study', 'UI/UX Design'],
    desc: 'Covivant is a roommate finder app designed to make the process of finding a compatible and trustworthy roommate easier, safer, and more social.',
    image: covivantImg,
    alt: 'Covivant Project',
  },
  {
    id: 2,
    title: 'AsesMe',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: 'A solution for conducting assessments & competency tests independently with a format that is transparent, accurate and easily accessible.',
    image: asesmeImg,
    alt: 'AsesMe Project',
  },
  {
    id: 3,
    title: 'BTW Academy',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: btwAcademyImg,
    alt: 'BTW Academy Project',
  },
];

function ProjectCards() {
  var containerRef = useRef(null);

  useEffect(function() {
    var container = containerRef.current;
    if (!container) return;

    function updateOpacity() {
      var cards = container.querySelectorAll('.project-card');
      var containerRect = container.getBoundingClientRect();
      // 컨테이너의 세로 중앙값
      var containerCenterY = containerRect.top + containerRect.height / 2;

      cards.forEach(function(card) {
        var cardRect = card.getBoundingClientRect();
        var cardCenterY = cardRect.top + cardRect.height / 2;
        var distance = Math.abs(cardCenterY - containerCenterY);
        // 카드 높이의 절반을 기준으로 ratio 계산
        var ratio = Math.min(distance / (container.offsetHeight * 0.5), 1);
        var opacity = 1 - ratio * 0.52;
        var scale = 1 - ratio * 0.035;
        card.style.opacity = opacity;
        card.style.transform = 'scale(' + scale + ')';
      });
    }

    container.addEventListener('scroll', updateOpacity);
    // 초기 실행: 첫 번째 카드가 중앙에 오도록 scrollTop = 0
    setTimeout(function() {
      container.scrollTop = 0;
      updateOpacity();
    }, 80);

    return function() {
      container.removeEventListener('scroll', updateOpacity);
    };
  }, []);

  return (
    <div className="project-cards-scroll" ref={containerRef}>
      {projects.map(function(proj) {
        return (
          <div className="project-card" key={proj.id}>
            <div className="project-card-text">
              <h3 className="project-card-title">{proj.title}</h3>
              <div className="project-card-tags">
                {proj.tags.map(function(tag) {
                  return <span className="project-tag" key={tag}>{tag}</span>;
                })}
              </div>
              <p className="project-card-desc">{proj.desc}</p>
            </div>
            <div className="project-card-image">
              <img src={proj.image} alt={proj.alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">{'Projects\n/Case Studies'}</h2>
        <button className="projects-see-all">See all Cases &nbsp;↗</button>
      </div>
      <ProjectCards />
    </section>
  );
}

/* =======================================================
   EXPLORE / OTHER WORKS
   — div.explor_component: 하단 스크롤 시 카드가 오른쪽→왼쪽으로 이동
   — Swiper 기능 (터치/마우스 드래그) + 스크롤 연동 자동 이동
   ======================================================= */
var otherWorksItems = [
  { id: 1, image: otherWorksImg, label: 'Stock Market App' },
  { id: 2, image: otherWorksImg, label: 'UI Exploration'   },
  { id: 3, image: otherWorksImg, label: 'Brand Design'     },
  { id: 4, image: otherWorksImg, label: 'Web Design'       },
];

function ExploreSection() {
  var sectionRef = useRef(null);
  var trackRef   = useRef(null);
  var isDragging = useRef(false);
  var startX     = useRef(0);
  var dragTranslate = useRef(0); // 드래그 시작 시점의 현재 translate

  useEffect(function() {
    var section = sectionRef.current;
    var track   = trackRef.current;
    if (!section || !track) return;

    // 현재 translateX 값 읽기
    function getCurrentTranslate() {
      var style = window.getComputedStyle(track);
      var matrix = new DOMMatrix(style.transform);
      return matrix.m41;
    }

    // ── 스크롤 연동: 페이지를 아래로 내릴수록 카드가 왼쪽으로 이동 ──
    function onScroll() {
      // 드래그 중이면 스크롤 연동 스킵
      if (isDragging.current) return;

      var rect = section.getBoundingClientRect();
      var sectionH = section.offsetHeight;
      var viewH = window.innerHeight;

      if (rect.bottom < 0 || rect.top > viewH) return;

      // progress 0 ~ 1
      var scrollable = sectionH - viewH;
      var progress = scrollable > 0 ? (-rect.top) / scrollable : 0;
      progress = Math.max(0, Math.min(1, progress));

      var wrapper = track.parentElement;
      var maxTranslate = track.scrollWidth - wrapper.offsetWidth;
      if (maxTranslate <= 0) return;

      // 오른쪽에서 왼쪽: progress=0 → translateX=0, progress=1 → -maxTranslate
      var tx = -(progress * maxTranslate);
      track.style.transition = 'none';
      track.style.transform = 'translateX(' + tx + 'px)';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // 초기 실행
    setTimeout(onScroll, 60);

    // ── 드래그(Swiper) 기능 ──
    var wrapper = track.parentElement;

    function onPointerDown(e) {
      isDragging.current = true;
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      startX.current = clientX;
      dragTranslate.current = getCurrentTranslate();
      track.style.transition = 'none';
    }

    function onPointerMove(e) {
      if (!isDragging.current) return;
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var diff = clientX - startX.current;
      var maxT = -(track.scrollWidth - wrapper.offsetWidth);
      var newT = Math.min(0, Math.max(maxT, dragTranslate.current + diff));
      track.style.transform = 'translateX(' + newT + 'px)';
      if (e.cancelable) e.preventDefault();
    }

    function onPointerUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      track.style.transition = 'transform 0.35s ease';
    }

    wrapper.addEventListener('mousedown',  onPointerDown);
    wrapper.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove',  onPointerMove);
    window.addEventListener('touchmove',  onPointerMove, { passive: false });
    window.addEventListener('mouseup',   onPointerUp);
    window.addEventListener('touchend',  onPointerUp);

    return function() {
      window.removeEventListener('scroll', onScroll);
      wrapper.removeEventListener('mousedown',  onPointerDown);
      wrapper.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove',  onPointerMove);
      window.removeEventListener('touchmove',  onPointerMove);
      window.removeEventListener('mouseup',   onPointerUp);
      window.removeEventListener('touchend',  onPointerUp);
    };
  }, []);

  return (
    <section className="other-works" id="other-works" ref={sectionRef}>
      <h2 className="other-works-title">My Other Works!</h2>

      {/* div.explor_component */}
      <div className="explor-component">
        {/* OtherCardWrap */}
        <div className="other-card-wrap">
          {/* 카드 트랙 */}
          <div className="other-card-track" ref={trackRef}>
            {otherWorksItems.map(function(item) {
              return (
                <div className="other-works-item" key={item.id}>
                  <div className="other-works-item-inner">
                    <img src={item.image} alt={item.label} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================================================
   FOOTER
   ======================================================= */
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta-card">
        <p className="footer-cta-title">
          Looking to transform your brand with compelling design?
        </p>
        <button className="footer-start-btn">Start a Project</button>

        <div className="footer-collab-banner">
          <p className="footer-collab-text">
            Let's collaborate and create something extraordinary! ✨
          </p>
        </div>

        <div className="footer-contact-row">
          <div className="footer-contact-block">
            <div className="footer-contact-label">contact</div>
            <div className="footer-contact-email">s00bpark425@gmail.com</div>
          </div>
          <div className="footer-socials-block">
            <div className="footer-socials-label">socials</div>
            <div className="footer-socials-list">
              <span className="footer-social-link">insta</span>
              <span className="footer-social-link">X(twt)</span>
              <span className="footer-social-link">Linkedin</span>
              <span className="footer-social-link">dribbble</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        Copyright © 2025 – Made with ❤︎ by Komang Juliantara
      </div>
    </footer>
  );
}

/* =======================================================
   APP ROOT
   ======================================================= */
export default function App() {
  return (
    <div className="portfolio-root">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExploreSection />
      <Footer />
      {/* Navbar: 화면 가운데 하단에 고정 */}
      <Navbar />
    </div>
  );
}