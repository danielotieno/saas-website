import * as React from "react";
import { Container, Row } from "react-bootstrap";
import DayFiveGallery from "../../../../components/Gallery/maths-camp/2024/DayFiveGallery";
import Footer from "../../../../components/Navigation/Footer";
import Header from "../../../../components/Navigation/Header";
import Layout from "../../../../components/Navigation/Layout";
import PageHeader from "../../../../components/Navigation/PageHeader";
import StickyHeader from "../../../../components/Navigation/StickyHeader";

const DayFive = () => {
  return (
    <Layout pageTitle="Maths Camp">
      <Header />
      <StickyHeader extraClassName="stricky-header-two" />
      <PageHeader title="Maths Camp" crumbTitle="Day Five" />
      <>
        <section className="event-details pt-120">
          <Container>
            <h3>Day Five(Final)</h3>
            <Row className="pb-20">
              <p>
                Our week-long August Holiday Tuition Program ended today with 83
                students attending the final classes. It has been a week of
                learning, exchanging and sharing ideas for the young lads spread
                in different schools across the country. The students had a
                feedback session where they made their recommendations as they
                outlined some of the challenges faced to be addressed. We also
                shared some sumptuous chicken biryani for lunch as the students
                retire home to rest before heading back to school at the end of
                next week.
              </p>
              <p>
                Our gratitude goes to the parents and guardians for availing the
                students for the classes. We also extend our appreciation to the
                tutors who took their precious time to come coach and guide the
                students to navigate some of the challenging topics they face in
                school. To the SAAS office and board, we say thank you for
                making this possible.
              </p>
            </Row>
          </Container>
        </section>
        <DayFiveGallery />
      </>
      <Footer />
    </Layout>
  );
};

export default DayFive;
