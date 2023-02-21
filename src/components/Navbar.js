import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/riozacki_logo_red2.png';
import '../navbar.css';


function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="Logo_riozacki">  <img src={logo} alt="Logo_riozacki" />  </Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/realisations" className="nav-link">Réalisations</Link>
          </li>
          <li className="nav-item">
            <Link to="/curriculum-vitae" className="nav-link">Curriculum Vitae</Link>
          </li>
          <li className="nav-item">
            <Link to="/Titre" className="nav-link">Mon titre</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>

      </div>
      
    </nav>
  );
}

export default Navbar;