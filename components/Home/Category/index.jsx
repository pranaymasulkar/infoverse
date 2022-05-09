import React from 'react';
import CategoryCard from './CategoryCard';
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const index = () => {
  return (
    <>
         <section className="info-home-servetech py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={5} className="text-center pb-5">
              <h2 className="main-Heading-blue fw-bold display-6">We can help you in every digital way possible</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <CategoryCard/>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default index