function IntoTheSea() {
  return (
    <div className="detail-body">
      <h1 className="detail-title">In to the Sea</h1>
      <p className="detail-category">craft</p>
      <div className="detail-meta">
        <div className="detail-meta-item period">
          <span className="detail-meta-label">작업 기간</span>
          <span className="detail-meta-value">2024.05-2024.07</span>
        </div>
        <div className="detail-meta-item contribution">
          <span className="detail-meta-label">기여도</span>
          <span className="detail-meta-value">100%</span>
        </div>
        <div className="detail-meta-item tools">
          <span className="detail-meta-label">작업 방식</span>
          <div className="detail-meta-value">
            <span className="detail-tool-tag">ClipStudio</span>
            <span className="detail-tool-tag">Rhino 3D</span>
          </div>
        </div>
      </div>
      <div className="detail-description">
        <p>스테인리스 스틸의 견고함 속에 바다의 심상을 투영한 벽수납장입니다. 슬라이드 도어를 여는 찰나, 아크릴 너머로 새어 나오는 빛은 내부에 박제된 바다의 풍경을 극적으로 깨웁니다. 차가운 금속 외곽과 빛을 머금은 아크릴의 대비를 통해, 일상의 수납 공간을 하나의 예술적 장면으로 전환하고자 했습니다.</p>
      </div>

      <div className="detail-gallery">
        {Array.from({ length: 16 }, (_, i) => (
          <div className="detail-image-box" key={i + 1}>
            <img src={`/images/detail/into-the-sea/${i + 1}.webp`} alt="" loading="lazy" />
          </div>
        ))}
        <div className="detail-image-box">
          <video src="/images/detail/into-the-sea/vid.mp4" autoPlay muted loop playsInline />
        </div>
      </div>
    </div>
  );
}
export default IntoTheSea;
