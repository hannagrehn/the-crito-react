import React from 'react';
import vince from '../components/images/vince1-veras-AJIqZDAUD7A-unsplash.jpg';
import christina from '../components/images/christina1-wocintechchat-com-PlikkWB79qs-unsplash.jpg';
import joseph from '../components/images/joseph1-gonzalez-iFgRcqHznqg-unsplash.jpg';

const StarRating = () => (
  <div className="stars">
    {[1, 2, 3, 4, 5].map((index) => (
      <i key={index} className="fa-sharp fa-solid fa-star-sharp"></i>
    ))}
  </div>
);

const TestimonialCard = ({ imageSrc, altText, reviewerName, position, reviewText }) => (
  <div className="testimonial-card">
    <StarRating />
    <p>{reviewText}</p>
    <div className="review-person">
      <img className="circular-portrait" src={imageSrc} alt={altText} />
      <div className="review-person-details">
        <h3>{reviewerName}</h3>
        <p>{position}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      imageSrc: vince,
      altText: 'Cassandra Warren outdoors in a striped shirt',
      reviewerName: 'Cassandra Warren',
      position: 'Business Manager, Dorfus',
      reviewText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate',
    },
    {
      imageSrc: christina,
      altText: 'Amanda Tulling sitting on a chair',
      reviewerName: 'Amanda Tulling',
      position: 'Senior Developer, Square',
      reviewText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate',
    },
    {
      imageSrc: joseph,
      altText: 'Jack Mcdogglas smiling face',
      reviewerName: 'Jack Mcdogglas',
      position: 'Key Account Manager, Gobona',
      reviewText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate',
    },
  ];

  return (
    <section className="testimonial">
      <div className="container">
        <div className="section-title">
          <p>Testimonial</p>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="all-reviews-btn">
          <button className="btn-black">
            <span>All Reviews</span>
            <i className="fa-solid fa-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
