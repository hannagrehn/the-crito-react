import React from 'react'
import lines from '../components/images/background-lines.svg'

const LetsConnect = () => {
  return (
    <section className="lets-connect">
    <div className="content">
        <div className="small-text">
            <a href="index.html">Home</a>
            <a className="active" href="contact.html">Contact</a>
        </div>
        <div className="big-text">
            <a><h1>Let's Connect</h1></a>
        </div>
        <img src={lines}/>
    </div>
    </section>
  )
}

export default LetsConnect