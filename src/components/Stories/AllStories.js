import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from '../../assets/images/success-bg.jpg';
import SUCCESS_STORIES from '../../data/stories';
import BlockTitle from '../BlockTitle';
import StoryCard from './StoryCard';

const AllStories = () => {
  SwiperCore.use([Autoplay]);

  const blogCarouselOptions = {
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
    <>
      <section
        className='news__top news-home  pt-120'
        style={{ backgroundImage: `url(${bgImage})` }}>
        <Container>
          <Row className='align-items-start align-items-md-center flex-column flex-md-row'>
            <Col lg={7}>
              <BlockTitle
                title={`Success Stories \n from former SAAS students`}
                tagLine='Stories'
              />
            </Col>
            <Col lg={5} className='d-flex'>
              <div className='my-auto'>
                <p className='block-text pr-10 mb-0'>
                  Below is a list of some of the students who were sponsored by
                  SAAS.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='news-page pb-120'>
        <Container>
          <Swiper autoplay={{ delay: 3000 }} {...blogCarouselOptions}>
            {SUCCESS_STORIES.map(({ image, title, text, link }, index) => (
              <SwiperSlide key={index}>
                <StoryCard
                  image={image}
                  title={title}
                  text={text}
                  link={link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default AllStories;
