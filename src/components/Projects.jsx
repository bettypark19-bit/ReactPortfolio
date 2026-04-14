import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectImgs } from "../data/images";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "VODA OTT 플랫폼 & 영상",
    tags: ["Figma", "Stitch", "Claude cli", "React", "Python"],
    period: "2026.03.24 - 2026.04.03 (주말 제외 총 9일)",
    contribution: "30% (기획, 디자인, 코딩)",
    media: "Web",
    desc: "4인 팀 프로젝트로 진행한 OTT 서비스 VODA입니다. TMDB와 생성형 AI를 결합해 무드 기반 큐레이션과 챗봇 기능을 구현했습니다. 디자인 시스템을 코드 단계까지 정밀하게 동기화하며 디자인과 개발의 간극을 줄이는 프론트엔드 실무 역량을 발휘했습니다.",
    image: projectImgs[0],
    alt: "VODA OTT 플랫폼",
    links: [
      { label: "기획서 보러가기", url: "https://www.figma.com/deck/do80QqW9GbP18GLTq3JqH0/VODA-%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C?node-id=3-107&t=e25RlAoJSRUPb9yZ-1" },
      { label: "깃허브 보러가기", url: "https://github.com/bettypark19-bit/VODA" },
      { label: "홈페이지 보러가기", url: "https://voda-r4s5.onrender.com/" },
    ],
  },
  {
    id: 2,
    title: "Airbnb 리디자인 & 홍보 영상",
    tags: ["Figma", "UI/UX Design", "Design System"],
    period: "2026.02.04 - 2026.02.20 (휴일 제외 총 13일)",
    contribution: "40% (디자인, 프로토타이핑, 영상)",
    media: "Mobile",
    desc: "4인 팀 프로젝트로 진행한 Airbnb 모바일 앱 리디자인, 홍보 영상 제작 프로젝트입니다. 벤치마킹과 유저 데이터 기반의 기획을 거쳐 Airbnb의 UI/UX를 리디자인했습니다. 앱 디자인 담당으로서 피그마 스타일 가이드를 설계하고, 사용자 중심의 일관된 디자인 시스템을 완성했습니다.",
    image: projectImgs[1],
    alt: "Airbnb 리디자인 & 홍보 영상",
    links: [
      { label: "기획서 보러가기", url: "https://www.figma.com/deck/Us2JFP12MoXPCvH1WH11fi/RE-FINDED-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=6-2808&t=xu5LtGoQz6RMdRfc-1" },
      { label: "프로토타입 보러가기", url: "https://www.figma.com/proto/7JZuLEIXbyh0RaJV13shNC/%EC%97%90%EC%96%B4%EB%B9%84%EC%95%A4%EB%B9%84-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=146-2819&viewport=-1291%2C-550%2C0.18&t=z2eCzPInrDIcOfp7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=146%3A2819&page-id=99%3A200" },
    ],
  },
  {
    id: 3,
    title: "국회도서관",
    tags: ["HTML", "CSS", "UI/UX Design", "Design System"],
    period: "2026.01.21 - 2026.02.03",
    contribution: "100% (코딩)",
    media: "Web / Tablet",
    desc: "HTML/CSS를 활용해 유지보수가 편한 웹 사이트를 구축했습니다. 명확한 이름 짓기 규칙을 통해 코드 간의 간섭을 방지하고, 체계적인 폴더 관리를 통해 복잡한 페이지들도 일관성 있게 구현했습니다. 기본에 충실한 마크업과 깔끔한 코드 구조를 지향했습니다.",
    image: projectImgs[2],
    alt: "국회도서관",
    links: [
      { label: "와이어프레임", url: "https://www.figma.com/deck/0Vl28Ax2VmTgSn4yag06CB/%EA%B5%AD%ED%9A%8C%EB%8F%84%EC%84%9C%EA%B4%80-%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%84%EB%A0%88%EC%9E%84?node-id=1-38&t=ucGtL3nQlUwfEYn0-1" },
      { label: "깃허브 보러가기", url: "https://github.com/bettypark19-bit/projectA" },
      { label: "홈페이지 보러가기", url: "https://project-a-lake.vercel.app/" },
    ],
  },
  {
    id: 4,
    title: "하루알 광고영상",
    tags: ["Whisk", "Kling", "Premiere Pro", "After Effects"],
    period: "2026.01.05 - 2026.01.09 (총 5일)",
    contribution: "100% (영상 기획 및 편집)",
    media: "Social Media / Youtube",
    desc: "제품의 특성을 살린 광고 컨셉을 기획하고, Whisk와 Kling 등 최신 AI 도구를 활용해 감각적인 홍보 영상을 제작했습니다. 기획서 기반의 탄탄한 스토리를 바탕으로 AI 기술을 적재적소에 배치하여, 짧은 시간 내에 고품질의 영상 콘텐츠를 제작하는 프로세스를 경험했습니다.",
    image: projectImgs[3],
    alt: "하루알 광고영상",
    links: [
      { label: "기획서 보러가기", url: "https://www.figma.com/deck/h6nqvlZEfooVt9aGSmKNdC/%ED%95%98%EB%A3%A8%EC%95%8C%EA%B4%91%EA%B3%A0%EC%98%81%EC%83%81-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=1-90&t=pHGaVkS3w3aAWY2o-1" },
      { label: "영상 보러가기", url: "https://drive.google.com/file/d/1KMDMY1Zigj2vTxF3T2UWW-5L1B6-bDn6/view?usp=sharing" },
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
