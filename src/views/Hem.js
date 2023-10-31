import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Partners from '../components/Partners'
import Features from '../components/Features'
import About from '../components/About'
import OurServices from '../components/OurServices'
import WhyChoose from '../components/WhyChoose'
import ProjectCase from '../components/ProjectCase'
import MeetTeam from '../components/MeetTeam'
import Testimonial from '../components/Testimonial'
import ArticleNews from '../components/ArticleNews'
import SignUp from '../components/SignUp'

const Hem = () => {
  return (
    <>
      <Header/>
      <Showcase/>
      <Partners/>
      <Features/>
      <About/>
      <OurServices/>
      <WhyChoose/>
      <ProjectCase/>
      <MeetTeam/>
      <Testimonial/>
      <ArticleNews/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default Hem