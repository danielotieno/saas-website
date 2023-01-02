import React from 'react';
import GalleryCard from './GalleryCard';
import Pm1 from '../../assets/images/events/parents-meeting/pm-1.jpg';
import Pm2 from '../../assets/images/events/parents-meeting/pm-2.jpg';
import Pm3 from '../../assets/images/events/parents-meeting/pm-3.jpg';
import Pm4 from '../../assets/images/events/parents-meeting/pm-4.jpg';
import Pm5 from '../../assets/images/events/parents-meeting/pm-5.jpg';

const ParentsGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={Pm1} />
          <GalleryCard image={Pm2} />
          <GalleryCard image={Pm3} />
          <GalleryCard image={Pm4} />
          <GalleryCard image={Pm5} />
        </div>
      </div>
    </section>
  );
};

export default ParentsGallery;
