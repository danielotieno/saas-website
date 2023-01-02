import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import MosesGallery from '../../components/Gallery/graduation/MosesGallery';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import Layout from '../../components/Navigation/Layout';
import PageHeader from '../../components/Navigation/PageHeader';
import StickyHeader from '../../components/Navigation/StickyHeader';

const MosesGraduation = () => {
  return (
    <Layout pageTitle='Top Student'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Moses' crumbTitle='News' crumbLink='/news' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>MOSES GRADUATION</h3>
            <Row className='pb-20'>
              <p>
                SAAS fraternity wishes to congratulate Moses for his hard work.
                He has graduated with a Bachelor of Science in Cyber Security
                and Forensics. Moses' journey in his education has not been
                easy, but finally, we have seen the light at the end of the
                tunnel.
              </p>
            </Row>
            <Row className='pb-20'>
              <p>
                Moses has been a SAAS student since 2014 when he started his
                high school education.
              </p>
            </Row>
            <Row>
              <p>
                Today he is happy about the milestone he has made and for making
                his sponsor proud. He is very grateful to her and the SAAS team
                for always being by his side.
              </p>
            </Row>
          </Container>
        </section>
        <MosesGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default MosesGraduation;
