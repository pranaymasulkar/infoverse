import React from "react";
import { Container, Row } from "react-bootstrap";
import TestimoniCard from "./TestimoniCard";

const Testimoni = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <TestimoniCard />
        </Row>
      </Container>
    </section>
  );
};

export default Testimoni;
