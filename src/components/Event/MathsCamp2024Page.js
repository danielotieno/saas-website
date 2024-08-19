import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./EventCard";
import bgImage from "../../assets/images/shapes/event-map-1-2.png";
import MATHS_CAMP_2024_DATA from "../../data/mathsCamp/camp-2024";

const MathsCamp2024Page = () => {
  return (
    <section
      className="event-home-two pb-120"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col className="text-center mt-60">
            <div className="block-title">
              <h3 className="event-title">Maths Camp 2024.</h3>
            </div>
          </Col>
        </Row>
        <div className="event-grid">
          {MATHS_CAMP_2024_DATA.map((visit, index) => (
            <EventCard data={visit} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MathsCamp2024Page;
