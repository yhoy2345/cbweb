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
  faChevronRight,
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

  const coloresDegradado = [
    'linear-gradient(135deg, rgba(0, 120, 215, 0.9) 0%, rgba(72, 199, 116, 0.9) 100%)',
    'linear-gradient(135deg, rgba(72, 199, 116, 0.9) 0%, rgba(0, 120, 215, 0.9) 100%)',
    'linear-gradient(135deg, rgba(0, 120, 215, 0.9) 0%, rgba(72, 199, 116, 0.9) 100%)',
    'linear-gradient(135deg, rgba(72, 199, 116, 0.9) 0%, rgba(0, 120, 215, 0.9) 100%)'
  ];

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

        <div className="especialidades-grid">
          {specialties.slice(0, 8).map((specialty, index) => (
            <motion.div 
              key={specialty.name} 
              className="especialidad-card"
              ref={el => cardsRef.current[index] = el}
              style={{ background: coloresDegradado[index % coloresDegradado.length] }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="card-inner" style={{ padding: '1.5rem' }}>
                <div className="icon-animation-container">
                  <div className="icon-orb">
                    <div className="icon-pulse"></div>
                    <div className="icon-rings">
                      <div className="ring"></div>
                      <div className="ring"></div>
                    </div>
                    <div className="especialidad-icon" style={{ marginBottom: '1rem' }}>
                      <FontAwesomeIcon icon={getIcon(specialty.icon)} size="2x" />
                    </div>
                  </div>
                </div>
                <h3 style={{ margin: '0.5rem 0 0', textAlign: 'center' }}>{specialty.name}</h3>
              </div>
              <div className="card-glow"></div>
              <div className="card-particles"></div>
            </motion.div>
          ))}
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