import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Nav  } from "react-bootstrap";
import { NavbarLogo } from "../../utils/allImgs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const Footer = (props) => {
  return (
    <footer className="py-5">
      <Container>
        <Row className="border-bottom pb-5">
          <Col md={3}>
            <Image src={NavbarLogo.src} className="img-fluid" alt=""/>
          </Col>
          <Col md={3}>
            <div>
              <h5>Office</h5>
              <Nav className="flex-column">
                <Nav.Link disabled>
                  Studio Stukram 1910 Gateway Road, Portland, Oregon 97230
                </Nav.Link>
                <Nav.Link disabled>hello@stukram.com</Nav.Link>
                <Nav.Link disabled>+1 202 555 0171</Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Links</h5>
              <Nav className="flex-column">
                <Nav.Link disabled>About Us</Nav.Link>
                <Nav.Link disabled>Contact us</Nav.Link>
                <Nav.Link disabled>Our Work</Nav.Link>
                <Nav.Link disabled>Disabled</Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h5>Follow Us</h5>
              <Nav className="justify-content-start">
                <Nav.Link href="#"><BsTwitter/></Nav.Link>
                <Nav.Link href="#"><FaFacebookF/></Nav.Link>
                <Nav.Link href="#"><FaLinkedinIn/></Nav.Link>
                <Nav.Link href="#"><ImYoutube/></Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>
        <Row className="pt-5 text-center">
            <Col>
                <h6 className="white m-0">@ 2021, infoverse. </h6>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
