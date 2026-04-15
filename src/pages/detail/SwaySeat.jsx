function SwaySeat() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">Sway seat</h1>
      <p className="detail-category">craft</p>
      <div className="detail-meta">
        <div className="detail-meta-item period">
          <span className="detail-meta-label">작업 기간</span>
          <span className="detail-meta-value">2024.03-2024.06</span>
        </div>
        <div className="detail-meta-item contribution">
          <span className="detail-meta-label">기여도</span>
          <span className="detail-meta-value">100%</span>
        </div>
        <div className="detail-meta-item tools">
          <span className="detail-meta-label">작업 방식</span>
          <div className="detail-meta-value">
            <span className="detail-tool-tag">Rhino 3D</span>
            <span className="detail-tool-tag">가죽 공예</span>
            <span className="detail-tool-tag">스테인리스 스틸</span>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <p> 가죽의 따뜻함과 모던한 조형미가 어우러진 흔들의자 세트입니다. 일반적인 전후 가동 방식에서 벗어나, 사용자가 좌우로 흔들리며(Sway) 새로운 방향의 안락함을 경험할 수 있도록 설계했습니다. 유니크한 움직임을 완성하는 스툴 'Sway Feet'을 함께 제작하여, 발끝까지 이어지는 리드미컬한 휴식을 제안합니다. </p>
      </div>

      <div className="detail-gallery">
        {Array.from({ length: 11 }, (_, i) => (
          <div className="detail-image-box" key={i + 1}>
            <img src={`/images/detail/sway-seat/${i + 1}.webp`} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default SwaySeat;
