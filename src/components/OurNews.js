
import React, { useContext } from 'react';
import NewsCard from './NewsCard';
import { NewsContext } from './contexts/Context';

const OurNews = () => {
  const articles = useContext(NewsContext);

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
