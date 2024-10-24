import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import DonorVisit24 from '../../../components/Gallery/DonorVisits/DonorVisit24';
import Footer from '../../../components/Navigation/Footer';
import Header from '../../../components/Navigation/Header';
import Layout from '../../../components/Navigation/Layout';
import PageHeader from '../../../components/Navigation/PageHeader';
import StickyHeader from '../../../components/Navigation/StickyHeader';

const DonorsVisit24 = () => {
  return (
    <Layout pageTitle='Donor Visit'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Donor Visit 2024' crumbTitle='2024' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>Donor Visit 2024</h3>
            <Row className='pb-20'>
              <p>
                On October 11, 2024, we had the honour of hosting a delegation
                of sponsors and donors who paid us a courtesy call at our
                offices in Mombasa. The team, in Kenya for holiday, held an
                interactive session with the SAAS executives in Mombasa and some
                of the sponsored students. The interactions brought them up to
                speed with the happenings at the office since their last visit
                in October 2023. Thereafter, the team visited the Kenya Coast
                National Polytechnic (formerly MTTI) to familiarize with TVET
                education in Kenya, holding discussions with the dean of
                students and the chief deputy principal of the institution.
              </p>
              <p>
                The team also made a stopover at St. Martins Catholic Church
                Mtopanga where Fr. Eric Mallah, a former SAAS student is
                currently serving as the assistant parish priest. Asante sana to
                our visitors for coming and we hope to host you again soon,
                karibuni sana.
              </p>
            </Row>
          </Container>
        </section>
        <DonorVisit24 />
      </>
      <Footer />
    </Layout>
  );
};

export default DonorsVisit24;
