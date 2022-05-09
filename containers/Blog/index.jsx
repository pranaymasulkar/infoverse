import React from "react";
import { blog1, blog2, blog3, blog4 } from "../../utils/allImgs";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import SingleBlog from "./SingleBlog";

const index = () => {
  return (
    <>
      <section className="info-home-servetech py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={6} className="text-center pb-5">
              <h2 className="main-Heading-blue fw-bold display-6">Recent Blog Post</h2>
              <p className="fs-16 fw-semibold color-main">
                Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </p>
            </Col>
          </Row>
          <Row className="info-blog-sec d-flex justify-content-center align-items-stretch">
            <SingleBlog/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default index;
