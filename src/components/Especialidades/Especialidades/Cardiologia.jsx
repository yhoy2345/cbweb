import React, { useEffect } from 'react'; // Añade useEffect al import
import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import './EspecialidadDetalle.css';
import './car.css';

const Dermatologia = () => {
    const dermatologiaData = specialties.find(
        esp => esp.url === "/especialidades/cardiologia"
    );

    

    useEffect(() => {
        const container = document.querySelector('.derma-intro__content');
        if (!container) return;

        const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Actualiza las variables CSS con la posición del mouse
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
                        src="/images/hua.jpg"
                        alt="Consulta de dermatología"
                        className="derma-hero__image"
                    />
                    <div className="derma-hero__overlay"></div>
                    <h1 className="derma-hero__title">{dermatologiaData.name}</h1>
                </div>

                {/* Main Content */}
                <main className="derma-main">
                    <div className="derma-intro__content">
                        {/* Partículas  */}
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
                                '--distance-factor': Math.random() * 0.5 + 0.5,
                                '--mouse-influence-x': (Math.random() - 0.5) * 0.02,
                                '--mouse-influence-y': (Math.random() - 0.5) * 0.02
                                }}
                            />
                            )
                        })}
                        <p className="derma-intro__text">{dermatologiaData.description}</p>
                        <div className="derma-intro__hover-effect"></div>
                    </div>
                
                {/* breadcrumbs */}
                <section className="">
                    <div className="container">
                        <div className="d-flex breadcrumbs">
                            <a href="./" className="bc-link">Nuestras Especialidades</a>
                            <span>
                                &gt; Cardiología
                            </span>
                        </div>
                    </div>
                </section>
                {/* fin breadcrumbs */}

                {/* breadcrumbs */}
                <section className="">
                    <div className="container container-tags inner-service">
                        <aside className="d-flex tags">
                            <ul className="list-tags">
                                <li><a href="#nuestra-especialidad" className="">Nuestra Especialidad</a></li>
                                <li><a href="#nuestros-profesionales" className="">Nuestros Profesionales</a></li>
                                <li><a href="#procedimientos-frecuentes" className="">Procedimientos </a></li>
                                <li><a href="#presta-atencion" className="">Presta Atención</a></li>
                                <li><a href="#nuestro-staff" className="">Nuestro Staff</a></li>
                            </ul>
                        </aside>
                        <div className="d-flex contenido-servicio bg-white">
                            <h4 id="nuestra-especialidad"><span>Nuestra Especialidad</span></h4>
                            <p>Estamos especializados en el tratamiento de las enfermedades relacionadas a la piel y sus estructuras anexas.</p>

                            <h4 id="nuestros-profesionales"><span>Nuestros Profesionales</span></h4>
                            <p>Se centran en el diagnóstico, tratamiento y prevención de las enfermedades de la piel, el cabello y las uñas. Se interesan en el estudio, diagnóstico, tratamiento y prevención de las enfermedades de la piel y mucosas periorificales.</p>

                            <h4 id="procedimientos-frecuentes"><span>Procedimientos Frecuentes</span></h4>
                            <ul className="list-tag">
                                <li>
                                    <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                    <span>Biopsias.</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                    <span>Crioterapia.</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                    <span>Extirpación por afeitado o shaving.</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                    <span>Dermoabrasión.</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSyringe} className="icon-spacing"/>
                                    <span>Exfoliación o peeling químico.</span>
                                </li>
                            </ul>
                            <p>Nuestros médicos dermatólogos están a disposición de los pacientes en la consulta ambulatoria.</p>

                            <h4 id="presta-atencion"><span> Presta Atención</span></h4>
                            <p>Las enfermedades más frecuentes que requieren atención del dermatólogo son: Hongos o micosis en la piel y uñas, caída del cabello, cicatriz queloide, lunares, cáncer de piel, melanomas, entre otros. Nuestra Tecnología nos permite realizar estudios anatomopatológicos, así como cultivos para hongos.</p>

                            <h4 id="nuestro-staff"><span>Nuestro Staff</span></h4>
                            <p>Contamos con los mejores profesionales para cuidar de ti y tu familia. ¡Agenda una cita hoy mismo!</p>

                            <div className="d-flex lista-resultado">
                                <div className="d-flex lista">
                                    <div className="d-flex gap-3">
                                        <div className="d-flex avatar">
                                            <img src="https://citaweb.clinicasanfelipe.com/Files/M3dicosX/Dr.Galvez.jpg" alt="ALDO DANIEL GALVEZ CANSECO" />
                                        </div>
                                        <div className="d-flex flex-column descripcion">
                                            <span className="area">Dermatologia</span>
                                            <div className="nombre">ALDO DANIEL GALVEZ CANSECO</div>
                                            <span className="badge">CMD:</span>
                                        </div>
                                    </div>
                                    <div className="d-flex ctas">
                                        <a href="../medicos/aldo-daniel-galvez-canseco" className="btn btn-primary-outline px-4 py-2">Conócelo aquí</a>
                                        <a href="https://citaweb.clinicasanfelipe.com/CSF_CITAS/" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-4 py-2">Haz una cita</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            

            




                    <section className="derma-cta">
                        <h3 className="derma-cta__title">¿Necesitas una evaluación dermatológica?</h3>
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

export default Dermatologia;