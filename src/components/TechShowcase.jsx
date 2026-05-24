import React, { useState } from 'react';
import { 
  Database, Layers, Cloud, Brain, Shield, Radio, RefreshCw, Cpu, Activity, UserCheck, 
  Send, Sparkles, Server, Zap, Globe, Lock
} from 'lucide-react';
import logo from '../assets/logo.png';

const TechShowcase = ({ onSelectSlide, currentSlide }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Digital Transformation', msg: '' });
  const [submitted, setSubmitted] = useState(false);

  const pillars = [
    { icon: <Sparkles size={18} />, label: "Web Development", desc: "Immersive high-fidelity client flagships.", color: "#C78932", slideIdx: 0 },
    { icon: <Layers size={18} />, label: "App Development", desc: "Multi-platform mobile environments.", color: "#EBE4CD", slideIdx: 1 },
    { icon: <Database size={18} />, label: "Software Development", desc: "Scalable backend core engines.", color: "#C78932", slideIdx: 2 },
    { icon: <RefreshCw size={18} />, label: "AWS & DevOps", desc: "Continuous automated delivery loops.", color: "#EBE4CD", slideIdx: 3 },
    { icon: <Cloud size={18} />, label: "Hosting & Server Management", desc: "High-availability global server fabrics.", color: "#C78932", slideIdx: 4 },
    { icon: <Radio size={18} />, label: "Digital Marketing", desc: "Advanced brand telemetry & strategy.", color: "#EBE4CD", slideIdx: 5 },
    { icon: <Brain size={18} />, label: "AI & RAG Chatbots", desc: "Cognitive AI search & agent systems.", color: "#C78932", slideIdx: 6 },
    { icon: <Cpu size={18} />, label: "IVR Solutions", desc: "Interactive voice response networks.", color: "#EBE4CD", slideIdx: 7 },
    { icon: <Lock size={18} />, label: "API Integrations", desc: "Secure unified corporate interfaces.", color: "#C78932", slideIdx: 8 },
    { icon: <Shield size={18} />, label: "E-Commerce Solutions", desc: "Secured high-frequency trading grids.", color: "#EBE4CD", slideIdx: 9 },
    { icon: <Brain size={18} />, label: "AI & Automation", desc: "Cognitive robotic process automations.", color: "#C78932", slideIdx: 10 },
    { icon: <Shield size={18} />, label: "Security & Maintenance", desc: "Zero-Trust persistent threat defense.", color: "#EBE4CD", slideIdx: 11 },
  ];

  const stats = [
    { val: "99.99%", desc: "Cloud Architecture Uptime" },
    { val: "250M+", desc: "AI Inference Requests" },
    { val: "0", desc: "Zero-Trust Perimeter Breaches" },
    { val: "45%", desc: "Enterprise Efficiency Boost" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'Web Development', msg: '' });
    }, 3500);
  };

  return (
    <div className="tech-showcase-container">
      {/* SECTOR 1: INTERACTIVE PILLARS */}
      <section className="showcase-section" id="about">
        <div className="section-header">
          <div className="badge-glow">
            <Sparkles size={12} /> Tech Matrix
          </div>
          <h2 className="section-title">Our 12 Core Services</h2>
          <p className="section-subtitle">
            Click any service sector to dynamically transition the Hero Screen background and experience its custom transition mechanism in real-time.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p, idx) => {
            const isActive = currentSlide === p.slideIdx;
            return (
              <button
                key={idx}
                className={`pillar-card ${isActive ? 'active' : ''}`}
                style={{ 
                  '--pillar-color': p.color,
                  borderColor: isActive ? p.color : 'rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => onSelectSlide(p.slideIdx)}
              >
                <div className="pillar-glow-back"></div>
                <div className="pillar-icon-box" style={{ color: p.color }}>
                  {p.icon}
                </div>
                <h3 className="pillar-title">{p.label}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <div className="pillar-arrow">→</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTOR 2: ENTERPRISE METRICS */}
      <section className="showcase-section stats-parallax-section">
        <div className="stats-glass-panel">
          <div className="stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value-neon">{s.val}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTOR 3: SERVICES */}
      <section className="showcase-section" id="services">
        <div className="section-header">
          <div className="badge-glow">
            <Zap size={12} /> Core Competencies
          </div>
          <h2 className="section-title">Enterprise-Grade Integrations</h2>
          <p className="section-subtitle">
            We architect and deploy end-to-end infrastructures that scale infinitely, stay completely secured, and adapt with machine learning.
          </p>
        </div>

        <div className="services-row-grid">
          <div className="service-glass-card">
            <div className="service-icon-heading">
              <Server className="service-icon color-cyan" />
              <h4>Hyper-Scale Architectures</h4>
            </div>
            <p>
              We design and coordinate next-generation, high-availability clouds and microservices clusters. Utilizing Zero-Trust networking and smart edge CDNs, we assure latency stays under 10ms worldwide.
            </p>
            <ul className="service-bullet-list">
              <li>Multi-Region AWS / Azure Redundancy</li>
              <li>High-Density Kubernetes Clusters</li>
              <li>Edge Computing & Serverless Pipeline Nodes</li>
            </ul>
          </div>

          <div className="service-glass-card">
            <div className="service-icon-heading">
              <Brain className="service-icon color-purple" />
              <h4>Enterprise Neural Automation</h4>
            </div>
            <p>
              Harness custom-trained LLMs, transformer models, and visual inspection models to automate deep intellectual overhead operations. Turn disorganized company documentations into absolute active knowledge.
            </p>
            <ul className="service-bullet-list">
              <li>RAG-driven Generative AI Assistants</li>
              <li>Real-time Predictive Analytics Pipelines</li>
              <li>Neural Computer Vision & Diagnostics</li>
            </ul>
          </div>

          <div className="service-glass-card">
            <div className="service-icon-heading">
              <Globe className="service-icon color-pink" />
              <h4>Quantum & IoT Sensor Integrations</h4>
            </div>
            <p>
              Expand physical parameters into real-time digital ecosystems. We build mesh-networked industrial IoT interfaces that funnel billions of telemetry logs directly into AI-powered preventative maintenance units.
            </p>
            <ul className="service-bullet-list">
              <li>Hardware Cryptographic Keys & Tokens</li>
              <li>LoRaWAN & 5G Edge Cluster Protocols</li>
              <li>Predictive Telemetry Processing Nodes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTOR 4: CONTACT & CONSULTATION */}
      <section className="showcase-section" id="contact">
        <div className="contact-grid-wrapper">
          <div className="contact-info-panel">
            <div className="badge-glow">
              <UserCheck size={12} /> Live Support
            </div>
            <h3>Let's Innovate Together</h3>
            <p>
              Ready to construct a high-performance digital strategy? Secure a private architectural audit with our technical engineers. No sales pitches—just raw code, schemas, and blueprint analysis.
            </p>
            
            <div className="contact-details-list">
              <div className="detail-item">
                <span className="detail-label">Global HQ</span>
                <span className="detail-value">PETADATA Towers, Suite 500, Innovation District</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Secured Endpoint</span>
                <span className="detail-value">connect@petadata.innovate</span>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="glass-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Full Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Corporate Email</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@enterprise.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-service">Select Core Interest</label>
                <select
                  id="form-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option>Digital Transformation</option>
                  <option>Data Intelligence</option>
                  <option>Cloud Infrastructure</option>
                  <option>Applied AI & Neural Nets</option>
                  <option>Zero-Trust Security</option>
                  <option>IoT & Edge Mesh Networks</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="form-msg">Project Blueprint Description</label>
                <textarea
                  id="form-msg"
                  required
                  rows="4"
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  placeholder="Outline your tech challenges or architectural goals..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit-neon" disabled={submitted}>
                {submitted ? (
                  <span className="form-success-text">
                    <Sparkles size={16} /> Strategy Audit Requested Successfully!
                  </span>
                ) : (
                  <>
                    <Send size={14} /> Transmit Strategy Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="glass-footer">
        <div className="footer-content">
          <div className="logo-area">
            <div className="logo-img-wrapper">
              <img src={logo} alt="NSG IT Logo" className="navbar-logo-img" />
            </div>
          </div>
          <div className="footer-credits">
            © {new Date().getFullYear()} NSG IT Corp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechShowcase;
