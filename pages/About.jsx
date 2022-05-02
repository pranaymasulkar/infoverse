import dynamic from "next/dynamic";
import { Col, Container, Row, Image } from "react-bootstrap";
import MissionCard from "../components/About/MissionCard";
import {
  AbouHero,
  OurMision,
  BuildingPlatform,
  SecurUserData,
  MostCreadibility,
  BigDataInsights,
} from "../utils/allImgs";
import MissionData from "../data/data-components/missioncard-data";
import Counters from "../components/About/Counters";
import OurTeam from "../components/About/OurTeam";
import Footer from "../layout/Footer/Footer";
import HeroContainerFour from "../containers/HeroContainers/HeroContainerFour";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const About = () => {
  return (
    <>
      <Header />
      <HeroContainerFour
        TextColor="text-center py-5 mb-5"
        Title="About our company"
        TitleClass="vkkjkb"
        SubTitle="Cryptocurrency markets have seen an increase in volume in recent weeks,  which is a great opportunity for new traders."
        SubTitleClass="white"
        Heroimg= {AbouHero}
      />
      <section className=" py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col>
              <h6>OUR MISSION</h6>
              <h2>We are helping people to get a success.</h2>
            </Col>
            <Col>
              <p>
                Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies
                using our crypto trading app. The Bitcoin and cryptocurrency
                markets have experienced a surge in volume recently, making it
                an exciting time to become a trader. Cryptocurrency markets have
                seen an increase in volume in recent weeks, which is a great
                opportunity for new traders.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <MissionCard data={MissionData} />
          </Row>
        </Container>
      </section>
      <section className="mainbg py-5">
        <Container>
          <Row className="py-5 d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Image src={OurMision.src} className="img-fluid" alt="" />
            </Col>
            <Col md={6}>
              <h2 className="white">Millions of users around the world</h2>
              <p className="white">
                Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies
                using our crypto trading app. The Bitcoin and cryptocurrency
                markets have experienced a surge in volume recently, making it
                an exciting time to become a trader. Cryptocurrency markets have
                seen an increase in volume in recent weeks, which is a great
                opportunity for new traders. Start now
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Counters />
          </Row>
          <Row className="d-flex justify-content-center align-items-center py-5 mt-5">
            <Col md={6}>
              <h5 className="white">Why Choose Us</h5>
              <h2 className="white">
                We’ve Built A Platform To Buy And Sell Shares
              </h2>
              <p className="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <Row className="mt-5">
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-4"
                >
                  <Image src={SecurUserData.src} className="img-fluid" alt="" />
                  <div className="ms-5">
                    <h5 className="white">Secure User Data</h5>
                    <p className="white">
                      Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                      do eiusmod tempor incidiunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-4"
                >
                  <Image
                    src={MostCreadibility.src}
                    className="img-fluid pe-3"
                    alt=""
                  />
                  <div className="ms-5">
                    <h5 className="white">Most Creadibility</h5>
                    <p className="white">
                      Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                      do eiusmod tempor incidiunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-4"
                >
                  <Image
                    src={BigDataInsights.src}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="ms-5">
                    <h5 className="white">Big Data Insights</h5>
                    <p className="white">
                      Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                      do eiusmod tempor incidiunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Image src={BuildingPlatform.src} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" py-5">
        <Container>
          <Row className="d-flex justify-content-start">
            <Col md={6}>
              <h5 className="">OUR TEAM</h5>
              <h2 className="">Meet our company experts</h2>
            </Col>
          </Row>
          <Row className="pt-5 d-flex justify-content-center align-items-center">
            <OurTeam />
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
