import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AiServiceCard from "./AiDevService/AiServiceCard";

const AiServiceContainer = ({ Classes, Title, SubTitle }) => {
  return (
    <>
      <section className="mainbg py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={7} className={Classes}>
              <h2>{Title}</h2>
              <p>{SubTitle}</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <AiServiceCard/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AiServiceContainer;
