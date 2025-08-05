import React, { useState, type FormEvent } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Message envoyé par ${name} (${email}): ${message}`);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Contactez-nous</h2>
          <p>Une question, une suggestion ? Écrivez-nous !</p>
        </div>

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Votre Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-primary">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
