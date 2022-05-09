import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HeroContainerFour = ({ Title, TitleClass, TextColor, SubTitle, SubTitleClass, Heroimg }) => {
  return (
    <>
      <section className="inabout-hero mainbg py-5">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center py-5 text-center">
            <Col xs={12} md={7} className={TextColor}>
              <h1 className={TitleClass}>{Title}</h1>
              <h5 className="fs-16 fw-semibold my-3">
              {SubTitle}
              </h5>
            </Col>
            <Col xs={12} md={12}>
            <Image src={Heroimg.src} className="img-fluid" alt={Title} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroContainerFour;
