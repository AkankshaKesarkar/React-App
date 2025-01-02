import React from 'react';
import './SectionTwo.css'; // Ensure to create and style a CSS file

const SectionTwo = () => {
  return (
    <div className="section-two-container">
      {/* Top Brands Section */}
      <div className="brands-container">
        <p className="brands-text">Join 4,000+ companies already growing</p>
        <div className="brands-logos">
          <img src="images/Boltfit.png" alt="Boltshift" className="brand-logo" />
          <img src="images/Lightbox.png" alt="Lightbox" className="brand-logo" />
          <img src="images/Featherdev.png" alt="FeatherDev" className="brand-logo" />
          <img src="images/Spherule.png" alt="Spherule" className="brand-logo" />
          <img src="images/Globalbank.png" alt="GlobalBank" className="brand-logo" />
          <img src="images/Nietzsche.png" alt="Nietzsche" className="brand-logo" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-container">
        <p className="features-title">Features</p>
        <h2 className="features-heading">Analytics that feels like it’s from the future</h2>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
