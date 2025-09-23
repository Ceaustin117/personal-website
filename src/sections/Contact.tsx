import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss how I can help transform your data and AI initiatives
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>ceaustin117@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Los Angeles / Remote</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <h4>Current Role</h4>
                  <p>Senior Data Engineer - AI at 3Cloud</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>B.S. Mathematics & Computer Science</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://linkedin.com/in/christopher-austin" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ceaustin117" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 