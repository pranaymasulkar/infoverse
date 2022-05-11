import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <h6 className="fs-22 color-code-gray fw-semibold">FAQ</h6>
            <h2 className="main-Heading-blue fw-bold display-6">
              Still Have Questions?
            </h2>
            <p className="color-main fs-16 fw-semibold">
              Cryptocurrency markets have seen an increase in volume in recent
              weeks, <br />
              which is a great opportunity for new traders.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pb-5">
          <Col xs={12} md={8}>
            <Accordian />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
