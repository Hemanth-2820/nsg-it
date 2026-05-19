import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import CanvasBackground from './components/CanvasBackground';
import SlideControl from './components/SlideControl';
import TechShowcase from './components/TechShowcase';
import CorporateValueSection from './components/CorporateValueSection';
import ServicesCardSection from './components/ServicesCardSection';
import DigitalJourneyShowcase from './components/DigitalJourneyShowcase';
import SuccessStories from './components/SuccessStories';
import themeWebDevImg from './assets/theme_web_dev.png';
import appDevThemeImg from './assets/app_development_theme.png';
import softwareDevThemeImg from './assets/software_development_theme.png';
import themeAwsDevopsImg from './assets/theme_aws_devops.png';
import themeHostingServersImg from './assets/theme_hosting_servers.png';
import themeDigitalMarketingImg from './assets/theme_digital_marketing.png';
import themeAiRagImg from './assets/theme_ai_rag.png';
import themeIvrSolutionsImg from './assets/theme_ivr_solutions.png';
import themeApiIntegrationsImg from './assets/theme_api_integrations.png';
import themeEcommerceImg from './assets/theme_ecommerce.png';
import themeAiAutomationImg from './assets/theme_ai_automation.png';
import themeSecurityImg from './assets/theme_security.png';
import { Cpu, Database, Cloud, Brain, Shield, Radio, RefreshCw, Layers, Lock, Activity, Sparkles } from 'lucide-react';
import './App.css';

// 12 Slides Configuration based on company services
const slides = [
  {
    title: "Crafting Immersive, High-Performance Digital Flagships",
    theme: "web-development",
    color: "#d946ef", // Purple matching Fluid HMI
    icon: <Sparkles />,
    image: themeWebDevImg,
    fallbackGradient: "linear-gradient(135deg, #0c0812 0%, #1f112c 100%)",
    styleSlug: "gaussian-vaporize"
  },
  {
    title: "Engineering Multi-Platform Mobile Experiences with Native Precision",
    theme: "app-development",
    color: "#ffb800", // Gold matching Cubes
    icon: <Layers />,
    image: appDevThemeImg,
    fallbackGradient: "linear-gradient(135deg, #090c10 0%, #2b1f02 100%)",
    styleSlug: "vertical-wipe"
  },
  {
    title: "Architecting Scalable Core Engines for Modern Enterprise Operations",
    theme: "software-development",
    color: "#00f2fe", // Cyan matching Circuits
    icon: <Database />,
    image: softwareDevThemeImg,
    fallbackGradient: "linear-gradient(135deg, #020914 0%, #08233f 100%)",
    styleSlug: "slide-left"
  },
  {
    title: "Orchestrating Elastic Cloud Clusters & Automated DevOps Loops",
    theme: "aws-devops",
    color: "#ec4899", // Pink matching DevOps loops
    icon: <RefreshCw />,
    image: themeAwsDevopsImg,
    fallbackGradient: "linear-gradient(135deg, #090314 0%, #290a3a 100%)",
    styleSlug: "letter-cascade"
  },
  {
    title: "Sustaining High-Availability Cloud Fabrics & Distributed Node Clusters",
    theme: "hosting-servers",
    color: "#818cf8", // Blue matching nebula
    icon: <Cloud />,
    image: themeHostingServersImg,
    fallbackGradient: "linear-gradient(135deg, #0b061d 0%, #170d3a 100%)",
    styleSlug: "zoom-portal"
  },
  {
    title: "Amplifying Brand Telemetry & Dynamic Market Penetration",
    theme: "digital-marketing",
    color: "#0df2a3", // Green matching sonar
    icon: <Radio />,
    image: themeDigitalMarketingImg,
    fallbackGradient: "linear-gradient(135deg, #020f12 0%, #092e2c 100%)",
    styleSlug: "skew-drift"
  },
  {
    title: "Pioneering Cognitive AI Agents & Intelligent Retrieval Networks",
    theme: "ai-rag-chatbots",
    color: "#aa3bff", // Violet matching neural
    icon: <Brain />,
    image: themeAiRagImg,
    fallbackGradient: "linear-gradient(135deg, #050515 0%, #0d1b3e 100%)",
    styleSlug: "split-mergers"
  },
  {
    title: "Forging Interactive Voice Response Grids & Seamless Soundscapes",
    theme: "ivr-solutions",
    color: "#a855f7", // Light purple matching Wave
    icon: <Cpu />,
    image: themeIvrSolutionsImg,
    fallbackGradient: "linear-gradient(135deg, #000000 0%, #20042d 100%)",
    styleSlug: "cyber-glitch"
  },
  {
    title: "Unifying Decentralized Enterprise Systems with Seamless Data Bridges",
    theme: "api-integrations",
    color: "#10b981", // Emerald matching isometric cubes
    icon: <Lock />,
    image: themeApiIntegrationsImg,
    fallbackGradient: "linear-gradient(135deg, #020c08 0%, #0a2717 100%)",
    styleSlug: "roller-carousel"
  },
  {
    title: "Catalyzing Global Digital Commerce Ecosystems with Secure Transaction Grids",
    theme: "ecommerce-solutions",
    color: "#ff2d55", // Red matching hex shield
    icon: <Shield />,
    image: themeEcommerceImg,
    fallbackGradient: "linear-gradient(135deg, #0a0a0f 0%, #1e1115 100%)",
    styleSlug: "3d-flip"
  },
  {
    title: "Driving Hyper-Efficient Process Automation & Cognitive Workflows",
    theme: "ai-automation",
    color: "#aa3bff", // Violet matching neural network automation
    icon: <Brain />,
    image: themeAiAutomationImg,
    fallbackGradient: "linear-gradient(135deg, #050515 0%, #0d1b3e 100%)",
    styleSlug: "split-mergers"
  },
  {
    title: "Enforcing Zero-Trust Isolation Architecture & Persistent Asset Maintenance",
    theme: "security-maintenance",
    color: "#ff2d55", // Red matching Hex Shield defense
    icon: <Shield />,
    image: themeSecurityImg,
    fallbackGradient: "linear-gradient(135deg, #0a0a0f 0%, #1e1115 100%)",
    styleSlug: "3d-flip"
  }
];

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [targetIdx, setTargetIdx] = useState(0);
  const [transitionState, setTransitionState] = useState('idle'); // 'idle' | 'exiting' | 'entering'
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  
  // Slide settings
  const [transitionStyle, setTransitionStyle] = useState('Slide Left');
  const [transitionDuration, setTransitionDuration] = useState(800);
  const slideDuration = 6000; // Autoplay slide duration (6s)

  const progressIntervalRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const lastUpdateTimeRef = useRef(Date.now());

  // Slug-mapping helper
  const getSlugByStyleName = (styleName) => {
    switch (styleName) {
      case 'Slide Left': return 'slide-left';
      case 'Vertical Wipe': return 'vertical-wipe';
      case 'Zoom Portal': return 'zoom-portal';
      case 'Split Mergers': return 'split-mergers';
      case '3D Flip': return '3d-flip';
      case 'Skew Drift': return 'skew-drift';
      case 'Letter Cascade': return 'letter-cascade';
      case 'Cyber Glitch': return 'cyber-glitch';
      case 'Roller Carousel': return 'roller-carousel';
      case 'Gaussian Vaporize': return 'gaussian-vaporize';
      default: return 'slide-left';
    }
  };

  // Perform Slide Transition
  const triggerTransition = useCallback((nextIndex) => {
    if (transitionState !== 'idle') return;
    
    setTargetIdx(nextIndex);
    setTransitionState('exiting');
    setSlideProgress(0);

    // After exit animation finishes, switch index and trigger enter animation
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIdx(nextIndex);
      setTransitionState('entering');

      // After enter animation finishes, return to idle
      transitionTimeoutRef.current = setTimeout(() => {
        setTransitionState('idle');
      }, transitionDuration * 0.75);

    }, transitionDuration * 0.75);
  }, [transitionState, transitionDuration]);

  const handleNext = useCallback(() => {
    const nextVal = (currentIdx + 1) % slides.length;
    triggerTransition(nextVal);
  }, [currentIdx, triggerTransition]);

  const handlePrev = useCallback(() => {
    const prevVal = (currentIdx - 1 + slides.length) % slides.length;
    triggerTransition(prevVal);
  }, [currentIdx, triggerTransition]);

  const handleDotClick = (index) => {
    if (index === currentIdx) return;
    triggerTransition(index);
  };

  // Autoplay Timer Loop
  useEffect(() => {
    if (!isPlaying || transitionState !== 'idle') {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    lastUpdateTimeRef.current = Date.now();
    setSlideProgress(0);

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - lastUpdateTimeRef.current;
      const percent = (elapsed / slideDuration) * 100;

      if (percent >= 100) {
        setSlideProgress(100);
        clearInterval(progressIntervalRef.current);
        handleNext();
      } else {
        setSlideProgress(percent);
      }
    }, 30); // 33fps updates

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, transitionState, handleNext]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  // Sync manual select box with the active slide's style preference,
  // but only when in idle mode, to let the user override and choose styles freely!
  useEffect(() => {
    if (transitionState === 'idle') {
      const activeStyleName = slides[currentIdx].styleSlug;
      const reverseMap = {
        'slide-left': 'Slide Left',
        'vertical-wipe': 'Vertical Wipe',
        'zoom-portal': 'Zoom Portal',
        'split-mergers': 'Split Mergers',
        '3d-flip': '3D Flip',
        'skew-drift': 'Skew Drift',
        'letter-cascade': 'Letter Cascade',
        'cyber-glitch': 'Cyber Glitch',
        'roller-carousel': 'Roller Carousel',
        'gaussian-vaporize': 'Gaussian Vaporize'
      };
      setTransitionStyle(reverseMap[activeStyleName] || 'Slide Left');
    }
  }, [currentIdx, transitionState]);

  // Dynamic Background rendering configuration
  const activeSlideInfo = slides[currentIdx];
  const targetSlideInfo = slides[targetIdx];

  const getSlideBackgroundStyle = () => {
    const current = activeSlideInfo;
    const target = targetSlideInfo;

    // Transitioning backgrounds
    if (transitionState === 'exiting' || transitionState === 'entering') {
      // Smoothly blend background configurations during switching
      if (target.image) {
        return {
          backgroundImage: `url(${target.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: `background-image ${transitionDuration}ms ease`
        };
      } else {
        return {
          background: target.fallbackGradient,
          transition: `background ${transitionDuration}ms ease`
        };
      }
    }

    // Default static background
    if (current.image) {
      return {
        backgroundImage: `url(${current.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    } else {
      return {
        background: current.fallbackGradient
      };
    }
  };

  return (
    <div className="app-workspace">
      {/* GLOWING AMBIENT AURAS */}
      <div className="ambient-glow aura-cyan"></div>
      <div className="ambient-glow aura-purple"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <main className="hero-section-viewport" id="home" style={getSlideBackgroundStyle()}>
        
        {/* Background circuit overlays */}
        <div className="background-dark-overlay"></div>

        {/* Dynamic Interactive Canvas */}
        <CanvasBackground 
          activeSlide={transitionState === 'exiting' ? targetIdx : currentIdx} 
          state={transitionState}
        />

        {/* MAIN TEXT TRANSITION CONTAINER */}
        <div className="hero-text-viewport-container">
          <div 
            className={`hero-slide-text-group 
              transition-${transitionState} 
              style-${getSlugByStyleName(transitionStyle)}`
            }
            style={{
              '--transition-ms': `${transitionDuration}ms`
            }}
          >
            {/* Giant Title */}
            <h1 className="hero-giant-title">
              {activeSlideInfo.title}
            </h1>
          </div>
        </div>
      </main>

      {/* HOMEPAGE CALLOUT SECTION */}
      <section className="home-hero-callout">
        <div className="home-hero-callout-inner">
          <h2 className="hero-giant-title">Empower Your Business with Access to World-Class Products, Services, and Solutions</h2>
          <p className="hero-description">We cover your connected IT ecosystem.</p>
        </div>
      </section>
      
      {/* SERVICES CARD DECK SECTION */}
      <ServicesCardSection />

      {/* DIGITAL JOURNEY SHOWCASE */}
      <DigitalJourneyShowcase />

      {/* SUCCESS STORIES (TESTIMONIALS) */}
      <SuccessStories />

      {/* BRANDING VALUE SECTION */}
      <CorporateValueSection />
    </div>
  );
}

export default App;
