import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/images/resources/s-1.png';
import image2 from '../assets/images/resources/s-1.png';
import image3 from '../assets/images/resources/s-1.png';
import heart from '../assets/images/shapes/heart-2-2.png';
const SERVICE_TWO_DATA = [
  {
    extraClassName: 'background-secondary',
    image: image1,
    title: 'Support a student',
    text: 'Start Donating',
    link: '#',
  },
  {
    extraClassName: 'background-primary',
    image: image2,
    title: 'Support our work',
    text: 'Start Donating',
    link: '#',
  },
  {
    extraClassName: 'background-base',
    image: image3,
    title: 'Join our volunteers',
    text: 'Let’s Join',
    link: '#',
  },
];
const Service = () => {
  const sliderOptions = {
    slidesPerView: 3,
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
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className='service-two'>
      <Container>
        <Swiper {...sliderOptions}>
          {SERVICE_TWO_DATA.map(
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
