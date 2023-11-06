import React from 'react';
import linked from '../components/images/linkedin1-sales-solutions-Mis5fyJi7Q0-unsplash.jpg';
import emil from '../components/images/emiliano1-vittoriosi-vEN1bsdSjxM-unsplash.jpg';
import kobu from '../components/images/kobu1-agency-ipARHaxETRk-unsplash.jpg';

const NewsCard = ({ date, imageSrc, altText, category, title, description }) => (
  <a href="news-detail.html" className="article-and-news-card">
    <div className="date-box">
      <strong>{date.day}</strong>
      <br />
      {date.month}
    </div>
    <img src={imageSrc} alt={altText} />
    <h3>{category}</h3>
    <h2>{title}</h2>
    <p>{description}</p>
  </a>
);

const ArticleNews = () => {
  const newsItems = [
    {
      date: { day: '25', month: 'Mar' },
      imageSrc: linked,
      altText: 'Woman sitting and smiling',
      category: 'Business',
      title: 'How To Use Digitalization In The Classroom',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
    },
    {
      date: { day: '17', month: 'Mar' },
      imageSrc: emil,
      altText: 'Computer screen with text',
      category: 'Business',
      title: 'How To Implement Chat GPT In Your Projects',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
    },
    {
      date: { day: '13', month: 'Mar' },
      imageSrc: kobu,
      altText: 'Books about CSS and javascript',
      category: 'Business',
      title: 'The Guide To Support Modern CSS Design',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
    },
  ];

  return (
    <section className="article-and-news">
      <div className="container">
        <div className="article-news-header">
          <div className="section-title little-title">
            <p>Article & News</p>
          </div>
          <div className="section-title top-title">
            <h2>Get Every Single Article & News</h2>
            <button className="btn-transparent">
              <span>Browse Articles</span>
              <i className="fa-solid fa-arrow-up-right"></i>
            </button>
          </div>
        </div>
        <div className="article-and-news-grid">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
        <div className="dots">
          {newsItems.map((_, index) => (
            <div key={index} className={`dot ${index === 0 ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleNews;
