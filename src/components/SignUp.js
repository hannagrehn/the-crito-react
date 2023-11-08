import React from 'react'
import wavy from '../components/images/background-wavy-lines.svg'

const SignUp = () => {
  return (
    <section className="news-signup">
    <div className="container">
        <div className="content section-title">
            <h2>Get News Updates By Signup</h2>
            <input className="input-box" type="text" placeholder="username@domain.com"/>
            <button className="btn-yellow"><span>Subscribe</span><i className="fa-solid fa-arrow-up-right"></i></button>
        </div>
        <div>
            <img src={wavy} alt="wavy lines"/>
        </div>
    </div>
    </section>
    
  )
}

export default SignUp