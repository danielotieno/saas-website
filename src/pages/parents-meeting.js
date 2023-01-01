import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import ParentsGallery from '../components/EventGallery/ParentsGallery';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const ParentsMeeting = () => {
  return (
    <Layout pageTitle='Parents Meeting'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Parents Meeting' crumbTitle='Parents Meeting' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>SAAS PARENTS MEETING</h3>
            <Row className='pb-20'>
              <p>
                As a norm, we always have parents meeting in December. This was
                to discuss and share ideas on how best we can raise teenage
                students into better people in society.
              </p>
            </Row>
            <Row>
              <p>
                Parents agreed that they need to spend more time with their
                children. This would help them understand their children best.
                We also encouraged parents to pay special attention to the extra
                curricula of their kids in addition to their academics.
              </p>
            </Row>
          </Container>
        </section>
        <ParentsGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default ParentsMeeting;
