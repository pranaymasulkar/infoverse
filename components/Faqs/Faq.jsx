import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <h6>FAQ</h6>
            <h2>Still Have Questions?</h2>
            <p>
              Cryptocurrency markets have seen an increase in volume in recent
              weeks, which is a great opportunity for new traders.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordian />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
