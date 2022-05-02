import React from "react";
import { Aiserve } from "../../../utils/allImgs";
import { Row, Col, Image } from "react-bootstrap";
import TitleIntro from "../../../containers/TitlePart/TitleIntro";
const AiServiceCard = () => {
  const DevService = [
    {
      ServiceImg: Aiserve,
      Title: "Cloud Nodes",
      SubTitle:
        "Create an immutable master ledger between trading parties; use smart contracts to eliminate bad invoices; have a single system of record that is accessible to all partners involved in a transaction.",
    },
    {
      ServiceImg: Aiserve,
      Title: "Quantum Encryption",
      SubTitle:
        "Create an immutable master ledger between trading parties; use smart contracts to eliminate bad invoices; have a single system of record that is accessible to all partners involved in a transaction.",
    },
    {
      ServiceImg: Aiserve,
      Title: "Atomic Chain",
      SubTitle:
        "Create an immutable master ledger between trading parties; use smart contracts to eliminate bad invoices; have a single system of record that is accessible to all partners involved in a transaction.",
    },
    {
      ServiceImg: Aiserve,
      Title: "Cloud Artificial",
      SubTitle:
        "Create an immutable master ledger between trading parties; use smart contracts to eliminate bad invoices; have a single system of record that is accessible to all partners involved in a transaction.",
    },
  ];
  return (
    <>
      {DevService.map((AiServ) => (
        <Col md={6} className="mb-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={4} className="">
              <Image src={AiServ.ServiceImg.src} className="img-fluid" />
            </Col>
            <Col md={8} className="">
              <TitleIntro
                Classes="white"
                Title={AiServ.Title}
                SubTitle={AiServ.SubTitle}
              />
            </Col>
          </Row>
        </Col>
      ))}
    </>
  );
};

export default AiServiceCard;
