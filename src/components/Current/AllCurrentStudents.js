import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import heartImage from '../../assets/images/shapes/heart-2-1.png';
import { getAllCurrentStudents } from '../../data/current-list';

const ALL_CURRENT_STUDENTS = getAllCurrentStudents();

const AllCurrentStudents = () => {
  return (
    <section className='causes-page causes-home pt-120 pb-120'>
      <Container>
        <Row className=' align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col lg={7}>
            <div className='block-title'>
              <p>
                <img src={heartImage} width='15' alt='Heart' />
                Current Students
              </p>
              <h3>Our Current Students</h3>
            </div>
          </Col>
          <Col lg={5} className=' d-flex'>
            <div className='my-auto'>
              <p className='block-text pr-10 mb-0'>
                Below is a list of some of the students who currently have
                sponsorship.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {ALL_CURRENT_STUDENTS.map(({ image, title, text, link }, index) => (
            <Col lg={4} key={index}>
              <div className='cause-card mt-30'>
                <div className='cause-card__inner'>
                  <div className='cause-card__image'>
                    <img src={image} loading='lazy' alt={title} />
                  </div>
                  <div className='cause-card__content'>
                    <h3>
                      <Link to={link}>{title}</Link>
                    </h3>
                    <p>{text}</p>
                    <div className='cause-card__bottom'>
                      <a
                        className='thm-btn'
                        target='_blank'
                        rel='noopener noreferrer'
                        href={link}>
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

export default AllCurrentStudents;
