import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodProgramGallery from '../../components/Gallery/FoodProgramGallery';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import Layout from '../../components/Navigation/Layout';
import PageHeader from '../../components/Navigation/PageHeader';
import StickyHeader from '../../components/Navigation/StickyHeader';

const FoodProgram = () => {
  return (
    <Layout pageTitle='Food Program'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Food Program' crumbTitle='Food Program' />
      <>
        <section className='event-details pt-120'>
          <Container>
            <h3>COVID FOOD RELIEF PROGRAM</h3>
            <Row className='pb-20'>
              <p>
                During covid time, Most schools and jobs were closed. Hence it
                was very challenging for families to set food on the table, in
                addition to catering for other basic needs like rent, medical
                expenses etc. SAAS organization thought it was wise to come up
                with an initiative of supporting SAAS families with food during
                these tough times. The programme started in March 2020. It was
                done monthly and it went up to 10 phases every month.
              </p>
            </Row>
            <Row>
              <p>
                Over 200 families have benefited from the program. The food
                package included; 5packages of Maize flour, 5packages of Wheat
                flour, 5litres of Cooking oil, 5kg of Rice, 5kg of Beans,
                sanitary towels and washing detergent.
              </p>
            </Row>
            <Row>
              <p>
                All the parents were very contented to have received these
                packages. This could be seen on their faces during the program.
              </p>
              <p>
                Million thanks go to all who supported this initiative. Be it
                financially or emotionally. SAAS family will always pray for
                your health and wealth.
              </p>
            </Row>
          </Container>
        </section>
        <FoodProgramGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default FoodProgram;
