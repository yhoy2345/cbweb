import React, { useEffect } from 'react'; // Añade useEffect al import

import { specialties } from '../Especialidades.data';
import Background from '../../Background/Background';
import './EspecialidadDetalle.css';

const Dermatologia = () => {
  const dermatologiaData = specialties.find(
    esp => esp.url === "/especialidades/dermatologia"
  );

  const services = [
    "Diagnóstico de enfermedades de la piel",
    "Tratamiento de acné avanzado",
    "Dermatología estética integral",
    "Cirugía dermatológica de precisión",
    "Tratamiento de manchas y cicatrices",
    "Terapias anti-envejecimiento cutáneo",
    "Dermatoscopia digital",
    "Tratamiento de enfermedades del cabello"
  ];

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

          <section className="dermatologia-contenedor">
            <div className="dermatologia-texto">
              <h2><span className="dermatologia-destacado">Nuestra Especialidad</span></h2>
              <p>
                Es la especialidad médica encargada del estudio de la piel, su estructura, 
                funciones y enfermedades. El dermatólogo diagnostica y trata problemas de la piel, cabello, 
                uñas y membranas mucosas. Abarca desde el tratamiento del acné hasta el diagnóstico de 
                cáncer de piel.
              </p>
            </div>

            <div className="dermatologia-galeria">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200" 
                alt="Dermatología 1" 
                className="dermatologia-imagen imagen1" 
              />
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=180" 
                alt="Dermatología 2" 
                className="dermatologia-imagen imagen2" 
              />
              <img 
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=220" 
                alt="Dermatología 3" 
                className="dermatologia-imagen imagen3" 
              />
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=190" 
                alt="Dermatología 4" 
                className="dermatologia-imagen imagen4" 
              />
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=190"
                alt="Dermatología 5" 
                className="dermatologia-imagen imagen5" 
              />
            </div>
          </section>  

          <section className="derma-services">
            <div className="derma-services__header">
              <h2 className="derma-services__title">Servicios especializados</h2>
              <div className="derma-services__divider"></div>
            </div>
            
            <div className="derma-services__grid">
              {services.map((service, index) => (
                <div key={index} className="derma-service-card">
                  <div className="derma-service-card__icon">
                    <svg viewBox="0 0 24 24">
                      <path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                    </svg>
                  </div>
                  <p className="derma-service-card__text">{service}</p>
                  <div className="derma-service-card__hover-effect"></div>
                </div>
              ))}
            </div>
          </section>

          <section className="derma-staff-section">
            <div className="derma-title-container">
              <h2>Nuestro <span className="derma-highlight">Staff</span></h2>
            </div>
            
            <div className="derma-content-wrapper">
              <div className="derma-specialists-row">
                {/* Especialista 1 */}
                <div className="derma-specialist-card">
                  <div className="derma-specialist-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=180" 
                      alt="Dermatólogo 2" 
                      className="derma-specialist-photo" 
                    />
                  </div>
                  <div className="derma-specialist-info">
                    <h3 className="derma-specialist-name">Dr. Carlos Rodríguez</h3>
                    <p className="derma-specialist-expertise">Cirugía Dermatológica</p>
                    <p className="derma-specialist-cmp">CMP: 12345</p>
                  </div>
                </div>
                
                {/* Especialista 2 */}
                <div className="derma-specialist-card">
                  <div className="derma-specialist-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=220" 
                      alt="Dermatólogo 3" 
                      className="derma-specialist-photo" 
                    />
                  </div>
                  <div className="derma-specialist-info">
                    <h3 className="derma-specialist-name">Dra. Laura Sánchez</h3>
                    <p className="derma-specialist-expertise">Dermatología Pediátrica</p>
                    <p className="derma-specialist-cmp">CMP: 12346</p>
                  </div>
                </div>
                
                {/* Especialista 3 */}
                <div className="derma-specialist-card">
                  <div className="derma-specialist-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=190" 
                      alt="Dermatólogo 4" 
                      className="derma-specialist-photo" 
                    />
                  </div>
                  <div className="derma-specialist-info">
                    <h3 className="derma-specialist-name">Dr. Javier López</h3>
                    <p className="derma-specialist-expertise">Dermatología Estética</p>
                    <p className="derma-specialist-cmp">CMP: 12347</p>
                  </div>
                </div>
                
                {/* Especialista 4 */}
                <div className="derma-specialist-card">
                  <div className="derma-specialist-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=190"
                      alt="Dermatólogo 5" 
                      className="derma-specialist-photo" 
                    />
                  </div>
                  <div className="derma-specialist-info">
                    <h3 className="derma-specialist-name">Dra. Sofía Ramírez</h3>
                    <p className="derma-specialist-expertise">Oncodermatología</p>
                    <p className="derma-specialist-cmp">CMP: 12348</p>
                  </div>
                </div>
                
                {/* Especialista 5 */}
                <div className="derma-specialist-card">
                  <div className="derma-specialist-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200"
                      alt="Dermatólogo 6" 
                      className="derma-specialist-photo" 
                    />
                  </div>
                  <div className="derma-specialist-info">
                    <h3 className="derma-specialist-name">Dr. Miguel Torres</h3>
                    <p className="derma-specialist-expertise">Trasplante Capilar</p>
                    <p className="derma-specialist-cmp">CMP: 12349</p>
                  </div>
                </div>
              </div>
              <div className="dermatologia-galeria">
              <div className="title-container">
                <h2>Nuestro <span className="derma-highlight">Staff</span></h2>
              </div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200" 
                  alt="Dermatología 1" 
                  className="dermatologia-imagen imagen1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=180" 
                  alt="Dermatología 2" 
                  className="dermatologia-imagen imagen2" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=220" 
                  alt="Dermatología 3" 
                  className="dermatologia-imagen imagen3" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=190" 
                  alt="Dermatología 4" 
                  className="dermatologia-imagen imagen4" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=190"
                  alt="Dermatología 5" 
                  className="dermatologia-imagen imagen5" 
                />
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