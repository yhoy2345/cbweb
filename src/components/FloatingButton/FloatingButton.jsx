import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingButton.css';

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100 && !hasScrolled) {
        setHasScrolled(true);
        setIsVisible(true);
      } else if (scrollPosition <= 100 && hasScrolled) {
        setHasScrolled(false);
        setIsVisible(false);
      }
    };

    // Efecto de pulso cada 8 segundos
    const pulseInterval = setInterval(() => {
      if (hasScrolled) {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 2000);
      }
    }, 8000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, [hasScrolled]);

  const handleClick = () => {
    setIsPulsing(true);
    setTimeout(() => {
      window.open('https://wa.me/51962225881', '_blank');
    }, 300);
  };

  return (
    <div 
      className={`floating-button-container ${isVisible ? 'visible' : ''} ${isPulsing ? 'pulse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="particles"></div>
      <div className="halo"></div>
      <button 
        className={`floating-button ${isHovered ? 'hovered' : ''}`} 
        onClick={handleClick}
      >
        <div className="bu-icon-container">
          <FaWhatsapp className="whatsapp-icon" />
        </div>
        <span className="button-text">AGENDAR AHORA</span>
        <div className="liquid-effect"></div>
      </button>
      <div className="reflection"></div>
    </div>
  );
};

export default FloatingButton;