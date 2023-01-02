import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import NEWS_DATA from '../../data/news';
import NewsCard from './NewsCard';

const NewsPage = () => {
  return (
    <section className='news-details pt-80 pb-90'>
      <Container>
        <Row>
          <div className='event-grid'>
            {NEWS_DATA.map((news, index) => (
              <NewsCard data={news} key={`event-card-key-${index}`} />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
