import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nsg-global-footer">
      <div className="footer-top-grid-container">
        
        {/* COLUMN 1: COMPANY */}
        <div className="footer-grid-column">
          <h4 className="footer-column-title">Company</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about#team">Our Team</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/client-login">Support Portal</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* COLUMN 2: SERVICES */}
        <div className="footer-grid-column">
          <h4 className="footer-column-title">Services</h4>
          <ul className="footer-links-list">
            <li><Link to="/services/0">Web Development</Link></li>
            <li><Link to="/services/1">App Development</Link></li>
            <li><Link to="/services/2">Software Development</Link></li>
            <li><Link to="/services/3">AWS & DevOps</Link></li>
            <li><Link to="/services/4">Hosting & Server Mgmt</Link></li>
            <li><Link to="/services/5">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: SOLUTIONS */}
        <div className="footer-grid-column">
          <h4 className="footer-column-title">Solutions</h4>
          <ul className="footer-links-list">
            <li><Link to="/solutions/6">AI & RAG Chatbots</Link></li>
            <li><Link to="/solutions/7">IVR Solutions</Link></li>
            <li><Link to="/solutions/8">API Integrations</Link></li>
            <li><Link to="/solutions/9">E-Commerce Solutions</Link></li>
            <li><Link to="/solutions/10">AI & Automation</Link></li>
            <li><Link to="/solutions/11">Security & Maintenance</Link></li>
          </ul>
        </div>

        {/* COLUMN 4: QUICK CONTACTS */}
        <div className="footer-grid-column footer-contacts-column">
          <h4 className="footer-column-title">Quick Contacts</h4>
          
          <div className="footer-contact-block">
            <span className="contact-region-badge">Bangalore HQ</span>
            
            <div className="contact-detail-row">
              <MapPin className="contact-row-icon" size={16} />
              <p className="contact-row-text">
                <strong>NSG Solutions Private Limited</strong><br />
                HSR Layout, Sector 6, Outer Ring Road,<br />
                Bangalore, Karnataka 560102, India
              </p>
            </div>

            <div className="contact-detail-row">
              <Phone className="contact-row-icon" size={15} />
              <p className="contact-row-text">
                <a href="tel:+918049123000">+91 80 4912 3000</a>
              </p>
            </div>

            <div className="contact-emails-container">
              <div className="contact-detail-row">
                <Mail className="contact-row-icon" size={14} />
                <p className="contact-row-text">
                  <a href="mailto:sales@nsg-it.com">sales@nsg-it.com</a>
                </p>
              </div>
              <div className="contact-detail-row">
                <Mail className="contact-row-icon" size={14} />
                <p className="contact-row-text">
                  <a href="mailto:info@nsg-it.com">info@nsg-it.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom-divider-line"></div>
      
      <div className="footer-bottom-bar-container">
        
        {/* Brand Copyright */}
        <div className="footer-bottom-brand-sec">
          <img src={logo} alt="NSG Solutions Logo" className="footer-bottom-logo-img" />
          <p className="footer-copyright-statement">
            Copyright © {currentYear}, NSG Solutions Private Limited. All Rights Reserved.
          </p>
        </div>

        {/* Policy Links */}
        <div className="footer-bottom-policy-links">
          <Link to="/contact#privacy">Terms of use</Link>
          <span className="policy-bullet-separator">•</span>
          <Link to="/contact#privacy">Privacy Policy</Link>
          <span className="policy-bullet-separator">•</span>
          <Link to="/contact#sitemap">Sitemap</Link>
        </div>

        {/* Social Badges and Handles */}
        <div className="footer-bottom-social-grid">
          
          <div className="footer-social-icons-wrapper">
            <a href="https://facebook.com" className="social-icon-btn facebook" target="_blank" rel="noreferrer" title="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="https://x.com" className="social-icon-btn twitter-x" target="_blank" rel="noreferrer" title="Twitter X">
              {/* Custom SVG for sleek X brand */}
              <svg viewBox="0 0 24 24" width="14" height="14" className="twitter-x-vector">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://youtube.com" className="social-icon-btn youtube" target="_blank" rel="noreferrer" title="YouTube">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107c.502-1.89.502-5.837.502-5.837s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="social-icon-btn linkedin" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="social-icon-btn instagram" target="_blank" rel="noreferrer" title="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
