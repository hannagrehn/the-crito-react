import React from 'react';

function Feature({ iconClass, title, description }) {
  return (
    <div className="card">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      iconClass: 'fa-regular fa-handshake',
      title: 'Business Advice',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      iconClass: 'fa-regular fa-lightbulb',
      title: 'Startup Business',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      iconClass: 'fa-sharp fa-solid fa-chart-column',
      title: 'Financial Advice',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      iconClass: 'fa-solid fa-box',
      title: 'Risk Management',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <p>Features</p>
          <h2>Our Accounting is trusted by a thousand companies</h2>
          <a className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="business-advice">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
