import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const MedicinaInterna = () => {
    const navigate = useNavigate();
    const medicinaInternaData = specialties.find(
        esp => esp.url === "/especialidades/medicina-interna"
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
                        src="/images/internal-medicine.jpg"
                        alt="Consulta de medicina interna"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{medicinaInternaData.name}</h1>
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
                        <p className="derma-intro__text">{medicinaInternaData.description}</p>
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
                                    > Medicina Interna
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
                                        <p>Especializados en el diagnóstico, tratamiento y manejo de enfermedades crónicas y complejas en adultos, ofrecemos una atención integral para afecciones que afectan múltiples sistemas del cuerpo.</p>
                                        <h4 id="nuestros-profesionales"><span>Nuestros Profesionales</span></h4>
                                        <p>Internistas certificados con experiencia en el manejo de enfermedades cardiovasculares, endocrinas, pulmonares y renales, comprometidos con un enfoque integral y personalizado.</p>
                                    </div>
                                    
                                    <div className="collage-profesionales">
                                        <img 
                                            src="https://images.unsplash.com/photo-1580281658626-0f8a01ebb60e?w=200" 
                                            alt="Internista 1" 
                                            className="foto-profesional foto-1" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1576091160550-2a6adeda52c0?w=180" 
                                            alt="Internista 2" 
                                            className="foto-profesional foto-2" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=220" 
                                            alt="Internista 3" 
                                            className="foto-profesional foto-3" 
                                        />
                                    </div>
                                </div>
                                <div className="procedimientos-container">
                                    <h4 id="procedimientos-frecuentes"><span>Procedimientos Frecuentes</span></h4>
                                    <ul className="list-tag">
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Diagnóstico y manejo de hipertensión arterial.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Evaluación y tratamiento de enfermedades cardíacas.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Control de diabetes mellitus.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Evaluación de enfermedades infecciosas.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Tratamiento de enfermedades pulmonares.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Monitoreo de enfermedades renales.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Electrocardiogramas y pruebas de esfuerzo.</span>
                                        </li>
                                    </ul>
                                    <p>Ofrecemos una atención integral para el manejo de enfermedades crónicas y agudas, utilizando tecnología diagnóstica avanzada y un enfoque centrado en el paciente.</p>
                                </div>
                                <div className="atencion-container">
                                    <h4 id="presta-atencion"><span>Presta Atención</span></h4>
                                    <p>Las afecciones más comunes tratadas en medicina interna incluyen diabetes, hipertensión, enfermedades cardíacas, pulmonares y renales. Contamos con un equipo especializado para un diagnóstico y tratamiento precisos.</p>
                                </div>
                                <div className="staff-container">
                                    <h4 id="nuestro-staff"><span>Nuestro Staff</span></h4>
                                    <p>Nuestros internistas cuentan con certificaciones internacionales y experiencia en el manejo de enfermedades complejas, asegurando un cuidado integral y profesional.</p>
                                    <div className="d-flex lista-resultado">
                                        <div className="d-flex lista">
                                            <div className="d-flex gap-3">
                                                <div className="d-flex avatar">
                                                    <img src="https://citaweb.clinicasanfelipe.com/Files/M3dicosX/Dr.EjemploInternista.jpg" alt="DR. EJEMPLO INTERNISTA" />
                                                </div>
                                                <div className="d-flex flex-column descripcion">
                                                    <span className="area">Internista</span>
                                                    <div className="nombre">DR. EJEMPLO INTERNISTA</div>
                                                    <span className="badge">CMD:</span>
                                                </div>
                                            </div>
                                            <div className="d-flex ctas">
                                                <a href="../medicos/ejemplo-internista" className="btn btn-primary-outline px-4 py-2">Conócelo aquí</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </section>

                    <section className="derma-cta">
                        <h3 className="derma-cta__title">¿Necesitas una consulta de medicina interna?</h3>
                        <button className="derma-cta__button">
                            Agendar cita
                            <span className="derma-cta__button-effect"></span>
                        </button>
                    </section>
                </main>
            </div>
        </Background>
    );
};

export default MedicinaInterna;