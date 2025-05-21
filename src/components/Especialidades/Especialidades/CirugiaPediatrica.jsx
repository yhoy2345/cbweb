import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserDoctor, faBaby } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const CirugiaPediatrica = () => {
    const navigate = useNavigate();
    
    // Búsqueda insensible a mayúsculas
    const cirugiaPedData = specialties.find(esp => 
        esp.url.toLowerCase() === "/especialidades/cirugiapediatrica".toLowerCase()
    );

    // Manejo de error si no hay datos
    if (!cirugiaPedData) {
        return (
            <Background>
                <div className="derma-container" style={{ color: 'red', padding: '2rem' }}>
                    <h1>Error: Datos no encontrados</h1>
                    <p>URL buscada: "/especialidades/cirugiapediatrica"</p>
                </div>
            </Background>
        );
    }

    const handleClick = () => {
        navigate('/especialidades', { 
            state: { scrollTo: 'search-section' },
            replace: true 
        });
    };

    // Efecto para partículas flotantes
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
                        src="/images/cirugia-ped-hero.jpg"
                        alt="Cirugía Pediátrica"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{cirugiaPedData.name}</h1>
                </div>

                {/* Main Content */}
                <main className="derma-main">
                    <div className="derma-intro__content">
                        {/* Partículas animadas */}
                        {[...Array(70)].map((_, i) => {
                            const size = Math.random() ** 3 * 15 + 3;
                            const colorChoice = Math.random();
                            const color = colorChoice > 0.7 ? 'var(--derma-primary)' : 
                                         colorChoice > 0.4 ? 'var(--derma-secondary)' :
                                         `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`;
                            
                            return (
                                <div 
                                    key={`particle-${i}`}
                                    className="derma-particle"
                                    style={{
                                        '--size': `${size}px`,
                                        '--delay': `${Math.random() * 10}s`,
                                        '--duration': `${Math.random() * 25 + 20}s`,
                                        '--opacity': Math.random() ** 2 * 0.25 + 0.05,
                                        '--blur': `${Math.random() * 3 + 1}px`,
                                        '--color': color,
                                        '--startX': `${Math.random() * 120 - 10}%`,
                                        '--startY': `${Math.random() * 120 - 10}%`,
                                        '--moveX': `${(Math.random() - 0.5) * 60}px`,
                                        '--moveY': `${(Math.random() - 0.5) * 60}px`,
                                        '--rotate': `${Math.random() * 720 - 360}deg`,
                                        '--scale-end': `${Math.random() * 0.5 + 0.8}`,
                                        '--distance-factor': Math.random() * 0.5 + 0.5
                                    }}
                                />
                            );
                        })}
                        <p className="derma-intro__text">{cirugiaPedData.description}</p>
                    </div>

                    {/* Breadcrumbs */}
                    <section>
                        <div className="container">
                            <div className="d-flex breadcrumbs">
                                <button onClick={handleClick} className="bc-link">
                                    Nuestras Especialidades
                                </button>
                                <span>&gt; Cirugía Pediátrica</span>
                            </div>
                        </div>
                    </section>

                    {/* Contenido médico */}
                    <section>
                        <div className="container container-tags inner-service">
                            <aside className="d-flex tags">
                                <ul className="list-tags">
                                    <li><a href="#nuestra-especialidad">Nuestra Especialidad</a></li>
                                    <li><a href="#procedimientos">Procedimientos</a></li>
                                    <li><a href="#cuidados">Cuidados</a></li>
                                </ul>
                            </aside>

                            <div className="d-flex contenido-servicio bg-white">
                                <div className="especialidad-container">
                                    <h4 id="nuestra-especialidad"><span>Nuestra Especialidad</span></h4>
                                    <p>Especializados en intervenciones quirúrgicas para pacientes desde recién nacidos hasta adolescentes, con técnicas mínimamente invasivas y equipos adaptados.</p>
                                    
                                    <div className="collage-profesionales">
                                        <img 
                                            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=200" 
                                            alt="Cirujano pediátrico" 
                                            className="foto-profesional foto-1" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=180" 
                                            alt="Equipo quirúrgico" 
                                            className="foto-profesional foto-2" 
                                        />
                                    </div>
                                </div>

                                <div className="procedimientos-container">
                                    <h4 id="procedimientos"><span>Procedimientos Frecuentes</span></h4>
                                    <ul className="list-tag">
                                        <li><FontAwesomeIcon icon={faBaby} className="icon-spacing"/> Corrección de hernia umbilical/inguinal</li>
                                        <li><FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/> Cirugía laparoscópica pediátrica</li>
                                        <li><FontAwesomeIcon icon={faSyringe} className="icon-spacing"/> Apendicectomía</li>
                                        <li><FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/> Cirugía de malformaciones congénitas</li>
                                    </ul>
                                </div>

                                <div className="atencion-container">
                                    <h4 id="cuidados"><span>Cuidados Especiales</span></h4>
                                    <p>Contamos con anestesiólogos pediátricos y unidades de recuperación diseñadas para niños, priorizando su seguridad y bienestar emocional.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="derma-cta">
                        <h3>¿Necesitas consultar con un cirujano pediátrico?</h3>
                        <button className="derma-cta__button">
                            Agendar cita
                        </button>
                    </section>
                </main>
            </div>
        </Background>
    );
};

export default CirugiaPediatrica;