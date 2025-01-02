/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./BlogContainer.css"; // Import the CSS file for styling

function BlogContainer() {
  return (
    <div className="blog-container">
      <div className="blog-card">
        <div className="blog-image">
          <img src="images/blog1.png" alt="Blog 1 Image"></img>
        </div>
        <div className="blog-content">
          <h3>Design</h3>
          <p className="title">UX review presentations</p>
          <p>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="blog-author">
            <div className="author-avatar">
              <img src="images/blogavtar1.png" alt="Blog avatar 1 Image" />
            </div>
            <div className="author-details">
              <p className="author-name">Olivia Rhye</p>
              <p>20 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="blog-image">
          <img src="images/blog2.png" alt="Blog 2 Image"></img>
        </div>
        <div className="blog-content">
          <h3>Product</h3>
          <p className="title">Migrating to Linear 101</p>
          <p>
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here's how to get started.
          </p>
          <div className="blog-author">
            <div className="author-avatar">
              <img src="images/blogavatar2.png" alt="Blog avatar 2 Image" />
            </div>
            <div className="author-details">
              <p className="author-name">Phoenix Baker</p>
              <p>19 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="blog-image">
          <img src="images/blog3.png" alt="Blog 3 Image"></img>
        </div>
        <div className="blog-content">
          <h3>Software Engineering</h3>
          <p className="title">Building your API stack</p>
          <p>
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <div className="blog-author">
            <div className="author-avatar">
              <img src="images/blogavatar3.png" alt="Blog avatar 3 Image"></img>
            </div>
            <div className="author-details">
              <p className="author-name">Lana Steiner</p>
              <p>18 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;
