import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTools, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa"; // Exemples d'icônes

const Services: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
         <div className="section-title text-center">
          <h2>Nos Services</h2>
          <p>Découvrez ce que nous offrons pour améliorer votre cadre de vie.</p>
        </div>
        <div className="row g-4">
          
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 p-4">
              <div className="d-flex justify-content-center align-items-center mb-3" style={{ fontSize: "3rem", color: "#198754" }}>
                <FaTools />
              </div>
              <h5 className="fw-bold text-dark">Maintenance Urbaine</h5>
              <p className="text-muted">
                Signalement rapide des problèmes liés à la propreté, voirie et infrastructures publiques.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 p-4">
              <div className="d-flex justify-content-center align-items-center mb-3" style={{ fontSize: "3rem", color: "#198754" }}>
                <FaShieldAlt />
              </div>
              <h5 className="fw-bold text-dark">Sécurité</h5>
              <p className="text-muted">
                Déclarez toute activité suspecte ou tout problème de sécurité pour une intervention rapide.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 p-4">
              <div className="d-flex justify-content-center align-items-center mb-3" style={{ fontSize: "3rem", color: "#198754" }}>
                <FaMapMarkedAlt />
              </div>
              <h5 className="fw-bold text-dark">Géolocalisation</h5>
              <p className="text-muted">
                Suivi en temps réel des signalements grâce à notre carte interactive intuitive.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

