import React from "react";
import { Container, Row } from "react-bootstrap";
import ClientCard from "../ClientProfile/ClientCard";

const ClientProfile = () => {
  return (
    <section className="mainbg py-5">
      <Container>
        <Row>
          <h2 className="white">
          Clients
          </h2>
        </Row>
        <Row>
          <ClientCard />
        </Row>
      </Container>
    </section>
  );
};

export default ClientProfile;
