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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 118, 215, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

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

  return (
    <motion.section 
      className="servicios-section" 
      id="servicios" 
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="servicios-container">
        {/* Header Section */}
        <div className="servicios-header">
          <motion.div 
            className="servicios-title-wrapper"
            variants={titleVariants}
            ref={titleRef}
          >
            <h2 className="servicios-title">
              NUESTROS SERVICIOS
            </h2>
            <div className="servicios-title-underline">
              <motion.div 
                className="servicios-underline-animation"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
          
          <motion.p 
            className="servicios-subtitle"
            variants={cardVariants}
          >
            {searchSectionData.title.text}{' '}
            <span className="highlight-text">
              {searchSectionData.title.highlight}
            </span>
          </motion.p>
        </div>

        <div className="molecule-premium-container">
          {/* Contenedor de imagen izquierda */}
          <motion.div 
            className="medical-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <img
              src="/images/hero/servi.webp"
              alt="Medical professional"
              className="medical-image"
              loading="lazy"
            />
            <div className="image-light-effect"></div>
          </motion.div>

          {/* Estructura molecular derecha - Versión simplificada y profesional */}
          <div className="molecule-structure-wrapper">

            {/* Nodos moleculares - versión profesional */}
            {specialties.slice(0, 6).map((specialty, index) => (
              <motion.div
                key={`node-${index}`}
                className={`molecule-node node-${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 120, 215, 0.2)"
                }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 10
                }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                <div className="node-core">
                  <div className="node-icon-wrapper">
                    <motion.div 
                      className="node-icon"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <FontAwesomeIcon 
                        icon={getIcon(specialty.icon)} 
                        className="node-icon-svg"
                      />
                    </motion.div>
                  </div>
                  <motion.p 
                    className="node-label"
                    whileHover={{ color: "#0078d7" }}
                  >
                    {specialty.name}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div 
          className="cta-section" 
          ref={buttonRef}
          variants={cardVariants}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="/servicios"
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 118, 215, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ver todos nuestros servicios</span>
            <FontAwesomeIcon 
              icon={faPlus} 
              className="plus-icon" 
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Servicios;