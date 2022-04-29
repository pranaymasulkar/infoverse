import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const HeroContainerTwo = ({ Title, TitleClass, TextColor, SubTitle, SubTitleClass, Discription, DiscriptionClass, BtnTitle, BtnLink, BtnClass, Heroimg }) => {
  return (
    <>
      <section className="info-home-ai py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className={TextColor}>
              <h2 className={TitleClass}>{Title}</h2>
              <h5 className={SubTitleClass}>{SubTitle}</h5>
              <p className={DiscriptionClass}>{Discription}</p>
              <a href={BtnLink} className={BtnClass}>
                {BtnTitle}
              </a>
            </Col>
            <Col>
              <Image src={Heroimg.src} className="img-fluid" alt={Title} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroContainerTwo;
