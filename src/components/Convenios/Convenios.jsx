import React from 'react';
import './Convenios.css'; 
import BackgroundHome from '../Background/BackgroundHome';

const Convenios = () => {
  const convenios = [
    {
      logo: "/images/Convenios/amarilis.webp",
      alt: " logo ",
      items: [
      "Municipalidad Distrital de Amarilis",
      "Atención médica preferencial",
      
      ]
    },
    {
      logo: "/images/Convenios/santaAna.webp",
      alt: " logo ",
      items: [
      "Santa Ana Centro Odontológico",
      "Emergencias odontológicas cubiertas",
        
        ]
    },
    {
      logo: "/images/Convenios/newton.webp",
      alt: " logo ",
      items: [
        "Colegio Isaac Newton",
        "Emergencias cubiertas en horario escolar",
       
        ]
    },
    
  ];

  return (
    <BackgroundHome>
        <section className="convenios-section">
            {/* Premium Hero Section - Enhanced */}
            <div className="premium-hero">
                <div className="premium-hero__image-wrapper">
                    <img
                    src="/images/convenios.jpg"
                    alt="Consulta de dermatología"
                    className="premium-hero__image"
                    loading="lazy"
                    />
                    <div className="premium-hero__gradient-overlay"></div>
                </div>
                
                <div className="premium-hero__content">
                    <h1 className="premium-hero__title">
                        <span className="premium-hero__title-main">Nuestros Convenios</span>
                    </h1>
                    
                </div>
            </div>
            <div className="convenios-intro" style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(135deg, #48c774 0%, #0078d7 100%)",
                color: "white",
                padding: "2rem",
                borderTopLeftRadius: "0",        /* Esquina superior izquierda: sin curvatura */
                borderTopRightRadius: "0",       /* Esquina superior derecha: sin curvatura */
                borderBottomLeftRadius: "12px",  /* Esquina inferior izquierda: 12px */
                borderBottomRightRadius: "12px",
                boxShadow: "0 8px 24px rgba(0, 120, 215, 0.2)",
                marginBottom: "2rem",
                textAlign: "center"
                }}>
                <p style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    lineHeight: "1.6",
                    margin: "0",
                    maxWidth: "800px",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                    Gracias a nuestras alianzas, ofrecemos beneficios exclusivos en salud, 
                    y más. Conoce a las instituciones que nos acompañan en este compromiso 
                    contigo.
                </p>
            </div>
            <div className="convenios-section">
              <div className="convenios-container">
                <div className="convenios-grid">
                  {convenios.map((convenio, index) => (
                    <div className="convenio-card" key={index}>
                      <div className="convenio-logo-wrapper">
                        <div className="convenio-logo-container">
                          <img 
                            src={convenio.logo} 
                            alt={convenio.alt} 
                            className="convenio-logo"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = '/images/placeholder-logo.svg';
                              e.target.alt = 'Logo no disponible';
                            }}
                          />
                        </div>
                      </div>
                      <div className="convenio-content">
                        <ul className="convenio-benefits">
                          {convenio.items.map((item, i) => (
                            <li key={i} className={i === 0 ? "benefit-main" : "benefit-secondary"}>
                              {i === 0 ? `${item}` : item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>
    </BackgroundHome>
  );
};

export default Convenios;