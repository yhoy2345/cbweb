import { useState, useEffect } from 'react';
import BackgroundHome from '../Background/BackgroundHome';
import './Staff.css';

// Datos de ejemplo del staff médico
const medicalStaff = [
  {
    id: 1,
    name: 'Dra. Ana López',
    specialty: 'Cardiología',
    summary: 'Especialista en enfermedades cardiovasculares y rehabilitación cardíaca con más de 15 años de experiencia.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Dr. Carlos Mendez',
    specialty: 'Neurología',
    summary: 'Experto en trastornos del sistema nervioso y tratamiento de enfermedades neurodegenerativas.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Dra. Sofía Ramírez',
    specialty: 'Pediatría',
    summary: 'Pediatra especializada en atención neonatal y seguimiento del desarrollo infantil.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Dr. Javier Torres',
    specialty: 'Ortopedia',
    summary: 'Cirujano ortopédico con enfoque en traumatología deportiva y reemplazos articulares.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Dra. Patricia Gómez',
    specialty: 'Dermatología',
    summary: 'Dermatóloga cosmética y clínica, especialista en cáncer de piel y trastornos cutáneos complejos.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: 'Dr. Luis Herrera',
    specialty: 'Oncología',
    summary: 'Oncólogo médico con experiencia en terapias dirigidas y tratamiento multidisciplinario del cáncer.',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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
      {/* Imagen estática  */}
      <section className="especialidades-imagen-estatica">
        <div className="especialidades-imagen-container">
          <img
            src="/images/hero/fondo1.jpg"
            alt="Imagen principal"
            className="especialidades-imagen"
          />
        </div>
      </section>
      <section className="staff-section">
        <div className="staff-container"> 
          <h1 className="medical-excellence-title">
            <span class="medical-line medical-line--1">
              <span class="medical-text">Donde la</span>
              <span class="medical-highlight medical-highlight--excellence">Excelencia</span>
            </span>
            <span class="medical-line medical-line--2">
              <span class="medical-highlight medical-highlight--medical">Médica</span>
              <span class="medical-text">Se Convierte en</span>
            </span>
            <span class="medical-line medical-line--3">
              <span class="medical-highlight medical-highlight--trust">Confianza</span>
            </span>
          </h1>
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
              <div className="stat-number" data-count="40">30</div>
              <div className="stat-label">Especialidades</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="98">98</div>
              <div className="stat-label">% Satisfacción</div>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </BackgroundHome>
  );
};

export default Staff;