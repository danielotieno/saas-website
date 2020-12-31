import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from './BlockTitle';
import StoryCard from './StoryCard';
import blogImage1 from '../assets/images/blog/blog-1-1.jpg';
import blogImage2 from '../assets/images/blog/blog-1-2.jpg';
import blogImage3 from '../assets/images/blog/blog-1-3.jpg';
import bgImage from '../assets/images/blog/blog-top.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'Our donation is hope for poor childrens',

    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
  },
  {
    image: blogImage2,
    title: 'Our donation is hope for poor childrens',

    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
  },
  {
    image: blogImage3,
    title: 'Our donation is hope for poor childrens',

    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
  },
];
const Stories = () => {
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
          <Swiper {...blogCarouselOptions}>
            {BLOG_DATA.map(({ image, title, text, link }, index) => (
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

export default Stories;
