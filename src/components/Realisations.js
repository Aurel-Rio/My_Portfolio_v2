import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjetItem from "./Projet";
import "../Realisations.css";

const projets = [
  {
    titre: "Projet 1: Ce Portfolio !",
    id: 1,
    description: (
      <div className="portfolio">
        <h4>Voici la liste des principales technologies et dépendances utilisées pour réaliser mon portfolio :</h4>
        <ul>
          <li>ReactJS : une bibliothèque JavaScript pour la construction d'interfaces utilisateur</li>
          <li>React Router : une bibliothèque pour gérer la navigation dans une application React</li>
          <li>SCSS : un préprocesseur CSS qui permet d'écrire du CSS de manière plus efficace en utilisant des variables, des fonctions, des mixins et des conditions</li>
          <li>Node.js : une plateforme logicielle permettant d'exécuter du code JavaScript côté serveur</li>
          <li>Express : un framework Node.js pour la création d'applications web</li>
          <li>Nodemailer : une bibliothèque Node.js pour envoyer des e-mails à partir d'une application</li>
          <li>Formik : une bibliothèque pour gérer les formulaires dans React</li>
          <li>Yup : une bibliothèque de validation de schémas pour les données en JavaScript</li>
          <li>Axios : une bibliothèque pour effectuer des requêtes HTTP depuis une application JavaScript</li>
          <li>React Helmet : une bibliothèque pour gérer les balises &lt;head&gt; dans une application React</li>
          <li>React Icons : une bibliothèque d'icônes pour React</li>
          <li>Font Awesome : une bibliothèque d'icônes populaires pour le web</li>
          <li>Bootstrap : une bibliothèque CSS pour la création d'interfaces utilisateur réactives</li>
        </ul>
      </div>
    ),
    imageSrc: [
      process.env.PUBLIC_URL + '/img/portfolio-1.png',
      process.env.PUBLIC_URL + '/img/portfolio-2.png'
    ],
  },
  {
    id: 2,
    titre: "Projet 2: Site vitrine pour la boutique Iss09 (Informatique, Services, Saverdun)",
    techno: "Technologies utilisées: Html5, Css3, Php, JavaScript",
    description:
      "Le site http://iss09.fr est un site vitrine que j'ai développé en distanciel avant mon entrée en formation à l'ADRAR. Ce site est destiné à présenter l'entreprise ISS09, qui propose des services en installation de système de sécurité, dépannage informatique et formation. Si vous voulez voir le site en ligne, vous pouvez cliquer sur le lien ci-dessous.",
    imageSrc: [
      process.env.PUBLIC_URL + '/img/iss09-1.jpg',
      process.env.PUBLIC_URL + '/img/iss09-2.png',
      process.env.PUBLIC_URL + '/img/iss09-3.png'
    ],
    link: <a href="http://www.iss09.fr" target="about:blank">Lien vers le site Iss09</a>
  },
  {
    id: 3,
    titre: "Projet 3: Projet de plateforme Web Retro_Tech - En cours",
    techno: "Technologies utilisées: Bootstrap, NodeJs, ReactJs, css3, git",
    description:
      "Le projet Retro_Tech a pour but (à terme) de rassembler une communauté de passionnés de jeux vidéo rétro, que ce soit sur PC, consoles, écrans ou même dans le coding. Sur RetroTech, vous pourrez découvrir des actualités, des tutoriels, des astuces et des conseils pour réparer ou optimiser votre matériel, ainsi que des articles de fond sur l'histoire du rétro-gaming et des analyses de jeux cultes. De plus, notre blog vous propose des articles de qualité écrits par des experts et des amateurs éclairés, qui partagent leur expérience et leur passion pour le jeu vidéo rétro.",
    imageSrc: [
      process.env.PUBLIC_URL + '/img/retrotech001.png',
      process.env.PUBLIC_URL + '/img/retrotech002.png',
      process.env.PUBLIC_URL + '/img/retrotech003.png'
    ],
  },
  {
    id: 4,
    titre: "Projet 4: Projet de site Web e-commerce (Bijoux Fantaisie) - En cours",
    techno: "Technologies utilisées:Bootstrap, NodeJs, ReactJs, css3, git",
    description:
      "La boutique Sirven Bijoux Fantaisie à besoin d'une solution e-commerce afin de vendre ces produits. Développement réalisé pendant un stage durant ma formation à l'Adrar. ",
    imageSrc: [
      process.env.PUBLIC_URL + '/img/sirven01.png',
      process.env.PUBLIC_URL + '/img/sirven02.png',
      process.env.PUBLIC_URL + '/img/sirven03.png'
    ],
  },
];

const Realisations = () => {
  return (
    <div>
      <div id="Realisations">
        <Navbar />
        <h3>
          Découvrez mes projets réalisés, qui mettent en avant mon expertise en
          matière de développement web.
        </h3>
      </div>

      {projets.map((projet, index) => (
        <ProjetItem
          key={projet.id}
          id={projet.id}
          titre={projet.titre}
          techno={projet.techno}
          description={projet.description}
          imageSrc={projet.imageSrc}
          link={projet.link}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Realisations;