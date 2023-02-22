import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import titreImage from './img/my_title.png';
import '../Titre.css';

const Titre = () => {
    return (
        <div id="titre">
            <Navbar />
            <p>Titre de développeur Web/Web mobile - Niveau 5 Etat Français</p>
            <img src={titreImage} alt="Mon Tire de développeur Web" />
            <Footer />
        </div>
    )
}

export default Titre;