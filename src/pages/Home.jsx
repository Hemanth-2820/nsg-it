import React, { useState, useEffect, useRef, useCallback } from 'react';
import CanvasBackground from '../components/CanvasBackground';
import ServicesCardSection from '../components/ServicesCardSection';
import DigitalJourneyShowcase from '../components/DigitalJourneyShowcase';
import SuccessStories from '../components/SuccessStories';
import LimitlessTogether from '../components/LimitlessTogether';
import CorporateValueSection from '../components/CorporateValueSection';
import CareersSection from '../components/CareersSection';
import Footer from '../components/Footer';

import themeWebDevImg from '../assets/theme_web_dev.png';
import appDevThemeImg from '../assets/app_development_theme.png';
import softwareDevThemeImg from '../assets/software_development_theme.png';
import themeAwsDevopsImg from '../assets/theme_aws_devops.png';
import themeHostingServersImg from '../assets/theme_hosting_servers.png';
import themeDigitalMarketingImg from '../assets/theme_digital_marketing.png';
import themeAiRagImg from '../assets/theme_ai_rag.png';
import themeIvrSolutionsImg from '../assets/theme_ivr_solutions.png';
import themeApiIntegrationsImg from '../assets/theme_api_integrations.png';
import themeEcommerceImg from '../assets/theme_ecommerce.png';
import themeAiAutomationImg from '../assets/theme_ai_automation.png';
import themeSecurityImg from '../assets/theme_security.png';

import { Cpu, Database, Cloud, Brain, Shield, Radio, RefreshCw, Layers, Lock, Activity, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: "Crafting Immersive, High-Performance Digital Flagships",
    theme: "web-development",
    color: "#C78932",
    icon: <Sparkles />,
    image: themeWebDevImg,
    fallbackGradient: "linear-gradient(135deg, #01367A 0%, #01183c 100%)",
    styleSlug: "gaussian-vaporize"
  },
  {
    title: "Engineering Multi-Platform Mobile Experiences with Native Precision",
    theme: "app-development",
    color: "#EBE4CD",
    icon: <Layers />,
    image: appDevThemeImg,
    fallbackGradient: "linear-gradient(135deg, #012760 0%, #01183c 100%)",
    styleSlug: "vertical-wipe"
  },
  {
    title: "Architecting Scalable Core Engines for Modern Enterprise Operations",
    theme: "software-development",
    color: "#C78932",
    icon: <Database />,
    image: softwareDevThemeImg,
    fallbackGradient: "linear-gradient(135deg, #a8721f 0%, #01183c 100%)",
    styleSlug: "slide-left"
  },
  {
    title: "Orchestrating Elastic Cloud Clusters & Automated DevOps Loops",
    theme: "aws-devops",
    color: "#EBE4CD",
    icon: <RefreshCw />,
    image: themeAwsDevopsImg,
    fallbackGradient: "linear-gradient(135deg, #01367A 0%, #012760 100%)",
    styleSlug: "letter-cascade"
  },
  {
    title: "Sustaining High-Availability Cloud Fabrics & Distributed Node Clusters",
    theme: "hosting-servers",
    color: "#C78932",
    icon: <Cloud />,
    image: themeHostingServersImg,
    fallbackGradient: "linear-gradient(135deg, #01183c 0%, #01367A 100%)",
    styleSlug: "zoom-portal"
  },
  {
    title: "Amplifying Brand Telemetry & Dynamic Market Penetration",
    theme: "digital-marketing",
    color: "#EBE4CD",
    icon: <Radio />,
    image: themeDigitalMarketingImg,
    fallbackGradient: "linear-gradient(135deg, #a8721f 0%, #012760 100%)",
    styleSlug: "skew-drift"
  },
  {
    title: "Pioneering Cognitive AI Agents & Intelligent Retrieval Networks",
    theme: "ai-rag-chatbots",
    color: "#C78932",
    icon: <Brain />,
    image: themeAiRagImg,
    fallbackGradient: "linear-gradient(135deg, #01367A 0%, #01183c 100%)",
    styleSlug: "split-mergers"
  },
  {
    title: "Forging Interactive Voice Response Grids & Seamless Soundscapes",
    theme: "ivr-solutions",
    color: "#EBE4CD",
    icon: <Cpu />,
    image: themeIvrSolutionsImg,
    fallbackGradient: "linear-gradient(135deg, #012760 0%, #01183c 100%)",
    styleSlug: "cyber-glitch"
  },
  {
    title: "Unifying Decentralized Enterprise Systems with Seamless Data Bridges",
    theme: "api-integrations",
    color: "#C78932",
    icon: <Lock />,
    image: themeApiIntegrationsImg,
    fallbackGradient: "linear-gradient(135deg, #a8721f 0%, #01183c 100%)",
    styleSlug: "roller-carousel"
  },
  {
    title: "Catalyzing Global Digital Commerce Ecosystems with Secure Transaction Grids",
    theme: "ecommerce-solutions",
    color: "#EBE4CD",
    icon: <Shield />,
    image: themeEcommerceImg,
    fallbackGradient: "linear-gradient(135deg, #01367A 0%, #012760 100%)",
    styleSlug: "3d-flip"
  },
  {
    title: "Driving Hyper-Efficient Process Automation & Cognitive Workflows",
    theme: "ai-automation",
    color: "#C78932",
    icon: <Brain />,
    image: themeAiAutomationImg,
    fallbackGradient: "linear-gradient(135deg, #01183c 0%, #01367A 100%)",
    styleSlug: "split-mergers"
  },
  {
    title: "Enforcing Zero-Trust Isolation Architecture & Persistent Asset Maintenance",
    theme: "security-maintenance",
    color: "#EBE4CD",
    icon: <Shield />,
    image: themeSecurityImg,
    fallbackGradient: "linear-gradient(135deg, #a8721f 0%, #012760 100%)",
    styleSlug: "3d-flip"
  }
];

const Home = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [targetIdx, setTargetIdx] = useState(0);
  const [transitionState, setTransitionState] = useState('idle');
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  const [transitionStyle, setTransitionStyle] = useState('Slide Left');
  const [transitionDuration, setTransitionDuration] = useState(800);
  const slideDuration = 6000;
  
  const navigate = useNavigate();
  const progressIntervalRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const lastUpdateTimeRef = useRef(Date.now());

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

  const triggerTransition = useCallback((nextIndex) => {
    if (transitionState !== 'idle') return;
    setTargetIdx(nextIndex);
    setTransitionState('exiting');
    setSlideProgress(0);

    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIdx(nextIndex);
      setTransitionState('entering');

      transitionTimeoutRef.current = setTimeout(() => {
        setTransitionState('idle');
      }, transitionDuration * 0.75);
    }, transitionDuration * 0.75);
  }, [transitionState, transitionDuration]);

  const handleNext = useCallback(() => {
    const nextVal = (currentIdx + 1) % slides.length;
    triggerTransition(nextVal);
  }, [currentIdx, triggerTransition]);

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
    }, 30);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, transitionState, handleNext]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

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

  const activeSlideInfo = slides[currentIdx];
  const targetSlideInfo = slides[targetIdx];

  const getSlideBackgroundStyle = () => {
    const current = activeSlideInfo;
    const target = targetSlideInfo;

    if (transitionState === 'exiting' || transitionState === 'entering') {
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

  const handleSelectService = (idx) => {
    navigate(`/services/${idx}`);
  };

  return (
    <>
      {/* GLOWING AMBIENT AURAS */}
      <div className="ambient-glow aura-cyan"></div>
      <div className="ambient-glow aura-purple"></div>

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
      <ServicesCardSection onSelectService={handleSelectService} />

      {/* DIGITAL JOURNEY SHOWCASE */}
      <DigitalJourneyShowcase />

      {/* SUCCESS STORIES (TESTIMONIALS) */}
      <SuccessStories />

      {/* LIMITLESS TOGETHER HERO BANNER */}
      <LimitlessTogether />

      {/* CORPORATE VALUES SECTION */}
      <CorporateValueSection />

      {/* CAREERS SECTION */}
      <CareersSection />

      {/* GLOBAL FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
