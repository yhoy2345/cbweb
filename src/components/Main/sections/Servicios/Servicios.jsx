import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faAmbulance, 
  faProcedures,
  faChevronRight,
  faPlus
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
      nombre: "Consultas Externas",
      descripcion: "Atención médica en consultorios externos",
      icono: faStethoscope,
      color: "#0078d7"
    },
    {
      id: 2,
      nombre: "Emergencias las 24 horas",
      descripcion: "Atención inmediata con equipo especializado",
      icono: faHeartbeat,
      color: "#0078d7"
    },
    {
      id: 3,
      nombre: "Hospitalización",
      descripcion: "Cuidados médicos con comodidad y calidad",
      icono: faAmbulance,
      color: "#0078d7"
    },
    {
      id: 4,
      nombre: "Centro Quirúrgico",
      descripcion: "Salas equipadas con tecnología avanzada",
      icono: faProcedures,
      color: "#0078d7"
    }
  ];

  return (
    <section className="servicios-section" id="servicios" ref={sectionRef}>
      {/* Contenido principal - Ya no lleva fondo propio */}
      <div className="servicios-container">
        {/* Título con línea animada */}
        <div className="servicios-title-wrapper">
          <h2 className="servicios-title" ref={titleRef}>NUESTROS SERVICIOS</h2>
          <div className="servicios-title-underline">
            <div className="servicios-underline-animation"></div>
          </div>
        </div>
        
        <p className="servicios-subtitle">
          Excelencia médica a tu alcance con los <span>mejores servicios</span>
        </p>
        
        {/* Tarjetas de servicios */}
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div 
              className="servicios-card" 
              key={servicio.id}
              ref={el => cardsRef.current[index] = el}
              style={{ '--servicios-card-color': servicio.color }}
            >
              <div className="servicios-card-inner">
                <div className="servicios-icon-container">
                  <div className="servicios-icon-orb">
                    <div className="servicios-icon-pulse"></div>
                    <div className="servicios-icon-rings">
                      <div className="servicios-icon-ring"></div>
                      <div className="servicios-icon-ring"></div>
                    </div>
                    <div className="servicios-icon">
                      <FontAwesomeIcon icon={servicio.icono} />
                    </div>
                  </div>
                </div>
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
                <div className="servicios-btn-wrapper">
                  <a href="<button onClick={() => scrollToSection()}>Ver más</button>" className="servicios-btn">
                    <span>Ver más</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <div className="servicios-btn-hover-effect"></div>
                  </a>
                </div>
              </div>
              <div className="servicios-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Botón ver todos */}
        <div className="servicios-btn-todos-container" ref={buttonRef}>
          <a href="<button onClick={() => scrollToSection()}>Ver más</button>" className="servicios-btn-todos">
            <span>Ver todos nuestros servicios</span>
            <FontAwesomeIcon icon={faPlus} className="servicios-plus-icon" />
            <div className="servicios-btn-glow"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Servicios;