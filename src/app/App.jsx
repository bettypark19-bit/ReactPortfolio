import { useEffect, useRef } from 'react';
import '../styles/portfolio.css';

/* =======================================================
   이미지 경로 — public/images/ 폴더 참조
   ======================================================= */
const personPhoto = '/images/person.png';

const projectImgs = [
  '/images/project-1.png',
  '/images/project-2.png',
  '/images/project-3.png',
];

const otherWorksImgs = [
  '/images/other-works-1.png',
  '/images/other-works-2.png',
  '/images/other-works-3.png',
  '/images/other-works-4.png',
];

/* =======================================================
   NAVBAR
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
const MARQUEE_TEXT = 'BUILDING DIGITAL PRODUCTS, BRANDS, AND EXPERIENCE. ';

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
            <span className="hero-chat-text">Hi! I'm Soobin!</span>
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
   ABOUT ME SECTION
   ======================================================= */
function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <h2 className="about-title">About Me</h2>
        <div className="about-hero">
          <div className="about-avatar-group">
            <img 
              src={personPhoto} 
              alt="Park Soobin" 
              className="about-avatar-img" 
            />
          </div>
          <h1 className="about-hero-text">
            빠른 이해! 신속 작업! 하는<br /> <span className="about-highlight">quick<span className="about-red">lee</span>박수빈</span> 입니다.
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

/* =======================================================
   CERTIFICATION / SKILLS SECTION
   ======================================================= */
const certs = [
  {
    id: 1,
    name: '자격증',
    row1: ['운전면허증', '포토샵 1급', '일러스트 1급'],
    row2: [],
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
      {certs.map((cert) => (
        <div className="cert-block" key={cert.id}>
          <div className="cert-name">{cert.name}</div>
          <div className="skills-row">
            {cert.row1.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
          <div className="skills-row">
            {cert.row2.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* =======================================================
   PROJECT CARDS
   ======================================================= */
const projects = [
  {
    id: 1,
    title: 'Roommate Finding App | Mobile App Design | UI/UX',
    tags: ['Mobile App', 'Case Study', 'UI/UX Design'],
    desc: 'Covivant is a roommate finder app designed to make the process of finding a compatible and trustworthy roommate easier, safer, and more social.',
    image: projectImgs[0],
    alt: 'Covivant Project',
  },
  {
    id: 2,
    title: 'AsesMe',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: 'A solution for conducting assessments & competency tests independently with a format that is transparent, accurate and easily accessible.',
    image: projectImgs[1],
    alt: 'AsesMe Project',
  },
  {
    id: 3,
    title: 'BTW Academy',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[2],
    alt: 'BTW Academy Project',
  },
];

function ProjectCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateOpacity = () => {
      const cards = container.querySelectorAll('.project-card');
      const containerRect = container.getBoundingClientRect();
      const containerCenterY = containerRect.top + containerRect.height / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenterY - containerCenterY);
        const ratio = Math.min(distance / (container.offsetHeight * 0.5), 1);
        const opacity = 1 - ratio * 0.52;
        const scale = 1 - ratio * 0.035;
        card.style.opacity = opacity;
        card.style.transform = `scale(${scale})`;
      });
    };

    container.addEventListener('scroll', updateOpacity);
    const timeoutId = setTimeout(() => {
      container.scrollTop = 0;
      updateOpacity();
    }, 80);

    return () => {
      container.removeEventListener('scroll', updateOpacity);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="project-cards-scroll" ref={containerRef}>
      {projects.map((proj) => (
        <div className="project-card" key={proj.id}>
          <div className="project-card-text">
            <h3 className="project-card-title">{proj.title}</h3>
            <div className="project-card-tags">
              {proj.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p className="project-card-desc">{proj.desc}</p>
          </div>
          <div className="project-card-image">
            <img src={proj.image} alt={proj.alt} />
          </div>
        </div>
      ))}
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
   ======================================================= */
const otherWorksItems = [
  { id: 1, image: otherWorksImgs[0], label: 'Stock Market App' },
  { id: 2, image: otherWorksImgs[1], label: 'UI Exploration'   },
  { id: 3, image: otherWorksImgs[2], label: 'Brand Design'     },
  { id: 4, image: otherWorksImgs[3], label: 'Web Design'       },
];

function ExploreSection() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const dragTranslate = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const getCurrentTranslate = () => {
      const style = window.getComputedStyle(track);
      const matrix = new DOMMatrix(style.transform);
      return matrix.m41;
    };

    const onScroll = () => {
      if (isDragging.current) return;

      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      if (rect.bottom < 0 || rect.top > viewH) return;

      const wrapper = track.parentElement;
      const maxTranslate = track.scrollWidth - wrapper.offsetWidth;
      if (maxTranslate <= 0) return;

      // 섹션의 전체 높이에서 뷰포트 높이를 뺀 만큼이 실제 스크롤 거리
      const scrollDistance = section.offsetHeight - viewH;
      // 섹션이 상단(top: 0)에 도달한 시점부터 진행률 계산
      let progress = -rect.top / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      const tx = -(progress * maxTranslate);
      track.style.transition = 'none';
      track.style.transform = `translateX(${tx}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const timeoutId = setTimeout(onScroll, 60);

    const wrapper = track.parentElement;

    const onPointerDown = (e) => {
      isDragging.current = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      startX.current = clientX;
      dragTranslate.current = getCurrentTranslate();
      track.style.transition = 'none';
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const diff = clientX - startX.current;
      const maxT = -(track.scrollWidth - wrapper.offsetWidth);
      const newT = Math.min(0, Math.max(maxT, dragTranslate.current + diff));
      track.style.transform = `translateX(${newT}px)`;
      if (e.cancelable && !e.touches) e.preventDefault();
    };

    const onPointerUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      track.style.transition = 'transform 0.35s ease';
    };

    wrapper.addEventListener('mousedown',  onPointerDown);
    wrapper.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove',  onPointerMove);
    window.addEventListener('touchmove',  onPointerMove, { passive: false });
    window.addEventListener('mouseup',   onPointerUp);
    window.addEventListener('touchend',  onPointerUp);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeoutId);
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
      <div className="explor-sticky-wrapper">
        <h2 className="other-works-title">My Other Works!</h2>
        <div className="explor-component">
          <div className="other-card-wrap">
            <div className="other-card-track" ref={trackRef}>
              {otherWorksItems.map((item) => (
                <div className="other-works-item" key={item.id}>
                  <div className="other-works-item-inner">
                    <img src={item.image} alt={item.label} />
                  </div>
                </div>
              ))}
            </div>
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
      <Navbar />
    </div>
  );
}
