import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      window.location.href = '/dashboard'; // Rediriger vers dashboard
    } else {
      setErrorMessage('Login ou mot de passe incorrect.');
    }
  };

  return (
    <div className="container-fluid login-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f4fdf7' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-10 col-xl-8">
          <div className="card p-4" style={{ borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div className="row g-0">
              
              {/* Illustration */}
              <div className="col-md-5 d-none d-md-flex align-items-center">
                <img
                  src="https://i.pinimg.com/736x/99/9f/66/999f66eae834c961cd9bc599d82be28a.jpg"
                  alt="Illustration"
                  className="img-fluid"
                />
              </div>

              {/* Formulaire */}
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="text-center mb-4" style={{ color: '#198754' }}>Connexion</h3>
                  {errorMessage && <div className="text-center mb-3" style={{ color: 'red', fontSize: '0.9rem' }}>{errorMessage}</div>}
                  
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label" style={{ color: '#198754', fontWeight: 500 }}>Login</label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label" style={{ color: '#198754', fontWeight: 500 }}>Mot de passe</label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                        <label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
                      </div>
                      <a href="#" style={{ color: '#198754' }}>Mot de passe oublié ?</a>
                    </div>
                    <button type="submit" className="btn btn-success w-100" style={{ backgroundColor: '#198754', borderColor: '#198754' }}>Se connecter</button>
                  </form>
                </div>
              </div>
            </div> {/* row */}
          </div> {/* card */}
        </div>
      </div>
    </div>
  );
};

export default Login;
