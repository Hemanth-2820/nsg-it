import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Cpu, Database, Cloud, Shield, BarChart3, GraduationCap, Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* LOGO AREA */}
        <div className="logo-area">
          <div className="logo-img-wrapper">
            <img src={logo} alt="NSG IT Logo" className="navbar-logo-img" />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link active">Home</a>
            </li>
            
            <li 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <a href="#about" className="nav-link dropdown-toggle">
                About Us <ChevronDown size={14} className="caret-icon" />
              </a>
              {activeDropdown === 'about' && (
                <div className="glass-dropdown">
                  <div className="dropdown-grid">
                    <a href="#company" className="dropdown-item">
                      <Cpu size={16} className="item-icon color-cyan" />
                      <div className="item-details">
                        <span className="item-title">Our Company</span>
                        <span className="item-desc">Learn about Petadata's legacy, values, and engineering vision.</span>
                      </div>
                    </a>
                    <a href="#team" className="dropdown-item">
                      <GraduationCap size={16} className="item-icon color-purple" />
                      <div className="item-details">
                        <span className="item-title">Executive Team</span>
                        <span className="item-desc">Meet the global visionaries driving our tech innovations.</span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </li>

            <li 
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <a href="#services" className="nav-link dropdown-toggle">
                Services <ChevronDown size={14} className="caret-icon" />
              </a>
              {activeDropdown === 'services' && (
                <div className="glass-dropdown wide-dropdown">
                  <div className="dropdown-grid cols-2">
                    <a href="#digital" className="dropdown-item">
                      <Database size={16} className="item-icon color-cyan" />
                      <div className="item-details">
                        <span className="item-title">Digital Transformation</span>
                        <span className="item-desc">Reimagining legacy infrastructures for speed and scale.</span>
                      </div>
                    </a>
                    <a href="#cloud" className="dropdown-item">
                      <Cloud size={16} className="item-icon color-blue" />
                      <div className="item-details">
                        <span className="item-title">Cloud & Infrastructure</span>
                        <span className="item-desc">Elastic architectures deployed on zero-friction networks.</span>
                      </div>
                    </a>
                    <a href="#cyber" className="dropdown-item">
                      <Shield size={16} className="item-icon color-pink" />
                      <div className="item-details">
                        <span className="item-title">Cybersecurity Defense</span>
                        <span className="item-desc">Zero-trust frameworks built with threat interception grids.</span>
                      </div>
                    </a>
                    <a href="#analytics" className="dropdown-item">
                      <BarChart3 size={16} className="item-icon color-gold" />
                      <div className="item-details">
                        <span className="item-title">Applied AI & Analytics</span>
                        <span className="item-desc">Extracting high-value predictions from raw datasets.</span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#career" className="nav-link">Career</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* CTA BUTTON */}
        <div className="nav-cta">
          <a href="#consultation" className="cta-btn-neon">
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
          <li><a href="#home" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#career" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Career</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          <li style={{ marginTop: '20px' }}>
            <a href="#consultation" className="cta-btn-neon mobile-cta-btn" onClick={() => setIsOpen(false)}>
              <Phone size={14} /> Free Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
