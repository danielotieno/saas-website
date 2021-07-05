import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import logoLight from '../../assets/images/saas.png';

const Footer = () => {
  return (
    <section className='site-footer'>
      <div className='main-footer pt-142 pb-80'>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className='footer-widget mb-40 footer-widget__about'>
                <Link to='/'>
                  <img
                    src={logoLight}
                    className='footer-widget__logo'
                    width='140'
                    alt=''
                  />
                </Link>
                <p>
                  Sponsor an African Scholar (SAAS) is an Irish charity (Charity
                  Number CHY 17318) that provides sustainable solutions to
                  communities in Kenya.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div></div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className='footer-widget mb-40 footer-widget__newsletter'>
                <h3 className='footer-widget__title'>Connect With Us</h3>
                <ul className='list-unstyled footer-widget__contact'>
                  <li>
                    <i className='azino-icon-telephone'></i>254 (0) 41 476396
                  </li>
                  <li>
                    <i className='azino-icon-email'></i>info@saas.ie
                  </li>
                  <li>
                    <i className='azino-icon-pin'></i>24 Fairfield Ave, East
                    Wall, Dublin 3, D03 TE27, Ireland
                  </li>
                  <li>
                    <i className='azino-icon-pin'></i>Umoja Road, Mombasa, Kenya
                  </li>
                </ul>
                <div className='mc-form__response'></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <ScrollLink
            to='wrapper'
            smooth={true}
            duration={500}
            className='scroll-to-top'>
            <i className='far fa-angle-up'></i>
          </ScrollLink>
          <p>© Copyright {new Date().getFullYear()}</p>
          <div className='footer-social'>
            <a href='#none' aria-label='twitter'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#none' aria-label='facebook'>
              <i className='fab fa-facebook-square'></i>
            </a>
            <a href='#none' aria-label='instagram'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
