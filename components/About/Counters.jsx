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
          <Card className="iab-counter text-center">
            <Card.Body>
              <h2 className="white my-3 text-uppercase">{Counter.Count}</h2>
              <Card.Text className="white text-capitalize">{Counter.Title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Counters;
