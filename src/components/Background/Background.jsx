import React, { useRef, useEffect } from 'react';
import './Background.css';

const Background = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawNetwork();
    };
    
    function drawNetwork() {
      const width = canvas.width;
      const height = canvas.height;
      
      // Fondo claro azul-verdoso
      ctx.fillStyle = '#e6f2f5';
      ctx.fillRect(0, 0, width, height);
      
      // Colores para líneas y nodos
      const lineColors = ['#0078d7', '#48c774', '#00b4d8', '#2ec4b6'];
      const nodeColors = ['#0078d7', '#48c774'];
      
      // Crear nodos (distribuidos pero más densos en esquina inferior izquierda)
      const nodes = [];
      const nodeCount = 80;
      
      for (let i = 0; i < nodeCount; i++) {
        // Distribución general
        let x = width * Math.random();
        let y = height * Math.random();
        
        // Aumentar densidad en esquina inferior izquierda
        if (Math.random() > 0.7) {
          x = width * 0.3 * Math.pow(Math.random(), 2);
          y = height - (height * 0.4 * Math.pow(Math.random(), 2));
        }
        
        nodes.push({
          x,
          y,
          size: 1 + Math.random() * 3,
          color: nodeColors[Math.floor(Math.random() * nodeColors.length)],
          connections: []
        });
      }
      
      // Dibujar conexiones
      ctx.lineWidth = 0.6;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i];
          const node2 = nodes[j];
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < Math.min(width, height) * 0.25) {
            // Línea con curvatura aleatoria
            const midX = (node1.x + node2.x) / 2;
            const midY = (node1.y + node2.y) / 2;
            const cpX = midX + (Math.random() - 0.5) * distance * 0.4;
            const cpY = midY + (Math.random() - 0.5) * distance * 0.4;
            
            ctx.strokeStyle = lineColors[Math.floor(Math.random() * lineColors.length)];
            ctx.globalAlpha = 0.3 + Math.random() * 0.3;
            
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.quadraticCurveTo(cpX, cpY, node2.x, node2.y);
            ctx.stroke();
            
            node1.connections.push(j);
            node2.connections.push(i);
          }
        }
      }
      
      // Dibujar nodos
      for (const node of nodes) {
        // Nodo principal
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Efecto de halo sutil para nodos con muchas conexiones
        if (node.connections.length > 3) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.size * 4
          );
          gradient.addColorStop(0, `${node.color}40`);
          gradient.addColorStop(1, `${node.color}00`);
          
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="background-wrapper">
      <canvas ref={canvasRef} className="network-canvas" />
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Background;