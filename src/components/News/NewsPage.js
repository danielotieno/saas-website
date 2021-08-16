import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NEWS_DATA from '../../data/news';

const NewsPage = () => {
  return (
    <section className='news-details pt-80 pb-90'>
      <Container>
        <Row>
          {NEWS_DATA.map((data, index) => {
            return (
              <Col md={12} lg={6} key={index}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>{data.title}</h3>
                  <a
                    href={data.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
