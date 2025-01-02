import React from 'react';
import './Testimonial.css'; // Import the CSS file

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <img src="" alt="Sisyphus Logo" className="logo" /> 
      <p className="testimonial-text">
        We've been using Untitled to kick start every new project and can't imagine working without it.
      </p>
      <div className="author-info">
        <img src="" alt="Author Image" className="author-image" />
        <div className="author-details">
          <span className="author-name">Candice Wu</span>
          <span className="author-title">Product Manager, Sisyphus</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

