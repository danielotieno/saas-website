import React from 'react';
import { Link } from 'gatsby';

const EventCard = ({ data }) => {
  const { image, title, date, location, link } = data;
  return (
    <div className='event-card'>
      <Link to={link}>
        <div className='event-card-inner'>
          <div className='event-card-image'>
            <div className='event-card-image-inner'>
              <img src={image} alt='Event Image' loading='lazy' />
              <span>{date}</span>
            </div>
          </div>
          <div className='event-card-content'>
            <h3>
              <Link to={link}>{title}</Link>
            </h3>
            <ul className='event-card-list'>
              <li>
                <i className='azino-icon-pin1'></i>
                <strong>Location:</strong> {location}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
