import React from 'react'
import lines from '../components/images/background-lines.svg';
import { NavLink } from 'react-router-dom';


const NewsArticle = () => {
  return (
    <section className="lets-connect">
    <div className="content">
        <div className="small-text">
        <NavLink to="/">Home</NavLink>
            <a className="active">News</a>
        </div>
        <div className="big-text">
            <a><h1>News & Articles</h1></a>
        </div>
        <img src={lines} alt=""/>
    </div>
    </section>
  )
}

export default NewsArticle