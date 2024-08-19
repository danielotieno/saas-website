import * as React from "react";
import { Container, Row } from "react-bootstrap";
import DayThreeGallery from "../../../../components/Gallery/maths-camp/2024/DayThreeGallery";
import Footer from "../../../../components/Navigation/Footer";
import Header from "../../../../components/Navigation/Header";
import Layout from "../../../../components/Navigation/Layout";
import PageHeader from "../../../../components/Navigation/PageHeader";
import StickyHeader from "../../../../components/Navigation/StickyHeader";

const DayThree = () => {
  return (
    <Layout pageTitle="Maths Camp">
      <Header />
      <StickyHeader extraClassName="stricky-header-two" />
      <PageHeader title="Maths Camp" crumbTitle="Day Three" />
      <>
        <section className="event-details pt-120">
          <Container>
            <h3>Day Three</h3>
            <Row className="pb-20">
              <p>
                The second day of the SAAS August Holiday Tuition Program was a
                success as more students turned up. We had 73 students who
                showed up to quench their thirst for education. On Monday we had
                43 students. Under the tutelage of our ever dedicated tutors,
                the students get to tackle some of the challenging topics they
                face in variouse subjects in school.
              </p>
              <p>
                The program also encompasses peer-to-peer learning where the
                students get to exchange notes and ideas on different subjects.
              </p>
            </Row>
          </Container>
        </section>
        <DayThreeGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default DayThree;
