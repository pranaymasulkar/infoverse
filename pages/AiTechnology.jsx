import dynamic from "next/dynamic";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HeroContainerFour from "../containers/HeroContainers/HeroContainerFour";
import Footer from "../layout/Footer/Footer";
import { AiTechBaner } from "../utils/allImgs";
import TitleIntro from "../containers/TitlePart/TitleIntro";
import AiDevService from "../components/AiTechnology/AiDevService/AiServiceCard";
import ClientProfile from "../components/Clientel/ClientProfile/ClientProfile";
import AiServiceContainer from "../components/AiTechnology/AiServiceContainer";

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
      <HeroContainerFour
        TextColor="text-center py-5 mb-5"
        Title="The Best AI For Everyone"
        TitleClass="vkkjkb"
        SubTitle="Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "
        SubTitleClass="white"
        Heroimg={AiTechBaner}
      />

      <section className="info-home-spacetech aiplatform-arti">
        <Container fluid>
          <Row className="d-flex justify-content-end align-items-center">
            <Col md={6} className="info-home-space-detail py-5">
              <div className="p-5 my-5 white">
                <h2>
                  A Artificial Intelligence platform that enables developer
                  solutions
                </h2>
                <h5>
                  Spend real fights effective anything extra by leading.
                  Mouthwatering leading how real formula also locked-in have can
                  mountain thought. Jumbo plus shine sale.
                </h5>
                <ul>
                  <li>
                    Modular structure enabling easy implementation for different
                    softwares
                  </li>
                  <li>
                    Advanced payment and processing technologies, fine-tuned
                    from more than 3 years of development testing
                  </li>
                  <li>
                    Unified AppStore for retail cryptocurrency solutions with a
                    Crypterium products audience
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AiServiceContainer
        Classes="white text-center py-5"
        Title="AI Development Services"
        SubTitle="We provide a host of offerings to help you capitalize on the metaverse opportunity."
      />

      <ClientProfile
        Classes="white text-start py-5"
        Title="Technology We use for creatin AI System"
        SubTitle="We harness the potential of varied Blockchain platforms to deliver innovative enterprise grade blockchain solutions that make a difference."
      />

      <Footer />
    </>
  );
};

export default AiTechnology;
