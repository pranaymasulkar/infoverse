import dynamic from "next/dynamic";
import React from "react";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid/PortfolioGrid";
import Footer from "../layout/Footer/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";
import PortfolioBanner from "../components/Portfolio/PortfolioBanner";

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
        <Container className="ps-5">
          <Row className="py-5 mb-5 ps-5">
            <Col xs={12} md={5} className="text-start py-5 mb-5 ps-5">
              <h1 className="main-Heading-white fw-bold display-6">Our work</h1>
              <h5 className="white fs-16 fw-semibold my-3 mb-5">
                For over 32 years our goal has been scalable, compelling growth
                for brands that matter. The data driven practices cultivate
                human centered, socially inclusive solutions. Take a look at our
                work.
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
      <PortfolioBanner/>
      <PortfolioGrid />
      <Footer />
    </>
  );
};

export default Portfolio;
