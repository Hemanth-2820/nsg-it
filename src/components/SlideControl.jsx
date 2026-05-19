import React from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Sliders, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

const SlideControl = ({
  activeSlide,
  totalSlides,
  isPlaying,
  setIsPlaying,
  onPrev,
  onNext,
  transitionStyle,
  setTransitionStyle,
  onDotClick,
  slideProgress,
  transitionDuration,
  setTransitionDuration
}) => {
  const transitionOptions = [
    "Slide Left",
    "Vertical Wipe",
    "Zoom Portal",
    "Split Mergers",
    "3D Flip",
    "Skew Drift",
    "Letter Cascade",
    "Cyber Glitch",
    "Roller Carousel",
    "Gaussian Vaporize"
  ];

  return (
    <div className="slide-control-panel-wrapper">
      <div className="glass-control-deck">
        
        {/* ROW 1: PREV / PLAY / NEXT & AUTOPLAY CONTROL */}
        <div className="control-deck-row">
          <div className="deck-nav-buttons">
            <button 
              className="deck-nav-btn btn-prev" 
              onClick={onPrev} 
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button 
              className="deck-nav-btn btn-play-pause"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
              aria-label={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
            >
              {isPlaying ? <Pause size={14} fill="#00f2fe" color="#00f2fe" /> : <Play size={14} />}
            </button>

            <button 
              className="deck-nav-btn btn-next" 
              onClick={onNext} 
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* ACTIVE INDEX STATUS */}
          <div className="deck-slide-indicator-text">
            <span className="idx-active">{String(activeSlide + 1).padStart(2, '0')}</span>
            <span className="idx-divider">/</span>
            <span className="idx-total">{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* TRANSITION STYLE SELECTOR */}
          <div className="deck-style-selector">
            <Sliders size={13} className="deck-icon color-cyan" />
            <select
              value={transitionStyle}
              onChange={(e) => setTransitionStyle(e.target.value)}
              className="deck-select"
              title="Select Slide Transition Style"
            >
              {transitionOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ROW 2: PROGRESS BARS (10 DOTS) */}
        <div className="deck-progress-indicators-row">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={idx}
                className={`deck-progress-dot-btn ${isActive ? 'active' : ''}`}
                onClick={() => onDotClick(idx)}
                title={`Jump to Slide ${idx + 1}`}
                aria-label={`Jump to Slide ${idx + 1}`}
              >
                <span className="dot-bar-container">
                  <span 
                    className="dot-bar-fill"
                    style={{
                      width: isActive && isPlaying ? `${slideProgress}%` : isActive ? '100%' : '0%'
                    }}
                  />
                </span>
                <span className="dot-label-number">{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* ROW 3: TRANSITION SPEED SELECTOR */}
        <div className="deck-bottom-fine-tuning">
          <div className="deck-fine-tune-item">
            <span className="fine-label">Autoplay:</span>
            <button 
              className="btn-toggle-switch"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <ToggleRight size={22} className="color-cyan" /> : <ToggleLeft size={22} />}
            </button>
          </div>

          <div className="deck-fine-tune-item flex-grow-1 slider-item">
            <span className="fine-label">Transition: {transitionDuration}ms</span>
            <input 
              type="range"
              min="400"
              max="2000"
              step="100"
              value={transitionDuration}
              onChange={(e) => setTransitionDuration(Number(e.target.value))}
              className="deck-range-slider"
            />
          </div>

          <div className="deck-fine-tune-item badge-active-style">
            <Sparkles size={11} className="color-purple" />
            <span>Active: {transitionStyle}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SlideControl;
