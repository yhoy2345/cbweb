import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faAmbulance, 
  faProcedures,
  faChevronRight,
  faPlus,
  faAtom,
  faShapes,
  faWaveSquare,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import './Servicios.css';

const Servicios = () => {
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

  const servicios = [
    {
      id: 1,
      nombre: "Consulta Externa",
      descripcion: "Atención médica en consultorios externos",
      icono: faStethoscope,
      color: "#0078d7"
    },
    {
      id: 2,
      nombre: "Cardiología",
      descripcion: "Diagnóstico y tratamiento cardíaco",
      icono: faHeartbeat,
      color: "#0078d7"
    },
    {
      id: 3,
      nombre: "Urgencias",
      descripcion: "Atención médica de emergencia",
      icono: faAmbulance,
      color: "#0078d7"
    },
    {
      id: 4,
      nombre: "Hospitalización",
      descripcion: "Cuidado médico hospitalario",
      icono: faProcedures,
      color: "#0078d7"
    }
  ];

  return (
    <section className="servicios-section" id="servicios" ref={sectionRef}>
      {/* Fondo premium con múltiples elementos */}
      <div className="background-elements">
        <div className="floating-circles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="floating-circle" style={{
              '--size': `${Math.random() * 10 + 5}px`,
              '--delay': `${i * 3}s`,
              '--duration': `${Math.random() * 20 + 20}s`,
              '--opacity': Math.random() * 0.2 + 0.05,
              '--x-start': `${Math.random() * 100}%`,
              '--y-start': `${Math.random() * 100}%`
            }}>
              <FontAwesomeIcon icon={faCircle} />
            </div>
          ))}
        </div>
        <div className="animated-grid"></div>
        <div className="floating-shapes">
          <div className="shape triangle"></div>
          <div className="shape square"></div>
          <div className="shape circle"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="content-container">
        {/* Título con línea animada */}
        <div className="title-wrapper">
          <h2 className="section-title" ref={titleRef}>NUESTROS SERVICIOS</h2>
          <div className="title-underline">
            <div className="underline-animation"></div>
          </div>
        </div>
        
        <p className="section-subtitle">
          Excelencia médica a tu alcance con los <span>mejores servicios</span>
        </p>
        
        {/* Tarjetas de servicios */}
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div 
              className="servicio-card" 
              key={servicio.id}
              ref={el => cardsRef.current[index] = el}
              style={{ '--card-color': servicio.color }}
            >
              <div className="card-inner">
                <div className="icon-animation-container">
                  <div className="icon-orb">
                    <div className="icon-pulse"></div>
                    <div className="icon-rings">
                      <div className="ring"></div>
                      <div className="ring"></div>
                    </div>
                    <div className="servicio-icon">
                      <FontAwesomeIcon icon={servicio.icono} />
                    </div>
                  </div>
                </div>
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
                <div className="btn-wrapper">
                  <a href="#" className="btn-ver-mas">
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

        {/* Botón ver todos */}
        <div className="btn-todos-container" ref={buttonRef}>
          <a href="#" className="btn-ver-todos">
            <span>Ver todos nuestros servicios</span>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            <div className="btn-todos-glow"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Servicios;