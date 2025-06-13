import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { 
  faHome,
  faUserDoctor,
  faStarOfLife,
  faStethoscope,
  faUsers,
  faAmbulance,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [geoError, setGeoError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

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

  const navLinks = [
    { 
      href: '/', 
      icon: faHome,
      text: 'Inicio',
      badge: null
    },
    { 
      href: '/especialidades', 
      icon: faStarOfLife,
      text: 'Especialidades',
      badge: null
    },
    { 
      href: '/servicios', 
      icon: faStethoscope,
      text: 'Servicios',
      badge: null
    },
    { 
      href: '/staff', 
      icon: faUserDoctor,
      text: 'Staff',
      badge: null
    },
    { 
      href: '/nosotros', 
      icon: faUsers,
      text: 'Nosotros',
      badge: null
    },
    { 
      href: '/convenios', 
      icon: faHandshake,
      text: 'Convenios',
      badge: null
    },
  ];

  return (
    <header className={`perfil-header ${scrolled ? 'comprimido' : ''}`}>
      <div className="header-container">
        <nav className="navbar" aria-label="Menú principal">
          <div className="navbar-container">
            <Link to="/" className="urbat-logo" aria-label="Inicio - Clínica Bolívar">
              <span className="urbat-logo__icon-container">
                <span className="urbat-logo__icon">
                  <img 
                    src="/images/logo.webp" 
                    alt="Logo Clínica Bolívar" 
                    className="urbat-logo__brain-icon" 
                  />
                </span>
                <span className="urbat-logo__icon-glow"></span>
                <span className="urbat-logo__icon-particles"></span>
              </span>
              
              <span className="urbat-logo__hover-effect"></span>
              <span className="urbat-logo__active-glow"></span>
            </Link>

            <div className="nav-right">
              {/* Sección de contacto sobre los navlinks */}
              <div className="header-contact-container">
                <div className="header-nav-combined">
                  {/* Sección de contacto */}
                  <div className="header-contact-top">
                    {/* Contenedor de iconos sociales */}
                    <div className="social-icons-container">
                      <a href="https://www.facebook.com/clinicabolivarhco" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a href="https://www.tiktok.com/@clinicabolivarhco" className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                      </a>
                      <a href="https://www.instagram.com/clinicabolivarhco/" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                    <div className="contact-info-container" style={{ display: menuOpen ? 'none' : 'block' }}>
                      <div className="contact-info-wrapper">
                        <div className="header-contact">
                          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                          <p>+51 962 225 881</p>
                          <p>/</p>
                          <p>(062) 515063</p>
                        </div>
                        
                        
                        <div className="header-separator">
                          <div 
                            className="header-address"
                            onClick={handleAddressClick}
                            aria-busy={isLoading}
                          >
                            {isLoading && (
                              <FontAwesomeIcon icon={faSpinner} className="address-spinner" spin />
                            )}
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="address-icon" />
                            <p>Jirón Progreso N°351-Huánuco</p>
                            {geoError && <span className="geo-error-tooltip">{geoError}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="urbat-nav__horizontal">
                    {navLinks.map(({ href, icon, text, badge }) => (
                      <li className="urbat-nav__item" key={text}>
                        <Link 
                          to={href}
                          className="urbat-nav__link"
                        >
                          <span className="urbat-nav__icon-wrapper">
                            <FontAwesomeIcon icon={icon} className="urbat-nav__icon" />
                            <span className="urbat-nav__icon-aura"></span>
                          </span>
                          <span className="urbat-nav__text-wrapper">
                            <span className="urbat-nav__text">{text}</span>
                            {badge && <span className="urbat-nav__badge">{badge}</span>}
                          </span>
                          <span className="urbat-nav__gold-bar"></span>
                          <span className="urbat-nav__diamond-effect"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="header-buttons-vertical">
                <a 
                  href="tel:(062) 515063" 
                  className="emergency-btn"
                  aria-label="Emergencias médicas"
                >
                  <FontAwesomeIcon icon={faAmbulance} className="btn-icon" />
                  <span>Emergencias</span>
                  <div className="btn-overlay"></div>
                </a>
                
                <a 
                  href="https://wa.me/51962225881" 
                  className="whatsapp-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Agendar cita por WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="btn-icon" />
                  <span>Agendar Cita</span>
                  <div className="btn-overlay"></div>
                </a>
              </div>

              <button 
                className={`nav-hamburger-btn ${menuOpen ? 'nav-hamburger-btn--active' : ''}`} 
                aria-label="Menú móvil"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
              >
                <span className="nav-hamburger-box">
                  <span className="nav-hamburger-line nav-hamburger-line--top"></span>
                  <span className="nav-hamburger-line nav-hamburger-line--middle"></span>
                  <span className="nav-hamburger-line nav-hamburger-line--bottom"></span>
                </span>
              </button>

              <div className={`nav-mobile-menu ${menuOpen ? 'nav-mobile-menu--visible' : ''}`}>
                <ul className="nav-mobile-list">
                  {navLinks.map(({ href, icon, text, badge }) => (
                    <li key={text} className="nav-mobile-item" onClick={() => setMenuOpen(false)}>
                      <Link to={href.toLowerCase()} className="nav-mobile-link">
                        <FontAwesomeIcon icon={icon} className="nav-mobile-icon" />
                        <span className="nav-mobile-text">{text}</span>
                        {badge && <span className="nav-mobile-badge">{badge}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Sección de contacto en el menú móvil */}
                <div className="mobile-contact-info">
                  <div className="mobile-header-contact">
                    <FontAwesomeIcon icon={faPhone} className="mobile-phone-icon" />
                    <p>+51 962 225 881</p>
                    <p>/</p>
                    <p>(062) 515063</p>
                  </div>
                  <div className="mobile-header-address" onClick={handleAddressClick}>
                    {isLoading && (
                      <FontAwesomeIcon icon={faSpinner} className="mobile-address-spinner" spin />
                    )}
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mobile-address-icon" />
                    <p>Jirón Progreso N°351-"Huánuco"</p>
                    {geoError && <span className="mobile-geo-error-tooltip">{geoError}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-background"></div>
          <div className="navbar-highlight"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;