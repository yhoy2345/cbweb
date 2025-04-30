import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTiktok, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <p className="footer-text">
            <i className="fas fa-map-marker-alt footer-icon"></i> Dirección: Jirón Progreso 351, Huánuco
          </p>
          <p className="footer-text">
            <i className="fas fa-phone-alt footer-icon"></i> Teléfono:(111) 111-1111 / (111) 111-1111

          </p>
          <p className="footer-text">
            <i className="fas fa-envelope footer-icon"></i> Email: clinicabolivar@gmail.com
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Horario</h3>
          <p className="footer-text">Lunes a Viernes: 8:00 - 20:00</p>
          <p className="footer-text">Sábado: 9:00 - 14:00</p>
          <p className="footer-text">Domingo: Cerrado</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="footer-social-icons">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/12KZfceMzjP/" className="footer-social-btn footer-social-fb" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="footer-social-ico" />
              <span className="footer-social-txt">Facebook</span>
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" className="footer-social-btn footer-social-tt" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="footer-social-ico" />
              <span className="footer-social-txt">TikTok</span>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" className="footer-social-btn footer-social-ig" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="footer-social-ico" />
              <span className="footer-social-txt">Instagram</span>
            </a>
          </div>
         </div> 
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Clínica Bolivar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;