import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => setIsOpen(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={() => setIsOpen(false)} title="Close">
          &times;
        </button>
        <img src="/popup-image.jpg" alt="NSG Solutions Announcement" className="popup-image" />
      </div>
    </div>
  );
};

export default Popup;
