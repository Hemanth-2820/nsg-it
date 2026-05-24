import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './SolutionsContact.css';

const countries = [
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
  { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪' }
];

const categoryHighlights = {
  "Web Development": {
    badge: "certified",
    highlight1: "React, Next.js, Node.js",
    lead1: "expert team we'll help you build high-performance interfaces, optimize speed, and craft stunning layouts",
    highlight2: "Web Development",
    lead2: "under one roof",
    highlight3: "deliver your flagship",
    lead3: "at any development stage—Figma design, database integration, responsive adaptation, or headless CMS setup",
    highlight4: "Modern SaaS platforms"
  },
  "App Development": {
    badge: "premium",
    highlight1: "iOS, Android, Flutter",
    lead1: "development agency we'll help you build native apps, design gestures, and implement offline caching systems",
    highlight2: "Mobile engineering",
    lead2: "under one roof",
    highlight3: "ship your app",
    lead3: "at any development stage—prototyping, biometric gates, Play Store publication, or mesh network setups",
    highlight4: "60FPS mobile apps"
  },
  "Software Development": {
    badge: "proven",
    highlight1: "Custom Software, DBs",
    lead1: "engineers we'll help you automate background loops, scale data pipelines, and build desktop tools",
    highlight2: "Software Development",
    lead2: "under one roof",
    highlight3: "deploy your system",
    lead3: "at any development stage—database schema modeling, billing webhook hooks, or legacy migrations",
    highlight4: "High-throughput engines"
  },
  "AWS & DevOps": {
    badge: "certified",
    highlight1: "Azure, AWS, Microsoft",
    lead1: "partner we'll help you scale on demand, adopt new technologies, and solve complex technical issues",
    highlight2: "DevOps solutions",
    lead2: "under one roof",
    highlight3: "pick up",
    lead3: "your project at any development stage—CI/CD build pipelines, Terraform infrastructure, or docker clusters",
    highlight4: "High-availability clouds"
  },
  "Hosting & Server Management": {
    badge: "trusted",
    highlight1: "Nginx, Linux, Cloudflare",
    lead1: "specialists we'll help you secure servers, manage networks, and maintain bulletproof 99.99% uptime loops",
    highlight2: "Server Management",
    lead2: "under one roof",
    highlight3: "harden your server",
    lead3: "at any administration stage—domain DNS setups, SSL installation, website migrations, or fail2ban rules",
    highlight4: "99.99% uptime grids"
  },
  "Digital Marketing": {
    badge: "results-driven",
    highlight1: "SEO, Ads, Lead Gen",
    lead1: "acquisition experts we'll help you dominate search results, drive organic leads, and scale paid channels",
    highlight2: "Performance Marketing",
    lead2: "under one roof",
    highlight3: "scale your campaign",
    lead3: "at any marketing stage—technical SEO audits, Meta pixel tracking, keyword gap analysis, or copy writing",
    highlight4: "High-ROI digital funnels"
  },
  "AI & RAG Chatbots": {
    badge: "advanced",
    highlight1: "LLMs, LangChain, RAG",
    lead1: "architects we'll help you deploy secure cognitive brains, ingest internal directories, and automate FAQs",
    highlight2: "AI & Chatbot systems",
    lead2: "under one roof",
    highlight3: "deploy your agent",
    lead3: "at any AI project stage—document chunking, Pinecone vector indexing, prompt engineering, or support widget setup",
    highlight4: "Hallucination-free bots"
  },
  "IVR Solutions": {
    badge: "enterprise",
    highlight1: "Twilio, VoIP, ACD",
    lead1: "telephony engineers we'll help you automate support routing, mask DTMF digits, and integrate client CRMs",
    highlight2: "Smart IVR Systems",
    lead2: "under one roof",
    highlight3: "structure your menus",
    lead3: "at any telephony stage—greeting script recording, skill-based routing trees, or VoIP trunk cutovers",
    highlight4: "High-availability voice trees"
  },
  "API Integrations": {
    badge: "secure",
    highlight1: "REST, SOAP, Webhooks",
    lead1: "middleware engineers we'll help you bridge CRM data, orchestrate queues, and eliminate manual synchronization",
    highlight2: "Middleware solutions",
    lead2: "under one roof",
    highlight3: "connect your systems",
    lead3: "at any integration stage—OAuth 2.0 configuration, RabbitMQ queues, API throttling, or schema mapping",
    highlight4: "Zero-delay data bridges"
  },
  "E-Commerce Solutions": {
    badge: "high-conversion",
    highlight1: "Shopify, WooCommerce",
    lead1: "developers we'll help you set up multi-vendor platforms, optimize cart checkout, and sync inventory ledgers",
    highlight2: "E-Commerce Systems",
    lead2: "under one roof",
    highlight3: "launch your store",
    lead3: "at any retail stage—product catalog modeling, payment gateways, shopping cart funnels, or automated invoicing",
    highlight4: "Multi-tenant shop grids"
  },
  "AI & Automation": {
    badge: "intelligent",
    highlight1: "Workflows, RPA, Smart APIs",
    lead1: "automation engineers we'll help you run serverless triggers, parsing pipelines, and automated reporting systems",
    highlight2: "Business Automation",
    lead2: "under one roof",
    highlight3: "automate your workflow",
    lead3: "at any automation stage—process mapping, database synchronizations, email auto-responders, or diagnostic alerts",
    highlight4: "Self-healing robotic engines"
  },
  "Security & Maintenance": {
    badge: "zero-trust",
    highlight1: "WAF, Malware, Pentests",
    lead1: "security analysts we'll help you trace threats, mask vulnerabilities, and patch critical framework issues",
    highlight2: "Security & Maintenance",
    lead2: "under one roof",
    highlight3: "harden your software",
    lead3: "at any maintenance stage—threat profiles, automated pen testing, firewall setups, or monthly security patches",
    highlight4: "Zero-breach software grids"
  }
};

const defaultHighlight = {
  badge: "certified",
  highlight1: "Azure, AWS, Microsoft",
  lead1: "partner we'll help you scale on demand, adopt new technologies, and solve complex technical issues",
  highlight2: "IT & Digital Services",
  lead2: "under one roof",
  highlight3: "pick up",
  lead3: "your project at any development stage—ideation, prototyping, architectural design, or cloud deployments",
  highlight4: "Enterprise digital systems"
};

const SolutionsContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneDropdownRef = useRef(null);

  // Extract navigation parameters or use premium default configurations
  const context = location.state || {};
  const activeSubName = context.subName || "IoT Development";
  const activeCategory = context.category || "AWS & DevOps";
  const activeColor = context.accentColor || "#C78932";

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: '',
    agree: false
  });

  const [phoneCountry, setPhoneCountry] = useState(countries[0]);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(event.target)) {
        setPhoneDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectCountry = (country) => {
    setPhoneCountry(country);
    setPhoneDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please acknowledge that you agree to the Privacy and Cookies Policy.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        message: '',
        agree: false
      });
    }, 4000);
  };

  // Resolve dynamic pitch highlights
  const pitch = categoryHighlights[activeCategory] || defaultHighlight;

  return (
    <div className="solutions-contact-page-wrapper">
      
      {/* VIBRANT TOP-ACCENT GRADIENT HERO BANNER */}
      <section className="solutions-contact-hero-banner">
        <div className="solutions-contact-hero-content">
          <h1 className="solutions-contact-hero-title">
            Interested in {activeSubName} Services? Let's Talk!
          </h1>
          <p className="solutions-contact-hero-subtitle">
            To learn more about how NSG IT can help you, contact us. We'd be happy to take on the challenge!
          </p>
        </div>
      </section>

      {/* TWO-COLUMN SPLIT GRID SECTION */}
      <div className="solutions-contact-main-grid">
        
        {/* LEFT COLUMN: PITCH PANEL (BLACK BACKGROUND) */}
        <div className="solutions-contact-left-pitch">
          <div className="pitch-content-container">
            
            {/* Pitch Block 1 */}
            <div className="pitch-block">
              <span className="pitch-small-eyebrow">As a {pitch.badge}</span>
              <h2 className="pitch-giant-highlight" style={{ color: activeColor }}>
                {pitch.highlight1}
              </h2>
              <p className="pitch-white-text">
                {pitch.lead1}
              </p>
            </div>

            <div className="pitch-divider"></div>

            {/* Pitch Block 2 */}
            <div className="pitch-block">
              <span className="pitch-small-eyebrow">We offer full-stack</span>
              <h2 className="pitch-giant-highlight" style={{ color: activeColor }}>
                {pitch.highlight2}
              </h2>
              <p className="pitch-white-text">
                {pitch.lead2}
              </p>
            </div>

            <div className="pitch-divider"></div>

            {/* Pitch Block 3 */}
            <div className="pitch-block">
              <span className="pitch-small-eyebrow">We're ready to</span>
              <h2 className="pitch-giant-highlight" style={{ color: activeColor }}>
                {pitch.highlight3}
              </h2>
              <p className="pitch-white-text">
                {pitch.lead3}
              </p>
            </div>

            <div className="pitch-divider"></div>

            {/* Pitch Block 4 */}
            <div className="pitch-block">
              <span className="pitch-small-eyebrow">We know how to develop high-load</span>
              <h2 className="pitch-giant-highlight" style={{ color: activeColor }}>
                {pitch.highlight4}
              </h2>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: FORM CARD (WHITE BACKGROUND) */}
        <div className="solutions-contact-right-form-container">
          <div className="form-card-wrapper">
            
            {submitted && (
              <div className="solutions-form-success-banner">
                <strong>Thank you for reaching out!</strong> Your details have been transmitted successfully. A solutions engineer will contact you shortly to discuss your custom project.
              </div>
            )}

            <form onSubmit={handleSubmit} className="solutions-contact-minimal-form">
              
              {/* First Name & Last Name (2 columns) */}
              <div className="form-row-2col">
                <div className="form-input-group">
                  <label className="minimal-label" htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="minimal-input"
                    placeholder=" "
                  />
                </div>

                <div className="form-input-group">
                  <label className="minimal-label" htmlFor="lastName">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="minimal-input"
                    placeholder=" "
                  />
                </div>
              </div>

              {/* Business Email & Phone (2 columns) */}
              <div className="form-row-2col">
                <div className="form-input-group">
                  <label className="minimal-label" htmlFor="email">Business Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="minimal-input"
                    placeholder=" "
                  />
                </div>

                <div className="form-input-group">
                  <label className="minimal-label">Phone Number</label>
                  <div className="custom-phone-selector-container">
                    
                    {/* Custom Phone Dropdown Selector */}
                    <div className="phone-country-trigger-box" ref={phoneCountry ? phoneDropdownRef : null}>
                      <button
                        type="button"
                        className="phone-dropdown-trigger-btn"
                        onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                      >
                        <span className="trigger-flag">{phoneCountry.flag}</span>
                        <span className="trigger-code">{phoneCountry.code}</span>
                        <span className="trigger-caret">▼</span>
                      </button>

                      {phoneDropdownOpen && (
                        <ul className="phone-dropdown-options-list">
                          {countries.map((c) => (
                            <li
                              key={c.code}
                              onClick={() => handleSelectCountry(c)}
                              className={`phone-dropdown-option-item ${phoneCountry.code === c.code ? 'active' : ''}`}
                            >
                              <span className="option-flag">{c.flag}</span>
                              <span className="option-name">{c.name}</span>
                              <span className="option-dial">{c.dial}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Numeric Input Field */}
                    <div className="phone-input-number-box">
                      <span className="dial-prefix-overlay">{phoneCountry.dial}</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="minimal-input phone-number-input-field"
                        placeholder=" "
                        style={{ paddingLeft: `${phoneCountry.dial.length * 9 + 18}px` }}
                      />
                    </div>

                  </div>
                </div>
              </div>

              {/* Country Selection */}
              <div className="form-input-group">
                <label className="minimal-label" htmlFor="country">Country*</label>
                <div className="custom-select-container">
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="minimal-select"
                  >
                    <option value="" disabled hidden>Please Select</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Singapore">Singapore</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="select-caret-icon">▼</span>
                </div>
              </div>

              {/* Company Name */}
              <div className="form-input-group">
                <label className="minimal-label" htmlFor="company">Company name*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="minimal-input"
                  placeholder=" "
                />
              </div>

              {/* Message Description */}
              <div className="form-input-group">
                <label className="minimal-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="minimal-textarea"
                  placeholder="Provide ALL project details for the best NSG IT response."
                ></textarea>
              </div>

              {/* Mock Google reCAPTCHA Badge */}
              <div className="mock-recaptcha-widget">
                <div className="recaptcha-left-sec">
                  <span className="recaptcha-blue-label">protected by reCAPTCHA</span>
                </div>
                <div className="recaptcha-right-sec">
                  <svg className="recaptcha-logo-icon" viewBox="0 0 24 24">
                    <path fill="#4A90E2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                  </svg>
                  <div className="recaptcha-refresh-icon">
                    <svg viewBox="0 0 24 24">
                      <path fill="#777" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Policy checkbox section */}
              <div className="solutions-policy-agreement-group">
                <label className="custom-checkbox-styled-label">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    checked={formData.agree}
                    onChange={handleChange}
                    className="custom-form-checkbox-input"
                  />
                  <span className="checkbox-text-body">
                    I agree to NSG IT <span className="policy-bold-link">Privacy and Cookies Policy</span>.
                  </span>
                </label>
              </div>

              {/* Solid Submit Action block */}
              <div className="solutions-submit-wrapper">
                <button
                  type="submit"
                  disabled={submitted}
                  className="solutions-form-submit-action-btn"
                >
                  SUBMIT
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

      {/* GLOBAL FOOTER */}
      <Footer />

    </div>
  );
};

export default SolutionsContact;
