import React from 'react';
import './DataPipelineDiagram.css';

export const DataPipelineDiagram: React.FC = () => {
  return (
    <section className="pipeline-diagram">
      <div className="diagram-container">
        <div className="diagram-header">
          <h3>Data Pipeline Architecture</h3>
          <p>Medallion Architecture (Bronze, Silver, Gold) for data processing and analytics</p>
        </div>
        
        <div className="diagram-content">
          <div className="diagram-image-container">
            <img 
              src="/data-pipeline-diagram.png" 
              alt="Data Pipeline Architecture - Medallion Architecture showing Bronze, Silver, and Gold layers with data quality monitoring"
              className="diagram-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
