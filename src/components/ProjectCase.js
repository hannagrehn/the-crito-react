import React from 'react'
import busy from '../components/images/busybusy.jpg'
import marek from '../components/images/marek-levak-zANXcXyByos-unsplash.jpg'
import oli from '../components/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import carlos from '../components/images/carlos111-muza-hpjSkU2UYSU-unsplash.jpg'

const ProjectCase = () => {
  return (
    <section className="project-and-case">
    <div className="container">
        <div className="section-title">
            <p>Project & Case studies</p>
            <h2>Let's Looks Ours Global Project</h2>
        </div>
        <div className="project-and-cases">
            <article> 
                <img src={busy} className="article-img" alt="manly hands reading a newspaper"/>
                <h3>Grow you business</h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
            <article> 
                <img src={marek} className="article-img" alt="pink apple prodocts"/>
                <h3>Why your client needs a responsible website </h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
            <article> 
                <img src={oli} className="article-img" alt="desk with notebook and coffee"/>
                <h3>Educate your employees to get better results </h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
            <article> 
                <img src={carlos} className="article-img" alt="laptop showing diagnostics"/>
                <h3>Business insights is a important piece of your business</h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
        </div>
        <div className="center-content">
            <a className="btn-black btn-business" href="projects.html">All recent projects<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default ProjectCase