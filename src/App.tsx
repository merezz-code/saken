import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/main.css';

// Import des composants
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
