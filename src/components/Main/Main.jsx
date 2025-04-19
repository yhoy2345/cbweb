import React from 'react';
import BackgroundHome from '../Background/BackgroundHome';
import CarruselHero from './sections/CarruselHero/CarruselHero';
import Servicios from './sections/Servicios/Servicios';
import Especialidades from './sections/Especialidades/Especialidades';
import Elegirnos from './sections/Elegirnos/Elegirnos'
import './Main.css';

const Main = () => {
  return (
    <BackgroundHome>
      <main className="main-content">
        <CarruselHero />
        <Servicios />
        <Especialidades />
        <Elegirnos/>
      </main>
    </BackgroundHome>
  );
};

export default Main;