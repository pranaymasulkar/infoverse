import dynamic from "next/dynamic";
import React from "react";
import ClientProfile from "../components/Clientel/ClientProfile/ClientProfile";
import Footer from "../layout/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Testimoni from "../components/Testimonials/Testimoni";
import Faq from "../components/Faqs/Faq";

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
        <Container>
          <Row className="py-5">
            <Col xs={12} className="text-start py-5 mb-5">
              <h1>About our company</h1>
              <h5 className="white">
                Cryptocurrency markets have seen an increase in volume in recent
                weeks, <br /> which is a great opportunity for new traders.
              </h5>
            </Col>
            {/* <Col>
              <Image src={AbouHero.src} className="img-fluid" alt="" />
            </Col> */}
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
