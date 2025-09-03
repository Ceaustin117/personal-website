import React from 'react';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Analytics Dashboard</h2>
          <p>Real-time insights and metrics from my data projects</p>
        </div>
        
        <div className="dashboard-content">
          <div className="dashboard-iframe-container">
            <iframe
              src="https://adb-3416059529708599.19.azuredatabricks.net/embed/dashboardsv3/01f086b285ca1895aabb39b9153f8818?o=3416059529708599"
              width="100%"
              height="600"
              frameBorder="0"
              title="Analytics Dashboard"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
