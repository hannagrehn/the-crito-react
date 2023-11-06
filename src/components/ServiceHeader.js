import React from 'react'
import lines from '../components/images/background-lines.svg';
import { NavLink } from 'react-router-dom';


const ServiceHeader = () => {
  return (
    <section className="lets-connect">
    <div className="content">
        <div className="small-text">
        <NavLink to="/">Home</NavLink>
            <a className="active">Service</a>
        </div>
        <div className="big-text">
            <a><h1>Service</h1></a>
        </div>
        <img src={lines}/>
    </div>
    </section>
  )
}

export default ServiceHeader