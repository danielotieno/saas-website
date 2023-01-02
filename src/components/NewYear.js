import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

const NewYear = () => {
  return (
    <>
      <Container>
        <Row className='pt-30'>
          <StaticImage
            src='../assets/images/saas_new.png'
            alt='new-year'
            placeholder='blurred'
          />
        </Row>
      </Container>
    </>
  );
};

export default NewYear;
