import * as React from "react";
import { Container, Row } from "react-bootstrap";
import DayOneGallery from "../../../../components/Gallery/maths-camp/2024/DayOneGallery";
import Footer from "../../../../components/Navigation/Footer";
import Header from "../../../../components/Navigation/Header";
import Layout from "../../../../components/Navigation/Layout";
import PageHeader from "../../../../components/Navigation/PageHeader";
import StickyHeader from "../../../../components/Navigation/StickyHeader";

const DayOne = () => {
  return (
    <Layout pageTitle="Maths Camp">
      <Header />
      <StickyHeader extraClassName="stricky-header-two" />
      <PageHeader title="Maths Camp" crumbTitle="Day One" />
      <>
        <section className="event-details pt-120">
          <Container>
            <h3>Day One</h3>
            <Row className="pb-20">
              <p>
                Our August 2024 holiday tuition has kicked off at the office.
              </p>
              <p>
                We look forward to an amazing learning experience as the
                students compare and share notes from their different schools.
              </p>
              <p>
                The tuition encourages peer-to-peer learning as the students
                with the guidance of our dedicated tutors take them through some
                of the challenging topics they face in school.
              </p>
            </Row>
          </Container>
        </section>
        <DayOneGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default DayOne;
