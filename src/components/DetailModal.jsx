import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

import JinJinJin       from '../pages/detail/JinJinJin';
import GijangCharacter from '../pages/detail/GijangCharacter';
import CardNews        from '../pages/detail/CardNews';
import BookCover       from '../pages/detail/BookCover';
import SwaySeat        from '../pages/detail/SwaySeat';
import Bird            from '../pages/detail/Bird';
import IntoTheSea      from '../pages/detail/IntoTheSea';

const DETAIL_MAP = {
  'jin-jin-jin':      JinJinJin,
  'gijang-character': GijangCharacter,
  'card-news':        CardNews,
  'book-cover':       BookCover,
  'sway-seat':        SwaySeat,
  'bird':             Bird,
  'into-the-sea':     IntoTheSea,
};

function DetailModal({ item, onClose }) {
  const overlayRef  = useRef(null);
  const panelRef    = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // 열기 애니메이션
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(panelRef.current,
      { opacity: 0, scale: 0.92, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );

    // ESC 키로 닫기
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  const close = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25 });
    gsap.to(panelRef.current, {
      opacity: 0, scale: 0.94, y: 20, duration: 0.25, ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const toggleFullscreen = () => {
    const panel = panelRef.current;
    if (!isFullscreen) {
      // 모달 → 전체화면
      gsap.to(panel, {
        width: '100%', height: '100vh', borderRadius: 0,
        duration: 0.4, ease: 'power2.inOut',
      });
      gsap.to(overlayRef.current, { backgroundColor: 'rgba(0,0,0,0)', duration: 0.4 });
    } else {
      // 전체화면 → 모달
      gsap.to(panel, {
        width: '80%', height: '90vh', borderRadius: '96px',
        duration: 0.4, ease: 'power2.inOut',
      });
      gsap.to(overlayRef.current, { backgroundColor: 'rgba(0,0,0,0.65)', duration: 0.4 });
    }
    setIsFullscreen((prev) => !prev);
  };

  const DetailComponent = DETAIL_MAP[item.slug];

  return (
    <div className="detail-overlay" ref={overlayRef} onClick={!isFullscreen ? close : undefined}>
      <div className="detail-modal" ref={panelRef} onClick={(e) => e.stopPropagation()}>
        <div className="detail-actions">
          <button className="detail-action-btn" onClick={toggleFullscreen} title={isFullscreen ? '축소' : '전체화면'}>
            <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
          </button>
          <button className="detail-action-btn" onClick={close} title="닫기">✕</button>
        </div>
        <div className="detail-scroll">
          {isFullscreen && (
            <button className="detail-back-btn" onClick={close}>← 돌아가기</button>
          )}
          {DetailComponent && <DetailComponent />}
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
