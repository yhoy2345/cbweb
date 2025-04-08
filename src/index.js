// 1. Importa ReactDOM y React correctamente
import React from 'react';
import ReactDOM from 'react-dom/client'; // Versión moderna de React 18+
import './index.css';
import App from './App'; // Importa el componente App

// 2. Crea el root usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);