import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-title-container">
        <span className="blog-link">Our blog</span>
        <h2 className="blog-title">Latest blog posts</h2>
      </div>
      <p className="blog-description">
        Tools and strategies modern teams need to help their companies grow.
      </p>
      <button className="view-all-posts-button">View all posts</button>
    </div>
  );
};

export default BlogSection;