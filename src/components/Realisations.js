import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjetItem from "./Projet";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Realisations.css";

const projets = [
  {
    titre:
      "Projet 1: Site vitrine pour la boutique Iss09 (Informatique, Services, Saverdun)",
    techno: "Html5, Css3, Php, JavaScript",
    description:
      "Le site http://iss09.fr est un site vitrine que j'ai développé en distanciel avant mon entrée en formation à l'ADRAR. Ce site est destiné à présenter l'entreprise ISS09, qui propose des services en installation de système de sécurité, dépannage informatique et formation. Si vous voulez voir le site en ligne, vous pouvez cliquer sur le lien ci-dessous.",
    images: [
      process.env.PUBLIC_URL + "/img/iss09-1.jpg",
      process.env.PUBLIC_URL + "/img/iss09-2.jpg",
      process.env.PUBLIC_URL + "/img/iss09-3.jpg",
    ],
    link: (
      <a href="http://www.iss09.fr" target="_blank" rel="noreferrer">
        Lien vers le site Iss09
      </a>
    ),
  },
  {
    titre: "Projet 2: Projet de plateforme Web Retro_Tech - En cours",
    techno: "Bootstrap, NodeJs, ReactJs, css3, git",
    description:
      "Le projet Retro_Tech a pour but (à terme) de rassembler une communauté de passionnés de jeux vidéo rétro, que ce soit sur PC, consoles, écrans ou même dans le coding. Sur RetroTech, vous pourrez découvrir des actualités, des tutoriels, des astuces et des conseils pour réparer ou optimiser votre matériel, ainsi que des articles de fond sur l'histoire du rétro-gaming et des analyses de jeux cultes. De plus, notre blog vous propose des articles de qualité écrits par des experts et des amateurs éclairés, qui partagent leur expérience et leur passion pour le jeu vidéo rétro.",
    images: [
      process.env.PUBLIC_URL + "/img/iss09-1.jpg",
      process.env.PUBLIC_URL + "/img/iss09-2.jpg",
      process.env.PUBLIC_URL + "/img/iss09-3.jpg",
    ],
  },
  {
    titre: "Projet 3: Projet de site Web e-commerce (Bijoux artisanaux)",
    techno: "Html5, Css3, JavaScript, PHP, MySql, GitHub",
    description:
      "Le projet e-commerce est un site de vente en ligne de bijoux artisanaux que j'ai réalisé dans le cadre de ma formation à l'ADRAR. Le site est développé en HTML, CSS, JavaScript, PHP et MySQL et utilise également la plateforme GitHub. Le projet permet la mise en place d'un espace administrateur, la gestion des commandes, des produits, des catégories, des utilisateurs et des avis. Si vous voulez voir le site en ligne, vous pouvez cliquer sur le lien ci-dessous.",
    images: [
      process.env.PUBLIC_URL + "/img/bijoux-artisanat-1.jpg",
      process.env.PUBLIC_URL + "/img/bijoux-artisanat-2.jpg",
      process.env.PUBLIC_URL + "/img/bijoux-artisanat-3.jpg",
    ],
    link: (
      <a
        href="https://bijoux-artisanat.000webhostapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Lien vers le site de vente
      </a>
    ),
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Realisations = () => {
  return (
    <div className="realisations-container">
      <Navbar />
      <h1>Mes réalisations</h1>
      <Slider {...sliderSettings}>
        {projets.map((projet, index) => (
          <ProjetItem key={index} {...projet} />
        ))}
      </Slider>
      <Footer />
    </div>
  );
};

export default Realisations;