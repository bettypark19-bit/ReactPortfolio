function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta-card">
        <p className="footer-cta-title">
          Looking to transform your brand with compelling design?
        </p>
        <button className="footer-start-btn">Start a Project</button>

        <div className="footer-collab-banner">
          <p className="footer-collab-text">
            Let's collaborate and create something extraordinary! ✨
          </p>
        </div>

        <div className="footer-contact-row">
          <div className="footer-contact-block">
            <div className="footer-contact-label">contact</div>
            <div className="footer-contact-email">s00bpark425@gmail.com</div>
          </div>
          <div className="footer-socials-block">
            <div className="footer-socials-label">socials</div>
            <div className="footer-socials-list">
              <span className="footer-social-link">insta</span>
              <span className="footer-social-link">X(twt)</span>
              <span className="footer-social-link">Linkedin</span>
              <span className="footer-social-link">dribbble</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        Copyright © 2026 by 박수빈
      </div>
    </footer>
  );
}

export default Footer;
