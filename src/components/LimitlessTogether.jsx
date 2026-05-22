import React from 'react';
import { Link } from 'react-router-dom';
import './LimitlessTogether.css';
import limitlessBg from '../assets/limitless_together.png';

const LimitlessTogether = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="limitless-section">
      {/* Background Image Layer */}
      <div 
        className="limitless-bg" 
        style={{ backgroundImage: `url(${limitlessBg})` }}
      ></div>

      {/* Dark Overlay Layer - Gradients darker on the right for readability */}
      <div className="limitless-overlay"></div>

      {/* Decorative Grid Lines in Bottom Right */}
      <div className="limitless-grid-lines"></div>

      {/* Main Content Layout */}
      <div className="limitless-container">
        <div className="limitless-content-block">
          <h2 className="limitless-title">Limitless Together</h2>
          <p className="limitless-description">
            NSG Solutions is a fast-growing technology and creative services company delivering high-quality, innovative, and cost-effective solutions
          </p>
          <div className="limitless-action">
            <Link to="/contact" className="limitless-btn">
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top / Up Arrow Button in Bottom Right */}
      <button 
        className="limitless-scroll-top" 
        onClick={scrollToTop} 
        aria-label="Scroll to Top"
      >
        <span className="arrow-icon">↑</span>
      </button>
    </section>
  );
};

export default LimitlessTogether;
