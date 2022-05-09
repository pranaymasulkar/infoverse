import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import OurTeamCard from "./OurTeamCard";


const OurTeam = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <Row className="d-flex justify-content-start">
            <Col md={6}>
              <h5 className="fs-22 fw-semibold text-uppercase color-code-grey">OUR TEAM</h5>
              <h2 className="main-Heading-blue fw-bold display-6">Meet our company experts</h2>
            </Col>
          </Row>
          <Row className="pt-5 d-flex justify-content-center align-items-center">
            <OurTeamCard/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
