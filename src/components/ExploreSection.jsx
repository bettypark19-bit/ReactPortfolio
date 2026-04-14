import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import DetailModal from './DetailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faPenNib, faScissors } from '@fortawesome/free-solid-svg-icons';
import { otherWorksImgs } from '../data/images';

const TABS = [
  { name: 'All',    icon: faGrip      },
  { name: 'design', icon: faPenNib    },
  { name: 'craft',  icon: faScissors  },
];

const otherWorksItems = [
  { id: 1, image: otherWorksImgs[0], label: '주류박람회',  category: 'design', slug: 'Wine'      },
  { id: 2, image: otherWorksImgs[1], label: '진진진 리플렛',  category: 'design', slug: 'jin-jin-jin'      },
  { id: 3, image: otherWorksImgs[2], label: '기장군 캐릭터',  category: 'design', slug: 'gijang-character' },
  { id: 4, image: otherWorksImgs[3], label: '카드 뉴스',      category: 'design', slug: 'card-news'        },
  { id: 5, image: otherWorksImgs[4], label: '북커버',         category: 'design', slug: 'book-cover'       },
  { id: 6, image: otherWorksImgs[5], label: 'Sway seat',      category: 'craft',  slug: 'sway-seat'        },
  { id: 7, image: otherWorksImgs[6], label: 'Bird',           category: 'craft',  slug: 'bird'             },
  { id: 8, image: otherWorksImgs[7], label: 'In to the Sea',  category: 'craft',  slug: 'into-the-sea'     },
];

function ExploreSection() {
  const [activeTab,  setActiveTab]  = useState('All');
  const [modalItem,  setModalItem]  = useState(null);
  const pointerDown = useRef({ x: 0, y: 0 });

  const sectionRef    = useRef(null);
  const trackRef      = useRef(null);
  const isDragging    = useRef(false);
  const startX        = useRef(0);
  const dragTranslate = useRef(0);
  const rafId         = useRef(null);
  const labelRefs     = useRef([]);
  const prevTab       = useRef(null);

  const filtered = activeTab === 'All'
    ? otherWorksItems
    : otherWorksItems.filter((item) => item.category === activeTab);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    gsap.to(trackRef.current, {
      opacity: 0,
      duration: 0.15,
      onComplete: () => setActiveTab(tab),
    });
  };

  // 탭 라벨 확장/축소 애니메이션
  useEffect(() => {
    const isMount = prevTab.current === null;
    prevTab.current = activeTab;

    TABS.forEach((tab, i) => {
      const labelEl = labelRefs.current[i];
      if (!labelEl) return;

      if (tab.name === activeTab) {
        gsap.to(labelEl, {
          maxWidth: 120,
          opacity: 1,
          duration: isMount ? 0 : 0.55,
          ease: 'expo.out',
        });
      } else {
        gsap.to(labelEl, {
          maxWidth: 0,
          opacity: 0,
          duration: isMount ? 0 : 0.35,
          ease: 'expo.inOut',
        });
      }
    });
  }, [activeTab]);

  // 탭 전환 후 트랙 위치 리셋 및 페이드 인
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    gsap.set(track, { x: 0 });
    gsap.to(track, { opacity: 1, duration: 0.2 });
  }, [activeTab]);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const getCurrentTranslate = () => {
      const style  = window.getComputedStyle(track);
      const matrix = new DOMMatrix(style.transform);
      return matrix.m41;
    };

    const updatePosition = () => {
      if (isDragging.current || !section || !track) {
        rafId.current = null;
        return;
      }

      const rect  = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      // 뷰포트 내에 있을 때만 계산
      if (rect.bottom < 0 || rect.top > viewH) {
        rafId.current = null;
        return;
      }

      const wrapper      = track.parentElement;
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
      track.style.transform  = `translateX(${tx}px)`;

      rafId.current = null;
    };

    const onScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updatePosition();

    const wrapper = track.parentElement;

    const onPointerDown = (e) => {
      isDragging.current     = true;
      const clientX          = e.touches ? e.touches[0].clientX : e.clientX;
      startX.current         = clientX;
      dragTranslate.current  = getCurrentTranslate();
      track.style.transition = 'none';
      track.classList.add('is-dragging');
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
      const diff    = clientX - startX.current;
      const maxT    = -(track.scrollWidth - wrapper.offsetWidth);
      // 경계 제한
      const newT    = Math.min(0, Math.max(maxT, dragTranslate.current + diff));
      track.style.transform = `translateX(${newT}px)`;

      if (e.cancelable && !e.touches) e.preventDefault();
    };

    const onPointerUp = () => {
      if (!isDragging.current) return;
      isDragging.current     = false;
      track.style.transition = 'transform 0.35s ease-out'; // 부드러운 감속 효과
      track.classList.remove('is-dragging');
      document.body.style.userSelect = '';
    };

    wrapper.addEventListener('mousedown',  onPointerDown);
    wrapper.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove',   onPointerMove);
    window.addEventListener('touchmove',   onPointerMove, { passive: false });
    window.addEventListener('mouseup',     onPointerUp);
    window.addEventListener('touchend',    onPointerUp);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);

      wrapper.removeEventListener('mousedown',  onPointerDown);
      wrapper.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove',   onPointerMove);
      window.removeEventListener('touchmove',   onPointerMove);
      window.removeEventListener('mouseup',     onPointerUp);
      window.removeEventListener('touchend',    onPointerUp);

      // 스타일 초기화
      document.body.style.userSelect = '';
    };
  }, []);

  return (
    <>
    {modalItem && <DetailModal item={modalItem} onClose={() => setModalItem(null)} />}
    <section className="other-works" id="other-works" ref={sectionRef}>
      <div className="explor-sticky-wrapper">
        <h2 className="other-works-title">My Other Works!</h2>
        <div className="other-works-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab.name}
              className={`tab-btn${activeTab === tab.name ? ' active' : ''}`}
              onClick={() => handleTabChange(tab.name)}
            >
              <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
              <span
                ref={(el) => (labelRefs.current[i] = el)}
                className="tab-label"
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>
        <div className="explor-component">
          <div className="other-card-wrap">
            <div className="other-card-track" ref={trackRef}>
              {filtered.map((item) => (
                <div className="other-works-item" key={item.id}>
                  <div
                    className="other-works-item-inner"
                    onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector('img'), { scale: 1.1, duration: 0.4, ease: 'power2.out' })}
                    onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector('img'), { scale: 1,   duration: 0.4, ease: 'power2.out' })}
                    onPointerDown={(e) => { pointerDown.current = { x: e.clientX, y: e.clientY }; }}
                    onPointerUp={(e) => {
                      const dx = Math.abs(e.clientX - pointerDown.current.x);
                      const dy = Math.abs(e.clientY - pointerDown.current.y);
                      if (dx < 5 && dy < 5) setModalItem(item);
                    }}
                  >
                    <img src={item.image} alt={item.label} loading="lazy" />
                    <div className="other-works-overlay">
                      <span className="other-works-label">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ExploreSection;
