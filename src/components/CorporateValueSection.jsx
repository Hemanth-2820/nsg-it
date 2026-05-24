import React, { useState } from 'react';
import './CorporateValueSection.css';
import logo from '../assets/logo.png';

const blocksData = [
  {
    key: 'purpose',
    title: 'PURPOSE',
    desc: 'Drive positive change in the lives of our communities. Only when we enable others to rise will we rise.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#00f2fe'
  },
  {
    key: 'promise',
    title: 'PROMISE',
    desc: 'Scale At Speed.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#ff0000'
  },
  {
    key: 'mission',
    title: 'MISSION',
    desc: 'To deliver innovative, high-quality, and affordable digital solutions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#aa3bff'
  },
  {
    key: 'values',
    title: 'VALUES',
    desc: 'To become a trusted global technology partner.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#10b981'
  }
];

const CorporateValueSection = () => {
  const [activeKey, setActiveKey] = useState('purpose');

  return (
    <section className="corporate-value-section" id="about">

      <div className="corporate-value-accordion">
        {blocksData.map((block) => {
          const isActive = block.key === activeKey;
          return (
            <div
              key={block.key}
              className={`value-block ${isActive ? 'active' : ''} theme-${block.key}`}
              onClick={() => setActiveKey(block.key)}
            >
              {/* Background Image Layer */}
              <div 
                className="block-bg"
                style={{ backgroundImage: `url(${block.image})` }}
              ></div>

              {/* Blurred Overlay for Inactive Blocks, Clear for Active */}
              <div className="block-overlay"></div>

              {/* Decorative Lines Overlay */}
              <div className="block-lines"></div>

              {/* Column Content */}
              <div className="block-content">
                {/* Inactive Centered Title */}
                <div className="block-inactive-view">
                  <h3 className="block-inactive-title">{block.title}</h3>
                </div>

                {/* Active Expanded Content */}
                <div className="block-active-view">
                  {/* Brand Group at Top Left matching Screenshot layout */}
                  <div className="block-active-logo-group">
                    <img src={logo} alt="NSG IT Logo" className="block-active-logo" />
                    <span className="block-active-brand">NSG Solutions</span>
                  </div>

                  <h2 className="block-active-title">{block.title}</h2>
                  <p className="block-active-desc">{block.desc}</p>
                  <div className="block-active-action">
                    <a 
                      href="#contact" 
                      className="block-active-btn"
                      style={{ '--hover-color': block.themeColor }}
                    >
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CorporateValueSection;
