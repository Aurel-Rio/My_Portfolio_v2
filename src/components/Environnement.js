import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Environnement.css'

const Environnement = () => {
    return (
        <div id="environnement">
            <Navbar />
            <h4>Voici mon environnement d'éxécution: </h4>
            <h5>Debian 11 Bullseye</h5>
            <div id="debian_link">
                <h5><i>Pourquoi j'ai choisi Debian 11 Bullseye? (Et pas Windows 11 </i>: &#128540; )</h5>
                <img src="./img/debian-1.png" alt="Debian logo"></img>
                <p>Mon environnement d'exécution actuel est Debian 11 Bullseye, une distribution de Linux basée sur le noyau Linux. J'ai choisi d'utiliser Debian pour plusieurs raisons. Tout d'abord, Debian est connu pour sa stabilité et sa fiabilité, ce qui en fait un choix idéal pour les serveurs et les machines de production. En tant que développeur, j'apprécie particulièrement la richesse de son système de gestion de paquets, qui me permet d'installer rapidement et facilement de nombreux outils et bibliothèques utiles à mon travail.

                    En outre, j'ai choisi Debian pour sa sécurité renforcée par défaut et sa communauté active, qui assure une veille régulière pour corriger les vulnérabilités de sécurité. J'aime aussi le fait que Debian soit open-source et que je puisse y contribuer en signalant des bugs ou en proposant des améliorations.

                    Enfin, j'ai opté pour Debian plutôt que Windows 11 car j'ai une préférence pour les systèmes d'exploitation basés sur Linux. En tant que système d'exploitation open-source, Debian offre plus de flexibilité et de personnalisation, ainsi qu'une grande variété d'outils de développement disponibles gratuitement. En outre, je préfère l'environnement de ligne de commande de Linux et les scripts shell pour l'automatisation de certaines tâches.

                    En somme, j'ai choisi Debian 11 Bullseye pour sa stabilité, sa sécurité, sa richesse de paquets, sa communauté active et sa flexibilité en tant que système d'exploitation open-source, ainsi que pour mes préférences personnelles en matière d'environnement de développement et d'automatisation.</p>
            </div>
            <button id="next_environnement" className="image-clignote ">NEXT</button>
            <Footer />
        </div>
    );
};

export default Environnement;
