import React, { useState } from 'react';
import Footer from '../components/Footer';
import careerHeroBanner from '../assets/career_hero_banner.png';
import './Career.css';

const Career = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showJobList, setShowJobList] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobDetail, setShowJobDetail] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // ── Application Form States ──
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [activeFormStep, setActiveFormStep] = useState('contact'); // active step ID
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  // Contact info
  const [formTitle, setFormTitle] = useState('Mr.');
  const [formLastName, setFormLastName] = useState('');
  const [formFirstName, setFormFirstName] = useState('');
  const [formMiddleName, setFormMiddleName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCountryCode, setFormCountryCode] = useState('+91');

  // Documents
  const [resumeFile, setResumeFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [formLinks, setFormLinks] = useState(['']);

  // Dynamic Lists
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);
  const [nationalIdList, setNationalIdList] = useState([]);

  // Auth questions & new fields
  const [workAuth, setWorkAuth] = useState('Yes');
  const [visaSponsor, setVisaSponsor] = useState('No');
  const [hasRelativesHexaware, setHasRelativesHexaware] = useState('No');
  const [previouslyWorkedHexaware, setPreviouslyWorkedHexaware] = useState('No');
  const [isVisaDependent, setIsVisaDependent] = useState('No');
  const [educationLevel, setEducationLevel] = useState('Graduate');
  const [specialization, setSpecialization] = useState('');
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

  // Candidate Registration Info new fields
  const [currentOrganization, setCurrentOrganization] = useState('');
  const [totalExperienceYears, setTotalExperienceYears] = useState('');
  const [relevantExperienceYears, setRelevantExperienceYears] = useState('');
  const [noticePeriodDays, setNoticePeriodDays] = useState('');
  const [isImmediatelyAvailable, setIsImmediatelyAvailable] = useState('No');

  // Candidate Availability Info new fields
  const [joinDay, setJoinDay] = useState('1');
  const [joinMonth, setJoinMonth] = useState('January');
  const [joinYear, setJoinYear] = useState('2026');

  // Diversity Info new fields
  const [diversityGender, setDiversityGender] = useState('Decline to Self-Identify');
  const [agreeJobUpdates, setAgreeJobUpdates] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  // E-Signature
  const [signature, setSignature] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);

  // Sub-modal states for adding items
  const [showAddEducationModal, setShowAddEducationModal] = useState(false);
  const [showAddExperienceModal, setShowAddExperienceModal] = useState(false);
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [showAddLanguageModal, setShowAddLanguageModal] = useState(false);
  const [showAddNationalIdModal, setShowAddNationalIdModal] = useState(false);

  // Temp form states for sub-modals
  const [tempEdSchool, setTempEdSchool] = useState('');
  const [tempEdDegree, setTempEdDegree] = useState('');
  const [tempEdField, setTempEdField] = useState('');
  const [tempEdYear, setTempEdYear] = useState('');

  const [tempExpCompany, setTempExpCompany] = useState('');
  const [tempExpRole, setTempExpRole] = useState('');
  const [tempExpStart, setTempExpStart] = useState('');
  const [tempExpEnd, setTempExpEnd] = useState('');
  const [tempExpDesc, setTempExpDesc] = useState('');

  const [tempSkillName, setTempSkillName] = useState('');
  const [tempLangName, setTempLangName] = useState('');
  const [tempLangProficiency, setTempLangProficiency] = useState('Professional working proficiency');

  const [tempIdType, setTempIdType] = useState('PAN Card');
  const [tempIdNumber, setTempIdNumber] = useState('');

  const formSteps = [
    { id: 'contact', label: 'CONTACT INFORMATION' },
    { id: 'documents', label: 'SUPPORTING DOCUMENTS AND URLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'languages', label: 'LANGUAGES' },
    { id: 'national', label: 'NATIONAL IDENTIFIER' },
    { id: 'authorization', label: 'EDUCATION AND WORK AUTHORIZATION' },
    { id: 'registration', label: 'CANDIDATE REGISTRATION INFO' },
    { id: 'availability', label: 'CANDIDATE AVAILABILITY INFO' },
    { id: 'diversity', label: 'DIVERSITY INFORMATION' },
    { id: 'esignature', label: 'E-SIGNATURE' }
  ];

  const jobsData = [
    {
      id: "620013",
      title: "BPM Technical Architect",
      location: "India",
      date: "21/05/2026",
      postingTime: "21/05/2026, 04:37 pm",
      applyBefore: "30/06/2026, 05:30 am",
      lane: "Lane 3",
      firstApply: false,
      skills: ["Appian", "IBM BPM", "Mendix", "Outsystems - Forge Developer", "Pega business process management"],
      description: "Shortlisted candidate : ISAAC F TSR Role · BPM Technical Architect Responsibilities 7+ years of experience in Appian with overall 9+ years of Industry experience Lead the build, test, and delivery of intelligent automation solutions using industry leading vendor technologies Collaborate with diverse onshore / offshore teammates on the software development process and agile methodologies Strong understanding of Appian Objects such as Records, Reports, Tasks, News, Sites, Actions, Expression Rules, Constants, Query Rules, Web API, Interface Rules, CDTs, Process Models. Constants, Decisions, Integrations, Connected Systems, Data Stores, Groups, Feeds etc. Have worked on one or more end to end Appian BPM implementation (Design/Develop/Deploy/Package) Sound Knowledge of Appian Process/Solution and Infrastructure Architecture (Infrastructure Architecture must support the operations of the engagement team and management while performing as an integral technical leader)."
    },
    {
      id: "620145",
      title: "Capital Market Workforce Team Member-BPS",
      location: "India",
      date: "21/05/2026",
      postingTime: "21/05/2026, 02:15 pm",
      applyBefore: "28/06/2026, 11:59 pm",
      lane: "Lane 1",
      firstApply: true,
      skills: ["Capital Markets", "BPS", "Investment Banking", "Operations Support", "Equity Settlement"],
      description: "Join our growing BPS Capital Markets division as a Workforce Team Member. In this role, you will be responsible for supporting trade settlements, reconciliation, and post-trade operations for global investment banks. Key Responsibilities include monitoring queue progress, resolving trade discrepancies, ensuring compliance with global financial regulations, and communicating with global counter-parties to resolve failed trades. Requirements: 2-5 years of experience in BPS/KPO operations, strong understanding of financial instruments, exceptional attention to detail, and ability to work in rotating shifts to support global market hours."
    },
    {
      id: "620098",
      title: "Digital CRM Developer",
      location: "India",
      date: "21/05/2026",
      postingTime: "21/05/2026, 11:00 am",
      applyBefore: "15/07/2026, 05:30 am",
      lane: "Lane 2",
      firstApply: false,
      skills: ["Salesforce", "Apex", "LWC", "CRM Strategy", "API Integrations"],
      description: "We are seeking a talented Digital CRM Developer to design, configure, and develop solutions on our enterprise Salesforce platform. You will translate business requirements into highly scalable CRM flows, develop custom triggers, build interactive Lightning Web Components (LWC), and integrate CRM systems with core APIs and databases. Requirements: 4+ years of hands-on Salesforce development, Salesforce Platform Developer I/II certifications, expert level Apex & JavaScript skills, and a strong passion for streamlining customer relationship workflows."
    },
    {
      id: "619854",
      title: "Frontend Engineer - React/TypeScript",
      location: "India",
      date: "20/05/2026",
      postingTime: "20/05/2026, 09:30 am",
      applyBefore: "30/06/2026, 06:00 pm",
      lane: "Lane 4",
      firstApply: true,
      skills: ["React", "TypeScript", "Redux Toolkit", "Modern CSS/SASS", "UI/UX Design Systems"],
      description: "We are looking for a Frontend Engineer with a sharp eye for visual design and deep expertise in React and TypeScript. You will own the front-end features of our customer-facing web applications, crafting beautiful, responsive, accessible, and performant user interfaces. Responsibilities: Collaborate with UI/UX designers to translate Figma mockups into pixel-perfect code, write reusable component libraries, manage complex state transitions using Redux or Context API, and optimize application bundle sizes. Requirements: 3-6 years of experience, expert skills in CSS Flexbox/Grid, semantic HTML, and modern Git workflows."
    },
    {
      id: "619712",
      title: "Cloud DevOps Architect",
      location: "India",
      date: "19/05/2026",
      postingTime: "19/05/2026, 03:45 pm",
      applyBefore: "25/06/2026, 12:00 am",
      lane: "Lane 3",
      firstApply: false,
      skills: ["AWS", "Kubernetes (EKS)", "Terraform", "CI/CD Pipelines", "Docker", "Python/Bash"],
      description: "As a Cloud DevOps Architect, you will spearhead the design and optimization of our cloud infrastructure and automated deployment pipelines. You will lead cloud migration efforts, implement Infrastructure-as-Code (IaC) architectures, scale containerized microservices, and guarantee robust security practices across multi-region AWS environments. Requirements: 8+ years of IT experience with 5+ years focused on DevOps, expert knowledge of Terraform and Kubernetes, experience setting up CI/CD via GitHub Actions or GitLab, and AWS Solution Architect Professional certification."
    }
  ];

  return (
    <div className="career-page">

      {!showJobDetail && !showApplicationForm && (
        <>
          {/* ── Top Action Bar ── */}
          <div className="career-top-bar">
            <button className="career-user-icon-btn" title="Sign In">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="career-user-svg">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="0" fill="currentColor" opacity="0.55"/>
              </svg>
            </button>
          </div>

          {/* ── Hero Banner ── */}
          <div className="career-hero">
            <img src={careerHeroBanner} alt="Find Your Dream Job at NSG Solutions" className="career-hero-image" />
            <div className="career-hero-overlay" />
            <div className="career-hero-text">
              <h1 className="career-hero-title">Find Your Dream Job Here</h1>
            </div>
          </div>

          {/* ── Job Search Bar ── */}
          <div className="career-search-wrapper">
            <div className="career-search-box">
              <div className="career-search-field">
                <span className="career-search-label">FIND JOBS</span>
                <input
                  type="text"
                  className="career-search-input"
                  placeholder="Job title, keyword..."
                  value={jobQuery}
                  onChange={e => setJobQuery(e.target.value)}
                />
              </div>
              <div className="career-search-divider" />
              <div className="career-search-field">
                <span className="career-search-label">
                  NEAR LOCATION
                  <svg className="career-dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                </span>
                <input
                  type="text"
                  className="career-search-input"
                  placeholder="City, state, country"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>
              <button className="career-search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Job Filter Tabs ── */}
          <div className="career-tabs-wrapper">
            <button
              className={`career-tab${activeTab === 'all' ? ' career-tab--active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Jobs <span className="career-tab-count">(302)</span>
            </button>
            <button
              className={`career-tab${activeTab === 'new' ? ' career-tab--active' : ''}`}
              onClick={() => setActiveTab('new')}
            >
              New Jobs <span className="career-tab-count">(150)</span>
            </button>
          </div>

          {/* ── View Jobs CTA Button ── */}
          {!showJobList && (
            <div className="career-view-jobs-container">
              <button className="career-view-jobs-btn" onClick={() => setShowJobList(true)}>
                View Jobs
              </button>
            </div>
          )}

          {/* ── Job List Section (Matches reference exactly) ── */}
          {showJobList && (
            <div className="career-jobs-list-section">
              {/* Header metadata bar */}
              <div className="jobs-list-meta-bar">
                <div className="jobs-list-meta-left">
                  <span className="open-jobs-count">303 OPEN JOBS</span>
                  <button className="jobs-filter-dropdown-btn">
                    LOCATIONS 
                    <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                  </button>
                  <button className="jobs-filter-dropdown-btn">
                    POSTING DATES
                    <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                  </button>
                </div>
                
                <div className="jobs-list-meta-right">
                  <span className="jobs-sort-label">
                    Posting Date 
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '14px', height: '14px'}}><path d="M7 15l5 5 5-5M7 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div className="layout-selector-group">
                    <button className="layout-btn active" title="List View">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}><rect x="3" y="3" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="17" width="18" height="4" rx="1"/></svg>
                    </button>
                    <button className="layout-btn" title="Map View">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Actual Job Cards */}
              <div className="jobs-cards-container">
                {jobsData.map((job, idx) => (
                  <div 
                    key={idx} 
                    className="job-item-card"
                    onClick={() => {
                      setSelectedJob(job);
                      setShowProfileModal(true);
                    }}
                  >
                    <div className="job-card-main">
                      <h3 className="job-card-title">{job.title}</h3>
                      <div className="job-card-info-row">
                        <span className="job-card-location">{job.location}</span>
                        <span className="job-card-dot">•</span>
                        <span className="job-card-date-label">POSTING DATE</span>
                        <span className="job-card-date">{job.date}</span>
                        {job.firstApply && (
                          <>
                            <span className="job-card-dot">•</span>
                            <span className="job-card-first-apply">
                              <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '13px', height: '13px', display: 'inline-block', marginRight: '4px'}}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                              BE THE FIRST TO APPLY
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="job-card-actions">
                      <button className="job-card-star-btn" onClick={(e) => { e.stopPropagation(); }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px'}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </button>
                      <svg className="job-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Job Detail View (Triggered after modal email NEXT click) ── */}
      {showJobDetail && !showApplicationForm && selectedJob && (
        <div className="job-detail-container">
          <div className="job-detail-top-bar">
            <button className="job-detail-action-btn" title="Share Job">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px'}}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
            <button 
              className={`job-detail-action-btn job-detail-star-btn${isFavorite ? ' active' : ''}`} 
              onClick={() => setIsFavorite(!isFavorite)}
              title="Add to Favorites"
            >
              <svg viewBox="0 0 24 24" fill={isFavorite ? '#f59e0b' : 'none'} stroke={isFavorite ? '#f59e0b' : 'currentColor'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px'}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </button>
            <button className="job-detail-action-btn job-detail-close-btn" onClick={() => setShowJobDetail(false)} title="Close Details">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '24px', height: '24px'}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="job-detail-header">
            <h1 className="job-detail-main-title">{selectedJob.title}</h1>
            <p className="job-detail-sub-title">{selectedJob.location}</p>
          </div>

          <div className="job-detail-divider" />

          <div className="job-detail-section">
            <h2 className="job-detail-section-title">JOB DESCRIPTION</h2>
            <p className="job-detail-description-text">{selectedJob.description}</p>
          </div>

          <div className="job-detail-section">
            <h2 className="job-detail-section-title">REQUIRED SKILLS</h2>
            <div className="job-detail-skills-list">
              {selectedJob.skills.map((skill, sIdx) => (
                <span key={sIdx} className="job-detail-skill-badge">{skill}</span>
              ))}
            </div>
          </div>

          <div className="job-detail-apply-btn-wrapper">
            <button className="job-detail-apply-now-btn" onClick={() => setShowApplicationForm(true)}>
              APPLY NOW
            </button>
          </div>

          <div className="job-detail-section">
            <h2 className="job-detail-section-title font-semibold">JOB INFO</h2>
            <div className="job-info-list">
              <div className="job-info-row">
                <span className="job-info-key">Job Identification</span>
                <span className="job-info-value">{selectedJob.id}</span>
              </div>
              <div className="job-info-row">
                <span className="job-info-key">Posting Date</span>
                <span className="job-info-value">{selectedJob.postingTime}</span>
              </div>
              <div className="job-info-row">
                <span className="job-info-key">Apply Before</span>
                <span className="job-info-value">{selectedJob.applyBefore}</span>
              </div>
              <div className="job-info-row">
                <span className="job-info-key">Locations</span>
                <span className="job-info-value">
                  <svg className="map-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '14px', height: '14px', marginRight: '6px', color: '#64748b'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {selectedJob.location}
                </span>
              </div>
              <div className="job-info-row">
                <span className="job-info-key">Lane of Recruitment</span>
                <span className="job-info-value">{selectedJob.lane}</span>
              </div>
            </div>
          </div>

          <div className="job-detail-map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14968361.353326162!2d71.38910178499252!3d23.973956166948574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Job Location Map"
            />
          </div>
        </div>
      )}

      {/* ── Job Application Form ── */}
      {showApplicationForm && selectedJob && (
        <div className="app-form-container">
          {/* Form Header */}
          <div className="app-form-header">
            <button className="app-form-back-btn" onClick={() => {
              if (showSuccessScreen) {
                setShowSuccessScreen(false);
                setShowApplicationForm(false);
                setShowJobDetail(false);
              } else {
                setShowApplicationForm(false);
              }
            }} title="Go Back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '22px', height: '22px'}}><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <span className="app-form-job-title">{selectedJob.title} ...</span>
          </div>

          {!showSuccessScreen ? (
            <div className="app-form-body-wrapper">
              
              {/* Form Content Column */}
              <div className="app-form-content-column">
                
                {/* CONTACT INFORMATION */}
                {activeFormStep === 'contact' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Contact Information</h2>
                    <p className="form-section-subtitle">Please enter your contact information.</p>

                    <div className="form-grid-layout">
                      <div className="form-group-item">
                        <label className="form-field-label">Last Name <span className="required-star">*</span></label>
                        <input 
                          type="text" 
                          className="form-text-field" 
                          placeholder="Enter your last name" 
                          value={formLastName}
                          onChange={e => setFormLastName(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item">
                        <label className="form-field-label">First Name</label>
                        <input 
                          type="text" 
                          className="form-text-field" 
                          placeholder="Enter your first name" 
                          value={formFirstName}
                          onChange={e => setFormFirstName(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item full-width">
                        <label className="form-field-label">Title</label>
                        <div className="title-pills-row">
                          {['Doctor', 'Mr.', 'Mrs.', 'Ms.'].map(t => (
                            <button 
                              key={t}
                              type="button" 
                              className={`title-pill-btn${formTitle === t ? ' active' : ''}`}
                              onClick={() => setFormTitle(t)}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group-item">
                        <label className="form-field-label">Middle Name</label>
                        <input 
                          type="text" 
                          className="form-text-field" 
                          placeholder="Enter middle name" 
                          value={formMiddleName}
                          onChange={e => setFormMiddleName(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item">
                        <label className="form-field-label">Email Address</label>
                        <div className="email-input-wrapper">
                          <input 
                            type="text" 
                            className="form-text-field read-only" 
                            value="hemanthsilla555@gmail.com" 
                            readOnly 
                          />
                          <button className="email-edit-circle" type="button" onClick={() => alert('Email editing is secured for this session.')}>
                            <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '14px', height: '14px', color: '#ffffff'}}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                          </button>
                        </div>
                      </div>

                      <div className="form-group-item full-width phone-layout-group">
                        <label className="form-field-label">Phone Number <span className="required-star">*</span></label>
                        <div className="phone-fields-wrapper">
                          <div className="phone-code-select">
                            <span className="phone-code-label">Country code</span>
                            <div className="phone-code-inner">
                              <span className="code-val">{formCountryCode}</span>
                              <span className="code-close" onClick={() => setFormCountryCode('')}>✕</span>
                              <span className="code-arrow">▼</span>
                            </div>
                          </div>
                          <input 
                            type="text" 
                            className="form-text-field phone-num-input" 
                            placeholder="Enter phone number" 
                            value={formPhone}
                            onChange={e => setFormPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SUPPORTING DOCUMENTS AND URLS */}
                {activeFormStep === 'documents' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Supporting Documents and URLs</h2>
                    <p className="form-section-subtitle">Please add any additional documents or URLs.</p>

                    <div className="dropzones-side-by-side">
                      <div className="file-upload-dropzone" onClick={() => setResumeFile({ name: 'Resume_Hemanth_Silla.pdf' })}>
                        <div className="cloud-up-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '42px', height: '42px', color: '#a1a8c0'}}><path d="M12 16V8M12 8L9 11M12 8L15 11" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        {resumeFile ? (
                          <div className="uploaded-file-container">
                            <span className="uploaded-file-name">{resumeFile.name}</span>
                            <span className="uploaded-badge">✓ READY TO UPLOAD</span>
                          </div>
                        ) : (
                          <>
                            <p className="dropzone-header-txt">Drop Resume Here <span className="required-star">*</span></p>
                            <span className="dropzone-middle-or">or</span>
                            <span className="upload-link-text">Upload Resume</span>
                          </>
                        )}
                      </div>

                      <div className="file-upload-dropzone" onClick={() => setCoverFile({ name: 'Cover_Letter_Hemanth.pdf' })}>
                        <div className="cloud-up-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '42px', height: '42px', color: '#a1a8c0'}}><path d="M12 16V8M12 8L9 11M12 8L15 11" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        {coverFile ? (
                          <div className="uploaded-file-container">
                            <span className="uploaded-file-name">{coverFile.name}</span>
                            <span className="uploaded-badge">✓ READY TO UPLOAD</span>
                          </div>
                        ) : (
                          <>
                            <p className="dropzone-header-txt">Drop Cover Letter Here</p>
                            <span className="dropzone-middle-or">or</span>
                            <span className="upload-link-text">Upload Cover Letter</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="urls-links-section">
                      {formLinks.map((link, idx) => (
                        <div key={idx} className="link-input-item">
                          <label className="form-field-label">Link {idx + 1}</label>
                          <input 
                            type="text" 
                            className="form-text-field" 
                            placeholder="https://github.com/hemanth"
                            value={link}
                            onChange={e => {
                              const nextLinks = [...formLinks];
                              nextLinks[idx] = e.target.value;
                              setFormLinks(nextLinks);
                            }}
                          />
                        </div>
                      ))}
                      <button 
                        type="button" 
                        className="add-another-url-btn"
                        onClick={() => setFormLinks([...formLinks, ''])}
                      >
                        + Add Another Link
                      </button>
                    </div>
                  </div>
                )}

                {/* EDUCATION */}
                {activeFormStep === 'education' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Education <span className="required-star">*</span></h2>
                    <p className="form-section-subtitle">Please provide details about your education.</p>

                    <div className="added-items-list">
                      {educationList.length > 0 ? (
                        educationList.map((edu, idx) => (
                          <div key={idx} className="added-item-row-card">
                            <div className="added-item-details">
                              <h4 className="item-title-name">{edu.degree} in {edu.field}</h4>
                              <p className="item-subtitle-meta">{edu.school} • Class of {edu.year}</p>
                            </div>
                            <button className="item-delete-btn" type="button" onClick={() => setEducationList(educationList.filter((_, i) => i !== idx))}>
                              ✕ Remove
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="empty-items-placeholder">No education records added yet.</div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="add-item-trigger-magenta-btn"
                      onClick={() => setShowAddEducationModal(true)}
                    >
                      ADD EDUCATION
                    </button>
                  </div>
                )}

                {/* EXPERIENCE */}
                {activeFormStep === 'experience' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Experience <span className="required-star">*</span></h2>
                    <p className="form-section-subtitle">Please provide details about your work experience.</p>

                    <div className="added-items-list">
                      {experienceList.length > 0 ? (
                        experienceList.map((exp, idx) => (
                          <div key={idx} className="added-item-row-card">
                            <div className="added-item-details">
                              <h4 className="item-title-name">{exp.role} at {exp.company}</h4>
                              <p className="item-subtitle-meta">{exp.start} - {exp.end}</p>
                              {exp.desc && <p className="item-desc-text">{exp.desc}</p>}
                            </div>
                            <button className="item-delete-btn" type="button" onClick={() => setExperienceList(experienceList.filter((_, i) => i !== idx))}>
                              ✕ Remove
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="empty-items-placeholder">No professional experience added yet.</div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="add-item-trigger-magenta-btn"
                      onClick={() => setShowAddExperienceModal(true)}
                    >
                      ADD EXPERIENCE
                    </button>
                  </div>
                )}

                {/* SKILLS */}
                {activeFormStep === 'skills' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Skills <span className="required-star">*</span></h2>
                    <p className="form-section-subtitle">Add your skills.</p>

                    <div className="added-pills-container">
                      {skillsList.length > 0 ? (
                        skillsList.map((sk, idx) => (
                          <span key={idx} className="skill-pill-tag">
                            {sk}
                            <span className="pill-remove-cross" onClick={() => setSkillsList(skillsList.filter((_, i) => i !== idx))}>✕</span>
                          </span>
                        ))
                      ) : (
                        <div className="empty-items-placeholder">No custom skills added yet. Recommended skills for this role: {selectedJob.skills.join(', ')}</div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="add-item-trigger-magenta-btn"
                      onClick={() => setShowAddSkillModal(true)}
                    >
                      ADD SKILL
                    </button>
                  </div>
                )}

                {/* LANGUAGES */}
                {activeFormStep === 'languages' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Languages <span className="required-star">*</span></h2>
                    <p className="form-section-subtitle">Please indicate which languages you speak.</p>

                    <div className="added-items-list">
                      {languagesList.length > 0 ? (
                        languagesList.map((lg, idx) => (
                          <div key={idx} className="added-item-row-card">
                            <div className="added-item-details">
                              <h4 className="item-title-name">{lg.name}</h4>
                              <p className="item-subtitle-meta">{lg.proficiency}</p>
                            </div>
                            <button className="item-delete-btn" type="button" onClick={() => setLanguagesList(languagesList.filter((_, i) => i !== idx))}>
                              ✕ Remove
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="empty-items-placeholder">No spoken languages added yet.</div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="add-item-trigger-magenta-btn"
                      onClick={() => setShowAddLanguageModal(true)}
                    >
                      ADD LANGUAGE
                    </button>
                  </div>
                )}

                {/* NATIONAL IDENTIFIER */}
                {activeFormStep === 'national' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">NATIONAL IDENTIFIER</h2>
                    <p className="form-section-subtitle highlight-pan">Please ensure your <strong>PAN Details</strong> are provided to process your job application.</p>

                    <div className="added-items-list">
                      {nationalIdList.length > 0 ? (
                        nationalIdList.map((nid, idx) => (
                          <div key={idx} className="added-item-row-card">
                            <div className="added-item-details">
                              <h4 className="item-title-name">{nid.type}</h4>
                              <p className="item-subtitle-meta">{nid.number}</p>
                            </div>
                            <button className="item-delete-btn" type="button" onClick={() => setNationalIdList(nationalIdList.filter((_, i) => i !== idx))}>
                              ✕ Remove
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="empty-items-placeholder">No national identifiers added yet. PAN Details are highly recommended.</div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="add-item-trigger-magenta-btn"
                      onClick={() => setShowAddNationalIdModal(true)}
                    >
                      ADD NATIONAL IDENTIFIER
                    </button>
                  </div>
                )}

                {/* EDUCATION AND WORK AUTHORIZATION */}
                {activeFormStep === 'authorization' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Education and Work Authorization</h2>
                    <p className="form-section-subtitle">Provide your Education and Work Authorization details.</p>

                    <div className="form-grid-layout" style={{marginTop: '24px'}}>
                      <div className="form-group-item full-width radio-group-box">
                        <label className="form-field-label">Do you have any relatives currently working at Hexaware in any capacity? <span className="required-star">*</span></label>
                        <div className="radio-pills-row">
                          {['No', 'Yes'].map(v => (
                            <button 
                              key={v}
                              type="button" 
                              className={`hexaware-pill-btn${hasRelativesHexaware === v ? ' active' : ''}`}
                              onClick={() => setHasRelativesHexaware(v)}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group-item full-width radio-group-box" style={{marginTop: '12px'}}>
                        <label className="form-field-label">Have you previously worked at Hexaware in any capacity? <span className="required-star">*</span></label>
                        <div className="radio-pills-row">
                          {['No', 'Yes'].map(v => (
                            <button 
                              key={v}
                              type="button" 
                              className={`hexaware-pill-btn${previouslyWorkedHexaware === v ? ' active' : ''}`}
                              onClick={() => setPreviouslyWorkedHexaware(v)}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group-item full-width radio-group-box" style={{marginTop: '12px'}}>
                        <label className="form-field-label">Are you VISA Dependent? <span className="required-star">*</span></label>
                        <div className="radio-pills-row">
                          {['Yes', 'No'].map(v => (
                            <button 
                              key={v}
                              type="button" 
                              className={`hexaware-pill-btn${isVisaDependent === v ? ' active' : ''}`}
                              onClick={() => setIsVisaDependent(v)}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group-item full-width radio-group-box" style={{marginTop: '12px'}}>
                        <label className="form-field-label">Education Level <span className="required-star">*</span></label>
                        <div className="radio-pills-row">
                          {['Under Graduate', 'Graduate', 'Post Graduate'].map(v => (
                            <button 
                              key={v}
                              type="button" 
                              className={`hexaware-pill-btn${educationLevel === v ? ' active' : ''}`}
                              onClick={() => setEducationLevel(v)}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group-item full-width" style={{marginTop: '12px'}}>
                        <label className="form-field-label">Specialization <span className="required-star">*</span></label>
                        <div className="custom-select-wrapper">
                          <select 
                            className="form-text-field"
                            value={specialization}
                            onChange={e => setSpecialization(e.target.value)}
                          >
                            <option value="">Select Option</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Electronics & Communication">Electronics & Communication</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Business Administration">Business Administration</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group-item full-width" style={{marginTop: '20px'}}>
                        <label className="form-field-label">Hexaware's Privacy Policy <span className="required-star">*</span></label>
                        <div className="privacy-policy-text-block">
                          <strong>Privacy Statement:</strong> We value your privacy. The information collected from you during this process is used exclusively for recruitment purposes. We may share this information with our third parties / other approved vendors related to the recruitment process. We are committed to protecting your data.
                          <br /><br />
                          Refer to Hexaware's Privacy policy link given below for additional details/clarifications.
                          <br />
                          <a href="https://hexaware.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{color: '#ca0572', textDecoration: 'underline'}}>https://hexaware.com/privacy-policy/</a>
                        </div>
                        <div className="privacy-policy-agree-row" style={{marginTop: '12px'}}>
                          <input 
                            type="checkbox" 
                            id="privacy-check" 
                            checked={privacyPolicyChecked}
                            onChange={e => setPrivacyPolicyChecked(e.target.checked)}
                          />
                          <label htmlFor="privacy-check" style={{marginLeft: '8px', cursor: 'pointer', fontWeight: 600, color: '#374151'}}>
                            I Agree
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CANDIDATE REGISTRATION INFO */}
                {activeFormStep === 'registration' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Candidate Registration Info</h2>
                    <p className="form-section-subtitle">Provide additional details.</p>
                    
                    <div className="form-grid-layout">
                      <div className="form-group-item full-width">
                        <label className="form-field-label">Current Organization <span className="required-star">*</span></label>
                        <input 
                          type="text" 
                          className="form-text-field"
                          placeholder="Enter your current organization"
                          value={currentOrganization}
                          onChange={e => setCurrentOrganization(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item full-width">
                        <label className="form-field-label">Total Experience In Years <span className="required-star">*</span></label>
                        <input 
                          type="number" 
                          step="0.1"
                          className="form-text-field"
                          placeholder="e.g. 5.5"
                          value={totalExperienceYears}
                          onChange={e => setTotalExperienceYears(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item full-width">
                        <label className="form-field-label">Relevant Experience In Years <span className="required-star">*</span></label>
                        <input 
                          type="number" 
                          step="0.1"
                          className="form-text-field"
                          placeholder="e.g. 4"
                          value={relevantExperienceYears}
                          onChange={e => setRelevantExperienceYears(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item full-width">
                        <label className="form-field-label">Notice Period in Days <span className="required-star">*</span></label>
                        <input 
                          type="number" 
                          className="form-text-field"
                          placeholder="e.g. 30"
                          value={noticePeriodDays}
                          onChange={e => setNoticePeriodDays(e.target.value)}
                        />
                      </div>

                      <div className="form-group-item full-width radio-group-box" style={{marginTop: '12px'}}>
                        <label className="form-field-label">Immediately Available <span className="required-star">*</span></label>
                        <div className="radio-pills-row">
                          {['No', 'Yes'].map(v => (
                            <button 
                              key={v}
                              type="button" 
                              className={`hexaware-pill-btn${isImmediatelyAvailable === v ? ' active' : ''}`}
                              onClick={() => setIsImmediatelyAvailable(v)}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CANDIDATE AVAILABILITY INFO */}
                {activeFormStep === 'availability' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Candidate Availability Info</h2>
                    <p className="form-section-subtitle">Provide availability details.</p>
                    
                    <div className="form-grid-layout">
                      <div className="form-group-item full-width">
                        <label className="form-field-label">Can Join By <span className="required-star">*</span></label>
                        <div className="date-selectors-row">
                          <select 
                            className="form-text-field date-select-day"
                            value={joinDay}
                            onChange={e => setJoinDay(e.target.value)}
                          >
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>

                          <select 
                            className="form-text-field date-select-month"
                            value={joinMonth}
                            onChange={e => setJoinMonth(e.target.value)}
                          >
                            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                              <option key={m} value={m}>{m}</option>
                            ))}
                          </select>

                          <select 
                            className="form-text-field date-select-year"
                            value={joinYear}
                            onChange={e => setJoinYear(e.target.value)}
                          >
                            {['2026', '2027', '2028', '2029', '2030'].map(y => (
                              <option key={y} value={y}>{y}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* DIVERSITY INFORMATION */}
                {activeFormStep === 'diversity' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">Diversity Information</h2>
                    <p className="form-section-subtitle">Provide additional details.</p>
                    
                    <div className="form-grid-layout">
                      <div className="form-group-item full-width">
                        <label className="form-field-label">Gender <span className="required-star">*</span></label>
                        <select 
                          className="form-text-field"
                          value={diversityGender}
                          onChange={e => setDiversityGender(e.target.value)}
                        >
                          <option value="">Select Option</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Non-Binary">Non-Binary</option>
                          <option value="Decline to Self-Identify">Decline to Self-Identify</option>
                        </select>
                      </div>

                      <div className="form-group-item full-width" style={{marginTop: '16px'}}>
                        <div className="consent-checkbox-row">
                          <input 
                            type="checkbox" 
                            id="agree-job-updates" 
                            checked={agreeJobUpdates}
                            onChange={e => setAgreeJobUpdates(e.target.checked)}
                          />
                          <label htmlFor="agree-job-updates">
                            I agree to receive updates about new job opportunities.
                          </label>
                        </div>
                      </div>

                      <div className="form-group-item full-width" style={{marginTop: '8px'}}>
                        <div className="consent-checkbox-row">
                          <input 
                            type="checkbox" 
                            id="agree-marketing" 
                            checked={agreeMarketing}
                            onChange={e => setAgreeMarketing(e.target.checked)}
                          />
                          <label htmlFor="agree-marketing">
                            I agree to receive marketing communications
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* E-SIGNATURE */}
                {activeFormStep === 'esignature' && (
                  <div className="form-section-block">
                    <h2 className="form-section-title">E-Signature</h2>
                    <p className="form-section-subtitle">Please read the consent terms and sign digitally to submit your application.</p>

                    <div className="signature-fields-group">
                      <div className="form-group-item full-width">
                        <label className="form-field-label">Full Name <span className="required-star">*</span></label>
                        <input 
                          type="text" 
                          className="form-text-field signature-font" 
                          placeholder="Type your full legal name" 
                          value={signature}
                          onChange={e => setSignature(e.target.value)}
                        />
                      </div>

                      <div className="consent-checkbox-row" style={{marginTop: '10px'}}>
                        <input 
                          type="checkbox" 
                          id="consent-check" 
                          checked={consentChecked}
                          onChange={e => setConsentChecked(e.target.checked)}
                        />
                        <label htmlFor="consent-check">
                          I certify that all statements made in this application are true and complete. I understand that any false statements or omissions will be grounds for immediate rejection or termination of employment. <span className="required-star">*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Bottom Control Buttons */}
                <div className="app-form-control-buttons">
                  {activeFormStep !== 'contact' && (
                    <button 
                      type="button" 
                      className="form-ctrl-btn prev"
                      onClick={() => {
                        const curIdx = formSteps.findIndex(s => s.id === activeFormStep);
                        if (curIdx > 0) setActiveFormStep(formSteps[curIdx - 1].id);
                      }}
                    >
                      ◀ Previous
                    </button>
                  )}

                  {activeFormStep !== 'esignature' ? (
                    <button 
                      type="button" 
                      className="form-ctrl-btn next-step"
                      onClick={() => {
                        const curIdx = formSteps.findIndex(s => s.id === activeFormStep);
                        
                        // Validation checks
                        if (activeFormStep === 'contact' && (!formLastName || !formPhone)) {
                          alert('Please enter your Last Name and Phone Number to continue.');
                          return;
                        }
                        if (activeFormStep === 'documents' && !resumeFile) {
                          alert('Please drop or upload your Resume file to continue.');
                          return;
                        }
                        if (activeFormStep === 'authorization' && (!specialization || !privacyPolicyChecked)) {
                          alert('Please select your Specialization and agree to the Privacy Policy to continue.');
                          return;
                        }
                        if (activeFormStep === 'registration' && (!currentOrganization || !totalExperienceYears || !relevantExperienceYears || !noticePeriodDays)) {
                          alert('Please fill out all candidate registration details to continue.');
                          return;
                        }
                        if (activeFormStep === 'availability' && (!joinDay || !joinMonth || !joinYear)) {
                          alert('Please specify your availability date to continue.');
                          return;
                        }
                        if (activeFormStep === 'diversity' && !diversityGender) {
                          alert('Please select your gender classification to continue.');
                          return;
                        }

                        if (curIdx < formSteps.length - 1) {
                          setActiveFormStep(formSteps[curIdx + 1].id);
                        }
                      }}
                    >
                      Save & Continue ▶
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      className="form-ctrl-btn submit-application"
                      onClick={() => {
                        if (!signature) {
                          alert('Please type your digital signature to sign the application.');
                          return;
                        }
                        if (!consentChecked) {
                          alert('Please check the consent checkbox to certify your application.');
                          return;
                        }

                        // Success trigger!
                        setShowSuccessScreen(true);
                      }}
                    >
                      SUBMIT APPLICATION ✓
                    </button>
                  )}
                </div>

              </div>

              {/* Steps Progress Sidebar (Matches Hexaware sidebar styling) */}
              <div className="app-form-sidebar">
                {formSteps.map((step) => {
                  const isActive = activeFormStep === step.id;
                  return (
                    <div 
                      key={step.id} 
                      className={`app-form-sidebar-item${isActive ? ' active' : ''}`}
                      onClick={() => {
                        // Let users click to jump once basics are set
                        if (formLastName || activeFormStep === 'contact') {
                          setActiveFormStep(step.id);
                        } else {
                          alert('Please fill out Contact Information first.');
                        }
                      }}
                    >
                      {isActive && <span className="sidebar-active-bullet">•</span>}
                      <span className="sidebar-item-label">{step.label}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          ) : (
            /* Immersive Success Page */
            <div className="app-success-card-panel">
              <div className="success-icon-animation">
                <svg viewBox="0 0 52 52" className="success-checkmark-svg">
                  <circle cx="26" cy="26" r="25" fill="none" className="checkmark-circle"/>
                  <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" className="checkmark-kick"/>
                </svg>
              </div>
              <h2 className="success-heading-txt">Application Submitted!</h2>
              <p className="success-desc-txt">
                Thank you for applying for the <strong>{selectedJob.title}</strong> position at NSG Solutions.
              </p>
              <div className="success-details-card">
                <div className="success-row"><span>Position</span><strong>{selectedJob.title} ({selectedJob.id})</strong></div>
                <div className="success-row"><span>Location</span><strong>{selectedJob.location}</strong></div>
                <div className="success-row"><span>Confirmation Email</span><strong>hemanthsilla555@gmail.com</strong></div>
                <div className="success-row"><span>Recruitment Group</span><strong>{selectedJob.lane}</strong></div>
              </div>
              <p className="success-info-footer">
                We have dispatched a receipt and next-steps guidelines to your registered email. Our operations team will review your application package shortly.
              </p>
              <button 
                type="button" 
                className="success-dismiss-btn"
                onClick={() => {
                  setShowSuccessScreen(false);
                  setShowApplicationForm(false);
                  setShowJobDetail(false);
                  setIsFavorite(false);
                }}
              >
                Back to Careers Hub
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Sub-modals for adding records ── */}
      
      {/* Education Modal */}
      {showAddEducationModal && (
        <div className="sub-modal-overlay">
          <div className="sub-modal-card" onClick={e => e.stopPropagation()}>
            <h3>Add Education Record</h3>
            <div className="sub-modal-field">
              <label>School / University <span className="required-star">*</span></label>
              <input type="text" value={tempEdSchool} onChange={e => setTempEdSchool(e.target.value)} placeholder="e.g. Indian Institute of Technology" />
            </div>
            <div className="sub-modal-field">
              <label>Degree <span className="required-star">*</span></label>
              <input type="text" value={tempEdDegree} onChange={e => setTempEdDegree(e.target.value)} placeholder="e.g. B.Tech / B.E." />
            </div>
            <div className="sub-modal-field">
              <label>Field of Study</label>
              <input type="text" value={tempEdField} onChange={e => setTempEdField(e.target.value)} placeholder="e.g. Computer Science & Engineering" />
            </div>
            <div className="sub-modal-field">
              <label>Graduation Year</label>
              <input type="text" value={tempEdYear} onChange={e => setTempEdYear(e.target.value)} placeholder="e.g. 2024" />
            </div>
            <div className="sub-modal-actions-btn">
              <button type="button" className="sub-modal-action-btn cancel" onClick={() => setShowAddEducationModal(false)}>Cancel</button>
              <button type="button" className="sub-modal-action-btn save" onClick={() => {
                if (!tempEdSchool || !tempEdDegree) {
                  alert('School and Degree are required.');
                  return;
                }
                setEducationList([...educationList, { school: tempEdSchool, degree: tempEdDegree, field: tempEdField || 'General Studies', year: tempEdYear || 'N/A' }]);
                setTempEdSchool(''); setTempEdDegree(''); setTempEdField(''); setTempEdYear('');
                setShowAddEducationModal(false);
              }}>Add Education</button>
            </div>
          </div>
        </div>
      )}

      {/* Experience Modal */}
      {showAddExperienceModal && (
        <div className="sub-modal-overlay">
          <div className="sub-modal-card" onClick={e => e.stopPropagation()}>
            <h3>Add Experience Record</h3>
            <div className="sub-modal-field">
              <label>Company / Organization <span className="required-star">*</span></label>
              <input type="text" value={tempExpCompany} onChange={e => setTempExpCompany(e.target.value)} placeholder="e.g. NSG Solutions" />
            </div>
            <div className="sub-modal-field">
              <label>Role / Designation <span className="required-star">*</span></label>
              <input type="text" value={tempExpRole} onChange={e => setTempExpRole(e.target.value)} placeholder="e.g. Software Consultant" />
            </div>
            <div className="sub-modal-field">
              <label>Start Date</label>
              <input type="text" value={tempExpStart} onChange={e => setTempExpStart(e.target.value)} placeholder="e.g. June 2022" />
            </div>
            <div className="sub-modal-field">
              <label>End Date</label>
              <input type="text" value={tempExpEnd} onChange={e => setTempExpEnd(e.target.value)} placeholder="e.g. Present" />
            </div>
            <div className="sub-modal-field">
              <label>Job Description</label>
              <textarea value={tempExpDesc} onChange={e => setTempExpDesc(e.target.value)} placeholder="Describe your key achievements and roles" />
            </div>
            <div className="sub-modal-actions-btn">
              <button type="button" className="sub-modal-action-btn cancel" onClick={() => setShowAddExperienceModal(false)}>Cancel</button>
              <button type="button" className="sub-modal-action-btn save" onClick={() => {
                if (!tempExpCompany || !tempExpRole) {
                  alert('Company and Role are required.');
                  return;
                }
                setExperienceList([...experienceList, { company: tempExpCompany, role: tempExpRole, start: tempExpStart || 'N/A', end: tempExpEnd || 'Present', desc: tempExpDesc }]);
                setTempExpCompany(''); setTempExpRole(''); setTempExpStart(''); setTempExpEnd(''); setTempExpDesc('');
                setShowAddExperienceModal(false);
              }}>Add Experience</button>
            </div>
          </div>
        </div>
      )}

      {/* Skill Modal */}
      {showAddSkillModal && (
        <div className="sub-modal-overlay">
          <div className="sub-modal-card" onClick={e => e.stopPropagation()}>
            <h3>Add Skill</h3>
            <div className="sub-modal-field">
              <label>Skill Name <span className="required-star">*</span></label>
              <input type="text" value={tempSkillName} onChange={e => setTempSkillName(e.target.value)} placeholder="e.g. React.js" />
            </div>
            <div className="sub-modal-actions-btn">
              <button type="button" className="sub-modal-action-btn cancel" onClick={() => setShowAddSkillModal(false)}>Cancel</button>
              <button type="button" className="sub-modal-action-btn save" onClick={() => {
                if (!tempSkillName) {
                  alert('Skill Name is required.');
                  return;
                }
                setSkillsList([...skillsList, tempSkillName]);
                setTempSkillName('');
                setShowAddSkillModal(false);
              }}>Add Skill</button>
            </div>
          </div>
        </div>
      )}

      {/* Language Modal */}
      {showAddLanguageModal && (
        <div className="sub-modal-overlay">
          <div className="sub-modal-card" onClick={e => e.stopPropagation()}>
            <h3>Add Language</h3>
            <div className="sub-modal-field">
              <label>Language Name <span className="required-star">*</span></label>
              <input type="text" value={tempLangName} onChange={e => setTempLangName(e.target.value)} placeholder="e.g. English" />
            </div>
            <div className="sub-modal-field">
              <label>Proficiency</label>
              <select value={tempLangProficiency} onChange={e => setTempLangProficiency(e.target.value)}>
                <option>Professional working proficiency</option>
                <option>Full professional proficiency</option>
                <option>Native or bilingual proficiency</option>
                <option>Limited working proficiency</option>
                <option>Elementary proficiency</option>
              </select>
            </div>
            <div className="sub-modal-actions-btn">
              <button type="button" className="sub-modal-action-btn cancel" onClick={() => setShowAddLanguageModal(false)}>Cancel</button>
              <button type="button" className="sub-modal-action-btn save" onClick={() => {
                if (!tempLangName) {
                  alert('Language Name is required.');
                  return;
                }
                setLanguagesList([...languagesList, { name: tempLangName, proficiency: tempLangProficiency }]);
                setTempLangName(''); setTempLangProficiency('Professional working proficiency');
                setShowAddLanguageModal(false);
              }}>Add Language</button>
            </div>
          </div>
        </div>
      )}

      {/* National ID Modal */}
      {showAddNationalIdModal && (
        <div className="sub-modal-overlay">
          <div className="sub-modal-card" onClick={e => e.stopPropagation()}>
            <h3>Add National Identifier</h3>
            <div className="sub-modal-field">
              <label>Identifier Type</label>
              <select value={tempIdType} onChange={e => setTempIdType(e.target.value)}>
                <option>PAN Card</option>
                <option>Aadhaar Card</option>
                <option>Passport</option>
                <option>Voter ID</option>
              </select>
            </div>
            <div className="sub-modal-field">
              <label>Identifier Number (e.g. ABCDE1234F) <span className="required-star">*</span></label>
              <input type="text" value={tempIdNumber} onChange={e => setTempIdNumber(e.target.value)} placeholder="Enter details" />
            </div>
            <div className="sub-modal-actions-btn">
              <button type="button" className="sub-modal-action-btn cancel" onClick={() => setShowAddNationalIdModal(false)}>Cancel</button>
              <button type="button" className="sub-modal-action-btn save" onClick={() => {
                if (!tempIdNumber) {
                  alert('Identifier Number is required.');
                  return;
                }
                setNationalIdList([...nationalIdList, { type: tempIdType, number: tempIdNumber }]);
                setTempIdNumber('');
                setShowAddNationalIdModal(false);
              }}>Add Identifier</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Manage Profile Modal (Matches reference exactly) ── */}
      {showProfileModal && (
        <div className="profile-modal-overlay" onClick={() => setShowProfileModal(false)}>
          <div className="profile-modal-content" onClick={e => e.stopPropagation()}>
            <h2 className="profile-modal-title">Manage Your Profile</h2>
            <p className="profile-modal-desc">
              Enter the email address you used to create your profile. Once your identity is confirmed, you will be able to manage your profile.
            </p>
            
            <div className="profile-modal-form-group">
              <label className="profile-modal-label">
                Email Address <span className="profile-modal-required">*</span>
              </label>
              <input 
                type="email" 
                className="profile-modal-input" 
                placeholder="Enter the email address" 
                defaultValue="hemanthsilla555@gmail.com"
              />
              <span className="profile-modal-help-text">This is how we'll communicate with you.</span>
            </div>

            <div className="profile-modal-actions">
              <button 
                className="profile-modal-btn profile-modal-btn--cancel"
                onClick={() => setShowProfileModal(false)}
              >
                ◀ CANCEL
              </button>
              <button 
                className="profile-modal-btn profile-modal-btn--next"
                onClick={() => {
                  setShowProfileModal(false);
                  setShowJobDetail(true);
                }}
              >
                NEXT ▶
              </button>
            </div>
          </div>
        </div>
      )}
      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default Career;


