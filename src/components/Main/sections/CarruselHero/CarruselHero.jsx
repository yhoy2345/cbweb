import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CarruselHero.css';

const CarruselHero = () => {
    const imagenes = [
        { id: 1, src: '/images/hero/fondo.1.jpg', alt: 'Imagen 1' },
        { id: 2, src: '/images/hero/fondo.2.jpg', alt: 'Imagen 2' },
        { id: 3, src: '/images/hero/fondo.3.jpg', alt: 'Imagen 3' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }, [imagenes.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? imagenes.length - 1 : prev - 1));
    }, [imagenes.length]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="carrusel-container">
            {/* Slides */}
            {imagenes.map((imagen, index) => (
                <div 
                    key={imagen.id}
                    className={`carrusel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                    <img 
                        src={imagen.src} 
                        alt={imagen.alt}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ))}

            {/* Borde animado */}
            <div className="animated-border"></div>

            {/* Controles */}
            <div className="carrusel-controls">
                <button className="carrusel-btn" onClick={prevSlide} aria-label="Anterior">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="carrusel-btn" onClick={nextSlide} aria-label="Siguiente">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            {/* Indicadores */}
            <div className="carrusel-indicadores">
                {imagenes.map((_, index) => (
                    <span 
                        key={index}
                        className={`indicador ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarruselHero;