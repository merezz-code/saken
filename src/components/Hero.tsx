import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Améliorons notre ville.</h1>
            <p>Signalez un problème près de chez vous en quelques clics.</p>
            <div className="d-flex">
              <a href="/formulaire" className="btn-get-started">Soumettez un signalement</a>
              <a 
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8" 
                className="glightbox btn-watch-video d-flex align-items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            {/* Importation locale recommandée */}
            <img src="/public/img/hero-img.png" className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
