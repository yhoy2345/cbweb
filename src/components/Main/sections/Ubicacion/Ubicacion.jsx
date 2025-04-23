import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import "./Ubicacion.css";
import { FaMapMarkerAlt, FaTree, FaAmbulance, FaWheelchair, FaWifi, FaHandHoldingHeart } from 'react-icons/fa';

const Ubicacion = () => {
  const sectionRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

  // Animaciones GSAP
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const titleEl = section.querySelector(".titulo-ubi");
    const underlineEl = section.querySelector(".ubi-underline-animation");
    if (!titleEl || !underlineEl) return;

    const tl = gsap.timeline();
    
    tl.fromTo(
      titleEl,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      underlineEl,
      { width: 0 },
      { width: "100%", duration: 1.2, ease: "power2.out" },
      "-=0.5"
    );

    // Animación para los elementos de referencia
    gsap.from(".cuadro-referencia", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.8,
      ease: "back.out(1.7)"
    });

    section.classList.add("animate-in");
  }, []);

  const handleMapLoad = () => {
    setMapLoaded(true);
    gsap.from(".mapa", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out"
    });
  };

  const markers = [
    { id: 1, title: "Parque Amarilis", description: "A media cuadra de nuestra clínica", lat: -9.9255, lng: -76.2415 },
    { id: 2, title: "Indecopi", description: "Frente a nuestras instalaciones", lat: -9.9248, lng: -76.2418 },
    { id: 3, title: "Estacionamiento", description: "Área exclusiva para pacientes", lat: -9.9252, lng: -76.2412 }
  ];

  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
    gsap.to(".mapa iframe", {
      scale: 1.02,
      duration: 0.3,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <section className="ubicacion" id="ubicacion" ref={sectionRef}>
      <div className="ubi-contenedor">
        <div className="ubi-title-wrapper">
          <span className="ubi-title">UBÍCANOS EN:</span>
          <div className="ubi-title-underline">
            <div className="ubi-underline-animation"></div>
          </div>
          <p className="ubi-subtitle">
            Especialistas altamente calificados y <span>tecnología de vanguardia</span>
          </p>
        </div>

        <div className="ubicacion-contenido">
          <div className="mapa-container">
            <div className={`mapa ${mapLoaded ? 'loaded' : ''}`}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.107059251303!2d-76.24199902623279!3d-9.92504120603042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e2d16086df%3A0x1c0d23e918e06aa0!2zQ2zDrW5pY2EgQm9sw612YXI!5e0!3m2!1ses-419!2spe!4v1742331745995!5m2!1ses-419!2spe&markers=color:red%7C-9.925041,-76.241999`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de la clínica"
                onLoad={handleMapLoad}
              />
            </div>
            
            <div className="mapa-controls">
              <div className="mapa-markers">
                <h3>Referencias:</h3>
                <ul>
                  {markers.map(marker => (
                    <li 
                      key={marker.id} 
                      className={activeMarker?.id === marker.id ? 'active' : ''}
                      onClick={() => handleMarkerClick(marker)}
                    >
                      <FaMapMarkerAlt className="marker-icon" />
                      <div>
                        <strong>{marker.title}</strong>
                        <p>{marker.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mapa-actions">
                <button className="mapa-button">
                  <a 
                    href="https://www.google.com/maps/dir//Clínica+Bolívar/data=!4m8!4m7!1m0!1m5!1m1!1s0x91a7c2e2d16086df:0x1c0d23e918e06aa0!2m2!1d-76.241999!2d-9.925041" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Cómo llegar
                  </a>
                </button>
                <button className="mapa-button">
                  <a 
                    href="https://www.google.com/maps/place/Clínica+Bolívar/@-9.9250412,-76.241999,17z/data=!3m1!4b1!4m5!3m4!1s0x91a7c2e2d16086df:0x1c0d23e918e06aa0!8m2!3d-9.9250412!4d-76.241999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver en Maps
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="imagen-clinica-container">
            <div className="imagen-clinica">
              <img 
                src="/images/hero/fondo1.jpg" 
                alt="Imagen de la clínica" 
                onLoad={() => {
                  gsap.from(".imagen-clinica", {
                    opacity: 0,
                    x: 20,
                    duration: 1,
                    delay: 0.3,
                    ease: "power2.out"
                  });
                }}
              />
              <div className="imagen-overlay">
                <h3>Nuestra Instalacion</h3>
                <p>Ambiente diseñado para su comodidad y bienestar</p>
              </div>
            </div>
          </div>
        </div>

        <section className="seccion-referencias">
          <h2 className="referencias-title">Referencias</h2>
          <div className="referencias-contenedor">
            <div className="cuadro-referencia">
              <div className="icono-container">
                <FaMapMarkerAlt className="icono-animado" />
              </div>
              <p>Estamos ubicados a media cuadra del Parque Amarilis.</p>
            </div>
            <div className="cuadro-referencia">
              <div className="icono-container">
                <FaTree className="icono-animado" />
              </div>
              <p>Frente a la Indecopi.</p>
            </div>
            <div className="cuadro-referencia">
              <div className="icono-container">
                <FaAmbulance className="icono-animado" />
              </div>
              <p>Acceso directo a servicios de emergencia las 24 horas.</p>
            </div>
            <div className="cuadro-referencia">
              <div className="icono-container">
                <FaWheelchair className="icono-animado" />
              </div>
              <p>Acceso para personas con movilidad reducida.</p>
            </div>
            <div className="cuadro-referencia">
              <div className="icono-container">
                <FaWifi className="icono-animado" />
              </div>
              <p>Wi-Fi disponible en todas las áreas.</p>
            </div>
          </div>
          <div className="mensaje-final-contenedor">
            <div className="icono-container">
              <FaHandHoldingHeart className="icono-mensaje" />
            </div>
            <p className="mensaje-final">
              ¡Te esperamos en nuestra clínica para brindarte la mejor atención!
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Ubicacion;