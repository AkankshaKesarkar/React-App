import React from 'react';
import './StillHaveQuestions.css'; // Import the CSS file

const StillHaveQuestions = () => {
  return (
    <div className="still-have-questions-container">
      <div className="team-images">
        <img id="img1" src="image1.png" alt="Team Member 1" />
        <img id="img2" src="image2.png" alt="Team Member 2" />
        <img id="img3" src="image3.png" alt="Team Member 3" />
      </div>
      <div className="content">
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="get-in-touch-button">Get in touch</button>
      </div>
    </div>
  );
};

export default StillHaveQuestions;