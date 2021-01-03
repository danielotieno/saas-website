import React from 'react';
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col } from 'react-bootstrap';
import heartImage from '../assets/images/shapes/heart-2-1.png';
import causeImage1 from '../assets/images/profile-1.jpg';
import causeImage2 from '../assets/images/causes/cause-1-4.jpg';
import causeImage3 from '../assets/images/causes/cause-1-3.jpg';

import abuprofile from '../assets/images/abu.pdf';

const CausesHomeData = [
  {
    image: causeImage1,

    title: 'Daniel',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: abuprofile,
  },
  {
    image: causeImage2,

    title: 'Daniel',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details',
  },
  {
    image: causeImage3,

    title: 'Daniel',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details',
  },
];

const NeedSponsor = () => {
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
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
    <section className='causes-page causes-home pt-120 pb-120'>
      <Container>
        <Row className=' align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col lg={7}>
            <div className='block-title'>
              <p>
                <img src={heartImage} width='15' alt='' />
                Needy Students
              </p>
              <h3>
                Students in need <br /> of Sponsorship.
              </h3>
            </div>
          </Col>
          <Col lg={5} className=' d-flex'>
            <div className='my-auto'>
              <p className='block-text pr-10 mb-0'>
                Below is a list of the students on our reserved list awaiting
                sponsors. If you are interested in sponsoring any of these
                students kindly email us at{' '}
                <span className='saas-info'>info@saas.ie</span>. Thank you.
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...swiperParams}>
          {CausesHomeData.map(({ image, title, text, link }, index) => (
            <SwiperSlide key={`cause-card-key-${index}`}>
              <div className='cause-card'>
                <div className='cause-card__inner'>
                  <div className='cause-card__image'>
                    <img src={image} alt='' />
                  </div>
                  <div className='cause-card__content'>
                    <h3>
                      <Link to={link}>{title}</Link>
                    </h3>
                    <p>{text}</p>
                    <div className='cause-card__bottom'>
                      <a className='thm-btn' href={abuprofile}>
                        Read Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='mt-4 text-center'>
          <Link className='students-btn rounded-pill' to='#'>
            Explore More Needy Students
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NeedSponsor;
