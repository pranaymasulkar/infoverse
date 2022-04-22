import dynamic from "next/dynamic";
import { Col, Container, Row, Image } from "react-bootstrap";
import MissionCard from "../components/About/MissionCard";
import { AbouHero, OurMision } from "../utils/allImgs";
import MissionData from "../data/data-components/missioncard-data";
import Counters from "../components/About/Counters";
import OurTeam from "../components/About/OurTeam";
import Footer from "../layout/Footer/Footer";

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
      <section className="inabout-hero mainbg py-5">
        <Container>
          <Row className="py-5">
            <Col xs={12} className="text-center py-5 mb-5">
              <h1>About our company</h1>
              <h5 className="white">
                Cryptocurrency markets have seen an increase in volume in recent
                weeks, <br /> which is a great opportunity for new traders.
              </h5>
            </Col>
            <Col>
              <Image src={AbouHero.src} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
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
              <Image src={OurMision.src} className="img-fluid" />
            </Col>
            <Col md={6}>
              <h2 class="white">Millions of users around the world</h2>
              <p class="white">
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
        </Container>
      </section>
      <section className=" py-5">
        <Container>
          <Row className="d-flex justify-content-start">
            <Col md={6}>
              <h5 className="">OUR TEAM</h5>
              <h2 class="">Meet our company experts</h2>
            </Col>
          </Row>
          <Row className="pt-5 d-flex justify-content-center align-items-center">
            <OurTeam />
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
};

export default About;
