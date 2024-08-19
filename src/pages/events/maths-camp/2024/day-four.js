import * as React from "react";
import { Container, Row } from "react-bootstrap";
import DayFourGallery from "../../../../components/Gallery/maths-camp/2024/DayFourGallery";
import Footer from "../../../../components/Navigation/Footer";
import Header from "../../../../components/Navigation/Header";
import Layout from "../../../../components/Navigation/Layout";
import PageHeader from "../../../../components/Navigation/PageHeader";
import StickyHeader from "../../../../components/Navigation/StickyHeader";

const DayFour = () => {
  return (
    <Layout pageTitle="Maths Camp">
      <Header />
      <StickyHeader extraClassName="stricky-header-two" />
      <PageHeader title="Maths Camp" crumbTitle="Day Four" />
      <>
        <section className="event-details pt-120">
          <Container>
            <h3>Day Four</h3>
            <Row className="pb-20">
              <p>
                Today we had 84 students attending the classes. A hearty
                congratulations to our dedicated tutors who have made sure they
                help these young lads easily navigate some of the challenging
                topics they face in class.
              </p>
            </Row>
          </Container>
        </section>
        <DayFourGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default DayFour;
