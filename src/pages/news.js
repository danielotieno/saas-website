import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import PagesNavbar from '../components/PagesNavbar';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';

import Footer from '../components/Footer';

// markup
const News = () => {
  return (
    <Layout pageTitle='SAAS Newsletters Page'>
      <PagesNavbar />
      <PageHeader title='SAAS Newsletters' crumbTitle='News' />
      <>
        <section className='news-details pt-80 pb-90'>
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>Nov 2019 - March 2020</h3>
                  <a href='#none' className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>Aug 2019 - Nov 2019</h3>
                  <a href='#none' className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>April 2019 - July 2019</h3>
                  <a href='#none' className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>Dec 2018 - March 2019</h3>
                  <a href='#none' className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>Aug 2018 - Nov 2018</h3>
                  <a href='#none' className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className='cause-details__presentations'>
                  <i className='fa fa-file-pdf'></i>
                  <h3>April 2018 - July 2018</h3>
                  <a href='#none' className='thm-btn dynamic-radius'>
                    Download
                  </a>
                </div>
              </Col>
            </Row>
            <Pagination />
          </Container>
        </section>
      </>
      <Footer />
    </Layout>
  );
};

export default News;
