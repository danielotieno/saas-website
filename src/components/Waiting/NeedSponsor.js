import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import heartImage from '../../assets/images/shapes/heart-2-1.png';
import { getFeaturedWaitingStudents } from '../../data/waiting-list';

const WAITING_FEATURED_STUDENTS = getFeaturedWaitingStudents();

const NeedSponsor = () => {
  return (
    <section className='causes-page causes-home pt-120 pb-120'>
      <Container>
        <Row className=' align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col lg={7}>
            <div className='block-title'>
              <p>
                <img src={heartImage} width='15' alt='Heart' />
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
          {WAITING_FEATURED_STUDENTS.map(
            ({ image, title, text, link }, index) => (
              <Col lg={4} key={index}>
                <div className='cause-card'>
                  <div className='cause-card__inner'>
                    <div className='cause-card__image'>
                      <img src={image} alt={title} />
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
            ),
          )}
        </Row>
        <div className='mt-4 text-center'>
          <Link
            className='students-btn rounded-pill'
            to='/students-need-sponsorship'>
            Explore More Needy Students
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NeedSponsor;
