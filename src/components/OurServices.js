import React from 'react';
import pic from '../components/images/background-lines-white-right.svg';

const ServiceCard = ({ title, description }) => (
  <div className="card">
    <span></span>
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
      <button className="btn-arrow"><i className="fa-thin fa-arrow-right"></i></button>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
      title: 'Business Advice',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
    },
    {
      title: 'Startup Business',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
    },
    {
      title: 'Financial Advice',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
    },
    {
      title: 'Risk Management',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
    },
  ];

  return (
    <section className="our-services">
      <img className="white-lines" src={pic} alt="wavy white background lines" />
      <div className="container">
        <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best<br /> Service For Consulting</h2>
        </div>

        <div className="services">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="btn-browse">
          <button className="btn-transparent">
            <span>Browse Services</span>
            <i className="fa-regular fa-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
