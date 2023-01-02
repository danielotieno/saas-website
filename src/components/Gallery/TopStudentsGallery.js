import React from 'react';
import GalleryCard from './GalleryCard';
import Top1 from '../../assets/images/events/top-students/top-1.jpg';
import Top2 from '../../assets/images/events/top-students/top-2.jpg';
import Top3 from '../../assets/images/events/top-students/top-3.jpeg';

const TopStudentsGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={Top1} />
          <GalleryCard image={Top2} />
          <GalleryCard image={Top3} />
        </div>
      </div>
    </section>
  );
};

export default TopStudentsGallery;
