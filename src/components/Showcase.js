import whiteLines from './images/background-lines.svg'
import showcase from './images/showcase-image.svg'


import React from 'react'

const Showcase = () => {
  return (
    <section class="showcase">
    <img class="white-lines" src={whiteLines} alt="white background lines"/>
    <div class="container">
        <div class="content"> 
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a class="btn-yellow" href="consulting.html">Get Consulting<i class="fa-regular fa-arrow-up-right"></i></a>
            <a class="btn-transparent" href="services.html">Learn More<i class="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <img src={showcase} alt="image of a man with a tablet"/>
    </div>
    </section>
  )
}

export default Showcase