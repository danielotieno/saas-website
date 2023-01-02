import React from 'react';
import GalleryCard from './GalleryCard';
import G1 from '../../assets/images/events/girls-day/g-1.jpg';
import G2 from '../../assets/images/events/girls-day/g-2.jpg';
import G3 from '../../assets/images/events/girls-day/g-3.jpg';
import G4 from '../../assets/images/events/girls-day/g-4.jpg';
import G5 from '../../assets/images/events/girls-day/g-5.jpg';
import G6 from '../../assets/images/events/girls-day/g-6.jpg';

const GirlsDayGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={G1} />
          <GalleryCard image={G2} />
          <GalleryCard image={G3} />
          <GalleryCard image={G4} />
          <GalleryCard image={G5} />
          <GalleryCard image={G6} />
        </div>
      </div>
    </section>
  );
};

export default GirlsDayGallery;
