import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projet = ({ titre, techno, description, imageSrc, link }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // nombre d'images affichées en même temps
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="projet">
      <h4>{titre}</h4>
      <h4>Technologies utilisées: {techno}</h4>
      <p>{description}</p>
      <Slider {...settings}>
        {imageSrc.map((imageSrc, index) => (
          <img key={index} src={imageSrc} alt="Illustration du projet" />
        ))}
      </Slider>
      <p>{link}</p>
    </div>
  );
};

export default Projet;