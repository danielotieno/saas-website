import { default as React, default as React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlockTitle from '../BlockTitle';

const Thanks = () => {
  return (
    <section className='contact-page pt-120 pb-80'>
      <Container>
        <Row>
          <Col lg={5}>
            <div className='contact-page__content mb-40'>
              <BlockTitle
                title={`Thank you for sharing this with us`}
                tagLine='You are awesome!'
              />
              <p className='block-text mb-30 pr-10'>
                We have received your message. Someone from our team will
                contact you soon. If it’s urgent, we encourage you to call us at
                +353 (0)87 2803823 / 254 (0) 41 476396 Have a wonderful day!
              </p>
              <div className='footer-social black-hover'>
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
          </Col>
          <Col lg={7}>
            <div className='contact-card d-flex flex-column text-center justify-content-center align-items-center background-primary'>
              <i aria-label='contact icon' className='azino-icon-address'></i>
              <h3>Address</h3>
              <p>
                88 Broklyn Golden Street, <br /> New York. United States of{' '}
                <br /> America.
              </p>
            </div>

            <div className='contact-card d-flex flex-column text-center justify-content-center align-items-center background-special'>
              <i aria-label='contact icon' className='azino-icon-contact'></i>
              <h3>Contact</h3>
              <p>
                <a href='mailto:'>needhelp@azino.com</a> <br />{' '}
                <a href='tel:666-888-0000'>666 888 0000</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Thanks;
