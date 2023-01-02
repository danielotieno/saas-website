import React from 'react';
import GalleryCard from './GalleryCard';
import FP1 from '../../assets/images/events/food-program/fp-1.jpg';
import FP2 from '../../assets/images/events/food-program/fp-2.jpg';
import FP3 from '../../assets/images/events/food-program/fp-3.jpg';
import FP4 from '../../assets/images/events/food-program/fp-4.jpg';
import FP5 from '../../assets/images/events/food-program/fp-5.jpg';
import FP6 from '../../assets/images/events/food-program/fp-6.jpg';

const FoodProgramGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={FP1} />
          <GalleryCard image={FP2} />
          <GalleryCard image={FP3} />
          <GalleryCard image={FP4} />
          <GalleryCard image={FP5} />
          <GalleryCard image={FP6} />
        </div>
      </div>
    </section>
  );
};

export default FoodProgramGallery;
