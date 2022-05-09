import React from "react";
import { blog1, blog2, blog3 } from "../../utils/allImgs";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const SingleBlog = () => {
  const blogs = [
    {
      Title: "Typical Process of Successful Mobile Development",
      SubTitle:
        "Create an immutable master ledger between trading  parties use smart contracts to eliminate bad invoices have a single system of record that is accessible to all partners involved in a transaction.",
      Image: blog1,
    },
    {
      Title: "Typical Process of Successful Mobile Development",
      SubTitle:
        "Create an immutable master ledger between trading  parties use smart contracts to eliminate bad invoices have a single system of record that is accessible to all partners involved in a transaction.",
      Image: blog2,
    },
    {
      Title: "Review of Popular Web Design Trends in 2020",
      SubTitle:
        "Create an immutable master ledger between trading  parties use smart contracts to eliminate bad invoices have a single system of record that is accessible to all partners involved in a transaction.",
      Image: blog3,
    }
  ];
  return (
    <>
      {blogs.map((Items) => (
        <Col md={4}>
          <Card className="border-0">
            <Card.Img variant="top" src={Items.Image.src} />
            <Card.Body>
              <Card.Title className="fs-22 color-main fw-bold">{Items.Title}</Card.Title>
              <Card.Text className="fs-14 color-main fw-medium">{Items.SubTitle}</Card.Text>
              <a href="#">Read More</a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SingleBlog;
