import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Accueil.css';

function Accueil() {

  return (
    <div>
      <Navbar />
      <div id="title_home_page">
        <h1>My Portfolio</h1>
        <p>Bienvenue sur mon portfolio!</p>
      </div>
      <div className='zone_txt_center'>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;"Bonjour, je vous présente mon portfolio qui regroupe mes projets réalisés avec les technologies les plus en vogue telles que React, Node.js, Express, MongoDB et Bootstrap. J'y ai intégré des projets de développement web et mobile pour vous donner un aperçu de mes compétences et de mon savoir-faire."</p>
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;