import React from 'react'
import pic from '../components/images/background-lines-white-right.svg'


const OurServices = () => {
  return (
    <section className="our-services">
    <img className="white-lines" src={pic} alt="wavy white background lines"/>
    <div className="container">

        <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best<br/> Service For Consulting</h2>
        </div>

        <div className="services">
            <div className="card">
                <span></span>
                <h3>Business Advice</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div>
                    <button className="btn-arrow"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="card active">
                <span></span>
                <h3>Startup Business</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div>
                    <button className="btn-arrow"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="card">
                <span></span>
                <h3>Financial Advice</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div>
                    <button className="btn-arrow"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="card">
                <span></span>
                <h3>Risk Management</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <div>
                    <button className="btn-arrow"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        <div className="btn-browse">
            <button className="btn-transparent"><span>Browse Services</span><i className="fa-thin fa-arrow-up-right"></i></button>
        </div>
    </div>
</section>
  )
}

export default OurServices