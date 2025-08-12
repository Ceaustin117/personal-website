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
            Specializing in GenAI, ML pipelines, and cloud-native data solutions with extensive full-stack experience 
            spanning 7+ years.
          </p>
          <div className="hero-buttons">
            <a href="#demos" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src="/profile-photo.jpg" 
              alt="Chris Austin - Senior Data Engineer specializing in AI and ML solutions"
              className="profile-image"
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
              CA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 