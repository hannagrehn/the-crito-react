import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsArticle from '../components/NewsArticle'
import OurNews from '../components/OurNews'
import SignUp from '../components/SignUp'

const News = () => {
  return (
    <>
    <Header/>
    <NewsArticle/>
    <OurNews/>
    <SignUp/>
    <Footer/>
    </>
  )
}

export default News