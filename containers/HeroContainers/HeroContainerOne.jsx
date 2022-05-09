import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const HeroContainerOne = ({ Title, SubTitle, BtnTitle, BtnLink, Heroimg }) => {
  return (
    <>
      <section className="py-5 hero-contin-one">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-5 mt-5">
            <Col  xs={12} md={6}>
              <h1 className="fs-56 main-Heading-white fw-bold">{Title}</h1>
              <p className="white fs-16 fw-semibold my-4">{SubTitle}</p>
              
              <a href={BtnLink} className="btn-flip" data-back={BtnTitle} data-front={BtnTitle}></a>
            </Col>
            <Col  xs={12} md={6} className="text-center text-md-end">
              <Image src={Heroimg.src} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroContainerOne;
