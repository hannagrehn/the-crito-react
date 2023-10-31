import React from 'react'

const Features = () => {
  return (
    <section className="features">
    <div className="container">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <a className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="business-advice">
            <div className="card">
                <i className="fa-regular fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
             <i className="fa-regular fa-lightbulb"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
                <i className="fa-sharp fa-solid fa-chart-column"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
                 <i className="fa-solid fa-box"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Features