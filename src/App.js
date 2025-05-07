import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Especialidades from './components/Especialidades/Especialidades';
import Servicios from './components/Servicios/Servicios'; 
import Staff from './components/Staff/Staff';
import Nosotros from './components/Nosotros/Nosotros';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header visible en todas las páginas */}
        <Header />

        {/* Contenido principal con rutas */}
        <div className="main-content">
          <Routes>
            {/* Ruta de inicio */}
            <Route path="/" element={<Main />} />

            {/* Ruta de especialidades */}
            <Route path="/especialidades" element={<Especialidades />} />

            {/* Ruta de servicios */}
            <Route path="/servicios" element={<Servicios />} />

            {/* Ruta de staff */}
            <Route path="/staff" element={<Staff />} />

            {/* Ruta de NOSOTROS */}
            <Route path="/nosotros" element={<Nosotros />} />

            {/* Redirección por defecto si no se encuentra la ruta */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Footer y botón flotante visibles en todas las páginas */}
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
