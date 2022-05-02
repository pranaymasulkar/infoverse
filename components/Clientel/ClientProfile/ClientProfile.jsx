import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientCard from "../ClientProfile/ClientCard";

const ClientProfile = ({ Classes, Title, SubTitle }) => {
  return (
    <section className="mainbg py-5">
      <Container>
        <Row>
          <Col className={Classes}>
            <h2>{Title}</h2>
            <p>{SubTitle}</p>
          </Col>
        </Row>
        <Row>
          <ClientCard />
        </Row>
      </Container>
    </section>
  );
};

export default ClientProfile;
