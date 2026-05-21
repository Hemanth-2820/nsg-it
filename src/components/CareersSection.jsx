import React from 'react';
import './CareersSection.css';
import modernTechTeam from '../assets/modern_tech_team.png';
import softwareDevsOffice from '../assets/software_developers_office.png';
import startupTeamCoding from '../assets/startup_team_coding.png';
import itCompanyWorkspace from '../assets/it_company_workspace.png';

const CareersSection = () => {
  return (
    <section className="careers-section" id="careers">
      {/* Dynamic neon ambient background glows */}
      <div className="careers-glow-teal"></div>
      <div className="careers-glow-pink"></div>

      <div className="careers-container">
        <div className="careers-grid">
          
          {/* Header Block (Spans middle columns in desktop grid) */}
          <div className="careers-header-block">
            <h2 className="careers-main-title">Supercharge Your Career with Us</h2>
            <p className="careers-description">
              At NSG Solutions, we leverage technology to shape the future of business. 
              Join us if you want to grow, innovate and make an impact.
            </p>
          </div>

          {/* Column 1: Tall (Far Left) */}
          <div className="careers-col careers-col-1">
            <div className="careers-card">
              <img 
                src={modernTechTeam} 
                alt="Coding Workspace" 
                className="careers-card-img" 
              />
              <div className="careers-card-overlay">
                <span className="careers-card-tag">CODING WORKSPACE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Short (Middle Left) */}
          <div className="careers-col careers-col-2">
            <div className="careers-card">
              <img 
                src={softwareDevsOffice} 
                alt="Team Collaboration" 
                className="careers-card-img" 
              />
              <div className="careers-card-overlay">
                <span className="careers-card-tag">TEAM COLLABORATION</span>
              </div>
            </div>
          </div>

          {/* Column 3: Short (Middle Right) */}
          <div className="careers-col careers-col-3">
            <div className="careers-card">
              <img 
                src={startupTeamCoding} 
                alt="Team Discussion" 
                className="careers-card-img" 
              />
              <div className="careers-card-overlay">
                <span className="careers-card-tag">TEAM DISCUSSION</span>
              </div>
            </div>
          </div>

          {/* Column 4: Tall (Far Right) */}
          <div className="careers-col careers-col-4">
            <div className="careers-card">
              <img 
                src={itCompanyWorkspace} 
                alt="Cloud & Cybersecurity" 
                className="careers-card-img" 
              />
              <div className="careers-card-overlay">
                <span className="careers-card-tag">CLOUD & CYBERSECURITY</span>
              </div>
            </div>
          </div>

        </div>

        {/* Centralized Action Button */}
        <div className="careers-action">
          <a href="#contact" className="careers-btn">
            JOIN OUR TEAM
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
