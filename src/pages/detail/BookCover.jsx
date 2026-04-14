function BookCover() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">아가미 북커버</h1>
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
            <span className="detail-tool-tag">Midjourney</span>
            <span className="detail-tool-tag">Adobe Indesign</span>
          </div>
        </div>
      </div>

      <div className="detail-gallery">
        <div className="detail-image-box">
          <img src="/images/detail/book-cover/1.webp" alt="아가미 북커버 1" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/book-cover/2.webp" alt="아가미 북커버 2" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
export default BookCover;
