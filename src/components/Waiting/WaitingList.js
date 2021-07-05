import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import heartImage from '../../assets/images/shapes/heart-2-1.png';
import Alyssa from '../../assets/images/waiting/alyssa.jpg';
import AlyssaPdf from '../../assets/images/waiting/alyssa.pdf';
import Gilbert from '../../assets/images/waiting/gilbert.jpg';
import GilbertPdf from '../../assets/images/waiting/gilbert.pdf';
import Kiko from '../../assets/images/waiting/kiko.jpg';
import KikoPdf from '../../assets/images/waiting/kiko.pdf';
import Moraa from '../../assets/images/waiting/moraa.jpg';
import MoraaPdf from '../../assets/images/waiting/moraa.pdf';
import Rhoda from '../../assets/images/waiting/rhoda.jpg';
import RhodaPdf from '../../assets/images/waiting/rhoda.pdf';

const CausesHomeData = [
  {
    image: Kiko,
    title: 'Johnson',
    text: 'Johnson is 15 years of age. He is looking forward to joining High school this July.',
    link: KikoPdf,
  },
  {
    image: Alyssa,
    title: 'Alyssa',
    text: 'Alyssa is 15 years of age. She completed her secondary education in march 2021.',
    link: AlyssaPdf,
  },
  {
    image: Moraa,
    title: 'Maximilla',
    text: 'Maximilla is 15 years of age. She is looking forward to joining secondary school.',
    link: MoraaPdf,
  },
  {
    image: Gilbert,
    title: 'Gilbert',
    text: 'Gilbert is 16years of age. He is looking forward to joining a High school in July.',
    link: GilbertPdf,
  },
  {
    image: Rhoda,
    title: 'Rhoda',
    text: 'Rhoda is 15 years of age. She is looking forward to joining a secondary school in July 2021.',
    link: RhodaPdf,
  },
];

const WaitingList = () => {
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
        <Row>
          {CausesHomeData.map(({ image, title, text, link }, index) => (
            <Col lg={4} key={index}>
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
                      <a className='thm-btn ' href={link}>
                        Read Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WaitingList;
