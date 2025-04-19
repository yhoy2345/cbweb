import { useState, useEffect, useCallback } from "react";

export const useCarrusel = (totalSlides, autoPlay = true, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [nextSlide, interval, autoPlay]);

  return { currentIndex, nextSlide, prevSlide, goToSlide };
};
