import React, { useState } from 'react';
import './DigitalJourneyShowcase.css';

const journeyData = [
  {
    tabTitle: "Transition to a product-based approach",
    description: "Accelerate your software engineering workflows, drive user adoption, and achieve consistent feature quality with modern product design standards.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=95"
  },
  {
    tabTitle: "Achieve seamless cloud migration",
    description: "Eliminate business disruption during migration and experience a smooth transition with our proprietary Amaze® technology.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=95"
  },
  {
    tabTitle: "Unlock potential with data & AI",
    description: "Rely on our team of experts to establish a solid data foundation and harness the power of AI for digital transformation success.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=95"
  },
  {
    tabTitle: "Improve infrastructure management",
    description: "Sustain extreme high-availability systems with automated DevOps, proactive patching, and round-the-clock grid support.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=95"
  },
  {
    tabTitle: "Maximize digital commerce performance",
    description: "Empower global online transaction loops, scale digital checkouts, and boost customer retention with tailored e-commerce engines.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=95"
  },
  {
    tabTitle: "Accelerate business process automation",
    description: "Optimize operation workflows, eliminate repetitive tasks, and deploy hyper-efficient digital robot automation matrices.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=95"
  },
  {
    tabTitle: "Establish zero-trust cybersecurity defenses",
    description: "Secure key digital assets, enforce active identity verification, and construct resilient perimeter firewalls against advanced cyber threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=95"
  }
];

const DigitalJourneyShowcase = () => {
  const [activeIdx, setActiveIdx] = useState(0); // Default to index 0

  return (
    <section className="digital-journey-section">
      <div className="journey-header">
        <span className="journey-subtitle">Empowering you to conquer any modern hurdle.</span>
        <h2 className="journey-main-title">
          Tailored Solutions for Your <span className="gradient-text">Digital Evolution</span>
        </h2>
      </div>

      <div className="journey-container">
        <div className="journey-grid">
          
          {/* LEFT COLUMN: CLICKABLE TAB MENU */}
          <div className="journey-left-menu">
            {journeyData.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={idx}
                  className={`journey-menu-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="journey-arrow-indicator">{isActive ? '›' : ''}</span>
                  <span className="journey-btn-text">{item.tabTitle}</span>
                </button>
              );
            })}
          </div>

          {/* MIDDLE COLUMN: DYNAMIC 3D PERSPECTIVE STACKED CARD DECK */}
          <div className="journey-middle-deck">
            <div className="stacked-deck-viewport">
              {journeyData.map((item, idx) => {
                // Mathematical stack ordering to guarantee all cards stack elegantly peeking out
                const position = (idx - activeIdx + 7) % 7;
                const isActive = idx === activeIdx;

                // Stack positions: Active card is at front (position 0)
                // Other cards stack behind it with increasing translation and shrinking scale
                const zIndex = 10 - position;
                const translateY = -position * 24; // Lift background cards up to peek from the top
                const scale = 1 - position * 0.05; // Slightly shrink background cards
                
                // Show exactly the top 4 sheets in the deck at all times. Deep stacked cards fade out.
                let opacity = 0;
                let pointerEvents = 'auto';

                if (position === 0) {
                  opacity = 1.0;
                } else if (position === 1) {
                  opacity = 0.85;
                } else if (position === 2) {
                  opacity = 0.6;
                } else if (position === 3) {
                  opacity = 0.35;
                } else {
                  opacity = 0;
                  pointerEvents = 'none';
                }

                return (
                  <div
                    key={idx}
                    className={`stacked-image-card ${isActive ? 'card-front' : 'card-stacked'}`}
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      pointerEvents,
                      cursor: pointerEvents === 'auto' ? 'pointer' : 'default'
                    }}
                    onClick={() => pointerEvents === 'auto' && setActiveIdx(idx)} // Clicking background sheets pulls them to front!
                  >
                    <img 
                      src={item.image} 
                      alt={item.tabTitle} 
                      className="stacked-card-photo" 
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: ACTIVE DESCRIPTION */}
          <div className="journey-right-desc">
            <div className="desc-box-wrapper" key={activeIdx}>
              <p className="journey-description-text">
                {journeyData[activeIdx].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalJourneyShowcase;
