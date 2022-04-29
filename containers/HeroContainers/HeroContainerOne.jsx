import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const HeroContainerOne = ({ Title, SubTitle, BtnTitle, BtnLink, Heroimg }) => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-5 mt-5">
            <Col  xs={12} md={5}>
              <h1>{Title}</h1>
              <p className="white">{SubTitle}</p>
              <a href={BtnLink} className="btn btn-outline-info">
                {BtnTitle}
              </a>
            </Col>
            <Col  xs={12} md={7} className="text-center text-md-end">
              <Image src={Heroimg.src} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroContainerOne;
