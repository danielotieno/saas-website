import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { Link } from 'gatsby';
import BlockTitle from '../BlockTitle';
import StoryCard from './StoryCard';
import bgImage from '../../assets/images/success-bg.jpg';
import OscarImg from '../../assets/images/stories/oscar.jpg';
import OscarPdf from '../../assets/images/stories/oscar.pdf';
import NaimaImg from '../../assets/images/stories/naima.jpg';
import NaimaPdf from '../../assets/images/stories/naima.pdf';
import BenImg from '../../assets/images/stories/ben.jpg';
import BenPdf from '../../assets/images/stories/ben.pdf';
import MikeImg from '../../assets/images/stories/mike.jpg';
import MikePdf from '../../assets/images/stories/mike.pdf';
import FredImg from '../../assets/images/stories/fred.jpg';
import FredPdf from '../../assets/images/stories/fred.pdf';
import JamesImg from '../../assets/images/stories/james.jpg';
import JamesPdf from '../../assets/images/stories/james.pdf';

const BLOG_DATA = [
  {
    image: OscarImg,
    title: 'Oscar Ochieng',
    text: 'Radio Presenter',
    link: OscarPdf,
  },
  {
    image: NaimaImg,
    title: 'Naima Jeneby',
    text: 'Data Clerk',
    link: NaimaPdf,
  },
  {
    image: BenImg,
    title: 'Benedict Luganje',
    text: 'High School Teacher',
    link: BenPdf,
  },
  {
    image: MikeImg,
    title: 'Michael Lumire',
    text: 'Videographer',
    link: MikePdf,
  },
  {
    image: FredImg,
    title: 'Fredrick Onyango',
    text: 'Journalist',
    link: FredPdf,
  },
  {
    image: JamesImg,
    title: 'James Kirima',
    text: 'Accountant',
    link: JamesPdf,
  },
];
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
        <div className='mt-4 text-center'>
          <Link className='students-btn rounded-pill' to='#'>
            Explore More Success Stories
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllStories;
