import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopStudentsGallery from '../components/EventGallery/TopStudentsGallery';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const TopStudents = () => {
  return (
    <Layout pageTitle='SAAS Events Page'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Top Students 2021' crumbTitle='Top Students' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>SAAS TOP STUDENTS IN 2021 NATIONAL EXAMS</h3>
            <Row className='pb-20'>
              <p>
                In the 2021 national high school exams, we had 45 students who
                did very well in them. Most of them have joined college
                /university to pursue different career of their choice. While
                others are currently doing casual jobs.
              </p>
            </Row>
            <Row className='pb-20'>
              <p>
                SAAS office felt it was best to gift Fredrick with a laptop for
                scoping the best grade of A-.
              </p>
            </Row>
            <Row>
              <p>
                A laptop, is an essential tool needed by college/university
                students. Please, find below photos of some of the students who
                did the national exams. (Left Fredrick,center Mary and right is
                Francisca)
              </p>
            </Row>
          </Container>
        </section>
        <TopStudentsGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default TopStudents;
