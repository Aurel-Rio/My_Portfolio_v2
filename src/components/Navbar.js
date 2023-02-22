import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/riozacki_logo_red2.png';
import '../navbar.css';

function Navbar() {
  return (
    <div id="navi">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="Logo_riozacki">  <img src={logo} alt="Logo_riozacki" />  </Link>

        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'white' }}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/realisations" className="nav-link" style={{ color: 'white' }}>Réalisations</Link>
            </li>
            <li className="nav-item">
              <Link to="/curriculum-vitae" className="nav-link" style={{ color: 'white' }}>Curriculum Vitae</Link>
            </li>
            <li className="nav-item">
              <Link to="/Titre" className="nav-link" style={{ color: 'white' }}>Mon titre</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: 'white' }}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;