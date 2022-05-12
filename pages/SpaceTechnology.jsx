import dynamic from "next/dynamic";
import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import HeroContainerFour from "../containers/HeroContainers/HeroContainerFour";
import Footer from "../layout/Footer/Footer";
import TitleIntro from "../containers/TitlePart/TitleIntro";
import AiDevService from "../components/AiTechnology/AiDevService/AiServiceCard";
import ClientProfile from "../components/Clientel/ClientProfile/ClientProfile";
import AiServiceContainer from "../components/AiTechnology/AiServiceContainer";
import SpaceHeroBanner from "../components/SpaceTech/SpaceHeroBanner";
import { SpaceBusines } from "../utils/allImgs/";
import JoinUsBanner from "../components/SpaceTech/JoinUsBanner";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);
const AiTechnology = () => {
  return (
    <>
      <Header />

      <SpaceHeroBanner />
      <AiServiceContainer
        Classes="white text-center py-5"
        Title="AI Development Services"
        SubTitle="We provide a host of offerings to help you capitalize on the metaverse opportunity."
      />
      <section className="hoveimage-effect py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <h1 className="main-Heading-blue fw-bold display-6">
                We help you develop your business on internet
              </h1>
              <p className="color-code-gray fs-16 fw-semibold mt-3">
                Antier – a leading blockchain development company – harnesses
                the power of blockchain and other technologies like distributed
                ledger and smart contracts to build scalable, asset agnostic
                applications such as white label exchange platforms
                (centralized, decentralized and P2P), smart wallets, ICO, STO,
                tokens and other enterprise blockchain solutions development.
                Our experts follow design thinking-driven approach to identify
                blockchain use cases and create intelligent strategies around
                the same to accelerate your deployments. Together, we are
                decentralizing the world by combining our deep domain expertise
                and rich experience to deliver blockchain solutions at
                enterprise scale.
              </p>
            </Col>
            <Col xs={12} md={6} className="text-end">
              <div class="efectbox">
                <div class="anicontin">
                  <Image src={SpaceBusines.src} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <JoinUsBanner/>
      <Footer />
    </>
  );
};

export default AiTechnology;
