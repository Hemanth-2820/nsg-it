import React, { useRef } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import './SuccessStories.css';

const testimonialData = [
  {
    id: 1,
    title: "How secure e-commerce architecture enabled seamless checkout scaling and a 35% conversion lift for Global Retail Corp",
    names: "Sarah Jenkins & David Chen",
    role: "VP of E-Commerce, Director of Cloud Architecture",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    clientName: "Global Retail Corp"
  },
  {
    id: 2,
    title: "Implementing custom RAG-driven AI search matrices to unlock 98% efficiency in clinical documentation retrieval",
    names: "Dr. Aris Thorne",
    role: "Chief Medical Information Officer, Apex Health Systems",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    clientName: "Apex Health Systems"
  },
  {
    id: 3,
    title: "Migrating legacy core banking frameworks to a high-density, multi-region secure AWS Kubernetes grid",
    names: "Marcus Vance",
    role: "SVP of Infrastructure Security, Fintech Horizon",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    clientName: "Fintech Horizon"
  },
  {
    id: 4,
    title: "Developing a native multi-platform dispatch environment supporting 50,000+ active field coordinates daily",
    names: "Elena Rostova & Sanjay Patel",
    role: "VP of Operations, Lead Software Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    clientName: "Metro Logistics"
  }
];

const SuccessStories = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -344, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  return (
    <section className="success-stories-section" id="testimonials">
      <div className="success-stories-container">
        <div className="success-header">
          <div className="success-header-left">
            <h2 className="success-title">Success Stories</h2>
            <p className="success-subtitle">
              See how we partner with global enterprises to solve challenges, accelerate transformation, and deliver measurable outcomes.
            </p>
          </div>
          <div className="success-header-right">
            <button className="slider-control-btn btn-left" onClick={scrollLeft} aria-label="Previous Stories">
              <ArrowLeft size={20} />
            </button>
            <button className="slider-control-btn btn-right" onClick={scrollRight} aria-label="Next Stories">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="stories-viewport" ref={scrollContainerRef}>
          <div className="stories-track">
            {testimonialData.map((story) => (
              <div key={story.id} className="story-card">
                {/* Background Image */}
                <div className="story-card-bg-wrapper">
                  <img src={story.image} alt={story.names} className="story-card-bg" />
                  <div className="story-card-overlay"></div>
                </div>

                {/* Card Content */}
                <div className="story-card-content">
                  <h3 className="story-card-title">
                    {story.title}
                  </h3>
                  
                  <div className="story-card-footer">
                    <div className="story-author-details">
                      <span className="story-author-name">{story.names}</span>
                      <span className="story-author-role">{story.role}</span>
                    </div>

                    <div className="story-action-btn-wrapper">
                      <a 
                        href="#contact" 
                        className="story-action-btn link-btn" 
                        aria-label={`Learn more about ${story.clientName} case study`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
