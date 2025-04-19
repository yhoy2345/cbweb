import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faUserMd,
  faHeartbeat,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useCarrusel } from '../CarruselHero/useCarrusel';
import "./Elegirnos.css";

const slides = [
  { id: 1, src: "/images/hero/fondo1.jpg", alt: "Slide 1" },
  { id: 2, src: "/images/hero/fondo2.jpg", alt: "Slide 2" },
  { id: 3, src: "/images/hero/fondo3.jpg", alt: "Slide 3" },
];

const PorQueElegirnos = () => {
  const sectionRef = useRef(null);
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarrusel(slides.length, true, 5000);

  // Animaciones GSAP título y subrayado
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const titleEl = section.querySelector(".elegirnos-title");
    const underlineEl = section.querySelector(".elegirnos-underline-animation");
    if (!titleEl || !underlineEl) return;

    gsap.fromTo(
      titleEl,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      underlineEl,
      { width: 0 },
      { width: "100%", duration: 1.2, ease: "power2.out", delay: 0.3 }
    );

    section.classList.add("animate-in");
  }, []);

  return (
    <section className="por-que-elegirnos" id="elegirnos" ref={sectionRef}>
      <div className="elegirnos-contenedor">
        <div className="elegirnos-title-wrapper">
          <h2 className="elegirnos-title">¿POR QUÉ ELEGIRNOS?</h2>
          <div className="elegirnos-title-underline">
            <div className="elegirnos-underline-animation"></div>
          </div>
        </div>

        <p className="elegirnos-subtitle">
          Porque contamos con <span>calidad, modernidad y compromiso.</span>
        </p>

        <div className="elegirnos-flex">
          <div className="carrusel-razones">
            <div className="carrusel-container-razones">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`carrusel-slide-razones ${idx === currentIndex ? "active" : ""}`}
                >
                  <img
                    className="imagen-carrusel"
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button
              className="carrusel-btn-razones prev-btn-razones"
              onClick={prevSlide}
              aria-label="Slide anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="carrusel-btn-razones next-btn-razones"
              onClick={nextSlide}
              aria-label="Slide siguiente"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="carrusel-indicadores-razones">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`indicador-razones ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="razones">
            <div className="razones-container">
              <div className="razon-card">
                <div className="razon-icon-wrapper">
                  <FontAwesomeIcon icon={faUserMd} className="razon-icon" />
                </div>
                <h3>El Mejor Staff Médico</h3>
                <p>
                  Médicos de primer nivel y tecnólogos especializados,
                  capacitados en las más modernas aplicaciones del sector salud.
                </p>
                <a href="/" className="elegirnos-btn-conoce-mas">
                  <span>CONOCE AL STAFF</span>
                  <div className="elegirnos-btn-underline"></div>
                </a>
              </div>

              <div className="razon-card">
                <div className="razon-icon-wrapper">
                  <FontAwesomeIcon icon={faHeartbeat} className="razon-icon" />
                </div>
                <h3>Tecnología de Vanguardia</h3>
                <p>
                  Utilizamos equipos modernos y técnicas avanzadas para un
                  diagnóstico preciso y tratamientos efectivos.
                </p>
                <a href="/" className="elegirnos-btn-conoce-mas">
                  <span>VER TECNOLOGÍA</span>
                  <div className="elegirnos-btn-underline"></div>
                </a>
              </div>

              <div className="razon-card">
                <div className="razon-icon-wrapper">
                  <FontAwesomeIcon
                    icon={faHandHoldingHeart}
                    className="razon-icon"
                  />
                </div>
                <h3>Atención Personalizada</h3>
                <p>
                  Nos preocupamos por cada paciente, brindando un trato humano y
                  profesional en todo momento.
                </p>
                <a href="/" className="elegirnos-btn-conoce-mas">
                  <span>DESCUBRE NUESTRA ATENCIÓN</span>
                  <div className="elegirnos-btn-underline"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueElegirnos;