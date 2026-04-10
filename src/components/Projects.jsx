import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectImgs } from "../data/images";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "VODA OTT 플랫폼 & 영상",
    tags: ["Figma", "Stitch", "Claude cli"],
    period: "2026.03.24 - 2026.04.03 (주말 제외 총 9일)",
    contribution: "30% (기획, 디자인, 코딩)",
    media: "Web",
    desc: "4인 팀 프로젝트로 진행한 OTT 서비스 VODA입니다. TMDB와 생성형 AI를 결합해 무드 기반 큐레이션과 챗봇 기능을 구현했습니다. 디자인 시스템을 코드 단계까지 정밀하게 동기화하며 디자인과 개발의 간극을 줄이는 프론트엔드 실무 역량을 발휘했습니다.",
    image: projectImgs[0],
    alt: "VODA OTT 플랫폼",
    links: [
      { label: "기획서 보러가기", url: "#" },
      { label: "깃허브 보러가기", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Airbnb 리디자인 & 홍보 영상",
    tags: ["Landing Page", "Web Design", "UI/UX Design", "Design System"],
    period: "2023.05 - 2023.07",
    contribution: "100% (디자인, 프로토타이핑, 영상)",
    media: "Web / Responsive",
    desc: "A solution for conducting assessments & competency tests independently with a format that is transparent, accurate and easily accessible.",
    image: projectImgs[1],
    alt: "Airbnb 리디자인 & 홍보 영상",
    links: [
      { label: "기획서 보러가기", url: "#" },
      { label: "깃허브 보러가기", url: "#" },
    ],
  },
  {
    id: 3,
    title: "국회도서관",
    tags: ["Landing Page", "Web Design", "UI/UX Design", "Design System"],
    period: "2023.02 - 2023.04",
    contribution: "100% (UI/UX 디자인)",
    media: "Web / Tablet",
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[2],
    alt: "국회도서관",
    links: [
      { label: "기획서 보러가기", url: "#" },
    ],
  },
  {
    id: 4,
    title: "하루알 광고영상",
    tags: ["Landing Page", "Web Design", "UI/UX Design", "Design System"],
    period: "2022.11 - 2022.12",
    contribution: "100% (영상 기획 및 편집)",
    media: "Social Media / Youtube",
    desc: "BTW Academy is a tutoring center that prepares students for entrance exams and interviews at Indonesia's top State Universities and Service Academies.",
    image: projectImgs[3],
    alt: "하루알 광고영상",
    links: [
      { label: "기획서 보러가기", url: "#" },
      { label: "깃허브 보러가기", url: "#" },
    ],
  },
];

function ProjectCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, index) => {
      // 마지막 카드는 작아질 필요가 없으므로 제외하거나 조건부 적용
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];

      gsap.to(card, {
        scrollTrigger: {
          trigger: nextCard,
          start: "top 80%", // 다음 카드가 나타나기 시작할 때
          end: "top 100px", // 다음 카드가 현재 카드 위치에 도달할 때
          scrub: true,
          // markers: true, // 디버깅용
        },
        scale: 0.9,
        opacity: 0.5,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="project-cards-scroll" ref={containerRef}>
      {projects.map((proj) => (
        <div className="project-card" key={proj.id}>
          <div className="project-card-text">
            <span className="project-card-number">
              {String(proj.id).padStart(2, "0")}
            </span>
            <h3 className="project-card-title">{proj.title}</h3>
            <div className="project-meta-info">
              <div className="project-meta-item">
                <span className="meta-label">작업기한</span>
                <span className="meta-value">{proj.period}</span>
              </div>
              <div className="project-meta-item">
                <span className="meta-label">본인 기여도</span>
                <span className="meta-value">{proj.contribution}</span>
              </div>
              <div className="project-meta-item">
                <span className="meta-label">배포매체</span>
                <span className="meta-value">{proj.media}</span>
              </div>
            </div>
            <div className="project-card-tags">
              {proj.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="project-card-desc">{proj.desc}</p>
            <div className="project-card-links">
              {proj.links && proj.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="project-link-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
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
        <h2 className="projects-title">{"Projects"}</h2>
      </div>
      <ProjectCards />
    </section>
  );
}

export default Projects;
