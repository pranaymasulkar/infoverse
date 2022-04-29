import dynamic from "next/dynamic";
import React from "react";
import Footer from "../layout/Footer/Footer";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import HeroContainerOne from "../containers/HeroContainers/HeroContainerOne";
import { BlockchinHero1, BlockchinHero2 } from "../utils/allImgs";
import BlockCategory from "../components/Blockchain/BlockCategory/BlockCategory";
import ClientProfile from "../components/Clientel/ClientProfile/ClientProfile";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Blockchain = () => {
  return (
    <>
      <Header />
      <section className="info-hero">
        <HeroContainerOne
          Title="Decentralizing The World"
          SubTitle="Since 2016 Through Forward-Thinking Enterprise
        Blockchain Solutions"
          BtnTitle="Learn More"
          BtnLink="#"
          Heroimg={BlockchinHero1}
        />
        <section>
          <Container>
            <Row>
              <Col>
                <h2>Embrace Web 3. Embrace Transformation.</h2>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={12} md={7} className="ps-0">
                <Image src={BlockchinHero2.src} className="img-fluid" alt="" />
              </Col>
              <Col xs={12} md={5} className="pe-5">
                <div className="pe-5">
                  <h5>
                    Unearth the blockchain potential to overhaul enterprise &
                    institutional processes.
                  </h5>
                  <p>
                    Infoverse, one of world's pioneering blockchain development
                    company harnesses the power of decentralization and smart
                    contracts to build scalable, asset agnostic applications.
                    Our subject matter experts provide enterprise-grade
                    blockchain app development services ensuring transparency &
                    immutability over a distributed ledger.
                  </p>
                  <p>
                    Ask more about our expertise in DeFi 2.0, Metaverse
                    ecosystems, DAOs, Exchanges & wallets, crypto banks, NFTs
                    and more.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
      <BlockCategory/>
      <ClientProfile/>
      <Footer />
    </>
  );
};

export default Blockchain;
