import BackgroundHome from '../Background/BackgroundHome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState, useRef, useEffect } from 'react';
import './Nosotros.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';


const items = [
    {
        id: 1,
        type: 'image',
        src: '/images/Galeria/ambulancia1.webp',
        alt: 'Imagen 1',
        description: 'Descripción imagen 1',
        category: 'instalaciones',
        loading: 'lazy',
    },
    {
        id: 1,
        type: 'image',
        src: '/images/Galeria/ambulancia2.webp',
        alt: 'Imagen 1',
        description: 'Descripción imagen 1',
        category: 'instalaciones',
        loading: 'lazy',
    },
    {
        id: 1,
        type: 'image',
        src: '/images/Galeria/ambulancia3.webp',
        alt: 'Imagen 1',
        description: 'Descripción imagen 1',
        category: 'instalaciones',
        loading: 'lazy',
    },
    {
        id: 2,
        type: 'image',
        src: '/images/gallery/2.jpg',
        alt: 'Imagen 2',
        description: 'Descripción imagen 2',
        category: 'equipos'
    },
    // Agrega más items según necesites...
];

const Nosotros = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const galleryRef = useRef(null);

    // Filtramos los items según la categoría seleccionada
    const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

    // Efecto para animación al hacer scroll
    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
        },
        { threshold: 0.1 }
    );

    if (galleryRef.current) {
        observer.observe(galleryRef.current);
    }

    return () => {
        if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
        }
    };
    }, []);

    // Navegación del carrusel
    const goToSlide = (index) => {
    setActiveIndex(index);
    };

    const goPrev = () => {
    setActiveIndex(prev => 
        prev === 0 ? filteredItems.length - 1 : prev - 1
    );
    };

    const goNext = () => {
    setActiveIndex(prev => 
        prev === filteredItems.length - 1 ? 0 : prev + 1
    );
    };

    // Abrir lightbox
    const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    };

    // Cerrar lightbox
    const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
    };

    // Extraer categorías únicas
    const categories = ['all', ...new Set(items.map(item => item.category))];

    return (
        <BackgroundHome>
        <div>
            {/* Enhanced */}
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
                    <span className="premium-hero__title-main">Conoce el ADN que Hace de Bolívar tu Mejor Opción</span>
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
                Somos Clínica Bolívar: médicos de alma que unen ciencia y calidez humana. Aquí, tu bienestar es nuestra mayor motivación y cada logro en tu salud, nuestro orgullo profesional. Porque creemos en una medicina cercana, rigurosa y profundamente humana.
            </p>
        </div>
            {/* Descripcion */}
            <section class="esp-intro"> 
                <div class="esp-intro-content">
                    <h1 class="health-passion-title">
                        <span class="health-line health-line--1">
                            <span class="health-text">Pasión por </span>
                            <span class="health-highlight health-highlight--care">Cuidar tu salud</span>
                        </span>
                        <span class="health-line health-line--2">
                            <span class="health-highlight health-highlight--responsibility">Con Responsabilidad</span>
                            <span class="health-text"> y</span>
                        </span>
                        <span class="health-line health-line--3">
                            <span class="health-highlight health-highlight--trust">Confianza</span>
                        </span>
                    </h1>
                    <div class="health-divider">
                        <div class="health-divider__line health-divider__line--left"></div>
                        <div class="health-divider__heart">
                            <svg class="health-divider__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"/>
                            </svg>
                        </div>
                        <div class="health-divider__line health-divider__line--right"></div>
                    </div>
                    <div class="medical-premium-subtitle">
                        <p class="medical-premium-subtitle__content">
                            <span class="medical-premium-subtitle__intro">En </span>
                            <span class="medical-premium-subtitle__highlight medical-premium-subtitle__highlight--clinic">Clínica Bolívar</span>
                            <span class="medical-premium-subtitle__text">, nos dedicamos a brindar</span>
                            <span class="medical-premium-subtitle__highlight medical-premium-subtitle__highlight--care">atención médica de calidad </span>
                            <span class="medical-premium-subtitle__text">con un enfoque humano y profesional</span>
                            <span class="medical-premium-subtitle__highlight medical-premium-subtitle__highlight--legacy">que nos ha caracterizado por más de 15 años.</span>
                        </p>
                    </div>
                </div>
                <div className="medical-highlights-container"> 
                    <div className="medical-card medical-card-specialists">
                        <div className="medical-icon medical-icon-doctors">
                        <i className="fas fa-user-md medical-feature-icon"></i>
                        </div>
                        <h3>Cuerpo Médico Especializado</h3>
                        <p>Contamos con profesionales altamente calificados en cada área médica, con certificaciones nacionales e internacionales.</p>
                        <a href="#especialistas" className="medical-button medical-button-doctors">
                        <span></span>
                        Ver Médicos<i className="fas fa-arrow-right medical-button-icon"></i>
                        </a>
                    </div>
                    <div className="medical-card medical-card-infrastructure">
                        <div className="medical-icon medical-icon-facility">
                        <i className="fas fa-hospital medical-feature-icon"></i>
                        </div>
                        <h3>Infraestructura de Vanguardia</h3>
                        <p>Instalaciones diseñadas para tu comodidad y seguridad, equipadas con tecnología médica de última generación.</p>
                        <a href="#especialistas" className="medical-button medical-button-facility">
                        <span></span>
                        Ver Infraestructura<i className="fas fa-arrow-right medical-button-icon"></i>
                        </a>
                    </div> 
                    <div className="medical-card medical-card-technology">
                        <div className="medical-icon medical-icon-tech">
                        <i className="fas fa-microscope medical-feature-icon"></i>
                        </div>
                        <h3>Tecnología de Diagnóstico</h3>
                        <p>Equipos de precisión para diagnósticos oportunos y tratamientos efectivos en todas nuestras especialidades.</p>
                        <a href="#especialistas" className="medical-button medical-button-tech">
                        <span></span>
                        Ver Tecnología<i className="fas fa-arrow-right medical-button-icon"></i>
                        </a>
                    </div>   
                </div> 
            </section>
            {/* Visión y Misión */}
            <section className="vision-mision-section">
                {/* Contenido principal */}
                <div className="contenido-flex">
                    {/* Imagen */}
                    <div className="columna-imagen">
                        <img
                            src="/images/hero/fondo1.jpg"
                            alt="Profesionales médicos"
                            className="imagen-principal"
                            loading="lazy"
                        />
                    </div>

                    {/* Tarjetas de visión y misión */}
                    <div className="columna-tarjetas">
                        <div className="tarjeta-info tarjeta-vision">
                            <div className="icono-titulo">
                                <div className="icono-contenedor">
                                    <FontAwesomeIcon 
                                        icon={faChartLine} 
                                        className="icono" 
                                    />
                                </div>
                                <h2 className="titulo-seccion">Visión</h2>
                            </div>
                            <p className="contenido-texto">
                                Ser la institución líder en salud humana del país, con altos estándares de calidad y a la vanguardia de la tecnología médica.
                            </p>
                        </div>

                        <div className="tarjeta-info tarjeta-mision">
                            <div className="icono-titulo">
                                <div className="icono-contenedor">
                                    <FontAwesomeIcon 
                                        icon={faHandHoldingMedical} 
                                        className="icono" 
                                    />
                                </div>
                                <h2 className="titulo-seccion">Misión</h2>
                            </div>
                            <p className="contenido-texto">
                                Somos una institución que brinda servicios especializados en salud humana, garantizando atención de calidad gracias a nuestros colaboradores altamente capacitados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sección Historia */}
            <section className="seccion-historia-clinica">
                {/* Fondo animado con overlay */}
                <div className="historia-fondo-animado">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/hua.jpg`} 
                        alt="Clínica Bolívar Huánuco" 
                        className="imagen-fondo-historia"
                        title="Image by Pitxiquin - Own work, CC BY-SA 4.0"
                    />
                    <div className="overlay-fondo-historia"></div>
                    <div className="efecto-luz-historia"></div>
                </div>
                
                {/* Contenido principal */}
                <div className="contenedor-historia">
                    {/* Título con animación especial */}
                    <div className="titulo-historia-container">
                        <h1 className="titulo-principal-historia">Nuestra trayectoria</h1>
                        <div className="linea-decorativa-titulo"></div>
                    </div>
                    {/* Contenido de texto con animaciones */}
                    <div className="texto-historia-wrapper">
                        <div className="columna-texto-historia">
                            <p className="parrafo-historia animacion-texto">Clínica Bolívar inició sus actividades el 15 de octubre de 2009 como una de las primeras clínicas en Huánuco con servicios de diagnóstico completos y de calidad.</p>
                            
                            <p className="parrafo-historia animacion-texto">Desde el principio nos enfocamos en atender a personas con menos recursos económicos, ofreciendo atención médica integral con inclusión social.</p>
                            
                            <p className="parrafo-historia animacion-texto">Iniciamos con servicios hospitalarios médicos, quirúrgicos, radiológicos y farmacéuticos, siendo pioneros en la región.</p>
                            <div className="destacado-historia">
                                <p className="texto-destacado">"16 años brindando salud especializada con calidez humana y compromiso social"</p>
                            </div>
                        </div>
                        
                        <div className="columna-texto-historia">
                            <p className="parrafo-historia animacion-texto">En 2019, bajo el liderazgo de la Gerente General Sra. Kathlyn Margret Alvarado y el Director Médico Dr. Andrei Kochubei, obtuvimos nuestra primera categorización II-E.</p>
                            
                            <p className="parrafo-historia animacion-texto">El 2022 marcó un hito al trasladarnos a nuestro moderno local en Jr. Progreso 351, donde renovamos nuestra categoría II-E con Resolución N° 1621-2024-GRH/DIRESA.</p>
                            
                            <p className="parrafo-historia animacion-texto">Hemos incorporado constantemente nuevos servicios para ofrecer atención especializada que cubra todas las necesidades de nuestros pacientes.</p>
                            
                            <p className="parrafo-historia animacion-texto">Contamos con un equipo humano excelente que se capacita permanentemente para mantenerse a la vanguardia en el sector salud.</p>
                        </div>
                    </div>
                    
                    {/* Líneas decorativas animadas */}
                    <div className="lineas-decorativas">
                        <div className="linea-decorativa verde"></div>
                        <div className="linea-decorativa azul"></div>
                        <div className="linea-decorativa mixta"></div>
                    </div>
                </div>
                


                {/* Image attribution */}
                <div className="image-attribution" style={{ fontSize: '0.8rem', color: '#666', textAlign: 'right', padding: '10px' }}>
                    Image by <a href="//commons.wikimedia.org/wiki/User:Pitxiquin" title="User:Pitxiquin">Pitxiquin</a> - <span className="int-own-work" lang="es">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=59482810">Link</a>
                </div>
            </section>
            {/* Sección Valores  */}
            <section className="luxe-values-section">
                
                {/* Contenido principal */}
                <div className="luxe-container">
                    {/* Encabezado */}
                    <div className="luxe-header">
                        <h2 className="luxe-main-title">
                            <span className="luxe-title-stroke">Nuestros</span>
                            <span className="luxe-title-fill">Valores</span>
                        </h2>
                        <div className="luxe-divider">
                            <div className="luxe-divider-line"></div>
                            <div className="luxe-divider-diamond"></div>
                            <div className="luxe-divider-line"></div>
                        </div>
                        <p className="luxe-subtitle">Principios fundamentales de excelencia</p>
                    </div>
                    
                    {/* Grid de 4 cartas perfectamente alineadas */}
                    <div className="luxe-cards-row">
                        {/* Carta 1 */}
                        <div className="luxe-card luxe-card-service">
                            <div className="luxe-card-inner">
                                <div className="luxe-card-icon">
                                    <svg viewBox="0 0 24 24" className="luxe-icon">
                                        <path fill="currentColor" d="M11 15H6L13 1V9H18L11 23V15Z"/>
                                    </svg>
                                </div>
                                <h3 className="luxe-card-title">VOCACIÓN<br/>DE SERVICIO</h3>
                                <div className="luxe-card-divider"></div>
                                <p className="luxe-card-desc">
                                    Compromiso absoluto con la satisfacción de necesidades mediante servicio excepcional.
                                </p>
                                
                            </div>
                        </div>
                        
                        {/* Carta 2 */}
                        <div className="luxe-card luxe-card-empathy">
                            <div className="luxe-card-inner">
                                <div className="luxe-card-icon">
                                    <svg viewBox="0 0 24 24" className="luxe-icon">
                                        <path fill="currentColor" d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"/>
                                    </svg>
                                </div>
                                <h3 className="luxe-card-title">EMPATÍA<br/>HUMANA</h3>
                                <div className="luxe-card-divider"></div>
                                <p className="luxe-card-desc">
                                    Conexión emocional genuina con cada persona que interactúa con nuestra institución.
                                </p>
                                
                            </div>
                        </div>
                        
                        {/* Carta 3 */}
                        <div className="luxe-card luxe-card-team">
                            <div className="luxe-card-inner">
                                <div className="luxe-card-icon">
                                    <svg viewBox="0 0 24 24" className="luxe-icon">
                                        <path fill="currentColor" d="M12 3C14.21 3 16 4.79 16 7C16 9.21 14.21 11 12 11C9.79 11 8 9.21 8 7C8 4.79 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13C11.33 13 10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z"/>
                                    </svg>
                                </div>
                                <h3 className="luxe-card-title">TRABAJO<br/>EN EQUIPO</h3>
                                <div className="luxe-card-divider"></div>
                                <p className="luxe-card-desc">
                                    Sinergia colaborativa que potencia nuestros resultados institucionales.
                                </p>
                                
                            </div>
                        </div>
                        
                        {/* Carta 4 */}
                        <div className="luxe-card luxe-card-ethics">
                            <div className="luxe-card-inner">
                                <div className="luxe-card-icon">
                                    <svg viewBox="0 0 24 24" className="luxe-icon">
                                        <path fill="currentColor" d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M15.08 16L12 14.15L8.93 16L9.74 12.5L7.03 10.16L10.61 9.85L12 6.55L13.39 9.84L16.97 10.15L14.26 12.5L15.08 16Z"/>
                                    </svg>
                                </div>
                                <h3 className="luxe-card-title">ÉTICA<br/>PROFESIONAL</h3>
                                <div className="luxe-card-divider"></div>
                                <p className="luxe-card-desc">
                                    Integridad inquebrantable en cada decisión y acción institucional.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sección Galeria  */}
            <section 
                ref={galleryRef}
                className={`gallery-section ${isVisible ? 'gallery-visible' : ''}`}
                >
                <div className="gallery-container">
                    <h2 className="gallery-title">
                    Nuestra <span className="gallery-title-accent">Galería</span>
                    </h2>
                    
                    {/* Filtros por categoría */}
                    <div className="category-filters">
                    {categories.map(category => (
                        <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setActiveIndex(0);
                        }}
                        className={`category-filter ${
                            selectedCategory === category ? 'category-filter-active' : ''
                        }`}
                        >
                        {category === 'all' ? 'Todos' : category}
                        </button>
                    ))}
                    </div>
                    
                    {/* Carrusel principal */}
                    <div className="main-carousel">
                    <div 
                        className="carousel-track"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {filteredItems.map((item, index) => (
                        <div 
                            key={item.id}
                            className="carousel-slide"
                        >
                            {item.type === 'image' ? (
                            <LazyLoadImage
                                src={item.src}
                                alt={item.alt}
                                loading={item.loading}
                                className="carousel-media"
                                effect="blur"
                                
                                height="100%"
                                placeholderSrc="/placeholder-small.jpg"
                                onClick={() => openLightbox(index)}
                            />
                            ) : (
                            <video
                                src={item.src}
                                poster={item.poster}
                                className="carousel-media"
                                onClick={() => openLightbox(index)}
                                autoPlay
                                loop
                                muted
                            />
                            )}
                            
                            {/* Efecto de superposición */}
                            <div className="slide-overlay">
                            <div className="slide-caption">
                                <h3>{item.alt}</h3>
                                <p>{item.description}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    
                    {/* Flechas de navegación */}
                    <button 
                        onClick={goPrev}
                        className="carousel-arrow carousel-arrow-prev"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={goNext}
                        className="carousel-arrow carousel-arrow-next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    
                    {/* Indicadores */}
                    <div className="carousel-indicators">
                        {filteredItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`carousel-indicator ${
                            index === activeIndex ? 'carousel-indicator-active' : ''
                            }`}
                        />
                        ))}
                    </div>
                    </div>
                    
                    {/* Mini-slider secundario */}
                    <div className="thumbnail-carousel">
                    <div className="thumbnails-container">
                        {filteredItems.map((item, index) => (
                        <div 
                            key={item.id}
                            onClick={() => goToSlide(index)}
                            className={`thumbnail ${
                            index === activeIndex ? 'thumbnail-active' : ''
                            }`}
                        >
                            {item.type === 'image' ? (
                            <LazyLoadImage
                                src={item.src}
                                alt={item.alt}
                                effect="opacity"
                                className="thumbnail-media"
                            />
                            ) : (
                            <video
                                src={item.src}
                                poster={item.poster}
                                className="thumbnail-media"
                                muted
                            />
                            )}
                            <div className="thumbnail-overlay"></div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                
                {/* Lightbox */}
                {lightboxOpen && (
                    <div className="lightbox">
                    <button 
                        onClick={closeLightbox}
                        className="lightbox-close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <div className="lightbox-content">
                        {filteredItems[activeIndex].type === 'image' ? (
                        <img
                            src={filteredItems[activeIndex].src}
                            alt={filteredItems[activeIndex].alt}
                            className="lightbox-media"
                        />
                        ) : (
                        <video
                            src={filteredItems[activeIndex].src}
                            poster={filteredItems[activeIndex].poster}
                            className="lightbox-media"
                            controls
                            autoPlay
                        />
                        )}
                        
                        <div className="lightbox-caption">
                        <h3>{filteredItems[activeIndex].alt}</h3>
                        <p>{filteredItems[activeIndex].description}</p>
                        
                        <div className="lightbox-actions">
                            <button className="lightbox-action lightbox-action-share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Compartir
                            </button>
                            <button className="lightbox-action lightbox-action-download">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Descargar
                            </button>
                        </div>
                        </div>
                    </div>
                    
                    {/* Flechas de navegación en lightbox */}
                    <button 
                        onClick={() => setActiveIndex(prev => prev === 0 ? filteredItems.length - 1 : prev - 1)}
                        className="lightbox-arrow lightbox-arrow-prev"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => setActiveIndex(prev => prev === filteredItems.length - 1 ? 0 : prev + 1)}
                        className="lightbox-arrow lightbox-arrow-next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    </div>
                )}
            </section>

            
        </div>
        </BackgroundHome>
    );
};

export default Nosotros;