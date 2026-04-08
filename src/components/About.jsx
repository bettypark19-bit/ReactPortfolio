import { personPhoto } from '../data/images';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <h2 className="about-title">About Me</h2>
        <div className="about-hero">
          <div className="about-avatar-group">
            <img
              src={personPhoto[1]}
              alt="박수빈"
              className="about-avatar-img"
            />
          </div>
          <h1 className="about-hero-text">
            완결을 만드는 <br /> <span className="about-highlight">디자이너 박수빈</span> 입니다.
          </h1>
        </div>

        <div className="about-info-grid">
          {/* Introduce */}
          <div className="about-info-column">
            <h3 className="about-column-title">Introduce</h3>
            <ul className="about-info-list">
              <li><span>Name</span> 박수빈</li>
              <li><span>Age</span> 2001.04.25 (24세)</li>
              <li><span>Address</span> 서울시 동작구 거주</li>
              <li><span>Phone</span> 010-9417-1874</li>
              <li><span>E-mail</span> s00bpark425@gmail.com</li>
            </ul>
          </div>

          {/* Personalities */}
          <div className="about-info-column">
            <h3 className="about-column-title">Personalities</h3>
            <div className="about-tag-container">
              <span className="about-tag">#긍정적인</span>
              <span className="about-tag">#손빠른</span>
              <span className="about-tag">#계획적인</span>
              <span className="about-tag">#INFJ</span>
              <span className="about-tag">#웃음많은</span>
              <span className="about-tag">#다재다능</span>
            </div>
          </div>

          {/* Education */}
          <div className="about-info-column">
            <h3 className="about-column-title">Education</h3>
            <ul className="about-edu-list">
              <li>
                <span className="about-edu-year">2026.04</span>
                <p>MBC 아카데미 챗GPT 생성형 AI를 활용한 반응형 웹콘텐츠 개발기획자 양성과정 수료</p>
              </li>
              <li>
                <span className="about-edu-year">2026.02</span>
                <p>국민대학교 금속공예학과 졸업</p>
              </li>
              <li>
                <span className="about-edu-year">2025.06</span>
                <p>서울중부기술교육원 컴퓨터그래픽디자인실무자양성과정 수료</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
