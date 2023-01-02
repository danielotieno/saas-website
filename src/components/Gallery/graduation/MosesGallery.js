import React from 'react';
import GalleryCard from '../GalleryCard';
import DV1 from '../../../assets/images/graduations/moses/moses_1.jpg';
import DV2 from '../../../assets/images/graduations/moses/moses_2.jpg';
import DV3 from '../../../assets/images/graduations/moses/moses_3.jpg';
import DV4 from '../../../assets/images/graduations/moses/moses_4.jpg';

const MosesGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={DV1} />
          <GalleryCard image={DV2} />
          <GalleryCard image={DV3} />
          <GalleryCard image={DV4} />
        </div>
      </div>
    </section>
  );
};

export default MosesGallery;
