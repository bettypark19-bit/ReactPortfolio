function Bird() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">Bird</h1>
      <p className="detail-category">craft</p>
      <div className="detail-meta">
        <div className="detail-meta-item period">
          <span className="detail-meta-label">작업 기간</span>
          <span className="detail-meta-value">-</span>
        </div>
        <div className="detail-meta-item contribution">
          <span className="detail-meta-label">기여도</span>
          <span className="detail-meta-value">-</span>
        </div>
        <div className="detail-meta-item tools">
          <span className="detail-meta-label">사용 툴</span>
          <div className="detail-meta-value">
            <span className="detail-tool-tag">-</span>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <p></p>
      </div>

      <div className="detail-gallery">
        <div className="detail-image-box">
          {/* 이미지가 없을 때의 placeholder 혹은 실제 이미지 */}
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>이미지 준비 중</p>
        </div>
        <div className="detail-image-box">
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>이미지 준비 중</p>
        </div>
      </div>
    </div>
  );
}
export default Bird;
