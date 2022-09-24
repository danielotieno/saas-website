import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import GirlsDayGallery from '../components/EventGallery/GirlsDayGallery';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const GirlsForum = () => {
  return (
    <Layout pageTitle='SAAS Events Page'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Girls Forum' crumbTitle='Girls Forum' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>GIRLS DAY FORUM</h3>
            <Row className='pb-20'>
              <p>
                We were able to hold a girls&#39; forum with our students. It
                was a free talk where everyone shared her struggles/challenges
                as a girl child. They also let us know how they survive them.
                The forum was successive and energetic since all the girls
                opened freely, in addition to having fun. They all danced, sang
                and later we shared snacks.
              </p>
            </Row>
            <Row>
              <p>
                Thanks to the former SAAS manager, MD Ebby Soinani Becker (who
                currently resides in Germany) and her friends, we were able to
                supply the girls with sufficient sanitary towels for the 3months
                that they shall be in school. The girls appreciated this help
                since they were undergoing a lot of difficulties in obtaining
                toiletries while they are in school
              </p>
            </Row>
          </Container>
        </section>
        <GirlsDayGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default GirlsForum;
