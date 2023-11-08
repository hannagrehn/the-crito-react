import React, { useState } from 'react';
import Logo from './images/logotype.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [btnClasses, setBtnClasses] = useState('btn-menu');
    
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="container">
                <NavLink to="/">
                    <img id="logotype" src={Logo} alt="crito-logotype" />
                </NavLink>
                <button className={btnClasses} onClick={toggleMenu}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </button>

                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-info">
                            <div className="contact-info-box">
                                <i className="fa-sharp fa-regular fa-phone-volume"></i> 
                                +46 (8) 121 470 50
                            </div>
                            <div className="contact-info-box">
                                <i className="fa-sharp fa-regular fa-envelope"></i> 
                                info@crito.com
                            </div>
                            <div className="contact-info-box last">
                                <i className="fa-sharp fa-regular fa-location-dot"></i> 
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://facebook.com/" target="_blank">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://x.com/" target="_blank">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://instagram.com/" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav> 
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/service">Service</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                        <a className="btn-yellow btn-login" href="index.html">
                            Login <i className="fa-regular fa-arrow-up-right"></i>
                        </a>
                    </div>
                </div>

                {showMenu && (
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/service">Service</NavLink></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
