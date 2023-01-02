import React from 'react';
import GalleryCard from './GalleryCard';
import F1 from '../../assets/images/events/fun-day/f-1.jpg';
import F2 from '../../assets/images/events/fun-day/f-2.jpg';
import F3 from '../../assets/images/events/fun-day/f-3.jpg';
import F4 from '../../assets/images/events/fun-day/f-4.jpg';
import F5 from '../../assets/images/events/fun-day/f-5.jpg';
import F6 from '../../assets/images/events/fun-day/f-6.jpg';
import F7 from '../../assets/images/events/fun-day/f-7.jpg';
import F8 from '../../assets/images/events/fun-day/f-8.jpg';
import F9 from '../../assets/images/events/fun-day/f-9.jpg';
import F10 from '../../assets/images/events/fun-day/f-10.jpg';
import F11 from '../../assets/images/events/fun-day/f-11.jpeg';
import F12 from '../../assets/images/events/fun-day/f-12.jpg';

const FunDayGallery = () => {
  return (
    <section className='gallery-page pt-120 pb-120'>
      <div className='container'>
        <div className='gallery-3-col'>
          <GalleryCard image={F1} />
          <GalleryCard image={F2} />
          <GalleryCard image={F3} />
          <GalleryCard image={F4} />
          <GalleryCard image={F5} />
          <GalleryCard image={F6} />
          <GalleryCard image={F7} />
          <GalleryCard image={F8} />
          <GalleryCard image={F9} />
          <GalleryCard image={F10} />
          <GalleryCard image={F11} />
          <GalleryCard image={F12} />
        </div>
      </div>
    </section>
  );
};

export default FunDayGallery;
