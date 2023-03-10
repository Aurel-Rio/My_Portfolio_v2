import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projet.css";

const Projet = ({ id, titre, techno, description, imageSrc, link }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  return (
    <div className="projet">
      <h4 id="rea_titre">{titre}</h4>
      <h4>Technologies utilisées: {techno}</h4>
      <div>{description}</div>
      <div className="carousel-container">
        <Slider {...settings} className="slider">
          {imageSrc.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt="Illustration du projet"
              onClick={() => handleImageClick(imageSrc)}
            />
          ))}
        </Slider>
      </div>
      <div>{link}</div>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <div className="modal-content">
            <img src={selectedImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projet;