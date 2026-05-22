import React, { useState } from 'react';
import Footer from '../components/Footer';
import logo from '../assets/logo.jpg';
import cardCloud from '../assets/card_cloud.png';
import cardDataAnalytics from '../assets/card_data_analytics.png';
import detailMarketing from '../assets/detail_digital_marketing.png';
import detailAiAutomation from '../assets/detail_ai_automation.png';
import detailAiRag from '../assets/detail_ai_rag.png';
import detailAwsDevops from '../assets/detail_aws_devops.png';
import softwareTheme from '../assets/software_development_theme.png';
import cyberWorkspace from '../assets/cyber_workspace.png';
import appDevTheme from '../assets/app_development_theme.png';
import './Blogs.css';

const Blogs = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'AI', 'Tech', 'Marketing'];
  const blogPosts = [
    // ── AI CATEGORY (3 Posts) ──
    {
      id: 1,
      category: 'AI',
      title: 'The RAG Revolution: Customizing Enterprise LLMs with Corporate Data',
      excerpt: 'Learn how Retrieval-Augmented Generation bridges the gap between static foundational models and dynamic proprietary corporate databases to deliver accurate, contextual insights.',
      image: cardDataAnalytics,
      date: 'May 22, 2026',
      readTime: '8 min read'
    },
    {
      id: 2,
      category: 'AI',
      title: 'Cognitive Robotic Process Automation: Elevating Workflow Efficiency',
      excerpt: 'Discover how advanced AI agent frameworks and neural vision networks automate legacy business workflows with autonomous decision-making capabilities.',
      image: detailAiAutomation,
      date: 'May 19, 2026',
      readTime: '7 min read'
    },
    {
      id: 3,
      category: 'AI',
      title: 'Deep Visual Intelligence: Edge Mesh Computer Vision Grids',
      excerpt: 'Deconstruct how real-time diagnostic neural vision grids are deployed on distributed IoT edge layers to optimize manufacturing safety and monitoring parameters.',
      image: detailAiRag,
      date: 'May 16, 2026',
      readTime: '6 min read'
    },

    // ── TECH CATEGORY (3 Posts) ──
    {
      id: 4,
      category: 'Tech',
      title: 'Zero-Trust Cloud Architecture: Securing Enterprise Ecosystems',
      excerpt: 'Explore the fundamentals of enforcing persistent zero-trust perimeter checks and secure data flows across distributed AWS cloud environments and internal API interfaces.',
      image: cardCloud,
      date: 'May 21, 2026',
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'Tech',
      title: 'Continuous Automated Infrastructure Loops: DevSecOps Blueprints',
      excerpt: 'Integrate high-availability server structures with fully automated deployment cycles to construct robust CI/CD pipelines under rigorous security constraints.',
      image: detailAwsDevops,
      date: 'May 18, 2026',
      readTime: '5 min read'
    },
    {
      id: 6,
      category: 'Tech',
      title: 'Micro-Frontend Blueprints: Scaling Complex Enterprise Platforms',
      excerpt: 'A technical deep-dive into decomposing complex monolithic web architectures into fully decoupled, independently deployable, and highly performant micro-frontend layers.',
      image: softwareTheme,
      date: 'May 14, 2026',
      readTime: '5 min read'
    },

    // ── MARKETING CATEGORY (3 Posts) ──
    {
      id: 7,
      category: 'Marketing',
      title: 'Telemetry-Driven Growth: Elevating Brands via Digital Marketing Pipelines',
      excerpt: 'A comprehensive study on leveraging high-density data telemetry, automated multi-channel messaging platforms, and real-time user-persona analytics to scale conversion rates.',
      image: detailMarketing,
      date: 'May 20, 2026',
      readTime: '5 min read'
    },
    {
      id: 8,
      category: 'Marketing',
      title: 'Advanced Brand Telemetry: Predictive Consumer Flow Analysis',
      excerpt: 'Harness cognitive forecasting analytics to anticipate consumer behavioral pathways and proactively deliver personalized outreach strategies before friction points develop.',
      image: cyberWorkspace,
      date: 'May 17, 2026',
      readTime: '6 min read'
    },
    {
      id: 9,
      category: 'Marketing',
      title: 'High-Frequency E-Commerce Grids: Optimizing Conversion Architecture',
      excerpt: 'Examine key structural paradigms in high-performance digital checkout interfaces that minimize operational latencies and drive seamless checkout completions.',
      image: appDevTheme,
      date: 'May 13, 2026',
      readTime: '4 min read'
    }
  ];

  const filteredPosts = activeTab === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <div className="blogs-page-container">
      
      {/* HIGH FIDELITY INSIGHTS HERO BANNER */}
      <section className="insights-hero-banner">
        {/* Left deep-blue sidebar strip */}
        <div className="insights-left-accent"></div>
        
        {/* Middle content details */}
        <div className="insights-text-content">
          <h1 className="insights-main-heading">Insights</h1>
          <p className="insights-description">
            Explore our curated collection of content, where we delve into complex business challenges,
            share industry trends, and provide actionable insights.
          </p>
        </div>
        
        {/* Right plexus graphic */}
        <div className="insights-plexus-graphic"></div>
      </section>

      {/* BLOG GRID SECTION */}
      <section className="blogs-grid-section">
        <div className="blogs-header-row">
          <h2 className="blogs-section-title">Latest Perspectives</h2>
          
          {/* CATEGORY FILTER TABS */}
          <div className="blogs-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="blogs-cards-deck">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-feed-card">
              <div className="card-thumbnail-box">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-thumbnail-image"
                />
              </div>
              <div className="card-details-box">
                <span className="card-category-tag">{post.category}</span>
                <h3 className="card-blog-title">{post.title}</h3>
                <p className="card-blog-excerpt">{post.excerpt}</p>
                <div className="card-meta-row">
                  <span className="meta-date">{post.date}</span>
                  <span className="meta-reading-time">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default Blogs;
