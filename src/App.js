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
import Convenios from './components/Convenios/Convenios';

// Importar todos los componentes de especialidades
import Anestesiologia from './components/Especialidades/Especialidades/Anestesiologia';
import Cardiologia from './components/Especialidades/Especialidades/Cardiologia';
import CirugiaGeneral from './components/Especialidades/Especialidades/CirugiaGeneral';
import CirugiaPediatrica from './components/Especialidades/Especialidades/CirugiaPediatrica';
import Dermatologia from './components/Especialidades/Especialidades/Dermatologia';
import Gastroenterologia from './components/Especialidades/Especialidades/Gastroenterologia';
import GinecologiaObstetricia from './components/Especialidades/Especialidades/GinecologiaObstetricia';
import MedicinaGeneral from './components/Especialidades/Especialidades/MedicinaGeneral';
import LaboratorioClinico from './components/Especialidades/Especialidades/LaboratorioClinico';
import MedicinaInterna from './components/Especialidades/Especialidades/MedicinaInterna';
import Neumologia from './components/Especialidades/Especialidades/Neumologia';
import Neurologia from './components/Especialidades/Especialidades/Neurologia';
import Nutricion from './components/Especialidades/Especialidades/Nutricion';
import TraumatologiaOrtopedia from './components/Especialidades/Especialidades/TraumatologiaOrtopedia';
import Otorrinolaringologia from './components/Especialidades/Especialidades/Otorrinolaringologia';
import Pediatria from './components/Especialidades/Especialidades/Pediatria';
import Radiologia from './components/Especialidades/Especialidades/Radiologia';
import Urologia from './components/Especialidades/Especialidades/Urologia';
import CirugiaPlastica from './components/Especialidades/Especialidades/CirugiaPlastica';
import FarmaciaClinica from './components/Especialidades/Especialidades/FarmaciaClinica';
import EnfermeriaPediatrica from './components/Especialidades/Especialidades/EnfermeriaPediatrica';
import AnatomiaPatologica from './components/Especialidades/Especialidades/AnatomiaPatologica';

import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/especialidades" element={<Especialidades />} />
            {/* Rutas para cada especialidad */}
            <Route path="/especialidades/anestesiologia" element={<Anestesiologia />} />
            <Route path="/especialidades/cardiologia" element={<Cardiologia />} />
            <Route path="/especialidades/cirugiageneral" element={<CirugiaGeneral />} />
            <Route path="/especialidades/cirugiapediatrica" element={<CirugiaPediatrica />} />
            <Route path="/especialidades/dermatologia" element={<Dermatologia />} />
            <Route path="/especialidades/gastroenterologia" element={<Gastroenterologia />} />
            <Route path="/especialidades/ginecologia-obstetricia" element={<GinecologiaObstetricia />} />
            <Route path="/especialidades/medicina-general" element={<MedicinaGeneral />} />
            <Route path="/especialidades/laboratorio-clinico" element={<LaboratorioClinico />} />
            <Route path="/especialidades/medicina-interna" element={<MedicinaInterna />} />
            <Route path="/especialidades/neumologia" element={<Neumologia />} />
            <Route path="/especialidades/neurologia" element={<Neurologia />} />
            <Route path="/especialidades/nutricion" element={<Nutricion />} />
            <Route path="/especialidades/traumatologia-ortopedia" element={<TraumatologiaOrtopedia />} />
            <Route path="/especialidades/otorrinolaringologia" element={<Otorrinolaringologia />} />
            <Route path="/especialidades/pediatria" element={<Pediatria />} />
            <Route path="/especialidades/radiologia" element={<Radiologia />} />
            <Route path="/especialidades/urologia" element={<Urologia />} />
            <Route path="/especialidades/cirugia-plastica" element={<CirugiaPlastica />} />
            <Route path="/especialidades/farmacia-clinica" element={<FarmaciaClinica />} />
            <Route path="/especialidades/enfermeria-pediatrica" element={<EnfermeriaPediatrica />} />
            <Route path="/especialidades/patologica" element={<AnatomiaPatologica />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/convenios" element={<Convenios />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;