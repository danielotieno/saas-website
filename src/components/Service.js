import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import heart from '../assets/images/shapes/heart-2-2.png';
import SERVICE_DATA from '../data/services';

const Service = () => {
  const sliderOptions = {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className='service-two'>
      <Container>
        <Swiper {...sliderOptions}>
          {SERVICE_DATA.map(
            ({ extraClassName, image, title, text, link }, index) => (
              <SwiperSlide key={`service-two-key-${index}`}>
                <div
                  className={`service-two__box ${extraClassName}`}
                  style={{ backgroundImage: `url(${image})` }}>
                  <div className='service-two__box-inner'>
                    <img src={heart} width='15' alt='Love shape' />
                    <p>{text}</p>
                    <h3>
                      <Link to={link}>{title}</Link>
                    </h3>
                    <Link className='service-two__box-link' to={link}>
                      <i className='far fa-angle-right'></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default Service;
