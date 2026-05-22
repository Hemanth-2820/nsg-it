import React, { useState } from 'react';
import Footer from '../components/Footer';
import aboutImage from '../assets/about-us.jpg';
import founderImage from '../assets/founder.png';
import ceoImage from '../assets/ceo.png';
import teamImage from '../assets/team.png';
import softwareOfficeImage from '../assets/office_innovation_hub.png';
import itWorkspaceImage from '../assets/office_collaboration_zone.png';
import cyberWorkspaceImage from '../assets/office_operations_center.png';

// ─── Individual Office Card Component (Full Background Image) ─────────────────
const OfficeCard = ({ title, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`office-env-card${hovered ? ' office-env-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="office-env-bg-image" />
    </div>
  );
};

const About = () => {
  return (
    <div className="about-page-container">
      {/* 1. Immersive Hero Section (100vh) */}
      <div className="about-hero-section">
        {/* Background Image */}
        <img src={aboutImage} alt="NSG IT Modern Workspace" className="about-hero-image" />
        
        {/* Immersive Overlay Backdrop */}
        <div className="about-overlay-backdrop" />
        
        {/* Premium Floating Typography Area */}
        <div className="about-content-card">
          <span className="about-badge">About Us</span>
          <h1 className="about-title">About NSG Solutions</h1>
          <p className="about-description">
            NSG Solutions is a fast-growing technology and creative services company delivering high-quality, innovative, and cost-effective solutions. Led by its Founder & CEO, the company focuses on helping businesses grow through IT services, digital solutions, and creative services.
          </p>
          
          {/* Real Stats Showcase */}
          <div className="about-stats-row">
            <div className="about-stat-chip">
              <span className="about-stat-number">50+</span>
              <span className="about-stat-label">Global Clients</span>
            </div>
            <div className="about-stat-chip">
              <span className="about-stat-number">200+</span>
              <span className="about-stat-label">Completed Projects</span>
            </div>
          </div>
          
          <p className="about-footer-text">
            NSG Solutions has built a reputation for reliability, quality, and customer satisfaction.
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="about-scroll-indicator" onClick={() => {
          document.querySelector('.about-leadership-section')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="mouse-wheel"></span>
          <span className="scroll-arrow"></span>
        </div>
      </div>

      {/* 2. Executive Leadership Section */}
      <div className="about-leadership-section">
        <div className="about-leadership-container">
          <div className="leadership-header">
            <h2 className="leadership-section-title">The Visionaries Driving Digital Excellence</h2>
          </div>

          {/* Founder Profile Row */}
          <div className="leadership-profile-row founder-row">
            <div className="profile-text-content">
              <span className="profile-role">FOUNDER</span>
              <blockquote className="profile-quote">
                "Our Founder is a visionary leader guided by innovation, integrity, and excellence."
              </blockquote>
              <p className="profile-paragraph">
                He architects scalable solutions that generate real business value while leading the company toward digital excellence. With a strong emphasis on precision and strategic thinking, he enables organizations to navigate complexity and evolve securely into the future.
              </p>
              <p className="profile-paragraph">
                With over 20 years of experience in the creative industry, he has been instrumental in shaping impactful design and storytelling. His expertise spans branding, animation, video production, and web design—consistently helping organizations achieve growth through high-quality, results-driven creative solutions.
              </p>
            </div>
            <div className="profile-image-container">
              <div className="profile-image-frame">
                <img src={founderImage} alt="NSG Solutions Founder" className="profile-image" />
              </div>
            </div>
          </div>

          {/* CEO Profile Row */}
          <div className="leadership-profile-row ceo-row alternating">
            <div className="profile-image-container">
              <div className="profile-image-frame">
                <img src={ceoImage} alt="NSG Solutions CEO" className="profile-image" />
              </div>
            </div>
            <div className="profile-text-content">
              <span className="profile-role">CEO</span>
              <blockquote className="profile-quote">
                "Our CEO is a forward-thinking leader driven by innovation, intelligence, and strategic vision."
              </blockquote>
              <p className="profile-paragraph">
                He architects technology-driven solutions that create measurable business impact while steering the organization toward digital transformation. With a strong emphasis on precision and future-readiness, he enables businesses to navigate complexity and evolve in an ever-changing technological landscape.
              </p>
              <p className="profile-paragraph">
                With deep expertise in Artificial Intelligence (AI), Machine Learning (ML), and the Internet of Things (IoT), he plays a pivotal role in building intelligent, scalable, and future-ready solutions—empowering organizations to unlock new opportunities and achieve sustainable growth.
              </p>
            </div>
          </div>

          {/* Team Showcase Section */}
          <div className="about-team-showcase">
            <span className="about-badge">Our Team</span>
            <h2 className="team-section-title">Driven by Collaboration & Innovation</h2>
            <p className="team-section-subtitle">
              We are a passionate squad of engineers, creators, and strategists working side-by-side to push the limits of technology and shape future-ready digital experiences.
            </p>
            <div className="team-image-wrapper">
              <img src={teamImage} alt="NSG Solutions Collaborative Team" className="team-large-image" />
            </div>
          </div>

          {/* Office Showcase Section - Featuring exact service card layouts */}
          <div className="about-office-showcase">
            <h2 className="team-section-title">Our Premium Workspaces</h2>
            <p className="team-section-subtitle">
              Take a virtual tour of our high-tech workspaces designed to foster creativity, engineering precision, and fluid collaboration.
            </p>
            <div className="office-cards-grid">
              <OfficeCard 
                title="Innovation Hub"
                description="Our state-of-the-art software engineering bay where developers build next-generation applications. Fully equipped with cutting-edge technology and multi-monitor setups."
                image={softwareOfficeImage}
              />
              <OfficeCard 
                title="Collaboration Zone"
                description="A fluid, open-concept workspace designed to catalyze active teamwork, brainstorming sessions, and digital creativity among our teams."
                image={itWorkspaceImage}
              />
              <OfficeCard 
                title="Operations Center"
                description="Our central command station monitoring high-availability system deployments, live database telemetry, and zero-trust cloud network security frameworks."
                image={cyberWorkspaceImage}
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
