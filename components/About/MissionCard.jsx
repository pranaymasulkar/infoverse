import React from "react";
import { Card, Image, Col } from "react-bootstrap";

const MissionCard = ({ ClassCol = 4, data }) => {
  return (
    <>
      {data &&
        data.map((item, key) => (
          <Col xs={12} md={ClassCol} key={key}>
            <Card className="iabout-mission-cards text-center">
              <Card.Body className="py-5">
                <Image src={item.CardImg.src} className="img-fluid" alt=""/>
                <Card.Title className="white mt-4">{item.Cardtitle}</Card.Title>
                <Card.Text className="white">{item.CardText}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default MissionCard;
