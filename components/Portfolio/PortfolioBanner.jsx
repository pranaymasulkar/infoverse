import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PortfolioBannerImg } from "../../utils/allImgs";
const PortfolioBanner = () => {
  return (
    <section className="porfolio-bannersec">
        <Container>
            <Row>
                <Col className="text-center">
                <Image src={PortfolioBannerImg.src} className="img-fluid" alt=''/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PortfolioBanner