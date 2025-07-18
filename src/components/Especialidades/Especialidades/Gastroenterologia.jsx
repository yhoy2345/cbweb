import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const Gastroenterologia = () => {
    const navigate = useNavigate();
    const gastroenterologiaData = specialties.find(
        esp => esp.url === "/especialidades/gastroenterologia"
    );

    const handleClick = () => {
        navigate('/especialidades', { 
          state: { scrollTo: 'search-section' },
          replace: true
        });
        
        setTimeout(() => {
          const section = document.getElementById('search-section');
          if (section) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const sectionPosition = section.getBoundingClientRect().top;
            const offsetPosition = sectionPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'auto'
            });
          }
        }, 50);
    };

    useEffect(() => {
        const container = document.querySelector('.derma-intro__content');
        if (!container) return;

        const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        container.style.setProperty('--mouse-x', `${x - rect.width/2}px`);
        container.style.setProperty('--mouse-y', `${y - rect.height/2}px`);
        };

        container.addEventListener('mousemove', handleMouseMove);
        
        return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Background>
            <div className="derma-container">
                
                {/* Hero Section */}
                <div className="derma-hero">
                    <img
                        src="/images/gastroenterology.jpg"
                        alt="Consulta de gastroenterología"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{gastroenterologiaData.name}</h1>
                </div>

                {/* Main Content */}
                <main className="derma-main">
                    <div className="derma-intro__content">
                        {/* Partículas */}
                        {[...Array(70)].map((_, i) => (
                            <div 
                                key={`particle-${i}`}
                                className="derma-particle"
                                style={{
                                '--size': `${Math.random() ** 3 * 15 + 3}px`,
                                '--delay': `${Math.random() * 10}s`,
                                '--duration': `${Math.random() * 25 + 20}s`,
                                '--opacity': Math.random() ** 2 * 0.25 + 0.05,
                                '--blur': `${Math.random() * 3 + 1}px`,
                                '--color': Math.random() > 0.7 ? 'var(--derma-primary)' : 
                                           Math.random() > 0.4 ? 'var(--derma-secondary)' :
                                           `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
                                '--startX': `${Math.random() * 120 - 10}%`,
                                '--startY': `${Math.random() * 120 - 10}%`,
                                '--moveX': `${(Math.random() - 0.5) * 60}px`,
                                '--moveY': `${(Math.random() - 0.5) * 60}px`,
                                '--rotate': `${Math.random() * 720 - 360}deg`,
                                '--scale-end': `${Math.random() * 0.5 + 0.8}`,
                                '--distance-factor': Math.random() * 0.5 + 0.5,
                                '--mouse-influence-x': (Math.random() - 0.5) * 0.02,
                                '--mouse-influence-y': (Math.random() - 0.5) * 0.02
                                }}
                            />
                        ))}
                        <p className="derma-intro__text">{gastroenterologiaData.description}</p>
                        <div className="derma-intro__hover-effect"></div>
                    </div>
                
                    {/* Breadcrumbs */}
                    <section className="">
                        <div className="container">
                            <div className="d-flex breadcrumbs">
                                <button onClick={handleClick} className="bc-link">
                                    Nuestras Especialidades
                                </button>
                                <span>
                                    &gt; Gastroenterología
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Contenido principal */}
                    <section className="">
                        <div className="container container-tags inner-service">
                            <aside className="d-flex tags">
                                <ul className="list-tags">
                                    <li><a href="#nuestra-especialidad">Nuestra Especialidad</a></li>
                                    <li><a href="#nuestros-profesionales">Nuestros Profesionales</a></li>
                                    <li><a href="#procedimientos-frecuentes">Procedimientos</a></li>
                                    <li><a href="#presta-atencion">Presta Atención</a></li>
                                    <li><a href="#nuestro-staff">Nuestro Staff</a></li>
                                </ul>
                            </aside>
                            <div className="d-flex contenido-servicio bg-white">
                                <div className="especialidad-container">
                                    <div className="texto-especialidad">
                                        <h4 id="nuestra-especialidad"><span>Nuestra Especialidad</span></h4>
                                        <p>Especializados en el diagnóstico y tratamiento de enfermedades del sistema digestivo, ofrecemos soluciones integrales para trastornos gastrointestinales, hepáticos y pancreáticos, utilizando tecnología avanzada y procedimientos mínimamente invasivos.</p>
                                        <h4 id="nuestros-profesionales"><span>Nuestros Profesionales</span></h4>
                                        <p>Gastroenterólogos certificados con experiencia en endoscopias, colonoscopias y manejo de enfermedades digestivas complejas, comprometidos con la atención personalizada y la salud integral del paciente.</p>
                                    </div>
                                    
                                    <div className="collage-profesionales">
                                        <img 
                                            src="https://images.unsplash.com/photo-1580281658626-0f8a01ebb60e?w=200" 
                                            alt="Gastroenterólogo 1" 
                                            className="foto-profesional foto-1" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1576091160550-2a6adeda52c0?w=180" 
                                            alt="Gastroenterólogo 2" 
                                            className="foto-profesional foto-2" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=220" 
                                            alt="Gastroenterólogo 3" 
                                            className="foto-profesional foto-3" 
                                        />
                                    </div>
                                </div>
                                <div className="procedimientos-container">
                                    <h4 id="procedimientos-frecuentes"><span>Procedimientos Frecuentes</span></h4>
                                    <ul className="list-tag">
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Endoscopia digestiva alta.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Colonoscopia diagnóstica y terapéutica.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Biopsias gastrointestinales.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Tratamiento de reflujo gastroesofágico.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Manejo de enfermedades hepáticas.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Extracción de pólipos intestinales.</span>
                                        </li>
                                    </ul>
                                    <p>Realizamos procedimientos endoscópicos y diagnósticos con equipos de última generación, asegurando diagnósticos precisos y tratamientos efectivos para trastornos digestivos.</p>
                                </div>
                                <div className="atencion-container">
                                    <h4 id="presta-atencion"><span>Presta Atención</span></h4>
                                    <p>Las afecciones gastrointestinales más comunes incluyen reflujo gastroesofágico, enfermedad inflamatoria intestinal, hepatitis, y pólipos colónicos. Contamos con tecnología avanzada y un equipo multidisciplinario para un diagnóstico y tratamiento integrales.</p>
                                </div>
                                <div className="staff-container">
                                    <h4 id="nuestro-staff"><span>Nuestro Staff</span></h4>
                                    <p>Nuestros gastroenterólogos cuentan con certificaciones internacionales y amplia experiencia en el manejo de enfermedades digestivas, garantizando un enfoque profesional y humano.</p>
                                    <div className="d-flex lista-resultado">
                                        <div className="d-flex lista">
                                            <div className="d-flex gap-3">
                                                <div className="d-flex avatar">
                                                    <img src="https://citaweb.clinicasanfelipe.com/Files/M3dicosX/Dr.EjemploGastroenterologo.jpg" alt="DR. EJEMPLO GASTROENTERÓLOGO" />
                                                </div>
                                                <div className="d-flex flex-column descripcion">
                                                    <span className="area">Gastroenterólogo</span>
                                                    <div className="nombre">DR. EJEMPLO GASTROENTERÓLOGO</div>
                                                    <span className="badge">CMD:</span>
                                                </div>
                                            </div>
                                            {/* CTA Section 
                                            <div className="d-flex ctas">
                                                <a href="../medicos/ejemplo-gastroenterologo" className="btn btn-primary-outline px-4 py-2">Conócelo aquí</a>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </section>
                    {/* CTA Section 
                    <section className="derma-cta">
                        <h3 className="derma-cta__title">¿Necesitas una consulta gastroenterológica?</h3>
                        <button className="derma-cta__button">
                            Agendar cita
                            <span className="derma-cta__button-effect"></span>
                        </button>
                    </section>*/}
                </main>
            </div>
        </Background>
    );
};

export default Gastroenterologia;