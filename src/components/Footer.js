import React from 'react'; // Importing React library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome Icons
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing specific icons used below

const Footer = () => { 
  return (
    <footer className="bg-dark text-light py-3"> {/* Rendering the footer */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>&copy; Made by: Christopher Snyder</p>
            <div className="social-icons">  {/* Rendering a FontAwesomeIcon with the GitHub, LinkedIn or Facebook icon */}
              <a href="https://github.com/csnyder94"> 
                <FontAwesomeIcon icon={faGithub} /> 
              </a>
              <a href="https://www.linkedin.com/in/christopher-snyder-a6000a246/"> 
                <FontAwesomeIcon icon={faLinkedin} /> 
              </a>
              <a href="https://www.facebook.com/chris.snyder.792"> 
                <FontAwesomeIcon icon={faFacebook} /> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the 'Footer' component as the default export