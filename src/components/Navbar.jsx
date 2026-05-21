import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.jpg';

const tabData = {
  "Our Services": [
    { name: "Web Development", desc: "Immersive high-fidelity client flagships.", index: 0 },
    { name: "App Development", desc: "Multi-platform mobile environments.", index: 1 },
    { name: "Software Development", desc: "Scalable backend core engines.", index: 2 },
    { name: "AWS & DevOps", desc: "Continuous automated delivery loops.", index: 3 },
    { name: "Hosting & Server Management", desc: "High-availability global server fabrics.", index: 4 },
    { name: "Digital Marketing", desc: "Advanced brand telemetry & strategy.", index: 5 },
    { name: "AI & RAG Chatbots", desc: "Cognitive AI search & agent systems.", index: 6 },
    { name: "IVR Solutions", desc: "Interactive voice response networks.", index: 7 },
    { name: "API Integrations", desc: "Secure unified corporate interfaces.", index: 8 },
    { name: "E-Commerce Solutions", desc: "Secured high-frequency trading grids.", index: 9 },
    { name: "AI & Automation", desc: "Cognitive robotic process automations.", index: 10 },
    { name: "Security & Maintenance", desc: "Zero-Trust persistent threat defense.", index: 11 }
  ],
  "Artificial Intelligence": [
    { name: "AI & RAG Chatbots", desc: "Cognitive AI search & agent systems.", index: 6 },
    { name: "AI & Automation", desc: "Cognitive robotic process automations.", index: 10 },
    { name: "Neural Computer Vision", desc: "Deep learning image & visual diagnostic grids.", index: 6 },
    { name: "Predictive Analytics", desc: "Real-time forecasting & automated decision pipelines.", index: 2 }
  ],
  "Trending Services": [
    { name: "AWS & DevOps", desc: "Continuous automated delivery loops.", index: 3 },
    { name: "Zero-Trust Security", desc: "Enforcing modern perimeter threat defense.", index: 11 },
    { name: "API Integrations", desc: "Secure unified corporate data interfaces.", index: 8 },
    { name: "E-Commerce Grids", desc: "High-frequency secure transaction systems.", index: 9 }
  ],
  "Industries": [
    { name: "Healthcare Tech", desc: "HIPAA-compliant secure medical cloud structures.", index: 4 },
    { name: "FinTech Solutions", desc: "High-density secure transactional banking systems.", index: 9 },
    { name: "Logistics & Supply Chain", desc: "Real-time fleet telemetry & global tracking nodes.", index: 3 },
    { name: "EdTech Platforms", desc: "Interactive cognitive learning portals & LMS engines.", index: 0 }
  ]
};

const techIcons = [
  {
    name: "Python",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M11.9 2c-1.8 0-3.3 1.2-3.3 3.3v1.8h6.7V5.3c0-2.1-1.6-3.3-3.4-3.3zm-5 5C5.1 7 4 8.1 4 9.9v3.4c0 1.8 1.1 2.9 2.9 2.9h1.8v-1.7H6.9c-1 0-1.2-.2-1.2-1.2V9.9c0-1 .2-1.2 1.2-1.2h6.7V7.1H6.9zm5 10c1.8 0 3.3-1.2 3.3-3.3v-1.8H8.5v1.8c0 2.1 1.6 3.3 3.4 3.3zm5-5c1.8 0 2.9-1.1 2.9-2.9V8.7c0-1.8-1.1-2.9-2.9-2.9h-1.8v1.7h1.8c1 0 1.2.2 1.2 1.2v3.4c0 1-.2 1.2-1.2 1.2h-6.7v1.6H17.1z" fill="#3776AB"/>
      </svg>
    )
  },
  {
    name: "Java",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M4 19c0 1.7 4 3 8 3s8-1.3 8-3c0-1.4-2.8-2.6-6.4-2.9l.4-.7c2-.4 3.5-1.1 3.5-2 0-.3-.2-.5-.5-.7-.7-.4-2-.7-3.7-.8l.5-1.5c1.5 0 2.6-.3 2.6-1.1 0-1-1.9-1.6-4.5-1.6-1.5 0-2.8.2-3.6.5l.3 1c.7-.2 1.8-.4 2.9-.4 1.7 0 2.6.4 2.6.7 0 .3-.9.7-2.6.8l-.8 2.3c-2.3.1-4 .6-4.7 1.3-.4.3-.6.7-.6 1.1 0 .8 1.2 1.4 3 1.7l-.6 1c-2.6.3-4.6 1.1-4.6 2.1z" fill="#E76F51"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 13.9l-6.5 3.8-6.5-3.8V8.1l6.5-3.8 6.5 3.8v7.8z" fill="#339933"/>
      </svg>
    )
  },
  {
    name: ".NET",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-6.5h-2V8h2v2z" fill="#512BD4"/>
      </svg>
    )
  },
  {
    name: "React",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(30, 12, 12)" fill="none" stroke="#61DAFB" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(90, 12, 12)" fill="none" stroke="#61DAFB" strokeWidth="1.2"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(150, 12, 12)" fill="none" stroke="#61DAFB" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
      </svg>
    )
  },
  {
    name: "Angular",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 2L2 5.5l1.5 11.5L12 22l8.5-5L22 5.5z" fill="#DD0031"/>
        <path d="M12 2v20l8.5-5L22 5.5z" fill="#C3002F"/>
        <path d="M12 5.5L6.5 17h2.2l1.3-3.2h4l1.3 3.2h2.2z" fill="#FFF"/>
        <path d="M12 7.7l1.4 3.6H10.6z" fill="#DD0031"/>
      </svg>
    )
  },
  {
    name: "Apple",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M18.7 12.4c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-.9-3.7-.9-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.5 1.4 11.2.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9 1.6 0 2.1.9 3.5.9 1.4 0 2.4-1.3 3.3-2.6.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.4-.9-2.4-3.6zM15.9 3.5c.8-1 1.3-2.4 1.1-3.5-1 .1-2.3.7-3 1.5-.6.7-1.1 2.1-.9 3.2 1.1.1 2.2-.5 2.8-1.2z" fill="#000000"/>
      </svg>
    )
  },
  {
    name: "Android",
    svg: (
      <svg className="tech-icon-svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M6 18c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-6H6v6zm11-12.7L18.4 4c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-1.6 1.6c-1.2-.5-2.6-.8-4.1-.8S9 4.4 7.8 4.9L6.2 3.3c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L7 5.3C4.8 6.7 3.3 9.1 3 12h18c-.3-2.9-1.8-5.3-4-6.7z" fill="#3DDC84"/>
      </svg>
    )
  }
];

const Navbar = ({ onSelectService, onGoHome, isDetailPage, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Our Services");

  // Set navbar background transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownHover = (menu) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setActiveCategory("Our Services"); // Reset to default when leaving
  };

  const handleServiceClick = (idx) => {
    if (onSelectService) {
      onSelectService(idx);
      setActiveDropdown(null); // CLOSE DROPDOWN INSTANTLY FOR PERFECT UX!
      setIsOpen(false); // Close mobile menu if active
      
      // Smooth scroll to the hero/home section so the slide is visible
      const heroSec = document.getElementById('home');
      if (heroSec) {
        heroSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGoHome = (e, targetId) => {
    if (e) e.preventDefault();
    setIsOpen(false);
    setActiveDropdown(null);
    if (onGoHome) {
      onGoHome();
    }
    setTimeout(() => {
      let actualId = targetId;
      if (targetId === 'career') actualId = 'careers';
      const element = document.getElementById(actualId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header 
      className={`navbar-header ${scrolled ? 'scrolled' : ''} ${isDetailPage ? 'is-detail-page' : ''}`}
      style={isDetailPage && accentColor ? { '--accent-color': accentColor } : null}
    >
      <div className="navbar-container">
        {/* LOGO AREA */}
        <div className="logo-area" onClick={(e) => handleGoHome(e, 'home')} style={{ cursor: 'pointer' }}>
          <div className="logo-img-wrapper">
            <img src={logo} alt="NSG IT Logo" className="navbar-logo-img" />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link active" onClick={(e) => handleGoHome(e, 'home')}>Home</a>
            </li>
            
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => handleGoHome(e, 'about')}>About Us</a>
            </li>


            <li 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <a 
                href="#services" 
                className={`nav-link ${activeDropdown === 'services' ? 'active-dropdown-link' : ''}`}
              >
                Services <ChevronDown size={14} className="caret-icon" />
              </a>
              {activeDropdown === 'services' && (
                <div className="services-megamenu-panel">
                  {/* LEFT COL: SIDEBAR TABS & TECH ICONS */}
                  <div className="megamenu-left-col">
                    <div className="megamenu-tabs">
                      {Object.keys(tabData).map((category) => (
                        <button 
                          key={category}
                          className={`megamenu-tab ${activeCategory === category ? 'active' : ''}`}
                          onMouseEnter={() => setActiveCategory(category)}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="megamenu-quick-tech">
                      <h4 className="quick-tech-title">Quick Technologies Services</h4>
                      <div className="quick-tech-grid">
                        {techIcons.map((tech, idx) => (
                          <div key={idx} className="tech-icon-wrapper" title={tech.name}>
                            {tech.svg}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CENTER COL: DYNAMICALLY SWITCHED SERVICES GRID */}
                  <div className="megamenu-center-col">
                    <h3 className="megamenu-center-title">{activeCategory}</h3>
                    <div className="megamenu-services-grid">
                      {tabData[activeCategory].map((service, idx) => (
                        <div 
                          key={idx} 
                          className="megamenu-service-item" 
                          onClick={() => handleServiceClick(service.index)}
                        >
                          <span className="megamenu-service-name">{service.name}</span>
                          <span className="megamenu-service-desc">{service.desc}</span>
                        </div>
                      ))}
                    </div>

                    <button className="megamenu-view-all-btn" onClick={() => handleServiceClick(0)}>
                      VIEW ALL <ArrowUpRight size={16} />
                    </button>
                  </div>

                  {/* RIGHT COL: SERVICE MODELS & BANNER */}
                  <div className="megamenu-right-col">
                    <div className="right-col-section">
                      <h4 className="right-col-title">Service Models</h4>
                      
                      <div className="model-item">
                        <span className="model-name">Delivery Models</span>
                        <span className="model-desc">Select the best delivery models to align development with cost-effectiveness.</span>
                      </div>

                      <div className="model-item" style={{ marginTop: '10px' }}>
                        <span className="model-name">Engagement Models</span>
                        <span className="model-desc">Get custom-fit engagement models that fit your business requirements.</span>
                      </div>
                    </div>

                    <div className="consultation-banner">
                      <span className="banner-text">
                        Struggling with <span className="banner-text-highlight">tech decisions</span>? Get <span className="banner-text-highlight">2 hours</span> of free consultation!
                      </span>
                      <button className="banner-btn" onClick={() => {
                        setActiveDropdown(null); // Close dropdown
                        const contactSec = document.getElementById('contact');
                        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                      }}>
                        FREE CONSULTATION <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#career" className="nav-link" onClick={(e) => handleGoHome(e, 'career')}>Career</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => handleGoHome(e, 'contact')}>Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* CTA BUTTON */}
        <div className="nav-cta">
          <a href="#contact" className="cta-btn-neon" onClick={(e) => handleGoHome(e, 'contact')}>
            <Phone size={14} /> Free Consultation
          </a>
        </div>

        {/* HAMBURGER TOGGLE */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" className="mobile-nav-link" onClick={(e) => handleGoHome(e, 'home')}>Home</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={(e) => handleGoHome(e, 'about')}>About Us</a></li>
          <li>
            <a href="#services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Services</a>
            <div className="mobile-nav-services-list">
              {tabData["Our Services"].map((service, idx) => (
                <a 
                  key={idx} 
                  href="#home" 
                  className="mobile-nav-service-link"
                  onClick={() => {
                    handleServiceClick(service.index);
                    setIsOpen(false);
                  }}
                >
                  ● {service.name}
                </a>
              ))}
            </div>
          </li>
          <li><a href="#career" className="mobile-nav-link" onClick={(e) => handleGoHome(e, 'career')}>Career</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={(e) => handleGoHome(e, 'contact')}>Contact Us</a></li>
          <li style={{ marginTop: '20px' }}>
            <a href="#contact" className="cta-btn-neon mobile-cta-btn" onClick={(e) => handleGoHome(e, 'contact')}>
              <Phone size={14} /> Free Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
