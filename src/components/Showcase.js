import whiteLines from './images/background-lines.svg'
import showcase from './images/showcase-image.svg'


import React from 'react'

const Showcase = () => {
  return (
    <section className="showcase">
    <img className="white-lines" src={whiteLines} alt="white background lines"/>
    <div className="container">
        <div className="content"> 
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <img src={showcase} alt="a man with a tablet"/>
    </div>
    </section>
  )
}

export default Showcase