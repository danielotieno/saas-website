import React from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import logoLight from '../assets/images/saas.png';

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
                <ul className='list-unstyled footer-widget__contact'>
                  <li>
                    <a href='#none'>
                      <i className='azino-icon-telephone'></i>+254 (041) 476396
                    </a>
                  </li>
                  <li>
                    <a href='#none'>
                      <i className='azino-icon-email'></i>info@saas.ie
                    </a>
                  </li>
                  <li>
                    <a href='#none'>
                      <i className='azino-icon-pin'></i>Umoja Road, Mombasa,
                      Kenya
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div></div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className='footer-widget mb-40 footer-widget__newsletter'>
                <h3 className='footer-widget__title'>Newletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  data-url='https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e'
                  className='footer-widget__newsletter-form mc-form'>
                  <label htmlFor='mc-email' className='sr-only'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='EMAIL'
                    id='mc-email'
                    className=''
                    placeholder='Email address'
                  />
                  <div className='footer-widget__newsletter-btn-wrap d-flex justify-content-end'>
                    <button type='submit' className='thm-btn '>
                      Subscribe Now
                    </button>
                  </div>
                </form>
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
