import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  {
    id: 1,
    name: '자격증',
    row1: ['운전면허증', '포토샵 1급', '일러스트 1급', 'OPIC IH'],
    row2: [],
  },
  {
    id: 2,
    name: 'Skills',
  },
];

const skillData = [
  [
    { id: 's1', target: 19, label: 'alpha skill' },
    { id: 's2', target: 62, label: 'beta skill'  },
    { id: 's3', target: 32, label: 'gama skill'  },
    { id: 's4', target: 45, label: 'delta skill' },
  ],
  [
    { id: 's5', target: 78, label: 'epsilon skill' },
    { id: 's6', target: 55, label: 'zeta skill'    },
    { id: 's7', target: 40, label: 'eta skill'     },
    { id: 's8', target: 88, label: 'theta skill'   },
  ],
];

const MAX_PERCENT = 100;
const RADIUS = 10;
const flatSkills = skillData.flat();

function Skills() {
  const pathRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const tweens = [];
    const triggers = [];

    pathRefs.current.forEach((pathEl, i) => {
      if (!pathEl) return;
      const textEl = textRefs.current[i];
      const target = flatSkills[i].target;

      /* SVG 완전한 원호를 닫힌 path로 표현하기 위한 미세 오프셋 (-0.01) */
      pathEl.setAttributeNS(null, 'd', `M${RADIUS},0 A${RADIUS},${RADIUS} 0 1,1 ${RADIUS},-.01z`);
      const pathLength = pathEl.getTotalLength();

      const proxy = { p: 0 };
      const tween = gsap.to(proxy, {
        p: target,
        duration: 2,
        ease: 'power2.out',
        paused: true,
        onUpdate: () => {
          const len = (proxy.p / MAX_PERCENT) * pathLength;
          pathEl.style.strokeDasharray = `${len}, ${pathLength - len}`;
          if (textEl) textEl.textContent = `${Math.round(proxy.p)}%`;
        },
      });

      const st = ScrollTrigger.create({
        trigger: pathEl.closest('.skillbar-inner'),
        start: 'top 85%',
        onEnter:      () => tween.play(),
        onLeave:      () => tween.reverse(),
        onLeaveBack:  () => tween.reverse(),
        onEnterBack:  () => tween.play(),
      });

      tweens.push(tween);
      triggers.push(st);
    });

    return () => {
      triggers.forEach((st) => st.kill());
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Certification / Skills</h2>
      {certs.map((cert) => (
        <div className="cert-block" key={cert.id}>
          <div className="cert-name">{cert.name}</div>
          {cert.id === 2 ? (
            <>
              {skillData.map((row, rowIdx) => (
                <div className="skills-row" key={rowIdx}>
                  {row.map((sd, colIdx) => {
                    const i = rowIdx * row.length + colIdx;
                    return (
                      <div className="skillbar-inner" key={sd.id}>
                        <svg viewBox="10 10 30 30">
                          <g transform="translate(25 25) rotate(-90)">
                            <circle r="10" />
                            <path ref={(el) => (pathRefs.current[i] = el)} />
                          </g>
                          <text ref={(el) => (textRefs.current[i] = el)} x="25" y="25">0%</text>
                        </svg>
                        <p>{sd.label}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Skills;
