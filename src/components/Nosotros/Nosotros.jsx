import React, { useEffect } from 'react';
import BackgroundHome from '../Background/BackgroundHome';
import './Nosotros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

const Nosotros = () => {
  return (
    <BackgroundHome>
    <div>
        {/* Imagen estática */}
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
                <h1 class="health-passion-title">
                    <span class="health-line health-line--1">
                        <span class="health-text">Pasión por </span>
                        <span class="health-highlight health-highlight--care">Cuidar tu salud</span>
                    </span>
                    <span class="health-line health-line--2">
                        <span class="health-highlight health-highlight--responsibility">Con Responsabilidad</span>
                        <span class="health-text"> y</span>
                    </span>
                    <span class="health-line health-line--3">
                        <span class="health-highlight health-highlight--trust">Confianza</span>
                    </span>
                </h1>
                <div class="health-divider">
                    <div class="health-divider__line health-divider__line--left"></div>
                    <div class="health-divider__heart">
                        <svg class="health-divider__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"/>
                        </svg>
                    </div>
                    <div class="health-divider__line health-divider__line--right"></div>
                </div>
                <div class="medical-premium-subtitle">
                    <p class="medical-premium-subtitle__content">
                        <span class="medical-premium-subtitle__intro">En </span>
                        <span class="medical-premium-subtitle__highlight medical-premium-subtitle__highlight--clinic">Clínica Bolívar</span>
                        <span class="medical-premium-subtitle__text">, nos dedicamos a brindar</span>
                        <span class="medical-premium-subtitle__highlight medical-premium-subtitle__highlight--care">atención médica de calidad </span>
                        <span class="medical-premium-subtitle__text">con un enfoque humano y profesional</span>
                        <span class="medical-premium-subtitle__highlight medical-premium-subtitle__highlight--legacy">que nos ha caracterizado por más de 15 años.</span>
                    </p>
                </div>
            </div>
            <div className="medical-highlights-container"> 
                <div className="medical-card medical-card-specialists">
                    <div className="medical-icon medical-icon-doctors">
                    <i className="fas fa-user-md medical-feature-icon"></i>
                    </div>
                    <h3>Cuerpo Médico Especializado</h3>
                    <p>Contamos con profesionales altamente calificados en cada área médica, con certificaciones nacionales e internacionales.</p>
                    <a href="#especialistas" className="medical-button medical-button-doctors">
                    <span></span>
                    Ver Médicos<i className="fas fa-arrow-right medical-button-icon"></i>
                    </a>
                </div>
                <div className="medical-card medical-card-infrastructure">
                    <div className="medical-icon medical-icon-facility">
                    <i className="fas fa-hospital medical-feature-icon"></i>
                    </div>
                    <h3>Infraestructura de Vanguardia</h3>
                    <p>Instalaciones diseñadas para tu comodidad y seguridad, equipadas con tecnología médica de última generación.</p>
                    <a href="#especialistas" className="medical-button medical-button-facility">
                    <span></span>
                    Ver Infraestructura<i className="fas fa-arrow-right medical-button-icon"></i>
                    </a>
                </div> 
                <div className="medical-card medical-card-technology">
                    <div className="medical-icon medical-icon-tech">
                    <i className="fas fa-microscope medical-feature-icon"></i>
                    </div>
                    <h3>Tecnología de Diagnóstico</h3>
                    <p>Equipos de precisión para diagnósticos oportunos y tratamientos efectivos en todas nuestras especialidades.</p>
                    <a href="#especialistas" className="medical-button medical-button-tech">
                    <span></span>
                    Ver Tecnología<i className="fas fa-arrow-right medical-button-icon"></i>
                    </a>
                </div>   
            </div> 
        </section>
        {/* Vision y Mision */}
        <section className="vision-mision-section">
            {/* Efectos decorativos de fondo */}
            <div className="decorativos-fondo">
                <div className="decorativo-circulo circulo-uno"></div>
                <div className="decorativo-circulo circulo-dos"></div>
            </div>

            {/* Contenido principal */}
            <div className="contenido-flex">
                {/* Imagen con marco y decoraciones */}
                <div className="columna-imagen">
                <div className="marco-imagen">
                    <img
                    src="/images/hero/fondo1.jpg"
                    alt="Profesionales médicos"
                    className="imagen-principal"
                    loading="lazy"
                    />
                    <div className="overlay-gradiente"></div>
                    <div className="decoracion-puntos decoracion-izquierda"></div>
                    <div className="decoracion-puntos decoracion-derecha"></div>
                </div>
                </div>

                {/* Tarjetas de visión y misión */}
                <div className="columna-tarjetas">
                    <div className="tarjeta-info tarjeta-vision">
                        <div className="icono-titulo">
                            <FontAwesomeIcon 
                                icon={faChartLine} 
                                className="icono" 
                                style={{ fontSize: '1.8rem' }}
                            />
                        <h2 className="titulo-seccion">
                            Visión
                            <span className="subrayado"></span>
                        </h2>
                        </div>
                        <p className="contenido-texto">
                        Ser la institución líder en salud humana del país, con altos estándares de calidad y a la vanguardia de la tecnología médica.
                        </p>
                        <div className="efecto-hover"></div>
                        <div className="efecto-brillo"></div>
                    </div>

                    <div className="tarjeta-info tarjeta-mision">
                        <div className="icono-titulo">
                            <FontAwesomeIcon 
                                icon={faHandHoldingMedical} 
                                className="icono" 
                                style={{ fontSize: '1.8rem' }}
                            />
                        <h2 className="titulo-seccion">
                            Misión
                            <span className="subrayado"></span>
                        </h2>
                        </div>
                        <p className="contenido-texto">
                        Somos una institución que brinda servicios especializados en salud humana, garantizando atención de calidad gracias a nuestros colaboradores altamente capacitados.
                        </p>
                        <div className="efecto-hover"></div>
                        <div className="efecto-brillo"></div>
                    </div>
                </div>
            </div>

            {/* Líneas decorativas animadas */}
            <div className="linea-animada linea-superior"></div>
            <div className="linea-animada linea-inferior"></div>
        </section>

        
    </div>
    </BackgroundHome>
  );
};

export default Nosotros;