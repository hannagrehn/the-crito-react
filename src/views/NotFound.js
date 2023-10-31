import React from 'react'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import pic from '../components/images/surprised_pikachu_meme_by_tylermascola_dg0nurt-414w-2x.png'


const NotFound = () => {
  return (
    <>
      <div className="notFound">
      <img src={pic} alt="surprise pikachu"/>
      <h1>404 
        page not found</h1>
      <p>Try go back!</p>
      <Link to="/" className="btn-black">Go to Beginning <i className="fa-solid fa-arrow-up-right"></i></Link>
      </div>
      <Footer/>
    </>
  )
}

export default NotFound