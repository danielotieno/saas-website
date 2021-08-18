import React from 'react';

const StoryCard = ({ image, title, text, link }) => {
  return (
    <div className='blog-card'>
      <div className='blog-card__inner'>
        <div className='blog-card__image'>
          <img src={image} alt={title} />
        </div>
        <div className='blog-card__content'>
          <h3 className='mt-4'>{title}</h3>
          <p>{text}</p>
          <a
            className='blog-card__more'
            target='_blank'
            rel='noopener noreferrer'
            href={link}>
            <i className='far fa-angle-right'></i>Read the story
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
