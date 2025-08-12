import React, { useState } from 'react';
import { Project } from '../types';
import './Demos.css';

const Demos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'tax-document-ai',
      title: 'Multi-Agent GenAI Tax Analysis',
      description: 'Designed a multi-agent GenAI architecture on Azure to automate tax document analysis workflows, reducing review time by 800%. Implemented RAG systems and prompt engineering for intelligent document processing.',
      technologies: ['Azure', 'GenAI', 'RAG', 'Multi-Agent Systems', 'Python'],
      featured: true,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'real-time-analytics',
      title: 'Real-Time Analytics Platform',
      description: 'Built a real-time analytics solution using Microsoft Fabric to centralize operational data and support live metrics access, improving business responsiveness and transparency across enterprise clients.',
      technologies: ['Microsoft Fabric', 'Azure', 'Real-time Analytics', 'Power BI'],
      featured: true,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'ml-pipeline-modernization',
      title: 'ML Pipeline Modernization',
      description: 'Rebuilt legacy ML pipelines using a modern lifecycle framework for better maintainability and observability, enabling faster deployments and fewer production issues.',
      technologies: ['ML Pipelines', 'Model Monitoring', 'Azure ML', 'Python'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'liquor-demand-forecasting',
      title: 'Liquor Demand Forecasting System',
      description: 'Built a forecasting system using historical sales data to predict weekly liquor demand across product categories and regions, improving inventory accuracy and reducing excess stock.',
      technologies: ['Forecasting', 'Time Series', 'Python', 'ML Pipelines'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'inventory-monitoring',
      title: 'Real-Time Inventory Monitoring',
      description: 'Developed automated ML pipelines to support demand planning and real-time inventory monitoring, reducing manual effort and improving responsiveness to supply shifts.',
      technologies: ['Real-time Analytics', 'ML Pipelines', 'Python', 'Azure'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'data-pipelines',
      title: 'Scalable Data Pipeline Architecture',
      description: 'Helped modernize legacy analytics workflows by designing scalable cloud data pipelines and improving delivery speed. Built ingestion and transformation pipelines that cut turnaround time from hours to minutes.',
      technologies: ['Spark/PySpark', 'Azure', 'Data Pipelines', 'SQL'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'ml', label: 'ML Engineering' },
    { id: 'cloud', label: 'Cloud Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter)
        )
      );

  return (
    <section id="demos" className="demos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my work in AI, ML, and cloud-native data solutions
          </p>
        </div>

        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements">
          <h3>Key Achievements</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <span className="achievement-number">800% </span>
              <span className="achievement-text">Reduction in tax document review time</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">15+ </span>
              <span className="achievement-text">Enterprise projects delivered</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">5 </span>
              <span className="achievement-text">Companies transformed</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-number">7+ </span>
              <span className="achievement-text">Years of professional experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demos; 