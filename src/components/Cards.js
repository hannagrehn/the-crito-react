import React from 'react'

const Cards = () => {
  return (
    <section className="cards">
    <div className="container">
        <div className="card">
            <div>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
            </div>   
            <div>
                <h3>Visit us</h3>
                <p>Sveavägen 31 <br/>111 34 STOCKHOLM</p>
            </div>
        </div>
        <div className="card">
            <div>
                <i className="fa-sharp fa-solid fa-phone"></i>
            </div>   
            <div>
                <h3>Call us</h3>
                <p>+46 (8) 121 470 50<br/>+46 (8) 121 470 51</p>
            </div>
        </div>
        <div className="card">
            <div>
                <i className="fa-solid fa-envelope"></i>
            </div>   
            <div>
                <h3>Email us</h3>
                <p>info@crito.com<br/>support@crito.com</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Cards