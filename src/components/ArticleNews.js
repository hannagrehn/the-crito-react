import React from 'react'
import linked from '../components/images/linkedin1-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import emil from '../components/images/emiliano1-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import kobu from '../components/images/kobu1-agency-ipARHaxETRk-unsplash.jpg'

const ArticleNews = () => {
  return (
    <section className="article-and-news">
    <div className="container">
        <div className="article-news-header"> 
            <div className="section-title little-title">
                <p>Article & News</p>
            </div>
            <div className="section-title top-title">
                <h2>Get Every Single Article & News</h2>
                <button className="btn-transparent"><span>Browse Articles</span><i className="fa-solid fa-arrow-up-right"></i></button>
            </div>   
        </div>
        <div className="article-and-news-grid">
            <a href="news-detail.html" className="article-and-news-card">
                <div className="date-box"><strong>25</strong><br/>Mar</div>
                <img src={linked} alt="Woman sitting and smiling"/>
                <h3>Business</h3>
                <h2>How To Use Digitalization In The Classroom</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a href="news-detail.html" className="article-and-news-card">
                <div className="date-box"><strong>17</strong><br/>Mar</div>
                <img src={emil} alt="Computer screen with text"/>
                <h3>Business</h3>
                <h2>How To Implement Chat GPT In Your Projects</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a href="#" className="article-and-news-card">
                <div className="date-box"><strong>13</strong><br/>Mar</div>
                <img src={kobu} alt="Books about CSS and javascript"/>
                <h3>Business</h3>
                <h2>The Guide To Support Modern CSS Design</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
        </div>
        <div className="dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
    </section>
  )
}

export default ArticleNews