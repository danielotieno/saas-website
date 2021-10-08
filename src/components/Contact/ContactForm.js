import { navigate } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlockTitle from '../BlockTitle';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <section className='contact-page pt-120 pb-80'>
      <Container>
        <Row>
          <Col lg={5}>
            <div className='contact-page__content mb-40'>
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine='Contact With Us'
              />
              <p className='block-text mb-30 pr-10'>
                You don't like forms? Email us at <strong>info@saas.ie</strong>{' '}
                with any question or inquiries or call{' '}
                <strong>+353 (0)87 2803823 / 254 (0) 41 476396</strong> . We
                would be happy to answer your questions.{' '}
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
            <form
              name='contact'
              method='post'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              onSubmit={handleSubmit}
              className='contact-form-validated contact-page__form form-one mb-40'>
              <input type='hidden' name='form-name' value='contact' />{' '}
              <div className='form-group'>
                <div className='form-control'>
                  <label htmlFor='name' className='sr-only'>
                    FullName
                  </label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='email' className='sr-only'>
                    email
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='phone' className='sr-only'>
                    phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Phone Number(Optional)'
                    onChange={handleChange}
                  />
                </div>
                <div className='form-control'>
                  <label htmlFor='subject' className='sr-only'>
                    subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-control form-control-full'>
                  <label htmlFor='message' className='sr-only'>
                    message
                  </label>
                  <textarea
                    name='message'
                    placeholder='Write a Message'
                    onChange={handleChange}
                    required></textarea>
                </div>
                <div className='form-control form-control-full'>
                  <button type='submit' className='thm-btn '>
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
            <div className='result'></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
