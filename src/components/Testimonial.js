import React from 'react'
import vince from '../components/images/vince1-veras-AJIqZDAUD7A-unsplash.jpg'
import christina from '../components/images/christina1-wocintechchat-com-PlikkWB79qs-unsplash.jpg'
import joseph from '../components/images/joseph1-gonzalez-iFgRcqHznqg-unsplash.jpg'



const Testimonial = () => {
  return (
    <section className="testimonial">
    <div className="container">
        <div className="section-title">
            <p>Testimonial</p>
            <h2>What Our Clients Says</h2>
        </div>
        <div className="testimonial-grid">
            <div className="testimonial-card">
                <div className="stars">
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="review-person">
                    <img className="circular-portrait" src={vince} alt="Cassandra Warren outdoors in a striped shirt"/>
                    <div className="review-person-details">
                        <h3>Cassandra Warren</h3>
                        <p>Business Manager, Dorfus</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="stars">
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="review-person">
                    <img className="circular-portrait" src={christina} alt="Amanda Tulling sitting on a chair"/>
                    <div className="review-person-details">
                        <h3>Amanda Tulling</h3>
                        <p>Senior Developer, Square</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="stars">
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="review-person">
                    <img className="circular-portrait" src={joseph} alt="Jack Mcdogglas smiling face"/>
                    <div className="review-person-details">
                        <h3>Jack Mcdogglas</h3>
                        <p>Key Account Manager, Gobona</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="all-reviews-btn">
            <button className="btn-black"><span>All Reviews</span><i className="fa-solid fa-arrow-up-right"></i></button>
        </div>
    </div>
</section>
  )
}

export default Testimonial