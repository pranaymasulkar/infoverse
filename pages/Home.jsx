import dynamic from "next/dynamic";
import {
  Slider1,
  artificial,
  MobileAppDevelopment,
  SoftwareDevelopment,
  uiuxDesigning,
  WebDevelopment,
} from "../utils/allImgs";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Footer from "../layout/Footer/Footer";
import HeroContainerOne from "../containers/HeroContainers/HeroContainerOne";
import HeroContainerTwo from "../containers/HeroContainers/HeroContainerTwo";
import HeroContainerThree from "../containers/HeroContainers/HeroContainerThree";
import SpaceTech from "../components/Home/SpaceTech";
import Blog from '../containers/Blog';

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Header />
      <section className="info-hero">
        <HeroContainerOne
          Title="Embrace Web 3. Embrace Transformation."
          SubTitle="Unearth the blockchain potential to overhaul enterprise &
        institutional processes."
          BtnTitle="Learn More"
          BtnLink="#"
          Heroimg={Slider1}
        />
      </section>
      <section className="info-home-about-combine py-5">
        <section className="info-home-about py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center py-5">
              <Col>
                <h2 className="main-Heading-white fw-bold display-6">
                  About us and our love for our work and job.
                </h2>
              </Col>
              <Col>
                <p className="white fs-16 fw-regular">
                  Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                  liber tempor cum
                </p>
                <a
                  href="#"
                  className="text-decoration-none text-capitalize white fw-bold"
                >
                  read more
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <HeroContainerThree
          TextColor="white"
          TitleClass="main-Heading-white fw-bold display-6"
          Title="Shift to Blockchain Revolution"
          SubTitle="Taste the flavor of shared economy with our enterprise
          blockchain solutions."
          Discription="Antier – a leading blockchain development company – harnesses
          the power of blockchain and other technologies like
          distributed ledger and smart contracts to build scalable,
          asset agnostic applications such as white label exchange
          platforms (centralized, decentralized and P2P), smart wallets,
          ICO, STO, tokens and other enterprise blockchain solutions
          development. Our experts follow design thinking-driven
          approach to identify blockchain use cases and create
          intelligent strategies around the same to accelerate your
          deployments. Together, we are decentralizing the world by
          combining our deep domain expertise and rich experience to
          deliver blockchain solutions at enterprise scale."
          BtnTitle="Learn More"
          BtnLink="#"
          BtnClass="btn-flip"
          Heroimg={Slider1}
        />
      </section>

      <HeroContainerTwo
        Title="The Best AI For Everyone"
        TitleClass="main-Heading-blue fw-bold display-6"
        TextColor="black"
        SubTitle=""
        SubTitleClass="d-none"
        Discription="Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        DiscriptionClass="color-code-grey fs-16 fw-medium"
        BtnTitle="Learn More"
        BtnLink="#"
        BtnClass="btn btn-outline-info my-3"
        Heroimg={artificial}
      />
      <SpaceTech />

      <section className="info-home-servetech py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={5} className="text-center pb-5">
              <h2 className="main-Heading-blue fw-bold display-6">
                We can help you in every digital way possible
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image
                    src={WebDevelopment.src}
                    className="img-fluid"
                    alt=""
                  />
                  <Card.Title className="mt-4">Web Development</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image
                    src={MobileAppDevelopment.src}
                    className="img-fluid"
                    alt=""
                  />
                  <Card.Title className="mt-4">
                    Mobile App Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image
                    src={SoftwareDevelopment.src}
                    className="img-fluid"
                    alt=""
                  />
                  <Card.Title className="mt-4">Software Development</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image src={uiuxDesigning.src} className="img-fluid" alt="" />
                  <Card.Title className="mt-4">UI/UX Designing</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Blog />

      <Footer />
    </>
  );
};

export default Home;
