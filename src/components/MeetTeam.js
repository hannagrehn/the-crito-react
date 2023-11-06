import React from 'react';
import kristi from '../components/images/kristinepalmer11.jpg';
import mark from '../components/images/markaubri.jpg';
import kimberly from '../components/images/kimberlyhanssen.jpg';
import justin from '../components/images/justinwilloman.jpg';

const TeamMember = ({ imageSrc, altText, name, position }) => (
  <div className="meet-our-team-card">
    <img src={imageSrc} alt={altText} />
    <h4>{name}</h4>
    <p>{position}</p>
  </div>
);

const MeetTeam = () => {
  const teamMembers = [
    {
      imageSrc: kristi,
      altText: 'Kristie Palmer smiling and professional',
      name: 'Kristine Palmer',
      position: 'Chef Operation Officer',
    },
    {
      imageSrc: mark,
      altText: 'Mark Auburi smiling in a suit',
      name: 'Mark Aubri',
      position: 'Senior Consultant',
    },
    {
      imageSrc: kimberly,
      altText: 'Kimberly Hansen hanging in a window with a book and looking cute',
      name: 'Kimberly Hansen',
      position: 'Senior Consultant',
    },
    {
      imageSrc: justin,
      altText: 'Justin Willoman might be an alien but this is a headshot and he be smilin',
      name: 'Justin Willoman',
      position: 'Senior Tech Consultant',
    },
  ];

  return (
    <section className="meet-our-team">
      <div className="container">
        <div className="meet-our-team-header">
          <div className="section-title little-title">
            <p>Meet Our Team</p>
          </div>
          <div className="section-title top-title">
            <h2>Experienced Team Members</h2>
            <button className="btn-transparent">
              <span>Browse Team</span>
              <i className="fa-solid fa-arrow-up-right"></i>
            </button>
          </div>
        </div>
        <div className="meet-our-team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <div className="dots">
          {teamMembers.map((_, index) => (
            <div key={index} className={`dot ${index === 1 ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTeam;
