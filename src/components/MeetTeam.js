import React from 'react'
import kristi from '../components/images/kristinepalmer11.jpg'
import mark from '../components/images/markaubri.jpg'
import kimberly from '../components/images/kimberlyhanssen.jpg'
import justin from '../components/images/justinwilloman.jpg'

const MeetTeam = () => {
  return (
    <section className="meet-our-team">
    <div className="container">
        <div className="meet-our-team-header">
            <div className="section-title little-title">
                <p>Meet Our Team</p>
            </div>
            <div className="section-title top-title">
                <h2>Experience Team Members</h2>
                <button className="btn-transparent"><span>Browse Team</span><i className="fa-solid fa-arrow-up-right"></i></button>
            </div>
        </div>
        <div className="meet-our-team-grid">
            <div className="meet-our-team-card">
                <img src={kristi} alt="kristie palmer smiling and professional"/>
                <h4>Kristine Palmer</h4>
                <p>Chef Operation Officer</p>
            </div>
            <div className="meet-our-team-card">
                <img src={mark} alt="mark auburi smiling in a suit"/>
                <h4>Mark Aubri</h4>
                <p>Senior Consultant</p>
            </div>
            <div className="meet-our-team-card">
                <img src={kimberly} alt="kimberly hansen hanging in a window with a book and looking cute"/>
                <h4>Kimberly Hansen</h4>
                <p>Senior Consultant</p>
            </div>
            <div className="meet-our-team-card">
                <img src={justin} alt="justin willoman might be an alien but this is a headshot and he be smilin"/>
                <h4>Justin Willoman</h4>
                <p>Senior Tech Consultant</p>
            </div>
        </div>
        <div className="dots">
            <div className="dot"></div>
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
</section>
  )
}

export default MeetTeam