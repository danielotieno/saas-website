import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// markup
const AboutPage = () => {
  return (
    <section className='event-details pt-120'>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <h3>About SAAS</h3>
            <p>
              Sponsor an African Scholar (SAAS) is an Irish charity (Charity
              Number CHY 17318) that provides sustainable solutions to
              communities in Kenya. SAAS was founded in early 2006 in response
              to the exploitation experienced by young people and their families
              who live in extreme poverty.
            </p>
            <p>
              As we believe sustainable development involves the development of
              people, our mission is to empower people with the knowledge and
              skills that will enable them to live a life of self reliance and
              self respect so that they can overcome the challenges faced within
              their society.
            </p>
          </Col>
          <Col md={12} lg={6}>
            <h3>What We Do</h3>
            <p>
              SAAS runs a sponsorship programme which enables Kenyan students
              from marginalised communities to attend post primary education.
              This sponsorship is coupled with free student services such as
              counselling and career guidance.
            </p>
            <p>
              As well as sponsoring students through Secondary School education
              we also sponsor Vocational Training (Short Courses) such as
              Plumbing, Hairdressing, Carpentry, Mechanics etc.
            </p>
            <p>
              We are also involved with school development and have provided
              several Kenyan schools with computers, sports equipment and books.
              SAAS also delivers free drugs and HIV/AIDs awareness seminars to
              young people in the most deprived areas of Kenya and is supported
              by our partner organisation, MEWA in doing so.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <h3>Our Mission</h3>
            <p>
              While most of us assume that getting an education is a right sadly
              this is not the case in Kenya. Our mission is to enable the
              impoverished in Mombasa to have access to an education. We support
              families and students in achieving their dreams by sponsoring
              students to attend school.
            </p>
          </Col>
          <Col md={12} lg={6}>
            <h3>Our Values</h3>
            <p>
              <ul>
                <li>
                  Employ a grass roots approach, so we can engage and support
                  the needs of local communities.
                </li>
                <li>
                  Respect, encourage and protect the most vulnerable in our
                  society.
                </li>
                <li>
                  Work with ethical organisations that share and practice our
                  values.
                </li>
                <li>
                  Ensure that all money donated to support students goes to the
                  students.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
