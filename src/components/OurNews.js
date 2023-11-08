import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const OurNews = () => {
  const [articles, setArticles] = useState([]);
  const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <section className="article-and-news">
      <div className="container">
        <div className="article-news-header">
          <div className="section-title top-title">
            <h2>Our News & Articles</h2>
          </div>
        </div>
        <div className="article-and-news-grid">
          {articles.map((article, index) => (
            <NewsCard
              key={article.id} 
              id={article.id}
              date={{ day: new Date(article.published).getDate(), month: new Date(article.published).toLocaleString('default', { month: 'short' }) }}
              imageSrc={article.imageUrl}
              category={article.category}
              title={article.title}
              description={article.content}
            />
          ))}
        </div>
        <div className="dots">
          {articles.map((_, index) => (
            <div key={index} className={`dot ${index === 0 ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNews;
