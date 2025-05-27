import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus,
  faSyringe,
  faProcedures,
  faHeartbeat,
  faXRay,
  faPills,
  faMicroscope,
  faStethoscope,
  faBaby,
  faAllergies,
  faFemale,
  faVial,
  faUserMd,
  faTooth,
  faEye,
  faBrain,
  faLungs,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { specialties, searchSectionData } from '../../../Servicios/Servicios.data';
import './Servicios.css';

const Servicios = () => {
  // Refs for animation triggers
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const elementsToObserve = [
      sectionRef.current,
      titleRef.current,
      buttonRef.current,
      ...cardsRef.current.filter(Boolean)
    ];

    elementsToObserve.forEach(element => element && observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Icon mapping utility
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

  const getIcon = (iconName) => iconMap[iconName] || faStethoscope;

  // Animation variants for consistent motion
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "backOut" 
      }
    },
    hover: {
      scale: 1.1,
      zIndex: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      className="servicios-section" 
      id="servicios" 
      ref={sectionRef}
    >
      <div className="servicios-container">
        
        {/* Header Section */}
        <div className="servicios-header">
          <div className="servicios-title-wrapper">
            <h2 className="servicios-title" ref={titleRef}>
              NUESTROS SERVICIOS
            </h2>
            <div className="servicios-title-underline">
              <div className="servicios-underline-animation" />
            </div>
          </div>
          
          <p className="servicios-subtitle">
            {searchSectionData.title.text}{' '}
            <span className="highlight-text">
              {searchSectionData.title.highlight}
            </span>
          </p>
        </div>

        <div className="molecule-premium-container">
          {/* Imagen flotante a la izquierda con efecto de luz */}
          <motion.div 
            className="medical-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/hero/esp.webp"
              alt="Medical professional"
              className="medical-image"
              loading="lazy"
            />
            <div className="image-light-effect"></div>
          </motion.div>

          {/* Estructura molecular derecha con conexiones dinámicas */}
          <div className="molecule-structure-wrapper">
            <svg className="molecule-connectors" width="100%" height="100%" viewBox="0 0 500 500">
              {/* Conexiones principales */}
              <path className="bond" d="M250,100 L250,180" />
              <path className="bond" d="M350,150 L290,200" />
              <path className="bond" d="M350,350 L290,300" />
              <path className="bond" d="M250,400 L250,320" />
              <path className="bond" d="M150,350 L210,300" />
              <path className="bond" d="M150,150 L210,200" />
              {/* Conexiones secundarias */}
              <path className="bond-secondary" d="M250,220 L280,250" />
              <path className="bond-secondary" d="M250,280 L280,250" />
              <path className="bond-secondary" d="M220,250 L210,200" />
              <path className="bond-secondary" d="M220,250 L210,300" />
            </svg>

            {/* Nodos moleculares */}
            {specialties.slice(0, 6).map((specialty, index) => (
              <motion.div
                key={`molecule-node-${index}`}
                className={`molecule-node node-${index + 1}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay: index * 0.15
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 15px 35px -10px rgba(0, 118, 215, 0.4)"
                }}
              >
                <div className="node-core">
                  <div className="node-icon">
                    <FontAwesomeIcon 
                      icon={getIcon(specialty.icon)} 
                      className="node-icon-svg"
                    />
                  </div>
                  <div className="node-label">{specialty.name}</div>
                </div>
                <div className="node-aura"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="cta-section" ref={buttonRef}>
          <motion.a
            href="/servicios"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver todos nuestros servicios</span>
            <FontAwesomeIcon 
              icon={faPlus} 
              className="plus-icon" 
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Servicios;