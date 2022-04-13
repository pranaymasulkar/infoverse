import dynamic from "next/dynamic";
// import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';
// import '../assets/css/HomeDemo2.css'
import { Slider1, artificial } from "../utils/allImgs";
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
      <Header Title="Home" />
      <section className="info-hero py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col>
              <h1>Embrace Web 3. Embrace Transformation.</h1>
              <p>
                Unearth the blockchain potential to overhaul enterprise &
                institutional processes.
              </p>
              <Button variant="outline-info">Learn More</Button>
            </Col>
            <Col>
              <Image src={Slider1.src} className="img-fluid" />
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
                <Image src={Slider1.src} className="img-fluid" />
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
              <Image src={artificial.src} className="img-fluid" />
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

      <section className="">
        <Container>
          <Row className="d-flex justify-content-end align-items-center">
            <Col md={3} className="info-home-space-detail py-5">
              <Card className="">
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="info-home-space-detail py-5">
              <Card className="">
                <Card.Body>
                  <Card.Title>Mobile App Development</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="info-home-space-detail py-5">
              <Card className="">
                <Card.Body>
                  <Card.Title>Software Development</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="info-home-space-detail py-5">
              <Card className="">
                <Card.Body>
                  <Card.Title>UI/UX Designing</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
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
