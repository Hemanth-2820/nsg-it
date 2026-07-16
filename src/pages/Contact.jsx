import React, { useState } from 'react';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryType: 'Alumni',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    agree: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please acknowledge that you have read and understood the terms stated in the NSG IT online privacy statement.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        inquiryType: 'Alumni',
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        phone: '',
        company: '',
        role: '',
        message: '',
        agree: false
      });
    }, 4000);
  };

  return (
    <div className="kpmg-contact-page">
      <div className="kpmg-contact-container">
        
        {/* Page Title & Context Header */}
        <div className="kpmg-contact-header">
          <h1 className="kpmg-title">Contact</h1>
          <p className="kpmg-subtitle">
            Get in touch with one of our professionals, specialist groups or NSG Solutions in India offices.
            Mandatory fields are marked with an asterisk (*).
          </p>
        </div>

        {/* Success Alert Banner */}
        {submitted && (
          <div className="kpmg-alert-success">
            <div className="alert-content">
              <strong>Thank you for contacting us!</strong> Your inquiry has been submitted successfully. Our specialists will get back to you shortly.
            </div>
          </div>
        )}

        <div className="kpmg-contact-grid">
          {/* LEFT: FORM COLUMN */}
          <div className="kpmg-form-column">
            <form onSubmit={handleSubmit} className="kpmg-contact-form">
              
              {/* Inquiry Type (Dropdown) */}
              <div className="kpmg-form-group">
                <label className="kpmg-label" htmlFor="inquiryType">
                  Inquiry type <span className="asterisk">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="kpmg-select"
                  >
                    <option value="Alumni">Alumni</option>
                    <option value="Client Services">Client Services</option>
                    <option value="RFP / Proposal">RFP / Proposal</option>
                    <option value="Careers / Jobs">Careers / Jobs</option>
                    <option value="Media Enquiries">Media Enquiries</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* First Name & Last Name (2 columns on desktop) */}
              <div className="kpmg-form-row">
                <div className="kpmg-form-group">
                  <label className="kpmg-label" htmlFor="firstName">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="kpmg-input"
                  />
                </div>
                
                <div className="kpmg-form-group">
                  <label className="kpmg-label" htmlFor="lastName">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="kpmg-input"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="kpmg-form-group">
                <label className="kpmg-label" htmlFor="email">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="kpmg-input"
                />
              </div>

              {/* City */}
              <div className="kpmg-form-group">
                <label className="kpmg-label" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="kpmg-input"
                />
              </div>

              {/* Phone */}
              <div className="kpmg-form-group">
                <label className="kpmg-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="kpmg-input"
                />
              </div>

              {/* Company / Organisation */}
              <div className="kpmg-form-group">
                <label className="kpmg-label" htmlFor="company">
                  Company / Organisation <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="kpmg-input"
                />
              </div>

              {/* Role or job title */}
              <div className="kpmg-form-group">
                <label className="kpmg-label" htmlFor="role">
                  Role or job title
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="kpmg-input"
                />
              </div>

              {/* Message (Text area with character limit and counter) */}
              <div className="kpmg-form-group relative-position">
                <div className="kpmg-message-header">
                  <label className="kpmg-label" htmlFor="message">
                    Message <span className="asterisk">*</span>
                  </label>
                  <span className="character-counter">
                    {formData.message.length}/2500
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2500}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=""
                  className="kpmg-textarea"
                ></textarea>
              </div>

              {/* Privacy statement checkbox */}
              <div className="kpmg-checkbox-group">
                <label className="kpmg-checkbox-label">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    checked={formData.agree}
                    onChange={handleChange}
                    className="kpmg-checkbox"
                  />
                  <span className="checkbox-text">
                    I acknowledge that I have read and understood the terms stated in the{' '}
                    <a href="#privacy" className="kpmg-privacy-link">
                      NSG IT online privacy statement
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="kpmg-submit-wrapper">
                <button
                  type="submit"
                  disabled={submitted}
                  className="kpmg-submit-btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: LOCATION & GOOGLE MAPS COLUMN */}
          <div className="kpmg-location-column">
            <div className="kpmg-location-card">
              <h3 className="location-card-title">Bangalore Office</h3>
              <p className="location-address">
                <strong>NSG Solutions Private Limited</strong><br />
                HSR Layout, Sector 6, Outer Ring Road,<br />
                Bangalore, Karnataka 560102, India
              </p>
              <div className="location-contact-info">
                <p><strong>Email:</strong> info@nsgsolutions.in</p>
                <p><strong>Phone:</strong> +91 7349525471, +91 9676003000</p>
                <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM IST</p>
              </div>
              
              {/* Google Map Iframe Container */}
              <div className="google-map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.244799015096!2d77.62562413554483!3d12.919830501861783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14902da7d4f9%3A0xb891823eb54fa5a3!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716382103492!5m2!1sen!2sin" 
                  width="100%" 
                  height="320" 
                  style={{ border: 0, borderRadius: '4px', display: 'block' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NSG IT HSR Layout Bangalore Office"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default Contact;
