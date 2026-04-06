import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>NextGen Digital Solutions</h2>
          <p>Building future-ready websites for modern businesses.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Website Design</li>
            <li>React Development</li>
            <li>SEO Optimization</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/">
              ⓕ
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              🅾
            </a>
            <a target="_blank" href="https://x.com/">
              𝕏
            </a>
            <a target="_blank" href="http://linkedin.com/">
              [in]
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              ▶️
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 NextGen Digital Solutions | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
