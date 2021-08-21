import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';
import logoDark from '../../assets/images/saas.png';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className='main-header__two'>
      <div className='main-header__top'>
        <Container>
          <p>Welcome to Sponsor An Africa Scholar</p>
          <div className='main-header__social'>
            <a href='#none' aria-label='twitter'>
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='https://www.facebook.com/Sponsor-An-African-Scholar-1426611800887597'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='facebook'>
              <i className='fab fa-facebook-square'></i>
            </a>
          </div>
        </Container>
      </div>
      <div className='header-upper'>
        <Container>
          <div className='logo-box'>
            <Link to='/'>
              <img src={logoDark} width='180' alt='SAAS Logo' />
            </Link>
            <span className='fa fa-bars mobile-nav__toggler'></span>
          </div>

          <div className='header-info'>
            <div className='header-info__box'>
              <i className='azino-icon-email1'></i>
              <div className='header-info__box-content'>
                <h3>Email</h3>
                <p>
                  <a href='mailto:needhelp@azino.com'>info@saas.ie</a>
                </p>
              </div>
            </div>
            <div className='header-info__box'>
              <i className='azino-icon-calling'></i>
              <div className='header-info__box-content'>
                <h3>Phone</h3>
                <p>
                  <a href='tel:704-144-76396'>
                    254 (0) 41 476396 / +353 (0)87 2803823
                  </a>
                </p>
              </div>
            </div>
            <div className='header-info__box'>
              <i className='azino-icon-address'></i>
              <div className='header-info__box-content'>
                <h3>Visit</h3>
                <p>Umoja Road, Mombasa, Kenya</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className='main-menu'>
        <Container>
          <NavLinks extraClassName='dynamic-radius' />
          <a
            className='thm-btn dynamic-radius'
            href='https://link.justgiving.com/v1/charity/donate/charityId/3064215?tipScheme=TipJar2.1&reference=givingcheckout_tj21'
            target='_blank'
            rel='noopener noreferrer'>
            Donate Now
          </a>
        </Container>
      </nav>
    </div>
  );
};

export default Header;
