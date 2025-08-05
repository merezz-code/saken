import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import App from './App';
import ReactDOM from 'react-dom/client'; 
import React from 'react';
import Formulaire from './components/Fourmulaire';
import Dashboard from './Dashboard';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
