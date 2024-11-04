// MockupVideoOverlay.js
import React from 'react';
import './MockupVideoOverlay.css'; // Importa o CSS para a estilização

const MockupVideoOverlay = () => {
  return (
    <div className="mockup-video-wrapper">
      <div className="mockup-container">
        <img src="/Mockup.png" alt="Mockup" className="mockup-image" />
        <video className="overlay-video" src="/Mensagerias.mp4" autoPlay loop muted />
      </div>
      <div className="text-container">
        <h2>Tracking de Bobinas: Mensageria de Eventos</h2>
      </div>
    </div>
  );
};

export default MockupVideoOverlay;
