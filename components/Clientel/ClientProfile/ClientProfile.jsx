import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientCard from "../ClientProfile/ClientCard";

const ClientProfile = ({ Classes, Title, SubTitle }) => {
  return (
    <section className="info-clinetsec mainbg py-5">
      <Container>
        <Row>
          <Col className={Classes}>
            <h2 className="main-Heading-white fw-bold display-6">{Title}</h2>
            <p className="white fs-16 fw-semibold">{SubTitle}</p>
          </Col>
        </Row>
        <Row className="mb-5 pb-5">
          <ClientCard />
        </Row>
        <Row className="mb-5"></Row>
      </Container>
    </section>
  );
};

export default ClientProfile;
