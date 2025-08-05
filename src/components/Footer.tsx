import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">

      {/* Footer Main Content */}
      <div className="container footer-top">
        <div className="row gy-4">
          
          {/* À propos */}
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="d-flex align-items-center">
              <span className="sitename">Saken Alert</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Casablanca, Maroc</p>
              <p>Quartiers et communes partenaires</p>
              <p className="mt-3"><strong>Téléphone :</strong> <span>+212 6 12 34 56 78</span></p>
              <p><strong>Email :</strong> <span>contact@sakenalert.ma</span></p>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Liens utiles</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="/">Accueil</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#dashboard">Dashboard</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#signalements">Signalements</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Nos Services */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nos Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#proprete">Propreté</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#voirie">Voirie</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#eclairage">Éclairage Public</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#securite">Sécurité</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-lg-4 col-md-12">
            <h4>Suivez-nous</h4>
            <p>Restez informé en temps réel grâce à nos réseaux sociaux.</p>
            <div className="social-links d-flex">
              
              <a href="/" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="/" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p><strong className="px-1 sitename">© {new Date().getFullYear()} Saken Alert</strong> - <span>Tous droits réservés</span></p>
      </div>
    </footer>
  );
};

export default Footer;
