import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [geoError, setGeoError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleAddressClick = async () => {
    setIsLoading(true);
    setGeoError(null);
    const clinicAddress = "Jr. Progreso 351, Huánuco 10001, Perú";
    const clinicCoords = "-9.932308,-76.240977";
    
    try {
      if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          });
        });
        
        const { latitude: userLat, longitude: userLng } = position.coords;
        
        if (userLat < -10.5 || userLat > -9.5 || userLng < -76.5 || userLng > -76.0) {
          throw new Error("Coordenadas fuera del área esperada");
        }
        
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${clinicCoords}&travelmode=driving&dir_action=navigate`;
        window.open(mapsUrl, '_blank', 'noopener,noreferrer');
      } else {
        throw new Error("Geolocalización no soportada");
      }
    } catch (error) {
      console.error("Error de geolocalización:", error);
      setGeoError("No pudimos obtener tu ubicación. Mostrando clínica...");
      window.open(
        `https://www.google.com/maps/place/${encodeURIComponent(clinicAddress)}/@${clinicCoords},17z`,
        '_blank',
        'noopener,noreferrer'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className={scrolled ? 'comprimido' : ''}>
  <div className="header-container">
    {/* Logo */}
    <div className="logo-container">
      <img 
        src="/images/logo.png" 
        alt="Logo Clínica Bolívar"
        className="logo-img"
      />
    </div>

    {/* Iconos sociales primero */}
    <div className="social-icons-container">
      <a href="https://www.facebook.com/share/12KZfceMzjP/" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://tiktok.com" className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>

    {/* Sección de contacto */}
    <div className={`header-contact-section ${scrolled ? 'hidden' : ''}`}>
      <div className="header-info">
        <div className="header-contact">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <p>(111) 111-1111 / (111) 111-1111</p>
        </div>
        <div className="header-separator"></div>
        <div 
          className="header-address"
          onClick={handleAddressClick}
          style={{ cursor: 'pointer', position: 'relative' }}
          aria-busy={isLoading}
        >
          {isLoading && (
            <FontAwesomeIcon 
              icon={faSpinner} 
              className="address-spinner"
              spin
            />
          )}
          <FontAwesomeIcon icon={faMapMarkerAlt} className="address-icon" />
          <p>Jirón Progreso 351, Huánuco 10001 - Perú</p>
          {geoError && <span className="geo-error-tooltip">{geoError}</span>}
        </div>
      </div>

      <a 
        href="https://wa.me/949806989" 
        className="btn-whatsapp" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        Agendar cita
      </a>
    </div>

    {/* Menú de navegación */}
    <div className="header-bottom">
      <nav>
        <ul>
          <li><Link to="/src/components/Main">Inicio</Link></li>
          <li><Link to="/especialidades">Especialidades</Link></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/staff">Staff Médico</a></li>
          <li><a href="/calidad">Calidad</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  );
};

export default Header;