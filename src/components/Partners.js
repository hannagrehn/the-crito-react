import React from 'react';
import paperz from './images/paperz.svg';
import dorfus from './images/dorfus.svg';
import martino from './images/martino.svg';
import square from './images/square.svg';
import gobana from './images/gobona.svg';

const partnersData = [
  { id: 1, image: paperz, alt: 'Paperz' },
  { id: 2, image: dorfus, alt: 'Dorfus' },
  { id: 3, image: martino, alt: 'Martino' },
  { id: 4, image: square, alt: 'Square' },
  { id: 5, image: gobana, alt: 'Gobana' },
];

const Partners = () => {
  return (
    <section className="partners">
      <div className="content">
        {partnersData.map((partner) => (
          <a key={partner.id} href="/">
            <img src={partner.image} alt={partner.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
