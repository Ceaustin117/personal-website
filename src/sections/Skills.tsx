import React, { useState } from 'react';
import { Skill } from '../types';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skills: Skill[] = [
    // GenAI & LLMs
    { name: 'RAG (Retrieval-Augmented Generation)', category: 'ai', proficiency: 'expert' },
    { name: 'Prompt Engineering', category: 'ai', proficiency: 'expert' },
    { name: 'Multi-Agent Systems', category: 'ai', proficiency: 'expert' },
    { name: 'GPT APIs', category: 'ai', proficiency: 'expert' },
    { name: 'LangChain', category: 'ai', proficiency: 'advanced' },
    
    // ML Engineering
    { name: 'Forecasting Models', category: 'ml', proficiency: 'expert' },
    { name: 'Classification', category: 'ml', proficiency: 'advanced' },
    { name: 'Model Monitoring', category: 'ml', proficiency: 'advanced' },
    { name: 'ML Pipelines', category: 'ml', proficiency: 'expert' },
    { name: 'Time Series Modeling', category: 'ml', proficiency: 'advanced' },
    { name: 'Anomaly Detection', category: 'ml', proficiency: 'advanced' },
    
    // Cloud & Infrastructure
    { name: 'Azure', category: 'cloud', proficiency: 'expert' },
    { name: 'AWS', category: 'cloud', proficiency: 'advanced' },
    { name: 'Microsoft Fabric', category: 'cloud', proficiency: 'expert' },
    { name: 'Databricks', category: 'cloud', proficiency: 'advanced' },
    { name: 'Terraform', category: 'cloud', proficiency: 'advanced' },
    
    // Programming & Tools
    { name: 'Python', category: 'tools', proficiency: 'expert' },
    { name: 'Spark/PySpark', category: 'tools', proficiency: 'expert' },
    { name: 'SQL', category: 'tools', proficiency: 'expert' },
    { name: 'Git', category: 'tools', proficiency: 'advanced' },
    { name: 'CI/CD', category: 'tools', proficiency: 'advanced' },
    { name: 'Streamlit', category: 'tools', proficiency: 'advanced' },
    { name: 'Power BI', category: 'tools', proficiency: 'advanced' }
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai', label: 'GenAI & LLMs' },
    { id: 'ml', label: 'ML Engineering' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'tools', label: 'Programming & Tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return '#28a745';
      case 'advanced': return '#17a2b8';
      case 'intermediate': return '#ffc107';
      case 'beginner': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'expert': return '95%';
      case 'advanced': return '85%';
      case 'intermediate': return '70%';
      case 'beginner': return '50%';
      default: return '60%';
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My expertise spans from cutting-edge AI technologies to robust cloud infrastructure
          </p>
        </div>

        <div className="skills-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span 
                  className="skill-level"
                  style={{ color: getProficiencyColor(skill.proficiency) }}
                >
                  {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
                </span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: getProficiencyWidth(skill.proficiency),
                    backgroundColor: getProficiencyColor(skill.proficiency)
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="certification-item">
            <span className="certification-badge">Microsoft Certified</span>
            <span className="certification-name">Azure AI Engineer Associate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 