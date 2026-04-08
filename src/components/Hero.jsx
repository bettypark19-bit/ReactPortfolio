import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { personPhoto } from '../data/images';

function Hero() {
  return (
    <section className="hero">
      {/* 타이틀 영역: 가운데 상단 */}
      <div className="hero-title">
        <span className="hero-title-thin">분석은</span>
        <span className="hero-title-bold">TIGHT</span>
      </div>

      <div className="hero-logo-decoration right">
        <div className="hero-logo-circle blue"></div>
      </div>
      <div className="hero-logo-decoration left">
        <div className="hero-logo-circle pink"></div>
      </div>

      {/* 이미지 및 말풍선 영역: 정중앙 */}
      <div className="hero-main-area">
        <div className="hero-image-wrapper">
          {/* 말풍선 1: Hi! */}
          <div className="hero-chat-bubble chat-hi">
            <span className="hero-chat-text">Hi! I'm Soobin!</span>
          </div>

          {/* 말풍선 2: 이력서 보기 */}
          <div className="hero-chat-bubble chat-resume">
            <span className="hero-chat-text">
              <FontAwesomeIcon icon={faFileLines} className="mr-2" />이력서 보기
            </span>
          </div>

          {/* 말풍선 3: 깃허브 보기 */}
          <div className="hero-chat-bubble chat-github">
            <span className="hero-chat-text">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />깃허브 보기
            </span>
          </div>

          <img
            className="hero-person-photo"
            src={personPhoto[0]}
            alt="박수빈"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
