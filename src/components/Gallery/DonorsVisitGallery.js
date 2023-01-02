import React from 'react';
import GalleryCard from './GalleryCard';
import DV1 from '../../assets/images/events/donor-visit/dv-1.jpg';
import DV2 from '../../assets/images/events/donor-visit/dv-2.jpg';
import DV3 from '../../assets/images/events/donor-visit/dv-3.jpg';
import DV4 from '../../assets/images/events/donor-visit/dv-4.jpg';
import DV5 from '../../assets/images/events/donor-visit/dv-5.jpg';
import DV6 from '../../assets/images/events/donor-visit/dv-6.jpg';
import DV7 from '../../assets/images/events/donor-visit/dv-7.jpg';

const DonorsVisitGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={DV1} />
          <GalleryCard image={DV2} />
          <GalleryCard image={DV3} />
          <GalleryCard image={DV4} />
          <GalleryCard image={DV5} />
          <GalleryCard image={DV6} />
          <GalleryCard image={DV7} />
        </div>
      </div>
    </section>
  );
};

export default DonorsVisitGallery;
