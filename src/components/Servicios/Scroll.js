// src/components/Servicios/scroll.js
import { useEffect } from 'react';

// Hook personalizado para animación al hacer scroll
const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
