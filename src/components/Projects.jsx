import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectImgs } from '../data/images';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Airbnb 리디자인 & 홍보 영상',
    tags: ['Mobile App', 'Case Study', 'UI/UX Design'],
    desc: 'Covivant is a roommate finder app designed to make the process of finding a compatible and trustworthy roommate easier, safer, and more social.',
    image: projectImgs[0],
    alt: 'Airbnb 리디자인 프로젝트',
  },
  {
    id: 2,
    title: '국회도서관',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: 'A solution for conducting assessments & competency tests independently with a format that is transparent, accurate and easily accessible.',
    image: projectImgs[1],
    alt: '국회도서관 프로젝트',
  },
  {
    id: 3,
    title: '하루알 광고영상',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[2],
    alt: '하루알 광고영상 프로젝트',
  },
  {
    id: 4,
    title: '서울국제주류&와인박람회 포스터',
    tags: ['Landing Page', 'Web Design', 'UI/UX Design', 'Design System'],
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[3],
    alt: '서울국제주류&와인박람회 포스터 프로젝트',
  },
];

function ProjectCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, index) => {
      // 마지막 카드는 작아질 필요가 없으므로 제외하거나 조건부 적용
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: nextCard,
          start: "top 80%", // 다음 카드가 나타나기 시작할 때
          end: "top 100px",   // 다음 카드가 현재 카드 위치에 도달할 때
          scrub: true,
          // markers: true, // 디버깅용
        },
        scale: 0.9,
        opacity: 0.5,
        ease: "none"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="project-cards-scroll" ref={containerRef}>
      {projects.map((proj) => (
        <div className="project-card" key={proj.id}>
          <div className="project-card-text">
            <span className="project-card-number">
              {String(proj.id).padStart(2, '0')}
            </span>
            <h3 className="project-card-title">{proj.title}</h3>
            <div className="project-card-tags">
              {proj.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p className="project-card-desc">{proj.desc}</p>
          </div>
          <div className="project-card-image">
            <img src={proj.image} alt={proj.alt} loading="lazy" />
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
        <button className="projects-see-all">
          <span className="t-white">See all Cases &nbsp;↗</span>
        </button>
      </div>
      <ProjectCards />
    </section>
  );
}

export default Projects;
