import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function CardNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  
  // 이미지 경로 설정 (import.meta.env.BASE_URL 대응)
  const base = import.meta.env.BASE_URL || "/";
  const images = [
    `${base}images/detail/card-news//full/1.png`,
    `${base}images/detail/card-news/full/2.png`,
    `${base}images/detail/card-news/full/3.png`,
    `${base}images/detail/card-news/full/4.png`,
    `${base}images/detail/card-news/full/5.png`,
    `${base}images/detail/card-news/full/6.png`,
    `${base}images/detail/card-news/full/7.png`,
    `${base}images/detail/card-news/full/8.png`,
  ];

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = "none";
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const diff = ((x - startX.current) / window.innerWidth) * 100;
    const nextX = -currentIndex * 100 + diff;
    
    if (wrapperRef.current) {
      gsap.set(wrapperRef.current, { xPercent: nextX });
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
    const diff = x - startX.current;

    // 슬라이드 전환 임계값 (50px 이상 드래그 시)
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1);
      } else if (diff < 0 && currentIndex < images.length - 1) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    gsap.to(wrapperRef.current, {
      xPercent: -index * 100,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="detail-body">
      <h1 className="detail-title">카드 뉴스</h1>
      <p className="detail-category">design</p>
      <div className="detail-meta">
        <div className="detail-meta-item period">
          <span className="detail-meta-label">작업 기간</span>
          <span className="detail-meta-value">2025.06</span>
        </div>
        <div className="detail-meta-item contribution">
          <span className="detail-meta-label">기여도</span>
          <span className="detail-meta-value">100%</span>
        </div>
        <div className="detail-meta-item tools">
          <span className="detail-meta-label">사용 툴</span>
          <div className="detail-meta-value">
            <span className="detail-tool-tag">Adobe Illustrator</span>
            <span className="detail-tool-tag">ChatGPT</span>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <p>프로젝트의 목적과 주요 기능, 그리고 작업 과정에서의 고민 등을 이곳에 작성할 수 있습니다. 수빈님의 성실함과 전문성이 돋보이는 상세 설명을 추가해 보세요.</p>
      </div>

      {/* 기존 세로 이미지 구조 유지 */}
      <div className="detail-gallery">
        <div className="detail-image-box">
          <img src="../../public/images/detail/card-news/1.png" alt="" />
        </div> 
        <div className="detail-image-box">
          <img src="../../public/images/detail/card-news/2.png" alt="" />
        </div>
      </div>

      {/* 하단에 스와이프 갤러리 추가 */}
      <div className="swipe-gallery-container">
        <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '24px', marginTop: '48px' }}>스와이프로 보기</h3>
        <div 
          className="swipe-gallery-wrapper" 
          ref={wrapperRef}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {images.map((src, idx) => (
            <div className="swipe-slide" key={idx}>
              <div className="detail-image-box">
                <img src={src} alt={`카드뉴스 슬라이드 ${idx + 1}`} draggable="false" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="swipe-controls">
          <div className="swipe-dot-nav">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`swipe-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardNews;
