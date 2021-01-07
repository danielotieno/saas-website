import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import kilquade from '../assets/images/pari.png';
import cavan from '../assets/images/cavan.png';
import avalon from '../assets/images/avolon.png';

const Partners = ({ extraClass }) => {
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5,
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
      <Container>
        <Swiper {...brandCarouselOptions}>
          <div className='swiper-wrapper'>
            <SwiperSlide>
              <a
                href='https://www.kilquadeparish.ie/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={kilquade} alt='Kilquade Logo' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href='http://www.cavancoco.ie/home.htm'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={cavan} alt='Cavan County Logo' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href='https://www.avolon.aero/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={avalon} alt='Avolon Logo' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href='https://www.kilquadeparish.ie/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={kilquade} alt='Kilquade Logo' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href='http://www.cavancoco.ie/home.htm'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={cavan} alt='Cavan County Logo' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href='https://www.avolon.aero/'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={avalon} alt='Avolon Logo' />
              </a>
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Partners;
