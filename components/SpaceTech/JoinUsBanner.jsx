import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { joingroup } from "../../utils/allImgs";

const JoinUsBanner = () => {
  return (
    <>
      <section>
        <Card className="bg-dark text-white border-0 rounder-0">
          <Card.Img src={joingroup.src} alt="Card image" />
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Container>
              <Row className="d-flex align-items-center justify-content-center">
                <Col xs={12} md={10} className="text-center">
                  <Card className="bgtransparent border-0">
                    <Card.Title className="main-Heading-white fw-bold display-6 mb-4">
                      Join our Journey
                    </Card.Title>
                    <Card.Text className="white fs-16 fw-semibold">
                      Antier – a leading blockchain development company –
                      harnesses the power of blockchain and other technologies
                      like distributed ledger and smart contracts to build
                      scalable, asset agnostic applications such as white label
                      exchange platforms (centralized, decentralized and P2P),
                      smart wallets, ICO, STO, tokens and other enterprise
                      blockchain solutions development. Our experts follow
                      design thinking-driven approach to identify blockchain use
                      cases and create intelligent strategies around the same to
                      accelerate your deployments. Together, we are
                      decentralizing the world by combining our deep domain
                      expertise and rich experience to deliver blockchain
                      solutions at enterprise scale.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </section>
    </>
  );
};

export default JoinUsBanner;
