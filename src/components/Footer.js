import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-container">
          <img src="./images/logo.png         " alt="Untitled UI Logo" className="logo" />
        </div>
        <div className="copyright">
          © 2023 Untitled UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;