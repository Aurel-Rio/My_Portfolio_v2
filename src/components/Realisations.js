import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjetItem from "./Projet"; // Utilisation du nouveau nom
import rt1 from '../components/img/rt1.jpg';

import "../Realisations.css";

const projets = [
  {
    titre: "Site vitrine pour la boutique Iss09 (Informatique, Services, Saverdun)",
    description:
      "Le site http://iss09.fr est un site vitrine que j'ai développé en distanciel avant mon entrée en formation à l'ADRAR. J'ai utilisé les technologies suivantes : HTML, CSS, JavaScript et PHP. Ce site est destiné à présenter l'entreprise ISS09, qui propose des services en installation de système de sécurité, dépannage informatique et formation. Si vous voulez voir le site en ligne, vous pouvez cliquer sur le lien ci-dessous.",
      imageSrc: process.env.PUBLIC_URL + '/img/iss09.jpg',
    },
    {
      titre: "Projet",
      description:
        "Le site http://iss09.fr est un site vitrine que j'ai développé en distanciel avant mon entrée en formation à l'ADRAR. J'ai utilisé les technologies suivantes : HTML, CSS, JavaScript et PHP. Ce site est destiné à présenter l'entreprise ISS09, qui propose des services en installation de système de sécurité, dépannage informatique et formation. Si vous voulez voir le site en ligne, vous pouvez cliquer sur le lien ci-dessous.",
        imageSrc: process.env.PUBLIC_URL + '/img/my_cv.png',
      },
];

const Realisations = () => {
  return (
    <div>
      <section id="#Realisations">
        <Navbar />
        <h3>
          Découvrez mes projets réalisés, qui mettent en avant mon expertise en
          matière de développement web.
        </h3>
      
      </section>
      <h2>Réalisations</h2>
     {projets.map((projet, index) => (
  <ProjetItem
    key={index}
    titre={projet.titre}
    description={projet.description}
    imageSrc={projet.imageSrc}
  />
))}
        <Footer />
    </div>
  );
};

export default Realisations;