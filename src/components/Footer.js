import React from 'react'
import BackLines from './images/background-lines-white-right.svg'
import pic from '../components/images/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
    <section className="footer">
    <img className="white-lines" src={BackLines} alt="wavy white background lines"/>
    <div className="container">
        <div className="footer-logo">
            <img src={pic} alt="crito-logo"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>
        <div className="column">
            <h4>Company</h4>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
            </ul>
        </div>
        <div className="column">
            <h4>Help</h4>
            <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="column">
            <h4>Resources</h4>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
        </div>
        <div className="column">
            <h4>Link</h4>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
        </div>
    </div>
    <div className="social-media">
        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>
</section> 


<section className="footer-copyright">
    <div className="container">
        <div className="copyright">
            <p>&#169 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        </div>
        <div className="social-media">
            <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
</section>
</footer>
  )
}

export default Footer