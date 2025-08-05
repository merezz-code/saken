import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header 
      id="header" 
      className="header d-flex align-items-center sticky-top shadow-sm bg-white border-bottom"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        {/* Logo + Nom à gauche */}
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img 
            src="/img/logo.png" 
            alt="Saken Alert" 
            style={{ height: '45px', marginRight: '10px' }} 
          />
          
        </Link>

        {/* Navigation + Bouton tout à droite */}
        <div className="d-flex align-items-center ms-auto">
          {/* Menu de navigation */}
          <nav id="navmenu" className="d-none d-lg-block me-4">
            <ul className="d-flex list-unstyled mb-0 gap-4">
              <li><Link to="/" className="text-dark fw-medium nav-link">Accueil</Link></li>
              <li><a href="#about" className="text-dark fw-medium nav-link">À propos</a></li>
              <li><a href="#contact" className="text-dark fw-medium nav-link">Contact</a></li>
              <li><Link to="/login" className="text-dark fw-medium nav-link">Se connecter</Link></li>
            </ul>
          </nav>

          {/* Bouton Signaler aligné à droite */}
          <Link 
            className="btn btn-success rounded-pill px-4 fw-semibold shadow-sm" 
            to="/formulaire"
            style={{ fontSize: '0.95rem' }}
          >
             Signaler
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
