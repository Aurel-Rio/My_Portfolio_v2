import React from "react";

const Projet = ({ titre, description, imageSrc }) => {
  return (
    <div className="projet">
      <h4>{titre}</h4>
      <img src={imageSrc} alt={titre} />
      <p>{description}</p>

    </div>
  );
};

export default Projet;