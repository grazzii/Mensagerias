import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="custom-header">
      <div className="header-content">
        <img src="LogoRede.png" alt="Logo Rede" className="header-logo" />
      </div>
      <div className="header-content">
        <img src="Itau.png" alt="Logo Itaú" className="header-logo" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <img src="Transformers.png" alt="Transformers Logo" className="footer-logo" />
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="mockup-video-wrapper">
          {/* Mockup com vídeo sobreposto */}
          <div className="mockup-container">
            <img src="Mockup.png" alt="Mockup" className="mockup-image" />
            <video className="overlay-video" src="Mensagerias.mp4" autoPlay loop muted></video>
          </div>
          {/* Texto ao lado do Mockup e Vídeo */}
          <div className="text-container">
            <h2>
              Tracking de Bobinas:<br />Mensageria para cada Evento
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
