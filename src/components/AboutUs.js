import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import welcomeImage from '../assets/images/resources/about-1.jpg';

const AboutUs = () => {
  return (
    <section className='about-two pt-120 pb-120'>
      <Container>
        <Row>
          <Col xl={6}>
            <div className='about-two__image'>
              <img src={welcomeImage} className='rounded-lg' alt='' />
            </div>
          </Col>
          <Col xl={6}>
            <div className='about-two__content'>
              <div className='block-title'>
                <h3>About SAAS</h3>
              </div>
              <p className='mb-40 pr-10'>
                Sponsor an African Scholar (SAAS) is an Irish charity (Charity
                Number CHY 17318) that provides sustainable solutions to
                communities in Kenya. SAAS was founded in early 2006 in response
                to the exploitation experienced by young people and their
                families who live in extreme poverty.
              </p>
              <div className='block-title'>
                <h3>What We Do:</h3>
              </div>
              <Row>
                <Col md={6}>
                  <div className='about-two__box'>
                    <h3>
                      <i className='azino-icon-confirmation'></i> Sponsor
                      African Students
                    </h3>
                  </div>
                  <div className='about-two__box'>
                    <h3>
                      <i className='azino-icon-confirmation'></i> Comissioned
                      Projects
                    </h3>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='about-two__box'>
                    <h3>
                      <i className='azino-icon-confirmation'></i> Increase HIV &
                      Drugs Awareness
                    </h3>
                  </div>
                  <div className='about-two__box'>
                    <h3>
                      <i className='azino-icon-confirmation'></i> Community Work
                    </h3>
                  </div>
                </Col>
              </Row>
              <Link className='thm-btn dynamic-radius mt-5' to='/about'>
                Read More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
