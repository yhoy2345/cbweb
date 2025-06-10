import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Ubicacion.css';
import {
  FaBuilding,
  FaAmbulance,
  FaClock,
  FaWifi,
  FaMedkit,
  FaTree,
  FaHandHoldingHeart,
} from 'react-icons/fa';

const Ubicacion = () => {
  const sectionRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(true );
  const [activeMarker, setActiveMarker] = useState(null);
  const [activeFacility, setActiveFacility] = useState(null);

  useEffect(() => {
    setActiveMarker(markers[0]);
    setActiveFacility(facilities[0]);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = {
      titleEl: section.querySelector('.ubi-title'),
      underlineEl: section.querySelector('.ubi-underline'),
      facilityItems: section.querySelectorAll('.facility-item'),
      markerItems: section.querySelectorAll('.marker-item')
    };

    // Verificar que todos los elementos existen
    if (!elements.titleEl || !elements.underlineEl) return;

    const tl = gsap.timeline();
    tl.fromTo(
      elements.titleEl,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    ).fromTo(
      elements.underlineEl,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1, ease: 'power2.out' },
      '-=0.5'
    );

    // Animación más robusta para los items
    if (elements.facilityItems.length && elements.markerItems.length) {
      gsap.from([...elements.facilityItems, ...elements.markerItems], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: 'back.out(1.7)',
      });
    }
  }, []);

  const handleMapLoad = () => {
    console.log('Mapa cargado exitosamente');
    setMapLoaded(true);
    gsap.from('.mapa-iframe', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
    });
  };

  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
    gsap.to('.mapa-iframe', {
      scale: 1.02,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });
  };

  const handleFacilityClick = (facility) => {
    setActiveFacility(facility);
    gsap.to('.facility-item.active', {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });
  };

  const iconMap = {
    tree: <FaTree />,
    building: <FaBuilding />,
    clock: <FaClock />,
    wifi: <FaWifi />,
    ambulance: <FaAmbulance />,
    medkit: <FaMedkit />,
  };

  const markers = [
  { id: 1, title: 'Parque Amarilis', description: 'A media cuadra de nuestra clínica', icon: 'tree' },
  { id: 2, title: 'Indecopi', description: 'Frente a nuestras instalaciones', icon: 'building' },
  ];


  const facilities = [
    {
      id: 1,
      title: 'Sala de Espera',
      description: 'Área cómoda con TV, aire acondicionado y revistas',
      icon: 'clock',
    },
    {
      id: 2,
      title: 'Zona Wi-Fi',
      description: 'Conexión gratuita y rápida para todos nuestros pacientes',
      icon: 'wifi',
    },
    {
      id: 3,
      title: 'Ambulancia',
      description: 'Servicio de atención de emergencia disponible 24/7',
      icon: 'ambulance',
    },
    {
      id: 4,
      title: 'Urgencias',
      description: 'Atención inmediata para casos de emergencia las 24 horas',
      icon: 'medkit',
    },
  ];


  return (
    <section className="ubicacion" id="ubicacion" ref={sectionRef}>
      <div className="ubi-container">
        <header className="ubi-header">
          <h2 className="ubi-title">UBÍCANOS EN:</h2>
          <div className="ubi-underline">
            <div className="ubi-underline-animation"></div>
          </div>
          <p className="ubi-subtitle">
            Visítanos y experimenta atención de primer nivel <span>diseñada para ti</span>
          </p>
        </header>

        <div className="ubi-content">
          <div className="mapa-section">
            <div className={`mapa-wrapper ${mapLoaded ? 'loaded' : ''}`}>
              <iframe
                className="mapa-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1069957112477!2d-76.2394241!3d-9.925046499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e2d16086df%3A0x1c0d23e918e06aa0!2zQ2zDrW5pY2EgQm9sw612YXI!5e0!3m2!1ses-419!2spe!4v1748991709290!5m2!1ses-419!2spe"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de la Clínica Bolívar"
                onLoad={handleMapLoad}
                onError={() => {
                  console.error('Error al cargar el mapa');
                  setMapLoaded(true);
                }}
                aria-label="Ubicación de la Clínica Bolívar en el mapa"
              />
              {!mapLoaded && (
                <div className="mapa-loading">
                  <div className="loading-spinner"></div>
                  <p>Cargando mapa...</p>
                </div>
              )}
            </div>
            <div className="mapa-controls">
              <div className="mapa-markers">
                <h3 className="markers-title">Referencias:</h3>
                <ul className="markers-list">
                  {markers.map(({ id, title, description, icon }) => (
                    <li key={id} className="marker-item">
                      <div className="marker-icon">{iconMap[icon]}</div>
                      <div className="marker-content">
                        <h4 className="marker-title">{title}</h4>
                        <p className="marker-description">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mapa-actions">
                <a
                  href="https://www.google.com/maps/dir//Clínica+Bolívar/@-9.925046,-76.239424,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x91a7c2e2d16086df:0x1c0d23e918e06aa0!2m2!1d-76.239424!2d-9.925046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mapa-button"
                >
                  Cómo llegar
                </a>
                <a
                  href="https://www.google.com/maps/place/Clínica+Bolívar/@-9.925046,-76.239424,17z/data=!3m1!4b1!4m5!3m4!1s0x91a7c2e2d16086df:0x1c0d23e918e06aa0!8m2!3d-9.925046!4d-76.239424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mapa-button"
                >
                  Ver en Maps
                </a>
              </div>
            </div>
          </div>

          <div className="clinica-section">
            <div className="clinica-card">
              <div className="clinica-image">
                <img
                  src="/images/hero/fondo1.jpg"
                  alt="Imagen de la clínica"
                  onLoad={() => {
                    gsap.from('.clinica-image', {
                      opacity: 0,
                      x: 20,
                      duration: 1,
                      ease: 'power2.out',
                    });
                  }}
                />
                <div className="image-overlay">
                  <p>Ambiente diseñado para su comodidad y bienestar</p>
                </div>
              </div>
              <div className="facilities-container">
                <ul className="facilities-list">
                  {facilities.map(({ id, title, description, icon }) => (
                    <li key={id} className="facility-card">
                      <div className="facility-icon">{iconMap[icon]}</div>
                      <div className="facility-content">
                        <h4 className="facility-title">{title}</h4>
                        <p className="facility-description">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="mensaje-final">
          <div className="mensaje-blob"></div>
          <FaHandHoldingHeart className="mensaje-icon" />
          <p>¡Te esperamos para darte la mejor atención!</p>
        </footer>
      </div>
    </section>
  );
};

export default Ubicacion;