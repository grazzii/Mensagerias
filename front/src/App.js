import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="custom-header">
      <div className="header-content-center">
        {/* Transformers.png centralizado e aumentado */}
        <img src="Transformers.png" alt="Transformers Logo" className="header-logo header-logo-center" />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-logo-container">
        {/* Link para https://www.userede.com.br/ ao clicar no LogoRede e no Laranjinha */}
        <a href="https://www.userede.com.br/" target="_blank" rel="noopener noreferrer">
          <img src="LogoRede.png" alt="Logo Rede" className="footer-logo-left" />
        </a>
        <a href="https://www.userede.com.br/" target="_blank" rel="noopener noreferrer">
          <img src="Laranjinha.png" alt="Laranjinha Logo" className="footer-logo-right" />
        </a>
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
          <div className="mockup-container">
            <img src="Mockup.png" alt="Mockup" className="mockup-image" />
            <video className="overlay-video" src="Mensagerias.mp4" autoPlay loop muted></video>
          </div>
          <div className="text-container">
            <h2>
              Tracking de Bobinas:<br />Mensageria automática para cada Evento
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
