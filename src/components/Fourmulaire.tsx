import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import Header from "./Header";
import Footer from "./Footer";

const FormulaireAccordeon: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    ville: "",
    adresse: "",
    description: "",
    lieu: "",
    photo: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const toggleSection = (section: number) => setActiveSection(section);
  const nextStep = (current: number) => setActiveSection(current + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priorites = ["Basse", "Moyenne", "Élevée"];
    const priorite = priorites[Math.floor(Math.random() * priorites.length)];

    const reclamation = { ...formData, priorite };
    const data = JSON.parse(localStorage.getItem("reclamations") || "[]");
    data.push(reclamation);
    localStorage.setItem("reclamations", JSON.stringify(data));
    window.location.href = "/dashboard";
  };

  return (
    <>
      <Header />

      <div
        style={{
          backgroundColor: "#fff",
          backgroundImage:
            "url('https://i.pinimg.com/736x/8e/58/37/8e5837a4fa1b4eda80459e35955b42ba.jpg')", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom", // motif sur un côté comme ton image
          backgroundSize: "300px", // grande taille des motifs
          minHeight: "100vh",
          padding: "50px 0",
        }}
      >
        <div
          className="cnie-form main"
          style={{
            width: "80%",
            maxWidth: "800px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.96)",
            borderRadius: "16px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
            padding: "35px",
          }}
        >
          <div className="text-center mb-4">
            <h2 style={{ fontWeight: "bold" }}>Formulaire de Signalement</h2>
            <p className="text-secondary">
              Merci de renseigner les informations ci-dessous pour signaler un problème.
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="cnie-section mb-4" style={{ border: "1px solid #d1e7dd", borderRadius: "12px" }}>
            <div
              className="cnie-header"
              style={{
                backgroundColor: "#f2fff9ff",
                color: "#14532d",
                padding: "15px",
                fontWeight: 600,
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                cursor: "pointer",
              }}
              onClick={() => toggleSection(1)}
            >
              Informations Personnelles
            </div>
            {activeSection === 1 && (
              <div className="form-wrapper active p-4">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Nom</label>
                      <input type="text" name="nom" className="form-control rounded-pill" value={formData.nom} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Prénom</label>
                      <input type="text" name="prenom" className="form-control rounded-pill" value={formData.prenom} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="email" name="email" className="form-control rounded-pill" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Ville</label>
                      <select name="ville" className="form-select rounded-pill" value={formData.ville} onChange={handleChange}>
                        <option value="">Choisissez</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Paris">Paris</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Adresse</label>
                      <input type="text" name="adresse" className="form-control rounded-pill" value={formData.adresse} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button type="button" className="btn btn-success rounded-pill px-4" onClick={() => nextStep(1)}>
                      Suivant
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* SECTION 2 */}
          <div className="cnie-section" style={{ border: "1px solid #d1e7dd", borderRadius: "12px" }}>
            <div
              className="cnie-header"
              style={{
                backgroundColor: "#f2fff9ff",
                color: "#14532d",
                padding: "15px",
                fontWeight: 600,
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                cursor: "pointer",
              }}
              onClick={() => toggleSection(2)}
            >
              Détails du signalement
            </div>
            {activeSection === 2 && (
              <div className="form-wrapper active p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Décris le problème</label>
                    <textarea
                      name="description"
                      rows={4}
                      className="form-control rounded"
                      placeholder="Ex: Il y a une accumulation d’ordures près du marché…"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Lieu (rue, quartier…)</label>
                    <input
                      type="text"
                      name="lieu"
                      className="form-control rounded-pill"
                      placeholder="Ex: Hay Hassani, près de l’école…"
                      value={formData.lieu}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Photo (facultatif)</label>
                    <input type="file" name="photo" className="form-control rounded-pill" onChange={handleChange} />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-success rounded-pill px-4">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  );
};

export default FormulaireAccordeon;
