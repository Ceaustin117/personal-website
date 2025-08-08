import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Senior Data Engineer with expertise in AI, ML pipelines, and cloud-native solutions
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Senior Data Engineer with over 7 years of experience building intelligent systems 
              that transform how organizations work with data. My expertise spans from GenAI and LLMs 
              to scalable ML pipelines and cloud infrastructure.
            </p>
            <p>
              Currently at 3Cloud, I lead AI strategy and delivery across enterprise clients, focusing 
              on solutions that reduce manual work, accelerate insights, and improve decision-making. 
              I've designed multi-agent GenAI architectures, built real-time analytics solutions, and 
              modernized legacy ML pipelines for better maintainability and observability.
            </p>
            <p>
              My background includes leading ML initiatives at Wavicle, modernizing analytics workflows 
              at CarcoGap, and building scalable data solutions across various industries. I hold a 
              B.S. in Mathematics & Computer Science and am a Microsoft Certified Azure AI Engineer Associate.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>7+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>5</h3>
              <p>Companies Worked</p>
            </div>
            <div className="stat-item">
              <h3>3</h3>
              <p>Cloud Platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 