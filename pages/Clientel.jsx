import dynamic from "next/dynamic";
import React from "react";
import ClientProfile from "../components/Clientel/ClientProfile/ClientProfile";
import Footer from "../layout/Footer/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";
import Testimoni from "../components/Testimonials/Testimoni";
import Faq from "../components/Faqs/Faq";
import { clientbaner } from "../utils/allImgs/";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Clientel = () => {
  return (
    <>
      <Header />
      <section className="inabout-hero mainbg py-5">
        <Container fluid className="ps-5">
          <Row className="d-flex justify-content-center align-items-center py-5 ps-5">
            <Col xs={12} md={6} className="text-start py-5 ps-5 mb-5">
              <h1 className="main-Heading-white fw-bold display-6">About our company</h1>
              <h5 className="white fs-16 fw-semibold mt-3">
                Cryptocurrency markets have seen an increase in volume in recent
                weeks, <br /> which is a great opportunity for new traders.
              </h5>
            </Col>
            <Col md={6} className="text-end pe-0">
              <Image src={clientbaner.src} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <ClientProfile
        Classes="white text-start py-5"
        Title="Clients"
        SubTitle=""
      />
      <Testimoni />
      <Faq />
      <Footer />
    </>
  );
};

export default Clientel;
