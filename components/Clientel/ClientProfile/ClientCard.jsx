import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  Clientlog1,
  Clientlog2,
  Clientlog3,
  Clientlog4,
  Clientlog5,
  Clientlog6,
  Clientlog7,
  Clientlog8,
} from "../../../utils/allImgs";

const ClientProfile = () => {
  const Clients = [
    {
      Logo: Clientlog1,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog2,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog3,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog4,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog5,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog6,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog7,
      Title: "Pranay Masulkar",
    },
    {
      Logo: Clientlog8,
      Title: "Pranay Masulkar",
    },
  ];
  return (
    <>
      {Clients.map((Client) => (
        <Col md={3} key={Client.id}>
          <Card className="client-proflie mb-4">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Image src={Client.Logo.src} className="img-fluid" />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ClientProfile;
