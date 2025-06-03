import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faFlask, faDna, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const AnatomiaPatologica = () => {
    const navigate = useNavigate();
    const anatomiaData = specialties.find(
        esp => esp.url === "/especialidades/anatomiapatologica"
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
                        src="/images/anatomia-hero.jpg"
                        alt="Laboratorio de Anatomía Patológica"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{anatomiaData.name}</h1>
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
                        <p className="derma-intro__text">{anatomiaData.description}</p>
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
                                    &gt; Anatomía Patológica
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
                                    <li><a href="#nuestros-profesionales">Nuestros Patólogos</a></li>
                                    <li><a href="#estudios-frecuentes">Estudios</a></li>
                                    <li><a href="#tecnologia">Tecnología</a></li>
                                    <li><a href="#nuestro-staff">Nuestro Staff</a></li>
                                </ul>
                            </aside>
                            <div className="d-flex contenido-servicio bg-white">
                                <div className="especialidad-container">
                                    <div className="texto-especialidad">
                                        <h4 id="nuestra-especialidad"><span>Nuestra Especialidad</span></h4>
                                        <p>Servicio diagnóstico especializado en el estudio microscópico de tejidos, células y órganos para identificar enfermedades (cáncer, infecciones, autoinmunes) mediante biopsias, citologías y autopsias clínicas.</p>
                                        <h4 id="nuestros-profesionales"><span>Nuestros Patólogos</span></h4>
                                        <p>Médicos patólogos con subespecialización en áreas como oncopatología, dermatopatología o hematopatología, respaldados por técnicos histotecnólogos certificados.</p>
                                    </div>
                                    
                                    <div className="collage-profesionales">
                                        <img 
                                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200" 
                                            alt="Patólogo 1" 
                                            className="foto-profesional foto-1" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=180" 
                                            alt="Técnico de laboratorio" 
                                            className="foto-profesional foto-2" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=220" 
                                            alt="Patólogo 2" 
                                            className="foto-profesional foto-3" 
                                        />
                                    </div>
                                </div>
                                <div className="procedimientos-container">
                                    <h4 id="estudios-frecuentes"><span>Estudios Frecuentes</span></h4>
                                    <ul className="list-tag">
                                        <li>
                                            <FontAwesomeIcon icon={faMicroscope} className="icon-spacing"/>
                                            <span>Biopsias histológicas (órganos, piel, mucosas).</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faFlask} className="icon-spacing"/>
                                            <span>Citologías (Papanicolaou, líquidos corporales).</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faDna} className="icon-spacing"/>
                                            <span>Inmunohistoquímica y estudios moleculares.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-spacing"/>
                                            <span>Diagnóstico intraoperatorio (congelación).</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faMicroscope} className="icon-spacing"/>
                                            <span>Necropsias clínicas.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faDna} className="icon-spacing"/>
                                            <span>Estudios de patología digital.</span>
                                        </li>
                                    </ul>
                                    <p>Tiempos de entrega rápidos para estudios urgentes (24-48 horas) e informes detallados con correlación clínica.</p>
                                </div>
                                <div className="atencion-container">
                                    <h4 id="tecnologia"><span>Tecnología</span></h4>
                                    <p>Contamos con microscopía de alta resolución, procesadores automatizados de tejidos, plataformas de inmunohistoquímica y patología digital para telemedicina y segundas opiniones.</p>
                                </div>
                                <div className="staff-container">
                                    <h4 id="nuestro-staff"><span>Nuestro Staff</span></h4>
                                    <p>Equipo multidisciplinario con patólogos clínicos, técnicos histológicos y citotecnólogos capacitados en protocolos internacionales.</p>
                                    <div className="d-flex lista-resultado">
                                        <div className="d-flex lista">
                                            <div className="d-flex gap-3">
                                                <div className="d-flex avatar">
                                                    <img src="https://citaweb.clinicasanfelipe.com/Files/M3dicosX/Dr.Ejemplo.jpg" alt="DR. EJEMPLO" />
                                                </div>
                                                <div className="d-flex flex-column descripcion">
                                                    <span className="area">Patólogo Clínico</span>
                                                    <div className="nombre">DR. EJEMPLO</div>
                                                    <span className="badge">Subespecialidad:</span>
                                                </div>
                                            </div>
                                            <div className="d-flex ctas">
                                                <a href="../medicos/ejemplo" className="btn btn-primary-outline px-4 py-2">Conócelo aquí</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </section>

                    <section className="derma-cta">
                        <h3 className="derma-cta__title">¿Requieres un diagnóstico histopatológico?</h3>
                        <button className="derma-cta__button">
                            Solicitar estudio
                            <span className="derma-cta__button-effect"></span>
                        </button>
                    </section>
                </main>
            </div>
        </Background>
    );
};

export default AnatomiaPatologica;