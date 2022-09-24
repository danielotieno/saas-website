import React from 'react';
// import SimpleReactLightbox from 'simple-react-lightbox';
// import { SRLWrapper } from 'simple-react-lightbox';

const GalleryCard = ({ image }) => {
  return (
    <div className='gallery-card'>
      <img src={image} className='img-fluid' alt='' />
      <div className='gallery-content'>
        <a
          href={image}
          className='img-popup'
          data-attribute='SRL'
          aria-label='open image'>
          <img src={image} className='img-fluid sr-only' alt='' />
          <i className='fal fa-plus'></i>
        </a>
      </div>
    </div>
  );
};

export default GalleryCard;
