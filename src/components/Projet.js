import Slider from "react-slick";

const ProjetItem = ({ titre, techno, description, imagesSrc, link }) => { // Correction : utilise `imagesSrc` au lieu de `imageSrc`
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="projet">
      <h4>{titre}</h4>
      <h5>Technologies utilisées: {techno}</h5>
      <p>{description}</p>
      <Slider {...settings}>
        {imagesSrc.map((image, index) => ( // Correction : utilise `imagesSrc` au lieu de `imageSrc`
          <div key={index}>
            <img src={image} alt={titre + " - Image " + (index + 1)} />
          </div>
        ))}
      </Slider>
      <p>{link}</p>
    </div>
  );
};

export default ProjetItem;