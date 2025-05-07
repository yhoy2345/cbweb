// src/components/Servicios/Servicios.jsx
import React, { useState, useEffect, useMemo } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import BackgroundHome from '../Background/BackgroundHome';
import useScrollAnimation from './Scroll';
import { specialties, searchSectionData } from '../Servicios/Servicios.data';
import './Servicios.css';

const Servicios = () => {
  useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // const navigate = useNavigate(); // ← solo si lo vas a usar más adelante
  
  const fuse = useMemo(() => new Fuse(specialties, {
    keys: ['name', 'description'],
    includeScore: true,
    threshold: 0.3,
  }), []);
  
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length > 1) {
      const result = fuse.search(term);
      const suggestions = result.map(r => r.item);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filteredSpecialties = useMemo(() => {
    if (searchTerm.length > 1) {
      return fuse.search(searchTerm).map(result => result.item);
    }
    return specialties;
  }, [searchTerm, fuse]);

  
  const SpecialtyCard = ({ specialty }) => {
    const navigate = useNavigate();
  
    return (
      <div className="specialty-card animate-on-scroll">
        <div className="card-icon-container">
        <div className="card-icon-bg">
          <i className={specialty.icon} />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{specialty.name}</h3>
        <p className="card-description">{specialty.description}</p>
      </div>
      <button 
        className="card-button"
        onClick={() => navigate(specialty.url)}
        aria-label={`Ver más sobre ${specialty.name}`}
      >
        <span>Ver más</span>
        <i className="fas fa-chevron-right button-icon" />
      </button>
      <div className="card-hover-effect"></div>
      </div>
    );
  };
  
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect(); // ← Limpieza al desmontar
  }, []);
  
  return (
    <BackgroundHome>
      {/* Imagen estática  */}
      <section className="especialidades-imagen-estatica">
        <div className="especialidades-imagen-container">
          <img
            src="/images/hero/fondo1.jpg"
            alt="Imagen principal"
            className="especialidades-imagen"
          />
        </div>
      </section>
      {/* Descripcion */}
      <section class="esp-intro"> 
        <div class="esp-intro-content">
            <h1 class="medical-trust-title">
              <span class="medical-trust__linee medical-trust__line--1">
                <span class="medical-trust__phrase">Donde la</span>
                <span class="medical-trust__word medical-trust__word--excelence">Excelencia</span>
              </span>
              <span class="medical-trust__line medical-trust__line--2">
                <span class="medical-trust__word medical-trust__word--medical">Médica</span>
                <span class="medical-trust__phrase">Se Convierte en</span>
              </span>
              <span class="medical-trust__line medical-trust__line--3">
                <span class="medical-trust__word medical-trust__word--trust">Confianza</span>
              </span>
            </h1>
            <div class="esp-title-divider">
              <div class="esp-divider-line left-line"></div>
              <div class="esp-divider-heart">
                <svg class="heart-icon" viewBox="0 0 24 24">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"/>
                </svg>
              </div>
              <div class="esp-divider-line right-line"></div>
            </div>
            <div className="clinic-subtitle">
              <p className="clinic-subtitle__content">
                <span className="clinic-subtitle__prefix">En</span>
                <span className="clinic-subtitle__highlight clinic-subtitle__highlight--name">Clínica Bolívar</span>
                <span className="clinic-subtitle__text">, brindamos</span>
                <span className="clinic-subtitle__highlight clinic-subtitle__highlight--specialty">atención médica especializada</span>
                <span className="clinic-subtitle__text">con los más altos</span>
                <span className="clinic-subtitle__highlight clinic-subtitle__highlight--quality">estándares de calidad</span>
              </p>
              <div className="clinic-subtitle__divider"></div>
            </div>
        </div>
          <div class="esp-highlights"> 
            <div class="esp-highlight-card">
              <div class="esp-highlight-icon">
                  <i class="fas fa-user-md feature-icon"></i>
              </div>
              <h3>Cuerpo Médico Especializado</h3>
              <p>Contamos con profesionales altamente calificados en cada área médica, con certificaciones nacionales e internacionales.</p>
            </div>
            <div class="esp-highlight-card">
              <div class="esp-highlight-icon">
                  <i class="fas fa-hospital feature-icon"></i>
              </div>
              <h3>Infraestructura de Vanguardia</h3>
              <p>Instalaciones diseñadas para tu comodidad y seguridad, equipadas con tecnología médica de última generación.</p>
            </div> 
            <div class="esp-highlight-card">
              <div class="esp-highlight-icon">
                  <i class="fas fa-microscope feature-icon"></i>
              </div>
              <h3>Tecnología de Diagnóstico</h3>
              <p>Equipos de precisión para diagnósticos oportunos y tratamientos efectivos en todas nuestras especialidades.</p>
            </div>   
          </div>    
          <div className="medical-specialties-premium">
            <div className="medical-specialties__header">
              <h2 className="medical-specialties__title">
                <span className="title__main">Nuestras Especialidades Médicas</span>
                <span className="title__underline"></span>
              </h2>
              <div className="medical-specialties__divider">
                <div className="divider__line"></div>
                <div className="divider__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="divider__line"></div>
              </div>
            </div>
            
            <p className="medical-specialties__description">
              <span className="description__text">Ofrecemos un portafolio completo de especialidades médicas para cubrir </span>
              <span className="description__highlight">todas tus necesidades de salud. </span>
              <span className="description__text">Desde prevención hasta tratamientos avanzados, </span>
              <span className="description__highlight">nuestro equipo certificado garantiza tu bienestar integral.</span>
            </p>
          </div>
      </section>
      {/* Buscador */}
      <section className="specialty-search">
        <div className="search-header">
          <h2 className="search-title">
            <span className="title-text">{searchSectionData.title.text}</span>
            <span className="title-highlight">{searchSectionData.title.highlight}</span>
          </h2>
        
          <div className="search-subtitle-wrapper animate-on-scroll">
            <p className="search-subtitle">{searchSectionData.subtitle}</p>
          </div>
        </div>
        
        <div className={`search-box ${searchTerm ? 'active' : ''}`}>
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchSectionData.placeholder}
            aria-label="Buscar especialidades médicas"
          />
          {searchTerm && (
            <button 
              className="search-clear"
              onClick={() => setSearchTerm('')}
              aria-label="Limpiar búsqueda"
            >
              <i className="fas fa-times" />
            </button>
          )}
          <div className="search-decoration" />
        </div>

        {/* Mostrar sugerencias */}
        <div className="search-suggestions">
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSearch(suggestion.name)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="specialties-grid">
          {filteredSpecialties.length > 0 ? (
            filteredSpecialties.map(specialty => (
              <SpecialtyCard key={specialty.name} specialty={specialty} />
            ))
          ) : (
            <div className="no-results">
              <i className="fas fa-search-minus" />
              <p>No encontramos especialidades con ese criterio</p>
              <button 
                className="reset-search"
                onClick={() => setSearchTerm('')}
              >
                Mostrar todas las especialidades
              </button>
            </div>
          )}
        </div>
      </section>
      
    </BackgroundHome>
  );
};

export default Servicios;
