import React from 'react';


const NewsCard = ({ date, imageSrc, category, title, description }) => (
  <a href="#" className="article-and-news-card our-news-card">
    <div className="date-box">
      <strong>{date.day}</strong>
      <br />
      {date.month}
    </div>
    <img src={imageSrc} />
    <h3>{category}</h3>
    <h2>{title}</h2>
    <p>{description}</p>
  </a>
);

export default NewsCard;
