import React from "react";
import { Card, Col } from "react-bootstrap";

const Counters = () => {
  const Counter = [
    {
      Count: "100+",
      Title: "Project Delivers",
    },
    {
      Count: "10K",
      Title: "Happy Customers",
    },
    {
      Count: "200k",
      Title: "Total transactions",
    },
  ];

  return (
    <>
      {Counter.map((Counter) => (
        <Col md={4} key={Counter.id}>
          <Card className="iab-counter text-center border-0 mb-3">
            <Card.Body>
              <h2 className="main-Heading-white fw-bold display-6 text-uppercase">{Counter.Count}</h2>
              <Card.Text className="fs-22 fw-medium white text-capitalize">{Counter.Title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Counters;
