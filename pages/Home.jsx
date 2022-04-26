import dynamic from "next/dynamic";
// import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';
// import '../assets/css/HomeDemo2.css'
import {
  Slider1,
  artificial,
  MobileAppDevelopment,
  SoftwareDevelopment,
  uiuxDesigning,
  WebDevelopment,
  blog1,
  blog2,
  blog3,
  blog4,
} from "../utils/allImgs";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import Footer from "../layout/Footer/Footer";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Header/>
      <section className="info-hero py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col>
              <h1>Embrace Web 3. Embrace Transformation.</h1>
              <p className="white">
                Unearth the blockchain potential to overhaul enterprise &
                institutional processes.
              </p>
              <Button variant="outline-info">Learn More</Button>
            </Col>
            <Col>
              <Image src={Slider1.src} className="img-fluid" alt=""/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="info-home-about-combine py-5">
        <section className="info-home-about py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center py-5">
              <Col>
                <h2 className="white">
                  About us and our love for our work and job.
                </h2>
              </Col>
              <Col>
                <p className="white">
                  Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                  liber tempor cum
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <Row>
              <Col>
                <Image src={Slider1.src} className="img-fluid" alt=""/>
              </Col>
              <Col>
                <h2 className="white">Shift to Blockchain Revolution</h2>
                <h5 className="white">
                  Taste the flavor of shared economy with our enterprise
                  blockchain solutions.
                </h5>
                <p className="white">
                  Antier – a leading blockchain development company – harnesses
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
                  deliver blockchain solutions at enterprise scale.
                </p>
                <Button variant="outline-info">Learn More</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section className="info-home-ai py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col>
              <h2>The Best AI For Everyone</h2>
              <p>
                Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
              <Button variant="outline-info">Learn More</Button>
            </Col>
            <Col>
              <Image src={artificial.src} className="img-fluid" alt=""/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="info-home-spacetech">
        <Container fluid>
          <Row className="d-flex justify-content-end align-items-center">
            <Col md={6} className="info-home-space-detail py-5">
              <div className="p-5 my-5">
                <h2 className="white mb-5">
                  We connect the impossible Space Technology
                </h2>
                <h5 className="white">
                  Taste the flavor of shared economy with our enterprise
                  blockchain solutions.
                </h5>
                <p className="white">
                  Antier – a leading blockchain development company – harnesses
                  the power of blockchain and other technologies like
                  distributed ledger and smart contracts to build scalable,
                  asset agnostic applications such as white label exchange
                  platforms (centralized, decentralized and P2P).
                </p>
                <Button variant="outline-info">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="info-home-servetech py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center pb-5">
              <h2>We can help you in every digital way possible</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image src={WebDevelopment.src} className="img-fluid" alt=""/>
                  <Card.Title className="mt-4">Web Development</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image src={MobileAppDevelopment.src} className="img-fluid" alt=""/>
                  <Card.Title className="mt-4">
                    Mobile App Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image src={SoftwareDevelopment.src} className="img-fluid" alt=""/>
                  <Card.Title className="mt-4">Software Development</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="info-home-servetech-card border-0 shadow white text-center">
                <Card.Body className="py-5">
                  <Image src={uiuxDesigning.src} className="img-fluid" alt=""/>
                  <Card.Title className="mt-4">UI/UX Designing</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="info-home-servetech py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center pb-5">
              <h2>Recent Blog Post</h2>
              <p>
                Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between align-items-center">
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-50 m-3">
                      <Card.Title className="">
                        Typical Process of Successful Mobile Development
                      </Card.Title>
                      <Card.Title className="mt-4">
                        Create an immutable master ledger between trading
                        parties; use smart contracts to eliminate bad invoices;
                        have a single system of record that is accessible to all
                        partners involved in a transaction.
                      </Card.Title>
                    </div>
                    <div>
                      <Image src={blog1.src} className="img-fluid" alt=""/>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="w-50 m-3">
                      <Card.Title className="">
                        Typical Process of Successful Mobile Development
                      </Card.Title>
                      <Card.Title className="mt-4">
                        Create an immutable master ledger between trading
                        parties; use smart contracts to eliminate bad invoices;
                        have a single system of record that is accessible to all
                        partners involved in a transaction.
                      </Card.Title>
                    </div>
                    <div>
                      <Image src={blog2.src} className="img-fluid" alt=""/>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Image src={blog3.src} className="img-fluid" alt=""/>
                    </div>
                    <div className="w-50 m-3">
                      <Card.Title className="">
                        Typical Process of Successful Mobile Development
                      </Card.Title>
                      <Card.Title className="mt-4">
                        Create an immutable master ledger between trading
                        parties; use smart contracts to eliminate bad invoices;
                        have a single system of record that is accessible to all
                        partners involved in a transaction.
                      </Card.Title>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Image src={blog4.src} className="img-fluid" alt=""/>
                    </div>
                    <div className="w-50 m-3">
                      <Card.Title className="">
                        Typical Process of Successful Mobile Development
                      </Card.Title>
                      <Card.Title className="mt-4">
                        Create an immutable master ledger between trading
                        parties; use smart contracts to eliminate bad invoices;
                        have a single system of record that is accessible to all
                        partners involved in a transaction.
                      </Card.Title>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
