import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import titreImage from './img/my_title.png';
import '../Titre.css';

const Titre = () => {
    return (
        <section id="titre">
            <Navbar />
            <p>Titre de développeur Web/Web mobile - Niveau 5 Etat Français</p>
            <img src={titreImage} alt="Mon Tire de développeur Web" />
            <Footer />
        </section>
    )
}

export default Titre;