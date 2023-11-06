import React from 'react';
import busy from '../components/images/busybusy.jpg';
import marek from '../components/images/marek-levak-zANXcXyByos-unsplash.jpg';
import oli from '../components/images/oli-dale-xjSkI_seiZY-unsplash.jpg';
import carlos from '../components/images/carlos111-muza-hpjSkU2UYSU-unsplash.jpg';

const ProjectArticle = ({ imageSrc, altText, title }) => (
  <article>
    <img src={imageSrc} className="article-img" alt={altText} />
    <h3>{title}</h3>
    <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
  </article>
);

const ProjectCase = () => {
  const projectArticles = [
    {
      imageSrc: busy,
      altText: 'manly hands reading a newspaper',
      title: 'Grow your business',
    },
    {
      imageSrc: marek,
      altText: 'pink apple products',
      title: 'Why your client needs a responsible website',
    },
    {
      imageSrc: oli,
      altText: 'desk with notebook and coffee',
      title: 'Educate your employees to get better results',
    },
    {
      imageSrc: carlos,
      altText: 'laptop showing diagnostics',
      title: 'Business insights are an important piece of your business',
    },
  ];

  return (
    <section className="project-and-case">
      <div className="container">
        <div className="section-title">
          <p>Project & Case studies</p>
          <h2>Let's Look at Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
          {projectArticles.map((article, index) => (
            <ProjectArticle key={index} {...article} />
          ))}
        </div>
        <div className="center-content">
          <a className="btn-black btn-business" href="projects.html">
            All Recent Projects<i className="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCase;
