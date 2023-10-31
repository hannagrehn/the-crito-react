import React from 'react'


const LeaveUs = () => {
  return (
    <section className="leave-us">
        <div className="container">
            <div className="section-title">
                <h2>Leave us a message<br/>for any information.</h2>
            </div>
            <div className="content">
                <div className="form">
                    <input type="text" placeholder="Name*"/>
                </div>
                <div className="form">
                    <input type="text" placeholder="Email*"/>
                </div>
                <div className="message-form">
                    <input type="text" placeholder="Your Message*"/>
                </div>
                <a><button className="btn-yellow">Send Message<i className="fa-regular fa-arrow-up-right"></i></button></a>
            </div>
        </div>
    </section>

  )
}

export default LeaveUs