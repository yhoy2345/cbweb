import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock, faChevronUp, faUserMd, faAmbulance, faCalendarAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      {/* Main footer content */}
      <div className="footer__main container">
        <div className="footer__grid">
          {/* Contact Section */}
          <div className="footer__section">
            <div className="footer__section-header">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer__heading-icon" />
              <h3 className="footer__heading">Contacto</h3>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">Dirección:</p>
                    <p>Jr. Progreso 351, Huánuco, Perú</p>
                  </div>
                </div>
              </li>
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faPhoneAlt} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">Teléfono:</p>
                    <a href="tel:(062) 515063" className="footer__link">(062) 515063</a>
                  </div>
                </div>
              </li>
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faWhatsapp} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">WhatsApp:</p>
                    <a href="https://wa.me/51962225881" target="_blank" rel="noopener noreferrer" className="footer__link">+51 962 225 881</a>
                  </div>
                </div>
              </li>
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">Email:</p>
                    <a href="mailto:clinicabolivar.hco@gmail.com" className="footer__link">clinicabolivar.hco@gmail.com</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours Section */}
          <div className="footer__section">
            <div className="footer__section-header">
              <FontAwesomeIcon icon={faClock} className="footer__heading-icon" />
              <h3 className="footer__heading">Horario de Atención</h3>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faCalendarAlt} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">Lunes - Viernes</p>
                    <p>24 Horas</p>
                  </div>
                </div>
              </li>
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faCalendarAlt} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">Sábados y Domingos</p>
                    <p>24 Horas</p>
                  </div>
                </div>
              </li>
              <li className="footer__item">
                <div className="footer__info">
                  <FontAwesomeIcon icon={faAmbulance} className="footer__icon" />
                  <div className="footer__text">
                    <p className="footer__label">Emergencias</p>
                    <p>24 Horas</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer__section">
            <div className="footer__section-header">
              <FontAwesomeIcon icon={faUserMd} className="footer__heading-icon" />
              <h3 className="footer__heading">Enlaces Importantes</h3>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/especialidades" className="footer__service-link">Especialidades</a>
              </li>
              <li className="footer__item">
                <a href="/servicios" className="footer__service-link">Servicios</a>
              </li>
              <li className="footer__item">
                <a href="/staff" className="footer__service-link">Staff Medico</a>
              </li>
              <li className="footer__item">
                <a href="/nosotros" className="footer__service-link">Nosotros</a>
              </li>
              <li className="footer__item">
                <a href="/convenios" className="footer__service-link">Convenios</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer__section">
            <div className="footer__section-header">
              <FontAwesomeIcon icon={faUserPlus} className="footer__heading-icon" />
              <h3 className="footer__heading">Síguenos</h3>
            </div>
            <p className="footer__social-text">Mantente conectado con nosotros a través de nuestras redes sociales</p>
            
            <div className="footer__social-grid">
              <a href="https://www.facebook.com/clinicabolivarhco" 
                 className="footer__social-link footer__social-fb"
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} className="footer__social-icon" />
                <span>Facebook</span>
              </a>
              
              <a href="https://www.instagram.com/clinicabolivarhco/" 
                 className="footer__social-link footer__social-ig"
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="footer__social-icon" />
                <span>Instagram</span>
              </a>
              
              <a href="https://www.tiktok.com/@clinicabolivarhco" 
                 className="footer__social-link footer__social-tt"
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} className="footer__social-icon" />
                <span>TikTok</span>
              </a>
            </div>

            
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <p className="footer__copyright">
            &copy; {currentYear} <span className="footer__clinic-name">Clínica Bolivar</span>. Todos los derechos reservados.
          </p>
          <div className="footer__badges">
            <span className="footer__badge">Certificado por MINSA</span>
            <span className="footer__badge">Acreditación Internacional</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="footer__back-to-top" aria-label="Volver arriba">
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </footer>
  );
};

export default Footer;