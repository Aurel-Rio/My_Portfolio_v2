import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projet.css";

const Projet = ({ id, titre, techno, description, imageSrc, link }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="projet">
      {id}
      <h4>{titre}</h4>
      <h4>Technologies utilisées: {techno}</h4>
      <div>{description}</div>
      <div className="carousel-container">
        <Slider {...settings} className="slider">
          {imageSrc.map((imageSrc, index) => (
            <img key={index} src={imageSrc} alt="Illustration du projet" />
          ))}
        </Slider>

      </div>
      <div>{link}</div>
    </div>
  );
};

export default Projet;