import React from 'react';

const FeaturedServices: React.FC = () => {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-geo-alt"></i></div>
              <h4><a href="#" className="stretched-link">Signalement Local</a></h4>
              <p>Signalez rapidement un problème autour de vous pour améliorer votre quartier.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-shield-check"></i></div>
              <h4><a href="#" className="stretched-link">Suivi Sécurisé</a></h4>
              <p>Suivez l'état de vos signalements en toute transparence et sécurité.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-people"></i></div>
              <h4><a href="#" className="stretched-link">Communauté Active</a></h4>
              <p>Participez à une communauté qui œuvre pour un meilleur environnement urbain.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-phone"></i></div>
              <h4><a href="#" className="stretched-link">Accessibilité Mobile</a></h4>
              <p>Utilisez notre plateforme sur tous vos appareils, où que vous soyez.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
