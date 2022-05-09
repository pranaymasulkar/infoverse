import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
const SpaceTech = () => {
  return (
    <>
      <section className="info-home-spacetech">
        <Container fluid>
          <Row className="d-flex justify-content-end align-items-center">
            <Col md={6} className="info-home-space-detail py-5 pe-5">
              <div className="p-5 my-5">
                <h2 className="main-Heading-white fw-bold display-6 mb-3">
                  We connect the impossible Space Technology
                </h2>
                {/* <h5 className="white mb-3">
                  Taste the flavor of shared economy with our enterprise
                  blockchain solutions.
                </h5> */}
                <p className="white mb-4 fs-16 fw-regular">
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
    </>
  );
};

export default SpaceTech;
