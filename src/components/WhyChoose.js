import React from 'react'
import amy from '../components/images/amy1-hirschi-K0c8ko3e6AA-unsplash1.jpg'

const WhyChoose = () => {
  return (
    <section className="why-choose-us">
    <div className="container">
        <div className="choose-us-grid">
            <div className="choose-us-content">
                <div className="section-title">
                    <p>Why choose us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="article">
                    <i className="fa-light fa-thumbs-up"></i>
                    <span>
                        <h4>Process Excellence</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div className="article">
                    <i className="fa-solid fa-star-christmas"></i>
                    <span>
                        <h4>Strategic Planning</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div className="article">
                    <i className="fa-sharp fa-light fa-pen-nib"></i>
                    <span>
                        <h4>Experience Design</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
                <div className="article">
                    <i className="fa-light fa-head-side-gear"></i>
                    <span>
                        <h4>Artificial Inteligence</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </span>
                </div>
            </div>
            <div className="choose-us-image">               
                <img src={amy} alt="two women having a meeting"/>
                <div className="background-box"></div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default WhyChoose