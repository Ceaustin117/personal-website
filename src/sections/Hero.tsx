import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Chris Austin</span>
          </h1>
          <h2 className="hero-subtitle">
            Senior Data Engineer - AI
          </h2>
          <p className="hero-description">
            I build intelligent systems that reduce manual work, accelerate insights, and improve decision-making. 
            Specializing in GenAI, ML pipelines, and cloud-native data solutions with 7+ years of experience.
          </p>
          <div className="hero-buttons">
            <a href="#demos" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-image">
                {/* Add your profile picture here */}
                <img 
                  src="/profile-photo.jpg" 
                  alt="Chris Austin - Senior Data Engineer specializing in AI and ML solutions"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) {
                      placeholder.style.display = 'block';
                    }
                  }}
                />
                <div className="profile-placeholder">
                  <span>📸</span>
                  <p>Add your photo</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="code-block">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                  <span className="code-line">
                    <span className="keyword">const</span> engineer = {'{'}
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;name: <span className="string">'Chris Austin'</span>,
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;role: <span className="string">'Senior Data Engineer - AI'</span>,
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;skills: [<span className="string">'GenAI'</span>, <span className="string">'ML Pipelines'</span>, <span className="string">'Azure'</span>],
                  </span>
                  <span className="code-line">
                    &nbsp;&nbsp;experience: <span className="string">'7+ years'</span>
                  </span>
                  <span className="code-line">
                    {'}'};
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 