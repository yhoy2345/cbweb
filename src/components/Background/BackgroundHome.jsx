import React, { useEffect, useRef } from 'react';
import './BackgroundHome.css';

const BackgroundHome = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawHexagonalPattern();
    }
    
    function drawHexagonalPattern() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Configuración del patrón
      const hexSize = 80;
      const lineColor = 'rgba(0, 120, 215, 0.15)';
      const connectionColor = 'rgba(72, 199, 116, 0.2)';
      
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      
      // Calcular número de filas y columnas necesarias
      const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 1;
      const cols = Math.ceil(canvas.width / (hexSize * Math.sqrt(3))) + 1;
      
      // Dibujar patrón hexagonal
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * hexSize * Math.sqrt(3) + (i % 2) * hexSize * Math.sqrt(3) / 2;
          const y = i * hexSize * 1.5;
          
          // Dibujar hexágono
          drawHexagon(ctx, x, y, hexSize);
          
          // Conectar con vecinos
          if (j > 0) {
            drawConnection(ctx, x, y, x - hexSize * Math.sqrt(3), y, connectionColor);
          }
          if (i > 0) {
            drawConnection(
              ctx, 
              x, y, 
              x + (i % 2 ? -1 : 1) * hexSize * Math.sqrt(3) / 2, 
              y - hexSize * 1.5, 
              connectionColor
            );
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
    
    function drawConnection(ctx, x1, y1, x2, y2, color) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.stroke();
      
      // Punto de conexión central
      ctx.beginPath();
      ctx.arc((x1 + x2) / 2, (y1 + y2) / 2, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    
    function animate() {
      drawHexagonalPattern();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hexagonal-background-container">
      {/* Canvas para el patrón hexagonal */}
      <canvas 
        ref={canvasRef} 
        className="hexagonal-pattern-canvas"
      />
      
      {/* Contenedor para el contenido */}
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default BackgroundHome;