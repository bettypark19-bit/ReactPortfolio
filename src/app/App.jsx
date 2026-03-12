import { useEffect, useRef } from 'react';
import '../styles/portfolio.css';

/* =======================================================
   이미지 경로 — public/images/ 폴더 참조2
   ======================================================= */
const personPhoto = ['/images/person.png','/images/person2.png',];

const projectImgs = [
  '/images/project-1.png',
  '/images/project-2.png',
  '/images/project-3.png',
  '/images/project-4.png',
];

const otherWorksImgs = [
  '/images/other-works-1.png',
  '/images/other-works-2.png',
  '/images/other-works-3.png',
  '/images/other-works-4.png',
  '/images/other-works-5.png',
  '/images/other-works-6.png',
  '/images/other-works-7.png',
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
          <span>수려하게 디자인하고 빈틈없이 구현합니다.</span>
        </div>
        <div className="hero-role"> <span className='imp'>Designer</span> 박수빈</div>
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
            src={personPhoto[0]}
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
              src={personPhoto[1]} 
              alt="Park Soobin" 
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

/* =======================================================
   CERTIFICATION / SKILLS SECTION
   ======================================================= */
const certs = [
  {
    id: 1,
    name: '자격증',
    row1: ['운전면허증', '포토샵 1급', '일러스트 1급','OPIC IH'],
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
    title: 'Airbnb 리디자인 & 홍보 영상',
    tags: ['Mobile App', 'Case Study', 'UI/UX Design'],
    desc: 'Covivant is a roommate finder app designed to make the process of finding a compatible and trustworthy roommate easier, safer, and more social.',
    image: projectImgs[0],
    alt: 'Covivant Project',
  },
  {
    id: 2,
    title: '국회도서관',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: 'A solution for conducting assessments & competency tests independently with a format that is transparent, accurate and easily accessible.',
    image: projectImgs[1],
    alt: 'AsesMe Project',
  },
  {
    id: 3,
    title: '하루알 광고영상',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[2],
    alt: 'BTW Academy Project',
  },
    {
    id: 4,
    title: '서울국제주류&와인박람회 포스터',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[3],
    alt: 'BTW Academy Project',
  },
];

function ProjectCards() {
  const containerRef = useRef(null);
  const rafId = useRef(null);

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
        
        // requestAnimationFrame 내에서 스타일 변경
        card.style.opacity = opacity;
        card.style.transform = `scale(${scale})`;
      });
      rafId.current = null;
    };

    const handleScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateOpacity);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // 초기 실행
    const timeoutId = setTimeout(() => {
        // 초기 스크롤 위치 설정이 꼭 필요한지 확인 필요.
        // container.scrollTop = 0; // 이 부분은 사용자 경험을 해칠 수 있으므로 제거하거나 필요하다면 유지
        updateOpacity();
    }, 80);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
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
        <button className="projects-see-all"><span className='t-white'> See all Cases &nbsp;↗</span></button>
      </div>
      <ProjectCards />
    </section>
  );
}

/* =======================================================
   EXPLORE / OTHER WORKS
   ======================================================= */
const otherWorksItems = [
  { id: 1, image: otherWorksImgs[0], label: '진진진 리플렛' },
  { id: 2, image: otherWorksImgs[1], label: '기장군 캐릭터'   },
  { id: 3, image: otherWorksImgs[2], label: '카드 뉴스'     },
  { id: 4, image: otherWorksImgs[3], label: '북커버'       },
  { id: 5, image: otherWorksImgs[4], label: 'Sway seat'   },
  { id: 6, image: otherWorksImgs[5], label: 'Bird'     },
  { id: 7, image: otherWorksImgs[6], label: 'In to the Sea'       },
];

function ExploreSection() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const dragTranslate = useRef(0);
  const rafId      = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const getCurrentTranslate = () => {
      if (!track) return 0;
      const style = window.getComputedStyle(track);
      const matrix = new DOMMatrix(style.transform);
      return matrix.m41;
    };

    const updatePosition = () => {
      if (isDragging.current || !section || !track) {
          rafId.current = null;
          return;
      }

      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      // 뷰포트 내에 있을 때만 계산
      if (rect.bottom < 0 || rect.top > viewH) {
          rafId.current = null;
          return;
      }

      const wrapper = track.parentElement;
      const maxTranslate = track.scrollWidth - wrapper.offsetWidth;
      if (maxTranslate <= 0) {
          rafId.current = null;
          return;
      }

      const scrollDistance = section.offsetHeight - viewH;
      let progress = -rect.top / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      const tx = -(progress * maxTranslate);
      track.style.transition = 'none'; // 스크롤 시에는 즉각 반응해야 함
      track.style.transform = `translateX(${tx}px)`;
      
      rafId.current = null;
    };

    const onScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // 초기 실행
    updatePosition();

    const wrapper = track.parentElement;

    const onPointerDown = (e) => {
      isDragging.current = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      startX.current = clientX;
      dragTranslate.current = getCurrentTranslate();
      track.style.transition = 'none';
      track.style.cursor = 'grabbing';
      // 텍스트 선택 방지
      document.body.style.userSelect = 'none';
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      
      // 드래그 중에는 스크롤 이벤트에 의한 업데이트 방지
      if (rafId.current) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
      }

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const diff = clientX - startX.current;
      const maxT = -(track.scrollWidth - wrapper.offsetWidth);
      // 경계 제한
      const newT = Math.min(0, Math.max(maxT, dragTranslate.current + diff));
      track.style.transform = `translateX(${newT}px)`;
      
      if (e.cancelable && !e.touches) e.preventDefault();
    };

    const onPointerUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      track.style.transition = 'transform 0.35s ease-out'; // 부드러운 감속 효과
      track.style.cursor = 'grab';
      document.body.style.userSelect = '';
    };

    wrapper.addEventListener('mousedown',  onPointerDown);
    wrapper.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove',  onPointerMove);
    window.addEventListener('touchmove',  onPointerMove, { passive: false });
    window.addEventListener('mouseup',   onPointerUp);
    window.addEventListener('touchend',  onPointerUp);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      
      wrapper.removeEventListener('mousedown',  onPointerDown);
      wrapper.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove',  onPointerMove);
      window.removeEventListener('touchmove',  onPointerMove);
      window.removeEventListener('mouseup',   onPointerUp);
      window.removeEventListener('touchend',  onPointerUp);
      
      // Cleanup style
      document.body.style.userSelect = '';
    };
  }, []);

  return (
    <section className="other-works" id="other-works" ref={sectionRef}>
      <div className="explor-sticky-wrapper">
        <h2 className="other-works-title">My Other Works!</h2>
        <div className="explor-component">
          <div className="other-card-wrap">
            <div className="other-card-track" ref={trackRef} style={{ cursor: 'grab' }}>
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
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExploreSection />
      <Footer />
    </div>
  );
}
