import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NEWS_DATA from '../../data/news';
import NewsCard from './NewsCard';
import bgImage from '../../assets/images/shapes/event-map-1-2.png';

const NewsPage = () => {
  return (
    <section
      className='event-home-two pb-120'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <Container>
        <Row className=' align-items-start align-items-md-center flex-column flex-md-row mb-60'>
          <Col className='text-center mt-60'>
            <div className='block-title'>
              <h3 className='event-title'>Checkout Our Latest News.</h3>
            </div>
          </Col>
        </Row>
        <div className='event-grid'>
          {NEWS_DATA.map((event, index) => (
            <NewsCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewsPage;
