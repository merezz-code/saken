import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src="/public/img/about.png" className="img-fluid rounded-4" alt="À propos de Saken Alert" />
          </div>
          <div className="col-lg-6 content">
            <h2>À propos de Saken Alert</h2>
            <p className="fst-italic">
              Saken Alert est une plateforme citoyenne qui facilite la communication entre les habitants et les autorités locales.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Signalez rapidement tout problème dans votre quartier.</li>
              <li><i className="bi bi-check-circle"></i> Suivez l'état de vos signalements en temps réel.</li>
              <li><i className="bi bi-check-circle"></i> Participez activement à l'amélioration de votre ville.</li>
            </ul>
            <p>
              Nous croyons qu'en donnant aux citoyens les bons outils, nous pouvons améliorer la qualité de vie en milieu urbain. 
              Grâce à Saken Alert, chaque signalement compte et contribue à un environnement plus propre, plus sûr et plus organisé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
