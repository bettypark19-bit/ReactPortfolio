function SwaySeat() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">Sway seat</h1>
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
        <p>프로젝트의 목적과 주요 기능, 그리고 작업 과정에서의 고민 등을 이곳에 작성할 수 있습니다. 수빈님의 성실함과 전문성이 돋보이는 상세 설명을 추가해 보세요.</p>
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
export default SwaySeat;
