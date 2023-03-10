import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <p>&copy; Servant Aurélien 2023</p>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/aur%C3%A9lien-servant-a85218217/" target="about:blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href="https://github.com/Aurel-Rio" target="about:blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
      </div>
    </footer>
  );
};

export default Footer;