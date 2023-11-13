import React from 'react'
import samantha from './images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import lines from './images/white-squiggly-lines-sam-b.svg'

const About = () => {
  return (
    <section className="about-comp">
    <div className="container">
        <div className="about-comp-image">
            <img className="samantha" src={samantha} alt="woman taking a walk in the hallway"/>
            <div className="img-text">
                <h3>Samantha Brown, <span>Founder</span></h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
            <div className="wavy-lines">
                <img src={lines} className="bg-lines" alt=""/>
            </div>
        </div>
        <div className="about-comp-text">
            <h3>About company</h3>
            <h1>We Are Business Consulting & Credit Repair Experts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
        <div className="about-comp-btns">
            <button className="btn-black" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></button>
            <button className="btn-play" href="#"><i className="fa-solid fa-play"></i></button>
            <span>Intro Video</span>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About