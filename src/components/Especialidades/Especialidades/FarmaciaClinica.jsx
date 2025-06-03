import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faUserDoctor, faPills } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const FarmaciaClinica = () => {
    const navigate = useNavigate();
    const farmaciaData = specialties.find(
        esp => esp.url === "/especialidades/farmaciaclinica"
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
                        src="/images/farmacia-hero.jpg"
                        alt="Farmacia Clínica"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{farmaciaData.name}</h1>
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
                        <p className="derma-intro__text">{farmaciaData.description}</p>
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
                                    &gt; Farmacia Clínica
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
                                    <li><a href="#servicios-frecuentes">Servicios</a></li>
                                    <li><a href="#presta-atencion">Presta Atención</a></li>
                                    <li><a href="#nuestro-staff">Nuestro Staff</a></li>
                                </ul>
                            </aside>
                            <div className="d-flex contenido-servicio bg-white">
                                <div className="especialidad-container">
                                    <div className="texto-especialidad">
                                        <h4 id="nuestra-especialidad"><span>Nuestra Especialidad</span></h4>
                                        <p>Especializados en el uso seguro y efectivo de medicamentos, optimizando terapias farmacológicas para pacientes hospitalizados y ambulatorios, con enfoque en interacciones, dosificación y seguimiento terapéutico.</p>
                                        <h4 id="nuestros-profesionales"><span>Nuestros Profesionales</span></h4>
                                        <p>Farmacéuticos clínicos con formación en farmacoterapia, capacitados para colaborar con el equipo médico en la selección de tratamientos personalizados y monitoreo de efectos adversos.</p>
                                    </div>
                                    
                                    <div className="collage-profesionales">
                                        <img 
                                            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=200" 
                                            alt="Farmacéutico 1" 
                                            className="foto-profesional foto-1" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=180" 
                                            alt="Farmacéutico 2" 
                                            className="foto-profesional foto-2" 
                                        />
                                        <img 
                                            src="https://images.unsplash.com/photo-1629909613654-28e377c0ec2d?w=220" 
                                            alt="Farmacéutico 3" 
                                            className="foto-profesional foto-3" 
                                        />
                                    </div>
                                </div>
                                <div className="procedimientos-container">
                                    <h4 id="servicios-frecuentes"><span>Servicios Frecuentes</span></h4>
                                    <ul className="list-tag">
                                        <li>
                                            <FontAwesomeIcon icon={faPills} className="icon-spacing"/>
                                            <span>Revisión de esquemas de medicación.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faPills} className="icon-spacing"/>
                                            <span>Dispensación de medicamentos de alto riesgo.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Asesoría en farmacoterapia a médicos.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                            <span>Preparación de mezclas intravenosas estériles.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faUserDoctor} className="icon-spacing"/>
                                            <span>Educación a pacientes sobre uso de medicamentos.</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faPills} className="icon-spacing"/>
                                            <span>Farmacovigilancia (detección de reacciones adversas).</span>
                                        </li>
                                    </ul>
                                    <p>Ofrecemos servicios las 24 horas con protocolos estandarizados y tecnología de dispensación automatizada para garantizar seguridad.</p>
                                </div>
                                <div className="atencion-container">
                                    <h4 id="presta-atencion"><span>Presta Atención</span></h4>
                                    <p>La Farmacia Clínica es clave en la prevención de errores de medicación, especialmente en pacientes polimedicados, con insuficiencia renal/hepática o en terapias complejas (ej. anticoagulantes, antibióticos).</p>
                                </div>
                                <div className="staff-container">
                                    <h4 id="nuestro-staff"><span>Nuestro Staff</span></h4>
                                    <p>Nuestros farmacéuticos cuentan con certificación en farmacia clínica y experiencia en hospitales de alta complejidad.</p>
                                    <div className="d-flex lista-resultado">
                                        <div className="d-flex lista">
                                            <div className="d-flex gap-3">
                                                <div className="d-flex avatar">
                                                    <img src="https://citaweb.clinicasanfelipe.com/Files/M3dicosX/Dr.Ejemplo.jpg" alt="FARM. EJEMPLO" />
                                                </div>
                                                <div className="d-flex flex-column descripcion">
                                                    <span className="area">Farmacéutico Clínico</span>
                                                    <div className="nombre">FARM. EJEMPLO</div>
                                                    <span className="badge">Certificado:</span>
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
                        <h3 className="derma-cta__title">¿Necesitas asesoría farmacéutica?</h3>
                        <button className="derma-cta__button">
                            Agendar consulta
                            <span className="derma-cta__button-effect"></span>
                        </button>
                    </section>
                </main>
            </div>
        </Background>
    );
};

export default FarmaciaClinica;