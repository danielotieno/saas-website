import React from 'react';
import { Link } from 'gatsby';

const StoryCard = ({ image, title, text, link }) => {
  return (
    <div className='blog-card'>
      <div className='blog-card__inner'>
        <div className='blog-card__image'>
          <img src={image} alt='' />
        </div>
        <div className='blog-card__content'>
          <h3 className='mt-4'>{title}</h3>
          <p>{text}</p>
          <Link className='blog-card__more' to={link}>
            <i className='far fa-angle-right'></i>Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
