import React from 'react';
import { Link } from 'react-router-dom';


const NewsCard = ({ id, date, imageSrc, category, title, description }) => (
  <Link to={`/newsdetails/${id}`} className="article-and-news-card our-news-card">
    <div className="date-box">
      <strong>{date.day}</strong>
      <br />
      {date.month}
    </div>
    <img src={imageSrc} alt="news card" />
    <h3>{category}</h3>
    <h2>{title}</h2>
    <p>{description}</p>
  </Link>
);

export default NewsCard;
