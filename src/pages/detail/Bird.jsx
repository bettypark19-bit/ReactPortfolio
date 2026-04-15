function Bird() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">Bird</h1>
      <p className="detail-category">craft</p>
      <div className="detail-meta">
        <div className="detail-meta-item period">
          <span className="detail-meta-label">작업 기간</span>
          <span className="detail-meta-value">2024.03-2024-08</span>
        </div>
        <div className="detail-meta-item contribution">
          <span className="detail-meta-label">기여도</span>
          <span className="detail-meta-value">100%</span>
        </div>
        <div className="detail-meta-item tools">
          <span className="detail-meta-label">작업 방식</span>
          <div className="detail-meta-value">
            <span className="detail-tool-tag">적동 판금</span>
            <span className="detail-tool-tag">가죽 공예</span>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <p>자유롭게 비상하는 새의 역동적인 실루엣을 담아낸 펜던트 조명 시리즈입니다. 하늘을 향해 힘차게 날아오르는 찰나의 형태를 디자인 모티프로 삼았으며, 위를 향한 부리의 각도는 공간에 긍정적인 에너지와 확장감을 선사합니다. 차가운 금속의 선형적 미학과 가죽의 부드러움이 조화를 이루며, 새의 고귀한 움직임을 현대적인 조형으로 완성합니다.</p>
      </div>

      <div className="detail-gallery">
        {Array.from({ length: 22 }, (_, i) => (
          <div className="detail-image-box" key={i + 1}>
            <img src={`/images/detail/bird/${i + 1}.webp`} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Bird;
