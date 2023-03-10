import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projet.css";
import "../ImageModal.css";
import { Button } from "react-bootstrap";

const Projet = ({ id, titre, techno, description, imageSrc, link }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

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
      <div className="button_project">
        <div className="flexbox_contain">
          <Button className="button-spacing" variant="primary" href={`#${1}`}>Projet 1</Button>
          <Button className="button-spacing" variant="primary" href={`#${2}`}>Projet 2</Button>
          <Button className="button-spacing" variant="primary" href={`#${3}`}>Projet 3</Button>
          <Button className="button-spacing" variant="primary" href={`#${4}`}>Projet 4</Button>
        </div>
      </div>
      <div id={id}></div>
      <h4 id="rea_titre">{titre}</h4>
      <h4>Technologies utilisées: {techno}</h4>
      <div>{description}</div>
      <div className="carousel-container">
        <Slider {...settings} className="slider">
          {imageSrc.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Illustration du projet"
              onClick={() => openModal(image)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </Slider>
      </div>
      <div>{link}</div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Modal" className="modal-image" />
          <span className="modal-close">&times;</span>
        </div>
      )}
    </div>
  );
};

export default Projet;