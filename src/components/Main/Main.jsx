import React from 'react';
import CarruselHero from './sections/CarruselHero/CarruselHero';
import Servicios from './sections/Servicios/Servicios';
import './Main.css';

const Main = () => {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <CarruselHero />
        <Servicios />
      </div>
    </main>
  );
};

export default Main;