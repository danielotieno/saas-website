import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import FunDayGallery from '../components/EventGallery/FunDayGallery';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const FunDay = () => {
  return (
    <Layout pageTitle='SAAS Events Page'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Fun Day' crumbTitle='Fun Day' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>FUN DAY & AWARDS</h3>
            <Row className='pb-20'>
              <p>
                We held our annual fun day on the 9 th of April 2022. Students
                were happy to participate in this event and they had a lot to
                share with us and also among themselves. Lots of activities were
                done e.g girls talk/boys talk,games and later we shared a meal
                together.
              </p>
              <p>
                We thank all donors who made this events to be a successful one.
              </p>
            </Row>
            <Row className='pb-20'>
              <p>
                This year we awarded the best students for the years 2020 and
                2021. Normally this activity is done annually but due to covid
                -19, the 2020 school calendar was affected and students were at
                home for more than 8months. Hence the changes.
              </p>
            </Row>
            <Row className='pb-20'>
              <p>
                The best students received trophies and shopping vouchers. This
                is to motivate them and also to encourage other students to put
                in more effort.
              </p>
            </Row>
            <Row>
              <p>Students who received the trophies in the 2020 awards were:</p>
              <p>
                Jilton was best in form 1, Margaret was best in form 2, Jeremy
                was best in form 3, while Harith received a trophy for the best
                personality.
              </p>
              <p>
                For the 2021 awards, the best in form 1 was Winnie, best in form
                2 Shirlean, best in form 3 Brian and best personality was Neema.
              </p>
            </Row>
          </Container>
        </section>
        <FunDayGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default FunDay;
