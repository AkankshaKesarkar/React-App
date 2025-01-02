import React from 'react';
import './BlogPostCard.css';

const BlogPostCard = ({ category, title, description, authors, date, image }) => {
  return (
    <div className="blog-post-card">
      <img src={image} alt="Blog Post Image" className="blog-image" />
      <div className="blog-content">
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="author-info">
          {authors && authors.length > 0 ? (
            authors.map((author, index) => (
              <img key={index} src={author.image || ''} alt={author.name} className="author-avatar" /> 
            ))
          ) : null} 
        </div>
        <div className="author-details-container">
          <span className="author-name">{authors && authors.length > 0 ? authors.map((author) => author.name).join(', ') : 'No Authors'}</span>
          <span className="date">{date}</span>
        </div>
        <a href="#" className="read-more">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;