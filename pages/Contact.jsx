import dynamic from "next/dynamic";
import React from "react";
import Footer from "../layout/Footer/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";
import ContactForm from "../components/Contact/ContactForm";
import Address from "../components/Contact/Address";
import ContactLocation from "../components/Contact/ContactLocation";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Contact = () => {
  return (
    <>
      <Header />
      <section className="mainbg py-5">
        <Container>
          <Row className="py-5">
            <Col xs={12} className="text-center py-5">
              <h1 className="main-Heading-white fw-bold display-6">Contact Information</h1>
              <h5 className="white fs-16 fw-semibold my-3">
                Our company was founded in 2020. We work daily to become <br />
                better and we are ready to share best practices.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Address/>
              <ContactLocation/>
            </Col>
            <Col md={6}>
              <ContactForm/>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
