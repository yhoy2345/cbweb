import React, { useRef, useEffect } from 'react';
import { especialidades } from './datosEspecialidades';
import './Especialidades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { 
  faHeart, 
  faBaby, 
  faMicroscope, 
  faPills,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const Especialidades = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    [sectionRef, titleRef, buttonRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    cardsRef.current.forEach(card => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const iconos = [faHeart, faBaby, faMicroscope, faPills];
  const coloresDegradado = [
    'linear-gradient(135deg, rgba(0, 120, 215, 0.9) 0%, rgba(72, 199, 116, 0.9) 100%)',
    'linear-gradient(135deg, rgba(72, 199, 116, 0.9) 0%, rgba(0, 120, 215, 0.9) 100%)',
    'linear-gradient(135deg, rgba(0, 120, 215, 0.9) 0%, rgba(72, 199, 116, 0.9) 100%)',
    'linear-gradient(135deg, rgba(72, 199, 116, 0.9) 0%, rgba(0, 120, 215, 0.9) 100%)'
  ];

  return (
    <section className="especialidades-premium" id="especialidades" ref={sectionRef}>
      {/* Contenedor principal con fondo transparente para mostrar el global */}
      <div className="es-container">
        {/* Encabezado con animación */}
        <div className="header-section">
          <span className="titulo-especialidades">NUESTRAS ESPECIALIDADES</span>
            <div className="title-underline">
              <div className="underline-animation"></div>
            </div>
          <p className="section-subtitle">
            Especialistas altamente calificados y <span>tecnología de vanguardia</span>
          </p>
        </div>

        {/* Grid de especialidades */}
        <div className="especialidades-grid">
          {especialidades.map((especialidad, index) => (
            <div 
              key={especialidad.id} 
              className="especialidad-card"
              ref={el => cardsRef.current[index] = el}
              style={{ background: coloresDegradado[index % coloresDegradado.length] }}
            >
              <div className="card-inner">
                <div className="icon-animation-container">
                  <div className="icon-orb">
                    <div className="icon-pulse"></div>
                    <div className="icon-rings">
                      <div className="ring"></div>
                      <div className="ring"></div>
                    </div>
                    <div className="especialidad-icon">
                      <FontAwesomeIcon icon={iconos[index]} />
                    </div>
                  </div>
                </div>
                <h3>{especialidad.titulo}</h3>
                <p>{especialidad.descripcion}</p>
                <div className="btn-wrapper">
                  <a href="<button onClick={() => scrollToSection()}>Ver más</button>" className="card-link">
                    <span>Ver más</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <div className="btn-hover-effect"></div>
                  </a>
                </div>
              </div>
              <div className="card-glow"></div>
              <div className="card-particles"></div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        ></motion.div>

        {/* Botón CTA */}
        <div className="cta-section" ref={buttonRef}>
          <a href="#contacto" className="cta-button">
            <span>Ver todas nuestras especialidades</span>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            <div className="btn-glow"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;