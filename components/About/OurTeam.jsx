import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { TeamMember1, TeamMember2, TeamMember3 } from "../../utils/allImgs";

const OurTeam = () => {
  const Team = [
    {
      Title: "Pranay Masulkar",
      Img: TeamMember1,
    },
    {
      Title: "Pranay Masulkar",
      Img: TeamMember2,
    },
    {
      Title: "Pranay Masulkar",
      Img: TeamMember1,
    },
  ];
  return (
    <>
      {Team.map((Team) => (
        <Col md={4} key={Team.id}>
          <Card className="border-0">
            <Card.Body className="p-0">
              <Image src={Team.Img.src} className="img-fluid"/>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default OurTeam;
