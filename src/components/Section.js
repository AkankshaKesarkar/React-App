/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Section.css"; // Import a CSS file for styling

const Section = () => {
  return (
    <div className="section">
      <div className="section-container">
        <div className="new-feature-banner">
          <span className="new-feature">New feature</span>
          <a href="#" className="team-dashboard-link">
            Check out the team dashboard →
          </a>
        </div>
        <h1 className="section-title">Beautiful analytics to grow smarter</h1>
        <p className="section-description">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="section-buttons">
          <button className="demo-button">Demo</button>
          <button className="signup-button">Sign up</button>
        </div>
      </div>
      <div className="content">
        <div className="screen-mockup">
            <img src="dashboard.png" alt="dashboard"></img>
        </div>
      </div>
    </div>
  );
};

export default Section;
