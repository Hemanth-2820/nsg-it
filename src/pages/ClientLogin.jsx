import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MessageSquare, Star, ArrowRight, ShieldCheck, Heart, LogOut, CheckCircle, Briefcase, Building } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './ClientLogin.css';

const categories = [
  "Web Development",
  "App Development",
  "Software Development",
  "AWS & DevOps",
  "Hosting & Server Management",
  "Digital Marketing",
  "AI & RAG Chatbots",
  "IVR Solutions",
  "API Integrations",
  "E-Commerce Solutions",
  "AI & Automation",
  "Security & Maintenance"
];

const ClientLogin = () => {
  const navigate = useNavigate();
  
  // Navigation states: 'login', 'review', 'success'
  const [step, setStep] = useState('login');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Review form states
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [headline, setHeadline] = useState('');
  const [experience, setExperience] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid business email address.');
      return;
    }

    setIsLoggingIn(true);
    
    // Premium authenticating loader delay
    setTimeout(() => {
      setIsLoggingIn(false);
      setStep('review');
    }, 2000);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a star rating to describe your experience.");
      return;
    }

    setIsSubmitting(true);

    // Premium submitting delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 2000);
  };

  const handleLogout = () => {
    setStep('login');
    setEmail('');
    setRating(0);
    setHeadline('');
    setExperience('');
    setCompany('');
    setRole('');
  };

  const renderRatingText = (val) => {
    switch (val) {
      case 1: return "Needs Improvement";
      case 2: return "Satisfactory";
      case 3: return "Good Services";
      case 4: return "Excellent Quality";
      case 5: return "Outstanding Deliverables!";
      default: return "Select your overall rating";
    }
  };

  return (
    <div className="client-portal-wrapper">
      <div className="portal-space-backdrop">
        <div className="glow-orb orb-indigo"></div>
        <div className="glow-orb orb-violet"></div>
      </div>

      <div className="client-portal-container">
        
        {/* ==================== STATE A: EMAIL LOGIN ==================== */}
        {step === 'login' && (
          <div className="portal-login-card">
            <div className="card-brand-header">
              <div className="logo-hex-frame">
                <img src={logo} alt="NSG IT Logo" className="portal-brand-logo" />
              </div>
              <h2 className="portal-card-title">Client Login Terminal</h2>
              <p className="portal-card-subtitle">
                Authenticate with your email to access the interactive project feedback terminal.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="portal-auth-form">
              <div className="portal-input-group">
                <label className="portal-input-label" htmlFor="clientEmail">
                  Business Email Address
                </label>
                <div className="portal-input-box">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    id="clientEmail"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="name@company.com"
                    required
                    className={`portal-text-input ${emailError ? 'has-error' : ''}`}
                    disabled={isLoggingIn}
                  />
                </div>
                {emailError && <span className="error-text-span">{emailError}</span>}
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="portal-action-btn submit-auth-btn"
              >
                {isLoggingIn ? (
                  <span className="btn-loading-flex">
                    <span className="spinner-loader"></span>
                    Authenticating...
                  </span>
                ) : (
                  <span className="btn-text-flex">
                    Access Portal <ArrowRight size={16} />
                  </span>
                )}
              </button>
            </form>

            <div className="portal-security-footer">
              <ShieldCheck className="shield-icon" size={14} />
              <span>Secure single-sign-on authenticated node.</span>
            </div>
          </div>
        )}

        {/* ==================== STATE B: FEEDBACK REVIEW FORM ==================== */}
        {step === 'review' && (
          <div className="portal-review-card">
            
            <div className="review-card-header">
              <div className="header-meta-row">
                <span className="meta-badge-auth">
                  <ShieldCheck size={13} className="meta-icon" /> Authenticated Session
                </span>
                <button className="portal-logout-action-btn" onClick={handleLogout}>
                  <LogOut size={13} /> Sign Out
                </button>
              </div>
              <h2 className="portal-review-title">Project Review Terminal</h2>
              <p className="portal-review-subtitle">
                Welcome, <strong className="client-email-highlight">{email}</strong>. Please share your project experience to help us continuously optimize our engineering quality.
              </p>
            </div>

            <form onSubmit={handleReviewSubmit} className="portal-feedback-form">
              
              {/* Category Pills Grid */}
              <div className="feedback-form-group">
                <label className="portal-field-label">Service Category Reviewed</label>
                <p className="portal-field-desc">Select the primary service model utilized during your development lifecycle.</p>
                <div className="categories-pills-flow">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`service-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Star Ratings Block */}
              <div className="feedback-form-group">
                <label className="portal-field-label">Overall Engineering Quality Rating</label>
                <div className="interactive-star-ratings-box">
                  <div className="star-nodes-row">
                    {[1, 2, 3, 4, 5].map((index) => {
                      const isActive = index <= (hoverRating || rating);
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setRating(index)}
                          onMouseEnter={() => setHoverRating(index)}
                          onMouseLeave={() => setHoverRating(0)}
                          className={`star-node-btn ${isActive ? 'active' : ''}`}
                        >
                          <Star size={32} className="rating-star-icon" fill={isActive ? "#FFD700" : "none"} />
                        </button>
                      );
                    })}
                  </div>
                  <span className="star-rating-descriptor">
                    {renderRatingText(hoverRating || rating)}
                  </span>
                </div>
              </div>

              {/* Review Headline & Description */}
              <div className="feedback-form-group">
                <label className="portal-field-label" htmlFor="reviewHeadline">
                  Review Headline*
                </label>
                <input
                  type="text"
                  id="reviewHeadline"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="e.g. Robust high-performance solution, highly recommend!"
                  required
                  className="portal-form-text-input"
                />
              </div>

              <div className="feedback-form-group">
                <label className="portal-field-label" htmlFor="reviewExperience">
                  Detailed Experience & Comments*
                </label>
                <textarea
                  id="reviewExperience"
                  rows="4"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Share details about the development execution, communication reliability, and final deliverable quality..."
                  required
                  className="portal-form-textarea-input"
                ></textarea>
              </div>

              {/* Corporate Identity Profile */}
              <div className="form-row-2col-flow">
                <div className="feedback-form-group">
                  <label className="portal-field-label" htmlFor="clientCompany">
                    Company Name*
                  </label>
                  <div className="portal-form-input-container">
                    <Building className="form-input-box-icon" size={16} />
                    <input
                      type="text"
                      id="clientCompany"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Corp"
                      required
                      className="portal-form-profile-input"
                    />
                  </div>
                </div>

                <div className="feedback-form-group">
                  <label className="portal-field-label" htmlFor="clientRole">
                    Your Corporate Role / Title
                  </label>
                  <div className="portal-form-input-container">
                    <Briefcase className="form-input-box-icon" size={16} />
                    <input
                      type="text"
                      id="clientRole"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Chief Product Officer"
                      className="portal-form-profile-input"
                    />
                  </div>
                </div>
              </div>

              {/* Consents and Toggles */}
              <div className="feedback-form-group">
                <label className="styled-checkbox-consent-label">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="styled-consent-checkbox"
                  />
                  <span className="checkbox-consent-body">
                    I authorize NSG IT to index this feedback inside the public corporate case studies portal.
                  </span>
                </label>
              </div>

              {/* Submit Feedback action */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="portal-action-btn submit-feedback-btn"
              >
                {isSubmitting ? (
                  <span className="btn-loading-flex">
                    <span className="spinner-loader"></span>
                    Transmitting Review...
                  </span>
                ) : (
                  <span className="btn-text-flex">
                    Transmit Project Review <CheckCircle size={16} />
                  </span>
                )}
              </button>

            </form>
          </div>
        )}

        {/* ==================== STATE C: SUCCESS PANEL ==================== */}
        {step === 'success' && (
          <div className="portal-success-card">
            <div className="success-particles-container">
              <CheckCircle className="success-badge-glowing-icon" size={80} />
            </div>

            <h2 className="success-card-title">Review Transmitted Successfully</h2>
            <p className="success-card-lead">
              Thank you! Your feedback has been securely ingested into the NSG IT quality assurance engine. Your insights assist our development leads in maintaining high-performance engineering SLAs.
            </p>

            <div className="submitted-summary-card">
              <h4 className="summary-section-title">Ingested Ledger Details</h4>
              <div className="ledger-details-grid">
                <div className="ledger-row"><span className="lbl">Client Email:</span> <span className="val">{email}</span></div>
                <div className="ledger-row"><span className="lbl">Verified Domain:</span> <span className="val">{email.split('@')[1]}</span></div>
                <div className="ledger-row"><span className="lbl">Model category:</span> <span className="val">{selectedCategory}</span></div>
                <div className="ledger-row">
                  <span className="lbl">Assessed Quality:</span> 
                  <span className="val stars-glowing-row">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={13} fill="#FFD700" color="#FFD700" style={{ marginRight: '2px' }} />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="success-actions-block">
              <button className="success-primary-btn" onClick={() => navigate('/')}>
                Return to Home Screen
              </button>
              <button className="success-secondary-btn" onClick={handleLogout}>
                Authenticating Terminal Exit (Sign Out)
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ClientLogin;
