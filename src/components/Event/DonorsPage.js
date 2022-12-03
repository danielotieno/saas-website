import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from './EventCard';
import bgImage from '../../assets/images/shapes/event-map-1-2.png';
import VISITS_DATA from '../../data/visits';

const DonorsPage = () => {
  return (
    <section
      className='event-home-two pb-120'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <Container>
        <Row className=' align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col className='text-center mt-60'>
            <div className='block-title'>
              <h3 className='event-title'>All Donor Visits.</h3>
            </div>
          </Col>
        </Row>
        <div className='event-grid'>
          {VISITS_DATA.map((visit, index) => (
            <EventCard data={visit} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DonorsPage;
