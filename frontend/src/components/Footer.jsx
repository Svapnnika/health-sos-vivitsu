// import React from 'react';
import './Footer.css';

const footerLinks = [
  {
    title: 'Learn',
    links: ['Health Assistance', 'ChatBot', 'Pharmacy Location', 'Alert Messages']
  },
  {
    title: 'Community',
    links: ['User Groups', 'Community Forums', 'Staff', 'Slack Channel']
  },
  {
    title: 'About',
    links: ['Company', 'Careers', 'Press', 'Contact']
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {footerLinks.map(section => (
          <div key={section.title} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
