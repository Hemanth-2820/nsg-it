import React from 'react';
import './CorporateValueSection.css';

const CorporateValueSection = () => {
  return (
    <section className="corporate-value-section" id="about">
      {/* Background Image Wrapper with Premium Dark Overlay */}
      <div className="value-section-bg-wrapper">
        <div className="value-section-overlay"></div>
        {/* Subtle decorative grid lines to match Tech Mahindra screenshot styling */}
        <div className="value-section-lines"></div>
      </div>

      <div className="value-section-container">
        <div className="value-section-content">
          <h2 className="value-section-title">
            Limitless Together
          </h2>
          <p className="value-section-subtitle">
            NSG Solutions is a fast-growing technology and creative services company delivering high-quality, innovative, and cost-effective solutions
          </p>
          <div className="value-section-action">
            <a href="#contact" className="value-know-more-btn">
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateValueSection;
