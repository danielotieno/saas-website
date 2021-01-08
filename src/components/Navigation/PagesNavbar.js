import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import NavLinks from './NavLinks';

import logoDark from '../../assets/images/saas.png';

const PagesNavbar = () => {
  return (
    <header className='main-header'>
      <Container>
        <div className='inner-container'>
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className='logo-box'>
                <Link to='/'>
                  <img src={logoDark} width='150' alt='' />
                </Link>
                <span className='fa fa-bars mobile-nav__toggler'></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className='d-none d-md-none d-lg-none d-xl-block'>
              <div className='main-header__top'>
                <p>Welcome to Sponsor An African Scholar</p>
                <div className='main-header__social'>
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
              <nav className='main-menu dynamic-radius'>
                <NavLinks />
              </nav>

              <div className='main-header__info'>
                <ul className='list-unstyled main-header__info-list'>
                  <li>
                    <i className='azino-icon-email'></i>
                    <a href='mailto:info@saas.ie'>info@saas.ie</a>
                  </li>
                  <li>
                    <i className='azino-icon-telephone'></i>
                    <a href='tel:704-147-6396'>+254 (041) 476396</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default PagesNavbar;
