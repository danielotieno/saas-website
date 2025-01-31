import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import DonorVisit21 from '../../../components/Gallery/DonorVisits/DonorVisit21';
import Footer from '../../../components/Navigation/Footer';
import Header from '../../../components/Navigation/Header';
import Layout from '../../../components/Navigation/Layout';
import PageHeader from '../../../components/Navigation/PageHeader';
import StickyHeader from '../../../components/Navigation/StickyHeader';

const DonorsVisit21 = () => {
  return (
    <Layout pageTitle='Donor Visit'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Donor Visit 2021' crumbTitle='2021' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>Donor Visit 2021</h3>
            <Row className='pb-20'>
              <p>
                In October 2021, we were lucky to host guests from Ireland,
                especially from Kilquade parish. The guests were Mr. Richard and
                Vanessa Hayes, Mr. Donald and Barbie Ogilvy Watson. They came
                along with Kilquade parish priest Fr John Daly. While here, they
                were able to meet students whom they sponsor in addition to
                visiting their families. They brought along laptops which were
                donated by their friends to the SAAS organization. They also got
                a chance to see Kongowea slums where students come from. All in
                all, it was a good interaction session between the donors and
                the students/families as they shared life experiences.
              </p>
            </Row>
          </Container>
        </section>
        <DonorVisit21 />
      </>
      <Footer />
    </Layout>
  );
};

export default DonorsVisit21;
