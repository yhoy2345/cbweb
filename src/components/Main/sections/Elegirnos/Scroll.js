// Scroll.js - Versión mejorada
import { gsap } from "gsap";

export const aplicarScrollCarrusel = (elementRef, maxOffset = 80, scrollFactor = 0.15) => {
  let lastScrollY = window.scrollY;
  let animationFrameId;
  let isTicking = false;
  
  // Configuración inicial para hardware acceleration
  if (elementRef.current) {
    gsap.set(elementRef.current, {
      willChange: 'transform',
      transformStyle: 'preserve-3d'
    });
  }

  const updateOffset = () => {
    if (!elementRef.current) return;
    
    const scrollY = window.scrollY;
    const scrollDelta = scrollY - lastScrollY;
    lastScrollY = scrollY;

    const currentTransform = gsap.getProperty(elementRef.current, 'y') || 0;
    let newOffset = parseFloat(currentTransform) + scrollDelta * scrollFactor;
    
    // Limitar el offset máximo
    newOffset = gsap.utils.clamp(-maxOffset, maxOffset, newOffset);
    
    // Aplicar la transformación con GSAP para mejor rendimiento
    gsap.to(elementRef.current, {
      y: newOffset,
      duration: 0.8,
      ease: "power1.out",
      overwrite: true
    });
    
    isTicking = false;
  };

  const handleScroll = () => {
    if (!isTicking) {
      isTicking = true;
      animationFrameId = requestAnimationFrame(updateOffset);
    }
  };

  // Configurar el event listener con passive para mejor performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    
    // Limpiar las transformaciones al desmontar
    if (elementRef.current) {
      gsap.set(elementRef.current, {
        y: 0,
        willChange: 'auto',
        transformStyle: 'flat'
      });
    }
  };
};