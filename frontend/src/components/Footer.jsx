import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Health Assistant. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.example.com/privacy" className="footer-link" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://www.example.com/terms" className="footer-link" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="https://www.example.com/contact" className="footer-link" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
