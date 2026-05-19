import React from 'react';
import './ServicesCardSection.css';

const servicesData = [
  {
    title: "Web Development",
    description: "Crafting immersive, high-performance digital flagships with responsive elegance and custom UX designs.",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-software-solutions/"
  },
  {
    title: "App Development",
    description: "Engineering multi-platform mobile experiences with native precision, robust performance, and fluid layouts.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-software-solutions/"
  },
  {
    title: "Software Development",
    description: "Architecting scalable core engines and microservices networks to power complex enterprise applications.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-software-solutions/"
  },
  {
    title: "AWS & DevOps",
    description: "Orchestrating elastic cloud fabrics, micro-clusters, and automated continuous delivery automation loops.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/cloud-solutions/"
  },
  {
    title: "Hosting & Server Management",
    description: "Sustaining high-availability cloud hosting structures, distributed web systems, and dedicated nodes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/cloud-solutions/"
  },
  {
    title: "Digital Marketing",
    description: "Amplifying brand telemetry, market penetration, high-conversion SEO channels, and client outreach.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-operations-solutions/"
  },
  {
    title: "AI & RAG Chatbots",
    description: "Pioneering cognitive conversation interfaces, intelligent retrieval networks, and generative chatbots.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/data-analytics-solutions/"
  },
  {
    title: "IVR Solutions",
    description: "Forging interactive voice response configurations, complex call structures, and high-fidelity soundscapes.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-operations-solutions/"
  },
  {
    title: "API Integrations",
    description: "Unifying decentralized platforms with robust secure API wrappers and low-latency system data streams.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-software-solutions/"
  },
  {
    title: "E-Commerce Solutions",
    description: "Catalyzing global digital commerce structures with high-availability search systems and payment engines.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/digital-software-solutions/"
  },
  {
    title: "AI & Automation",
    description: "Driving hyper-efficient business processes, automated telemetry tracking, and visual robot process grids.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/data-analytics-solutions/"
  },
  {
    title: "Security & Maintenance",
    description: "Enforcing zero-trust cybersecurity networks, perimeter firewalls, and active code compliance checks.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    link: "https://hexaware.com/services/cloud-solutions/"
  }
];

const ServicesCardSection = () => {
  return (
    <section className="services-card-section">
      {/* Background grids matching continuous value flow */}
      <div className="services-section-grid-overlay"></div>
      
      <div className="services-section-container">
        <div className="services-cards-grid">
          {servicesData.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="service-pillar-card"
            >
              <div className="card-top-content">
                <h3 className="card-pillar-title">{item.title}</h3>
                <p className="card-pillar-description">{item.description}</p>
              </div>

              {/* Hexagonal Navigation Button */}
              <div className="card-hexagon-btn">
                <span className="arrow-sym">&gt;</span>
              </div>

              {/* Diagonal Cut Photo Mask - Slides up and fades in on hover */}
              <div className="card-diagonal-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-diagonal-photo"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardSection;
