import React from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import {
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
  Portfolio6,
} from "../../../utils/allImgs";

const PortfolioGrid = () => {
  const Portfolios = [
    {
      PortImg: Portfolio1,
      Title: "Pranay",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio2,
      Title: "Pranay Masulkar",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio3,
      Title: "Pranay Masulkar",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio4,
      Title: "Pranay Masulkar",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio5,
      Title: "Pranay Masulkar",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio6,
      Title: "Pranay Masulkar",
      Link: "",
      Description: "lorem ipsun",
    },
  ];

  return (
    <div>
      <section className="testimonal-section">
        <Container className="container">
          <Row className="py-5">
            <Col xs={12} md={8} className="text-start">
              <h1>Selected Projects</h1>
              <h5>
                We are passionate to create deeply connected brands, services,
                and campaigns to enable stable and successful relationships
                between businesses and customers.
              </h5>
            </Col>
          </Row>
          <Row className="">
            <Col className="testi-blog-sec">
              <div className="grid">
                {Portfolios.map((Portfolio) => (
                  <div
                  key={Portfolio.id}
                    className="grid-item"
                    title=""
                    // style={{backgroundImage: `url(../assets//img/portfolio-img/${Portfolio.PortImg})`}}
                  >
                    <Image src={Portfolio.PortImg.src} className="img-fluid" alt=""/>
                    <a href="#"></a>
                    <div className="testi-title-wrapper">
                      <div className="imcaptionb">
                        <h3 className="m-0">{Portfolio.Title}</h3>
                        <p>{Portfolio.Description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                ;
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PortfolioGrid;
