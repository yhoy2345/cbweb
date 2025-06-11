import { useState, useEffect } from 'react';
import BackgroundHome from '../Background/BackgroundHome';
import './Staff.css';

// Datos de ejemplo del staff médico
const medicalStaff = [
  {
    id: 1,
    name: "Isabel Tolentino Ordóñez",
    specialty: "Enfermería en Centro Quirúrgico",
    summary: "Profesional en enfermería especializada en atención en centro quirúrgico.",
    image: "/images/Staff/doctor.webp",
    cep: "077278"
  },
  {
    id: 2,
    name: "Betzaida Robles Ponciano",
    specialty: "Enfermería en Centro Quirúrgico",
    summary: "Profesional en enfermería especializada en atención en centro quirúrgico.",
    image: "/images/Staff/doctor.webp",
    cep: "083997"
  },
  {
    id: 3,
    name: "Italo Mario Guzmán Cadiz",
    specialty: "Anestesiología",
    summary: "Especialista en anestesiología con amplia experiencia en procedimientos quirúrgicos.",
    image: "/images/Staff/doctor.webp",
    cmp: "054817"
  },
  {
    id: 4,
    name: "Olga Tucto López",
    specialty: "Anatomía Patológica - Patología Clínica",
    summary: "Especialista en diagnóstico mediante estudios anatomopatológicos y patología.",
    image: "/images/Staff/doctor.webp",
    cmp: "067749"
  },
  {
    id: 5,
    name: "Víctor Hugo Segura López",
    specialty: "Anatomía Patológica - Patología Clínica",
    summary: "Especialista en diagnóstico mediante estudios anatomopatológicos y patología.",
    image: "/images/Staff/doctor.webp",
    cmp: "046589"
  },
  {
    id: 6,
    name: "Jahayra  Toledo Cheppe",
    specialty: "Oratorio Clínico y Anatomía Patológica",
    summary: "Profesional especializado en oratorio clínico y anatomía patológica.",
    image: "/images/Staff/doctor.webp",
    ctmp: "012005"
  },
  {
    id: 7,
    name: "Luis Wilfredo Meza Pagano",
    specialty: "Oratorio Clínico y Anatomía Patológica",
    summary: "Profesional especializado en oratorio clínico y anatomía patológica.",
    image: "/images/Staff/doctor.webp",
    ctmp: "018885"
  },
  {
    id: 8,
    name: "Shirly Sandy Ortiz Pérez",
    specialty: "Oratorio Clínico y Anatomía Patológica",
    summary: "Profesional especializado en oratorio clínico y anatomía patológica.",
    image: "/images/Staff/doctor.webp",
    ctmp: "017304"
  },
  {
    id: 9,
    name: "Guido Encarnación Marino",
    specialty: "Cirugía General",
    summary: "Cirujano general con amplia experiencia en procedimientos quirúrgicos.",
    image: "/images/Staff/doctor.webp",
    cmp: "037489"
  },
  {
    id: 10,
    name: "Andrei Alekseevich Kochube",
    specialty: "Dermatología",
    summary: "Especialista en diagnóstico y tratamiento de enfermedades de la piel.",
    image: "/images/Staff/doctor.webp",
    cmp: "053248"
  },
  {
    id: 11,
    name: "Violeta Alva Díaz de Navarro",
    specialty: "Ginecología y Obstetricia",
    summary: "Especialista en salud femenina, embarazo y partos.",
    image: "/images/Staff/doctor.webp",
    cmp: "015771"
  },
  {
    id: 12,
    name: "Walter Román Quiñones Vera",
    specialty: "Pediatría",
    summary: "Especialista en salud infantil y desarrollo pediátrico.",
    image: "/images/Staff/doctor.webp",
    cmp: "033091"
  },
  {
    id: 13,
    name: "Usaniber Chávez Gonzales",
    specialty: "Traumatología",
    summary: "Especialista en tratamiento de lesiones del sistema musculoesquelético.",
    image: "/images/Staff/doctor.webp",
    cmp: "042181"
  }
];

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredStaff([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const results = medicalStaff.filter(staff =>
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStaff(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  

  return (
    <BackgroundHome>
      <section>
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
                    <span className="premium-hero__title-main">Conoce al Equipo que Transforma Vidas</span>
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
                Contamos con un equipo multidisciplinario de profesionales de la salud altamente calificados, cuya experiencia y dedicación garantizan una atención médica integral y personalizada. Nuestro staff incluye médicos generales, especialistas, enfermeros y técnicos capacitados, todos comprometidos con los más altos estándares de calidad y calidez humana.
            </p>
        </div>
      </section>
      <section className="staff-section">
        <div className="staff-container"> 
          {/* Sección premium añadida */}
          <div className="medical-excellence">
            <div className="excellence-card">
              <div className="excellence-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="excellence-title">Certificación Internacional</h3>
              <p className="excellence-desc">Todos nuestros especialistas cuentan con certificaciones de las principales instituciones médicas mundiales</p>
            </div>

            <div className="excellence-card">
              <div className="excellence-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 2v4" strokeLinecap="round"/> {/* Soporte superior calendario */}
                  <path d="M16 2v4" strokeLinecap="round"/> {/* Soporte superior calendario */}
                  <path d="M3 10h18" strokeLinecap="round"/> {/* Línea divisoria */}
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round"/> {/* Calendario */}
                  <circle cx="12" cy="15" r="4" strokeLinecap="round"/> {/* Reloj (círculo) */}
                  <path d="M12 13v2l1 1" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="excellence-title">Agendar Cita</h3>
              <p className="excellence-desc">Elige día y hora, y recibe la confirmación al instante</p>
            </div>

            <div className="excellence-card">
              <div className="excellence-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                </svg>
              </div>
              <h3 className="excellence-title">Tecnología de Vanguardia</h3>
              <p className="excellence-desc">Equipamiento diagnóstico con los últimos avances tecnológicos</p>
            </div>
          </div>

          <div className="medical-stats">
            <div className="stat-item">
              <div className="stat-number" data-count="50">50</div>
              <div className="stat-label">Especialistas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="40">22</div>
              <div className="stat-label">Especialidades</div>
            </div>
            
          </div>

          <div className="search-container" data-is-searching={isSearching}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Buscar por nombre o especialidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                aria-label="Buscar profesionales médicos"
              />
              {/* Botón de cancelar (solo visible cuando hay texto) */}
              {searchTerm && (
                <button 
                  className="search-cancel-btn"
                  onClick={() => setSearchTerm('')}
                  aria-label="Cancelar búsqueda"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
              
              <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              
              {isSearching && (
                <div className="search-loading-indicator">
                  <div className="search-spinner">
                    <div className="spinner-track"></div>
                    <div className="spinner-thumb"></div>
                  </div>
                </div>
              )}
              
              <div className="search-input-border"></div>
            </div>
            
            <div className="search-focus-effect"></div>
          </div>
          
          {(searchTerm && filteredStaff.length > 0) && (
            <div className="search-results">
              {filteredStaff.map(staff => (
                <div key={staff.id} className="staff-card">
                  <div className="staff-image-container">
                    <img src={staff.image} alt={staff.name} className="staff-image" />
                    <div className="staff-specialty-badge">{staff.specialty}</div>
                  </div>
                  <div className="staff-info">
                    <h3 className="staff-name">{staff.name}</h3>
                    <p className="staff-summary">{staff.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {(searchTerm && filteredStaff.length === 0 && !isSearching) && (
            <div className="no-results">
              <p>No se encontraron resultados para "{searchTerm}"</p>
            </div>
          )}
          
          <div className="staff-grid-container">
            {!searchTerm && (
              <div className="staff-grid">
                {medicalStaff.map(staff => (
                  <div key={staff.id} className="staff-card">
                    <div className="staff-image-container">
                      <img src={staff.image} alt={staff.name} className="staff-image" />
                      <div className="staff-specialty-badge">{staff.specialty}</div>
                    </div>
                    <div className="staff-info">
                      <h3 className="staff-name">{staff.name}</h3>
                      <p className="staff-summary">{staff.summary}</p>
                    </div>
                    <div className="staff-credentials-container">
                      <div className="staff-badges">
                        {staff.cmp && (
                          <span className="credential-badge cmp-badge">CMP: {staff.cmp}</span>
                        )}
                        {staff.cep && (
                          <span className="credential-badge cep-badge">CEP: {staff.cep}</span>
                        )}
                        {staff.ctmp && (
                          <span className="credential-badge ctmp-badge">CTMP: {staff.ctmp}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </BackgroundHome>
  );
};

export default Staff;