import React from "react";
import {
  SoftwareDevelopment,
  uiuxDesigning,
  WebDevelopment,
} from "../utils/allImgs";
import { Col, Image, Card } from "react-bootstrap";
const CategoryCard = () => {
  const Ctegory = [
    {
      Title: "Web Development",
      Img: WebDevelopment,
      BgColor: "",
    },
    {
      Title: "Mobile App Development",
      Img: MobileAppDevelopment,
      BgColor: "",
    },
    {
      Title: "Software Development",
      Img: SoftwareDevelopment,
      BgColor: "",
    },
    {
      Title: "UI/UX Designing",
      Img: uiuxDesigning,
      BgColor: "",
    },
  ];
  return (
    <>
      {Ctegory.map((Item) => (
        <Col md={3}>
          <Card className="info-home-servetech-card border-0 shadow white text-center">
            <Card.Body className="py-5">
              <Image
                src={Item.Img.src}
                className="img-fluid"
                alt={Item.Title}
              />
              <Card.Title className="mt-4">{Item.Title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CategoryCard;
