import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const Anestesiologia = () => {
    const navigate = useNavigate();
    const anestesiologiaData = specialties.find(
        esp => esp.url === "/especialidades/anestesiologia"
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
                        src="/images/hua.jpg" // Cambia por una imagen de anestesiología
                        alt="Consulta de anestesiología"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{anestesiologiaData.name}</h1>
                </div>

                {/* Main Content */}
                <main className="derma-main">
                    <div className="derma-intro__content">
                        {/* Partículas (se mantienen igual) */}
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
                        <p className="derma-intro__text">{anestesiologiaData.description}</p>
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
                                    &gt; Anestesiología
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
                                        <p>Especializados en el manejo del dolor y la atención del paciente durante procedimientos quirúrgicos, garantizando seguridad y confort en cirugías mayores y menores.</p>
                                        <h4 id="nuestros-profesionales"><span>Nuestros Profesionales</span></h4>
                                        <p>Expertos en anestesia general, regional y sedación, con enfoque en técnicas avanzadas de control del dolor agudo y crónico perioperatorio.</p>
                                    </div>
                                    
                                    <div className="collage-profesionales">
                                        <img 
                                            src="https://images.unsplash.com/photo-1551601651-bc60f254d532?w=200" 
                                            alt="Anestesiólogo 1" 
                                            className="foto-profesional foto-1" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=180" 
                                            alt="Anestesiólogo 2" 
                                            className="foto-profesional foto-2" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=220" 
                                            alt="Anestesiólogo 3" 
                                            className="foto-profesional foto-3" 
                                        />
                                    </div>
                                </div>
                                <div className="procedimientos-container">
                                    <h4 id="procedimientos-frecuentes"><span>Procedimientos Frecuentes</span></h4>
                                    <ul className="list-tag">
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Anestesia general para cirugías.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Anestesia regional (raquídea, epidural).</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Sedación consciente para procedimientos.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Manejo del dolor postoperatorio.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Bloqueos nerviosos para dolor crónico.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Evaluación preanestésica.</span>
                                        </li>
                                    </ul>
                                    <p>Nuestros anestesiólogos están disponibles para evaluaciones preoperatorias y manejo personalizado según cada procedimiento.</p>
                                </div>
                                <div className="atencion-container">
                                    <h4 id="presta-atencion"><span>Presta Atención</span></h4>
                                    <p>La anestesiología es fundamental para procedimientos quirúrgicos seguros. Contamos con tecnología de monitoreo avanzado (capnografía, BIS, ultrasonido) y protocolos actualizados para minimizar riesgos. Es importante seguir todas las indicaciones preoperatorias para optimizar los resultados.</p>
                                </div>
                                <div className="staff-container">
                                    <h4 id="nuestro-staff"><span>Nuestro Staff</span></h4>
                                    <p>Nuestros especialistas en anestesiología cuentan con certificación internacional y amplia experiencia en diversos procedimientos.</p>
                                    <div className="d-flex lista-resultado">
                                        <div className="d-flex lista">
                                            <div className="d-flex gap-3">
                                                <div className="d-flex avatar">
                                                    <img src="/images/Staff/doctor.webp" alt="DR. EJEMPLO" />
                                                </div>
                                                <div className="d-flex flex-column descripcion">
                                                    <span className="area">Anestesiólogo</span>
                                                    <div className="nombre">DR. EJEMPLO</div>
                                                    <span className="badge">CMD:</span>
                                                </div>
                                            </div>
                                            {/* future 
                                            <div className="d-flex ctas">
                                                <a href="../medicos/ejemplo" className="btn btn-primary-outline px-4 py-2">Conócelo aquí</a>
                                            </div>*/}

                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </section>
                    {/* future
                    <section className="derma-cta">
                        <h3 className="derma-cta__title">¿Necesitas evaluación anestésica para un procedimiento?</h3>
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

export default Anestesiologia;