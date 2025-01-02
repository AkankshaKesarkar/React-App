import React from 'react';
import './FreeTrialSection.css';

const FreeTrialSection = () => {
  return (
    <div className="free-trial-section">
      <h1>Start your free trial</h1>
      <p>Join over 4,000+ startups already growing with Untitled.</p>
      <div className="button-container">
        <button className="learn-more-button">Learn more</button>
        <button className="get-started-button">Get started</button>
      </div>
    </div>
  );
};

export default FreeTrialSection;