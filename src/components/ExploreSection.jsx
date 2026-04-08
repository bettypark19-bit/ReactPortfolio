import { useEffect, useRef } from 'react';
import { otherWorksImgs } from '../data/images';

const otherWorksItems = [
  { id: 1, image: otherWorksImgs[0], label: '진진진 리플렛' },
  { id: 2, image: otherWorksImgs[1], label: '기장군 캐릭터' },
  { id: 3, image: otherWorksImgs[2], label: '카드 뉴스' },
  { id: 4, image: otherWorksImgs[3], label: '북커버' },
  { id: 5, image: otherWorksImgs[4], label: 'Sway seat' },
  { id: 6, image: otherWorksImgs[5], label: 'Bird' },
  { id: 7, image: otherWorksImgs[6], label: 'In to the Sea' },
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
      track.classList.add('is-dragging');
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
    <section className="other-works" id="other-works" ref={sectionRef}>
      <div className="explor-sticky-wrapper">
        <h2 className="other-works-title">My Other Works!</h2>
        <div className="explor-component">
          <div className="other-card-wrap">
            <div className="other-card-track" ref={trackRef}>
              {otherWorksItems.map((item) => (
                <div className="other-works-item" key={item.id}>
                  <div className="other-works-item-inner">
                    <img src={item.image} alt={item.label} loading="lazy" />
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

export default ExploreSection;
