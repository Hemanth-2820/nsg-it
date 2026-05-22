import React, { useEffect, useState, useRef } from 'react';
import Footer from '../components/Footer';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowUpRight, Phone, CheckCircle, Lightbulb, Compass, Settings } from 'lucide-react';
import { serviceDetailsDataset } from '../components/ServiceDetailPage';
import logo from '../assets/logo.jpg';
import './Solutions.css';

// Import all assets dynamically to match service capability visuals
import appDevTheme from '../assets/app_development_theme.png';
import softwareTheme from '../assets/software_development_theme.png';
import cyberWorkspace from '../assets/cyber_workspace.png';
import dataCubes from '../assets/data_cubes.png';
import startupTeam from '../assets/startup_team_coding.png';
import modernTechTeam from '../assets/modern_tech_team.png';
import officeCollab from '../assets/office_collaboration_zone.png';
import officeInnovation from '../assets/office_innovation_hub.png';
import officeOperations from '../assets/office_operations_center.png';
import developersOffice from '../assets/software_developers_office.png';
import cardCloud from '../assets/card_cloud.png';
import cardAnalytics from '../assets/card_data_analytics.png';
import cardDigitalSoftware from '../assets/card_digital_software.png';

// Import details
import detailWebDev from '../assets/detail_web_dev.png';
import detailAppDev from '../assets/detail_app_dev.png';
import detailSoftwareDev from '../assets/detail_software_dev.png';
import detailAwsDevops from '../assets/detail_aws_devops.png';
import detailHosting from '../assets/detail_hosting_servers.png';
import detailMarketing from '../assets/detail_digital_marketing.png';
import detailAiRag from '../assets/detail_ai_rag.png';
import detailIvr from '../assets/detail_ivr_solutions.png';
import detailApi from '../assets/detail_api_integrations.png';
import detailEcommerce from '../assets/detail_ecommerce.png';
import detailAiAutomation from '../assets/detail_ai_automation.png';
import detailSecurity from '../assets/detail_security.png';

// Theme imports
import themeWebDev from '../assets/theme_web_dev.png';
import themeHosting from '../assets/theme_hosting_servers.png';
import themeIvr from '../assets/theme_ivr_solutions.png';
import themeSecurity from '../assets/theme_security.png';
import themeAwsDevops from '../assets/theme_aws_devops.png';
import themeDigitalMarketing from '../assets/theme_digital_marketing.png';
import themeEcommerce from '../assets/theme_ecommerce.png';
import themeApiIntegrations from '../assets/theme_api_integrations.png';
import themeAiAutomation from '../assets/theme_ai_automation.png';
import themeAiRag from '../assets/theme_ai_rag.png';
import itCompanyWorkspace from '../assets/it_company_workspace.png';

// Custom generated illustrations for subservice solutions
import solutionsWhatsappChatbot from '../assets/solutions_whatsapp_chatbot.png';
import solutionsRagRetrieval from '../assets/solutions_rag_retrieval.png';
import solutionsCustomerSupport from '../assets/solutions_customer_support.png';
import solutionsAiChatbot from '../assets/solutions_ai_chatbot.png';
import solutionsKubernetesDevops from '../assets/solutions_kubernetes_devops.png';
import solutionsSaasDashboard from '../assets/solutions_saas_dashboard.png';
import solutionsSecurityAudit from '../assets/solutions_security_audit.png';
import solutionsApiIntegrations from '../assets/solutions_api_integrations.png';
import solutionsIvrTelephony from '../assets/solutions_ivr_telephony.png';
import solutionsEcommerce from '../assets/solutions_ecommerce.png';
import solutionsCompanyWebsite from '../assets/solutions_company_website.png';
import solutionsPortfolioWebsite from '../assets/solutions_portfolio_website.png';
import solutionsWebsiteRedesign from '../assets/solutions_website_redesign.png';
import solutionsCrossPlatformApp from '../assets/solutions_cross_platform_app.png';
import solutionsBusinessApp from '../assets/solutions_business_app.png';
import solutionsCustomMobileApp from '../assets/solutions_custom_mobile_app.png';

// Map subservices contextually to highly relevant custom illustrations
const getSubserviceImage = (subName, category, idx) => {
  const cat = category.trim();
  
  // High-fidelity 1:1 lookup map for all 12 services and all of their subservices
  const map = {
    "Web Development": [
      themeWebDev,              // 0: Business Websites
      solutionsCompanyWebsite,  // 1: Company Websites (NEW)
      solutionsPortfolioWebsite,// 2: Portfolio Websites (NEW)
      detailWebDev,             // 3: Landing Pages
      themeEcommerce,           // 4: E-Commerce Websites
      cardDigitalSoftware,      // 5: Custom Web Applications
      solutionsSaasDashboard,   // 6: Admin Dashboards
      cardCloud,                // 7: SaaS Platforms
      appDevTheme,              // 8: Responsive Website Design
      solutionsWebsiteRedesign  // 9: Website Redesign (NEW)
    ],
    "App Development": [
      detailAppDev,             // 0: Android App Development
      solutionsCrossPlatformApp,// 1: Cross Platform Apps (NEW)
      solutionsBusinessApp,     // 2: Business Applications (NEW)
      solutionsEcommerce,       // 3: E-Commerce Apps
      solutionsCustomMobileApp, // 4: Custom Mobile Apps (NEW)
      detailApi                 // 5: API-Based Mobile Apps
    ],
    "Software Development": [
      detailSoftwareDev,        // 0: Custom Software Development
      cardAnalytics,            // 1: Billing Software
      dataCubes,                // 2: Inventory Management Systems
      itCompanyWorkspace,       // 3: Management Systems
      themeAiAutomation,        // 4: Automation Software
      softwareTheme             // 5: Desktop Applications
    ],
    "AWS & DevOps": [
      detailAwsDevops,          // 0: AWS Cloud Setup
      themeAwsDevops,           // 1: DevOps Solutions
      solutionsKubernetesDevops,// 2: CI/CD Pipeline Setup
      cardCloud,                // 3: Docker Configuration
      dataCubes,                // 4: Kubernetes Setup
      themeHosting,             // 5: Server Deployment
      solutionsApiIntegrations, // 6: Infrastructure Automation
      cardAnalytics,            // 7: Monitoring & Logging
      cyberWorkspace            // 8: Cloud Architecture Setup
    ],
    "Hosting & Server Management": [
      themeHosting,             // 0: Web Hosting
      cardCloud,                // 1: Cloud Hosting
      detailHosting,            // 2: VPS Server Setup
      officeOperations,         // 3: Dedicated Server Management
      dataCubes,                // 4: Domain Setup
      solutionsSecurityAudit,   // 5: SSL Installation
      cyberWorkspace,           // 6: Server Optimization
      itCompanyWorkspace,       // 7: Website Migration
      detailApi,                // 8: Email Hosting
      solutionsKubernetesDevops // 9: Backup & Recovery Solutions
    ],
    "Digital Marketing": [
      detailMarketing,          // 0: SEO Optimization
      themeDigitalMarketing,    // 1: Social Media Marketing
      cardAnalytics,            // 2: Google Ads
      officeCollab,             // 3: Meta Ads
      modernTechTeam,           // 4: Lead Generation
      solutionsSaasDashboard,   // 5: Performance Marketing
      solutionsWhatsappChatbot, // 6: Email Marketing
      startupTeam               // 7: Content Marketing
    ],
    "AI & RAG Chatbots": [
      solutionsAiChatbot,       // 0: AI Chatbot Development
      solutionsRagRetrieval,    // 1: RAG-Based Chatbots
      detailAiRag,              // 2: Website Chatbots
      solutionsWhatsappChatbot, // 3: WhatsApp Chatbots
      solutionsCustomerSupport, // 4: Customer Support Bots
      themeAiRag,               // 5: Automation Bots
      themeAiAutomation         // 6: AI-Based Response Systems
    ],
    "IVR Solutions": [
      themeIvr,                 // 0: IVR Setup
      solutionsIvrTelephony,    // 1: Automated Voice Response Systems
      detailIvr,                // 2: Business Call Management
      solutionsCustomerSupport, // 3: Customer Support IVR
      officeOperations,         // 4: Cloud IVR Solutions
      detailApi                 // 5: Multi-Level IVR Systems
    ],
    "API Integrations": [
      detailApi,                // 0: Third-Party API Integration
      themeApiIntegrations,     // 1: Payment Gateway Integration
      solutionsApiIntegrations, // 2: WhatsApp API Integration
      solutionsWhatsappChatbot, // 3: SMS & Email API Setup
      solutionsCustomerSupport  // 4: Automation Integrations
    ],
    "E-Commerce Solutions": [
      themeEcommerce,           // 0: Online Store Development
      solutionsEcommerce,       // 1: Product Management Systems
      detailEcommerce,          // 2: Payment Gateway Integration
      officeCollab,             // 3: Shopify Development
      cardDigitalSoftware,      // 4: WooCommerce Development
      solutionsSaasDashboard,   // 5: Multi-Vendor Platforms
      officeInnovation          // 6: Order Management Systems
    ],
    "AI & Automation": [
      themeAiAutomation,        // 0: AI Integrations
      solutionsAiChatbot,       // 1: Workflow Automation
      detailAiAutomation,       // 2: Smart Business Automation
      cardAnalytics,            // 3: AI-Based Features
      solutionsKubernetesDevops,// 4: Process Automation
      solutionsSaasDashboard    // 5: Business Automation System
    ],
    "Security & Maintenance": [
      themeSecurity,            // 0: Website Maintenance
      solutionsSecurityAudit,   // 1: Performance Optimization
      detailSecurity,           // 2: Bug Fixing
      cyberWorkspace,           // 3: Website Security
      cardCloud,                // 4: Malware Protection
      dataCubes,                // 5: Backup Management
      solutionsCustomerSupport, // 6: Technical Support
      officeOperations          // 7: Server Security Monitoring
    ]
  };

  if (map[cat] && map[cat][idx] !== undefined) {
    return map[cat][idx];
  }

  // Robust keyword fallback to handle any dynamic/custom additions in the future
  const name = subName.toLowerCase();
  if (name.includes("whatsapp")) return solutionsWhatsappChatbot;
  if (name.includes("rag") || name.includes("knowledge base")) return solutionsRagRetrieval;
  if (name.includes("customer support") || name.includes("support")) return solutionsCustomerSupport;
  if (name.includes("chatbot") || name.includes("conversational") || name.includes("response system")) return solutionsAiChatbot;
  if (name.includes("kubernetes") || name.includes("devops") || name.includes("docker") || name.includes("pipeline") || name.includes("ci/cd") || name.includes("automation")) return solutionsKubernetesDevops;
  if (name.includes("dashboard") || name.includes("admin") || name.includes("analytics") || name.includes("saas") || name.includes("portal") || name.includes("management system")) return solutionsSaasDashboard;
  if (name.includes("security") || name.includes("audit") || name.includes("remed") || name.includes("scan") || name.includes("monitor") || name.includes("maintenance")) return solutionsSecurityAudit;
  if (name.includes("api") || name.includes("integrat") || name.includes("webhook")) return solutionsApiIntegrations;
  if (name.includes("telephony") || name.includes("ivr") || name.includes("routing") || name.includes("voice")) return solutionsIvrTelephony;
  if (name.includes("ecommerce") || name.includes("retail") || name.includes("shop") || name.includes("checkout")) return solutionsEcommerce;

  return cyberWorkspace;
};

const Solutions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  // Resolve service index - Default to AI & RAG Chatbots (index 6) as featured in screenshots
  const parsedId = parseInt(id, 10);
  const serviceIndex = isNaN(parsedId) || parsedId < 0 || parsedId >= serviceDetailsDataset.length ? 6 : parsedId;
  const service = serviceDetailsDataset[serviceIndex];

  // Scroll to top on load or ID transition
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollProgress(0); // Reset scroll progress
  }, [serviceIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // The line starts filling when the top of the timeline is 75% down the viewport
      const startTrigger = viewportHeight * 0.75;
      // The line is fully filled when the bottom of the timeline is 25% down the viewport
      const endTrigger = viewportHeight * 0.25;

      const totalScrollableHeight = elementHeight + startTrigger - endTrigger;
      const scrolled = startTrigger - rect.top;

      let progress = scrolled / totalScrollableHeight;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount/ID change to set initial height
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [serviceIndex]);

  if (!service) {
    return (
      <div className="solutions-error-wrapper">
        <h2>Solution Not Found</h2>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    );
  }

  // Signature visuals mapping
  const heroVisuals = [
    detailWebDev,        // 0: Web
    detailAppDev,        // 1: App
    detailSoftwareDev,   // 2: Software
    detailAwsDevops,     // 3: AWS
    themeHosting,        // 4: Hosting
    detailMarketing,     // 5: Marketing
    detailAiRag,         // 6: AI RAG
    themeIvr,            // 7: IVR
    detailApi,           // 8: API Integrations
    detailEcommerce,     // 9: E-Commerce
    detailAiAutomation,  // 10: AI Automation
    themeSecurity        // 11: Security
  ];

  // Custom approach details modeled after the screenshot workflow
  const getApproachSteps = (category) => {
    switch (category) {
      case "Web Development":
      case "App Development":
      case "Software Development":
        return [
          { title: "Define & Prototype", text: "We translate your user requirements into robust architecture layouts, Figma prototypes, and low-latency feature scopes." },
          { title: "Modular Architecture", text: "Engineers build clean, isolated frontend and backend structures integrating secure codebases and caching pipelines." },
          { title: "Audit & Launch", text: "Subjecting the platform to comprehensive unit and load tests before launching flawlessly with continuous SLA support." }
        ];
      case "AI & RAG Chatbots":
      case "AI & Automation":
        return [
          { title: "Connect", text: "Harness proprietary enterprise knowledge pipelines, secure APIs, and unstructured corporate databases securely." },
          { title: "Collect", text: "Ingest and orchestrate text layers, spreadsheets, and vector directories into secure search frameworks." },
          { title: "Act", text: "Deploy advanced conversational agents, self-healing robotic automations, and diagnostic cognitive grids." }
        ];
      case "Security & Maintenance":
        return [
          { title: "Scan & Audit", text: "Map threat profiles, execute automated penetration probes, and assess current software boundary configurations." },
          { title: "Remediate", text: "Hardening firewalls, deploying SSL frameworks, masking critical vectors, and enforcing zero-trust checks." },
          { title: "Monitor", text: "Continuous log checking, emergency containment triggers, and regular safety compliance patch updates." }
        ];
      default:
        return [
          { title: "Audit & Strategy", text: "Analyze existing metrics, audit bottlenecks, and construct a detailed digital transformation plan." },
          { title: "Deploy & Integrate", text: "Configure cloud systems, integrate secure APIs, and build targeted functional engines." },
          { title: "Measure & Optimize", text: "Harness automated analytical trackers to monitor performance, ROI velocity, and server reliability." }
        ];
    }
  };

  const approachSteps = getApproachSteps(service.category);

  return (
    <div className="solutions-page-container">
      
      {/* VIBRANT GRADIENT HERO BANNER */}
      <section 
        className="solutions-hero-banner"
        style={{
          '--solution-accent-color': service.color || '#8B5CF6'
        }}
      >
        <div className="solutions-hero-grid">
          
          {/* Left Text details */}
          <div className="solutions-hero-text">
            <span className="solutions-eyebrow">ENTERPRISE SOLUTIONS</span>
            <h1 className="solutions-hero-title">
              {service.category} Solutions Driving Digital Transformation
            </h1>
            <p className="solutions-hero-description">
              Accelerate your enterprise digital transformation with {service.category.toLowerCase()} services 
              tailored to your business goals. We help companies harness the power of intelligent technologies, 
              robust architectures, and automated loops to enhance operations, automate workflows, and unlock new growth opportunities.
            </p>
            
            <button 
              onClick={() => navigate('/solutions-contact', { state: { subName: service.category, category: service.category, accentColor: service.color } })}
              className="solutions-hero-cta"
              style={{ background: 'transparent', cursor: 'pointer' }}
            >
              Get in Touch for Details
            </button>
          </div>

          {/* Right Floating Product Graphic */}
          <div className="solutions-hero-graphic-box">
            <div className="graphic-backdrop-glow"></div>
            <img 
              src={heroVisuals[serviceIndex] || detailAiRag} 
              alt={service.category} 
              className="solutions-hero-image"
            />
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES INTRO BLOCK */}
      <section className="solutions-intro-section">
        <div className="solutions-intro-content">
          <h2 className="solutions-intro-heading">
            Engineering {service.category} Solutions for the Modern Enterprise - High-Performance Platforms
          </h2>
          <p className="solutions-intro-lead">
            NSG IT Corp. designs and engineers industry-grade functional modules built on resilient tech stacks. 
            We ensure every deployment integrates seamlessly, scales under stress, and provides immediate data telemetry.
          </p>
        </div>
      </section>

      {/* ALTERNATING SOLUTIONS BLOCKS SECTION */}
      <section className="solutions-alternating-feed">
        <div className="feed-container">
          
          {service.subServices && service.subServices.map((sub, idx) => {
            const subImage = getSubserviceImage(sub.name, service.category, idx);

            return (
              <div key={idx} className="solution-alternating-block">
                
                {/* Visual Image container */}
                <div className="solution-block-visual-box">
                  <div className="visual-backdrop-tint" style={{ backgroundColor: `${service.color}15` }}></div>
                  <img 
                    src={subImage} 
                    alt={sub.name} 
                    className="solution-block-image"
                  />
                </div>

                {/* Content description container */}
                <div className="solution-block-details-box">
                  <span className="solution-block-number">0{idx + 1}</span>
                  <h3 className="solution-block-title">{sub.name}</h3>
                  <p className="solution-block-text">
                    {sub.desc} Our machine learning and infrastructure architects customize every deployment 
                    to maximize data integrity, operational speed, and cross-platform compatibility.
                  </p>
                  <p className="solution-block-secondary-text">
                    We deliver advanced architectures for programmatic intent recognition, optimized server structures, 
                    and responsive fluid interfaces, accelerating your journey toward intelligent digital operations.
                  </p>
                  <div className="solution-block-check-row">
                    <CheckCircle className="check-icon" style={{ color: service.color }} size={16} />
                    <span>Enterprise-grade scaling out-of-the-box</span>
                  </div>
                  <button 
                    className="solution-block-cta-btn" 
                    onClick={() => navigate('/solutions-contact', { state: { subName: sub.name, category: service.category, accentColor: service.color } })}
                    style={{
                      '--accent-color': service.color || '#8B5CF6'
                    }}
                  >
                    Get in Touch for Details
                  </button>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* OUR APPROACH METHODOLOGY TIMELINE */}
      <section 
        className="solutions-approach-timeline-section"
        style={{
          '--solution-accent-color': service.color || '#D946EF'
        }}
      >
        <div className="approach-section-backdrop"></div>
        <div className="approach-container">
          
          <div className="approach-two-columns-grid">
            {/* Left Column: Floating Sticky Heading */}
            <div className="approach-left-column">
              <h2 className="approach-section-heading">
                Our Approach to<br />
                {service.category}<br />
                Software Application Development
              </h2>
            </div>
            
            {/* Right Column: Dynamic Alternating Timeline */}
            <div className="approach-right-column" ref={timelineRef}>
              <div className="approach-timeline-wrapper">
                
                {/* Background Axis Line (Inactive) */}
                <div className="approach-timeline-axis-bg"></div>
                
                {/* Scroll-Linked Growing Progress Connecting Line */}
                <div 
                  className="approach-timeline-axis-progress" 
                  style={{
                    height: `${scrollProgress}%`,
                    background: `linear-gradient(to bottom, ${service.color || '#D946EF'} 0%, #7c3aed 100%)`
                  }}
                ></div>

                <div className="approach-steps-list">
                  {approachSteps.map((step, idx) => {
                    // Determine if step bubble triggers activation
                    const triggerThreshold = idx === 0 ? 10 : idx === 1 ? 45 : 80;
                    const isStepActive = scrollProgress >= triggerThreshold;

                    return (
                      <div 
                        key={idx} 
                        className={`approach-timeline-step-row ${idx % 2 === 0 ? 'step-even' : 'step-odd'} ${isStepActive ? 'step-active' : ''}`}
                      >
                        
                        {/* Glowing vertical step counter circle centered on axis */}
                        <div 
                          className="approach-step-circle-indicator" 
                          style={{
                            borderColor: isStepActive ? (service.color || '#D946EF') : '#1e293b',
                            boxShadow: isStepActive ? `0 0 20px ${service.color || '#D946EF'}cc` : 'none',
                            backgroundColor: isStepActive ? '#0b0f19' : '#1e293b'
                          }}
                        >
                          <span className="step-number-text">{idx + 1}</span>
                        </div>

                        {/* Step text detail card aligned left or right depending on row parity */}
                        <div className="approach-step-card-detail">
                          <h3 className="approach-step-title">{step.title}</h3>
                          <p className="approach-step-body">{step.text}</p>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION BOTTOM BANNER */}
      <section className="solutions-bottom-cta-section" style={{
        background: `linear-gradient(135deg, ${service.color}dd 0%, #0c1c3aee 100%)`
      }}>
        <div className="bottom-cta-content">
          <h2 className="bottom-cta-heading">Ready to scale your enterprise digital operations?</h2>
          <p className="bottom-cta-lead">Get in touch with our solutions engineering team today and receive a high-level consultation.</p>
          <div className="bottom-cta-actions">
            <button 
              onClick={() => navigate('/solutions-contact', { state: { subName: service.category, category: service.category, accentColor: service.color } })}
              className="bottom-cta-primary-btn"
              style={{ cursor: 'pointer' }}
            >
              Get in Touch <ArrowUpRight size={18} />
            </button>
            <a href="tel:+1234567890" className="bottom-cta-secondary-btn">
              <Phone size={16} /> Call Specialist
            </a>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </div>
  );
};

export default Solutions;
