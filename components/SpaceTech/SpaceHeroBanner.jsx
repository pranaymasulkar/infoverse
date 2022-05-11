import React from 'react';
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { SpaceBanner } from "../../utils/allImgs";

const SpaceHeroBanner = () => {
  return (
    <>
        <section>
        <Card className="bg-dark text-white border-0 rounder-0">
          <Card.Img src={SpaceBanner.src} alt="Card image" />
          <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
            <Container>
              <Row>
                <Col xs={12} md={6} className="text-center">
                  <Card className="bgtransparent border-0">
                    <Card.Title className="main-Heading-white fw-bold display-6 mb-4">
                      The Future of <br /> Space Exploration
                    </Card.Title>
                    <Card.Text className="white fs-16 fw-semibold">
                      Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </section>
    </>
  )
}

export default SpaceHeroBanner