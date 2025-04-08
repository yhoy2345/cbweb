import { useState, useEffect } from 'react';

export const useCarrusel = (totalSlides, autoPlay = true, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      resetToFirst();
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      resetToLast();
    }
  };

  const resetToFirst = () => {
    setTransitionEnabled(false);
    setCurrentIndex(1);
    setTimeout(() => setTransitionEnabled(true), 10);
  };

  const resetToLast = () => {
    setTransitionEnabled(false);
    setCurrentIndex(totalSlides - 2);
    setTimeout(() => setTransitionEnabled(true), 10);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    transitionEnabled
  };
};