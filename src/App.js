import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />{/* Contenido del Cuerpoo */}
    </div>
  );
}

export default App;