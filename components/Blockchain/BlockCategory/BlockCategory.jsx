import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlockCategoryCard from "./BlockCategoryCard";
import TitleIntro from "../../../containers/TitlePart/TitleIntro";
const BlockCategory = () => {
  return (
    <div>
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <TitleIntro
                Classes="black pb-4"
                Title="Blockchain Offerings"
                SubTitle="Enterprise blockchain services to build a better future."
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <BlockCategoryCard />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BlockCategory;
