import React from 'react';
import { Link } from 'gatsby';

const NewsCard = ({ data }) => {
  const { image, title, link } = data;
  return (
    <div className='event-card'>
      <Link to={link}>
        <div className='event-card-inner'>
          <div className='event-card-image'>
            <div className='event-card-image-inner'>
              <img
                src={image}
                alt='image'
                loading='lazy'
                height={130}
                width={130}
              />
            </div>
          </div>
          <div className='event-card-content'>
            <h3>
              <Link to={link}>{title}</Link>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
