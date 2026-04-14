function Wine() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">주류박람회</h1>
      <p className="detail-category">design</p>
      <div className="detail-meta">
        <div className="detail-meta-item period">
          <span className="detail-meta-label">작업 기간</span>
          <span className="detail-meta-value">2025.05</span>
        </div>
        <div className="detail-meta-item contribution">
          <span className="detail-meta-label">기여도</span>
          <span className="detail-meta-value">100%</span>
        </div>
        <div className="detail-meta-item tools">
          <span className="detail-meta-label">사용 툴</span>
          <div className="detail-meta-value">
            <span className="detail-tool-tag">Adobe Illustrator</span>
          </div>
        </div>
      </div>

      <div className="detail-gallery">
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-1.webp" alt="" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-2.webp" alt="" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-3.webp" alt="" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-4.webp" alt="" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-5.webp" alt="" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-6.webp" alt="" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/wine/wine-7.webp" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
export default Wine;
