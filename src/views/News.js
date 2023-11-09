import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsArticle from '../components/NewsArticle';
import OurNews from '../components/OurNews';
import SignUp from '../components/SignUp';
import { NewsProvider } from '../components/contexts/Context';

const News = () => {
  return (
    <>
      <Header />
      <NewsProvider>
        <NewsArticle />
        <OurNews />
        <SignUp />
      </NewsProvider>
      <Footer />
    </>
  );
};

export default News;
