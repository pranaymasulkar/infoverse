import dynamic from "next/dynamic";
import React from "react";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid/PortfolioGrid";
import Footer from "../layout/Footer/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Portfolio = () => {
  return (
    <>
      <Header />
      <section className="inabout-hero mainbg py-5">
        <Container>
          <Row className="py-5">
            <Col xs={12} md={5} className="text-start py-5 mb-5">
              <h1>Our work</h1>
              <h5 className="white">
                For over 32 years our goal has been scalable, compelling growth
                for brands that matter. The data driven practices cultivate
                human centered, socially inclusive solutions. Take a look at our
                work.
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
      <PortfolioGrid />
      <Footer />
    </>
  );
};

export default Portfolio;
