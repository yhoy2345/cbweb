// BackgroundHome.jsx
import React, { useEffect, useRef } from 'react';
import '../Background/BackgroundHome.css';
import { FaNotesMedical, FaXRay, FaAmbulance } from 'react-icons/fa';

import { 
  FaPills, 
  FaHeartbeat,
  FaSyringe,
  FaStethoscope,
  
} from 'react-icons/fa';

const BackgroundHome = ({ children }) => {
  const canvasRef = useRef(null);
  
  // Configuración de elementos médicos
  const medicalElements = [
    { icon: FaPills, color: '#48c774', size: 2, type: 'pill' },
    { icon: FaHeartbeat, color: '#0078d7', size: 2, type: 'heart' },
    { icon: FaSyringe, color: '#20c4f4', size: 2, type: 'syringe' },
    { icon: FaStethoscope, color: '#00b4a0', size: 3, type: 'stethoscope' },
    { icon: FaNotesMedical, color: '#ff6f91', size: 2, type: 'note' },
    { icon: FaXRay, color: '#a67ee5', size: 3, type: 'xray' },
    { icon: FaAmbulance, color: '#ef476f', size: 2, type: 'ambulance' }
  ];

  useEffect(() => {
    // Dibujar conexiones moleculares dinámicas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    function drawMolecularConnections() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 120, 215, 0.1)';
      ctx.lineWidth = 1;
      
      // Dibujar patrón hexagonal
      const hexSize = 80;
      const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 1;
      const cols = Math.ceil(canvas.width / (hexSize * Math.sqrt(3))) + 1;
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * hexSize * Math.sqrt(3) + (i % 2) * hexSize * Math.sqrt(3) / 2;
          const y = i * hexSize * 1.5;
          
          // Dibujar hexágono
          drawHexagon(ctx, x, y, hexSize);
          
          // Conectar con vecinos (simulando moléculas)
          if (j > 0) {
            drawConnection(ctx, x, y, x - hexSize * Math.sqrt(3), y);
          }
          if (i > 0) {
            drawConnection(ctx, x, y, x + (i % 2 ? -1 : 1) * hexSize * Math.sqrt(3) / 2, y - hexSize * 1.5);
          }
        }
      }
    }
    
    function drawHexagon(ctx, x, y, size) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }
    
    function drawConnection(ctx, x1, y1, x2, y2) {
      if (Math.random() > 0.7) return; // Aleatoriedad en conexiones
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      
      // Punto de conexión
      ctx.beginPath();
      ctx.arc((x1 + x2) / 2, (y1 + y2) / 2, 1, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(72, 199, 116, 0.3)';
      ctx.fill();
    }
    
    resizeCanvas();
    drawMolecularConnections();
    
    window.addEventListener('resize', () => {
      resizeCanvas();
      drawMolecularConnections();
    });
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="ultra-premium-bg">
      {/* Canvas para conexiones moleculares */}
      <canvas ref={canvasRef} className="hexagonal-canvas"></canvas>
      
      {/* Efecto UV sutil */}
      <div className="uv-light-effect"></div>
      
      {/* Ondas ECG con latido */}
      <div className="ecg-container">
        <div className="ecg-line ecg-line-1"></div>
        <div className="ecg-line ecg-line-2"></div>
        <div className="ecg-pulse"></div>
      </div>

      <div className="left-corner-pattern">
        {[...Array(20)].map((_, i) => {
          const size = 100 - i * 2; // de 60px hacia abajo
          const opacity = 1 - i * 0.05;
          return (
            <div
              key={i}
              className="cross-shape"
              style={{
                left: `${(Math.random() * 164) - i * -2}px`,
                bottom: `${i * 45}px`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity > 0 ? opacity : 0,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          );
        })}
      </div>
      
      {/* Elementos médicos premium */}
      <div className="premium-medical-elements">
        {[...Array(10)].map((_, i) => {
          const element = medicalElements[i % medicalElements.length];
          const Icon = element.icon;
          return (
            <div 
              key={i}
              className={`premium-medical-element ${element.type}`}
              style={{
                '--size': `${element.size}px`,
                '--color': element.color,
                '--x-start': `${Math.random() * 80 + 10}%`,
                '--y-start': `${Math.random() * 80 + 10}%`,
                '--delay': `${i * 0.5}s`,
                '--duration': `${Math.random() * 40 + 30}s`,
                '--opacity': Math.random() * 0.3 + 0.4,
                '--rotate': `${Math.random() * 360}deg`
              }}
            >
              <Icon className="premium-medical-icon" />
              {element.type === 'pill' && (
                <>
                  <div className="pill-marking"></div>
                  <div className="pill-highlight"></div>
                </>
              )}
              <div className="element-glow"></div>
            </div>
          );
        })}
      </div>
      
      {/* Contenido principal */}
      <div className="medical-content">
        {children}
      </div>
    </div>
  );
};

export default BackgroundHome;