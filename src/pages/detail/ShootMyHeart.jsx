function ShootMyHeart() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">내 심장을 쏴라 북커버</h1>
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
            <span className="detail-tool-tag">Adobe Indesign</span>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <p>
          프로젝트의 목적과 주요 기능, 그리고 작업 과정에서의 고민 등을 이곳에
          작성할 수 있습니다. 수빈님의 성실함과 전문성이 돋보이는 상세 설명을
          추가해 보세요.
        </p>
      </div>

      <div className="detail-gallery">
        <div className="detail-image-box">
          <img src="/images/detail/shoot-my-heart/1.webp" alt="내 심장을 쏴라 북커버 1" loading="lazy" />
        </div>
        <div className="detail-image-box">
          <img src="/images/detail/shoot-my-heart/2.webp" alt="내 심장을 쏴라 북커버 2" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
export default ShootMyHeart;
