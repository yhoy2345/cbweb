import React from 'react';
import './Convenios.css'; 
import BackgroundHome from '../Background/BackgroundHome';

const Convenios = () => {
  const convenios = [
    {
      logo: "/uploads/convenios/rimac-logo-gris.png",
      alt: " logo ",
      items: ["Rimac EPS", "Rimac Seguros"]
    },
    {
      logo: "/uploads/convenios/pacifico-logo-gris.png",
      alt: " logo ",
      items: ["Pacifico EPS", "Pacifico Seguros"]
    },
    {
      logo: "/uploads/convenios/mapfre-logo-gris.png",
      alt: " logo ",
      items: ["Mapfre EPS", "Mapfre Seguros"]
    },
    {
      logo: "/uploads/convenios/positiva-logo-gris.png",
      alt: " logo ",
      items: ["La Positiva", "La Positiva Sanitas EPS"]
    },
    {
      logo: "/uploads/sanitas-bw.png",
      alt: "logo",
      items: ["Sanitas EPS"]
    },
    {
      logo: "/uploads/convenios/banco-central-reserva-logo.png",
      alt: " logo",
      items: ["Fondo BCR"]
    },
    {
      logo: "/uploads/convenios/interseguro-logo.png",
      alt: " logo",
      items: ["Interseguro"]
    },
    {
      logo: "/uploads/la-protectora-logo.jpg",
      alt: "la protectora logo",
      items: ["La Protectora"]
    },
    {
      logo: "/uploads/protecta-logo2.jpg",
      alt: " logo",
      items: ["Protecta Security"]
    },
    {
      logo: "/uploads/convenios/bnp-paribas-cardif-logo.png",
      alt: "logo",
      items: ["Cardif"]
    }
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
            <div className="convenios-grid">
                {convenios.map((convenio, index) => (
                <div className="convenio-item" key={index}>
                    <figure className="convenio-figure">
                    <img 
                        src={convenio.logo} 
                        alt={convenio.alt} 
                        width="245" 
                        height="245"
                        className="convenio-img"
                    />
                    </figure>
                    <ul className="convenio-list">
                    {convenio.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    </BackgroundHome>
  );
};

export default Convenios;