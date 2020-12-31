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
              <img src={kilquade} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cavan} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={avalon} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kilquade} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cavan} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={avalon} alt='' />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Partners;
