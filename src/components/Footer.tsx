import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Chris</h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#demos">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Chris. All rights reserved.</p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 