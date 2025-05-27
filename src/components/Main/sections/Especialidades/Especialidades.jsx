import React, { useRef, useEffect } from 'react';
import { specialties } from '../../../Especialidades/Especialidades.data';
import './Especialidades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { 
  faHeart, 
  faBaby, 
  faMicroscope, 
  faPills,
  faPlus,
  faSyringe,
  faHeartbeat,
  faProcedures,
  faAllergies,
  faStethoscope,
  faFemale,
  faVial,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faLungs,
  faXRay
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

  // Mapeo completo de iconos por nombre de especialidad
  const getIcon = (iconName) => {
    const iconMap = {
      'fas fa-syringe': faSyringe,
      'fas fa-heartbeat': faHeartbeat,
      'fas fa-procedures': faProcedures,
      'fas fa-baby': faBaby,
      'fas fa-allergies': faAllergies,
      'fas fa-stethoscope': faStethoscope,
      'fas fa-female': faFemale,
      'fas fa-vial': faVial,
      'fas fa-user-md': faUserMd,
      'fas fa-tooth': faTooth,
      'fas fa-eye': faEye,
      'fas fa-brain': faBrain,
      'fas fa-lungs': faLungs,
      'fas fa-x-ray': faXRay,
      'faHeart': faHeart,
      'faMicroscope': faMicroscope,
      'faPills': faPills
    };
    
    return iconMap[iconName] || faHeart;
  };



  return (
    <section className="especialidades-premium" id="especialidades" ref={sectionRef}>
      <div className="es-container">
        <div className="header-section">
          <motion.span 
            className="titulo-especialidades"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            ref={titleRef}
          >
            NUESTRAS ESPECIALIDADES
          </motion.span>
          <div className="title-underline">
            <motion.div 
              className="underline-animation"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Especialistas altamente calificados y <span>tecnología de vanguardia</span>
          </motion.p>
        </div>

        <div className="specialties-section">
          <div className="specialties-container">
            {/* Panel hexagonal a la izquierda */}
            <div className="honeycomb-container">
              {specialties.slice(0, 6).map((specialty, index) => (
                <motion.div
                  key={`specialty-${index}`}
                  className={`honeycomb-cell honeycomb-cell-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "backOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="honeycomb-content">
                    <div className="honeycomb-icon">
                      <FontAwesomeIcon icon={getIcon(specialty.icon)} size="lg" />
                    </div>
                    <h3 className="honeycomb-title">{specialty.name}</h3>
                  </div>
                  <div className="honeycomb-hexagon"></div>
                </motion.div>
              ))}
            </div>

            {/* Imagen a la derecha */}
            <div className="specialties-image-right">
              <img 
                src="/images/hero/esp.webp" 
                alt="Profesional médico" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>

        <motion.div
          className="cta-section"
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a 
            href="/especialidades" 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver todas nuestras especialidades</span>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            <div className="btn-glow"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Especialidades;