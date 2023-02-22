import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import cvImage from './img/my_cv.png';
import '../CurriculumVitae.css';

const Curriculum_vitae = () => {
    return (
        <div id="#Curriculum_vitae">
            <Navbar />
            <h3>Voici mon Curriculum Vitae:</h3>
            <div className="img_cv">
                <img src={cvImage} alt="Mon Curriculum vitae" />
            </div>
            <Footer />
        </div>
    )
}

export default Curriculum_vitae;