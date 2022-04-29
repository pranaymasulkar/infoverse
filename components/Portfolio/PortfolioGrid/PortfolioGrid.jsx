import React from "react";
import { Image, Col, Row, Container, Button } from "react-bootstrap";
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
      Title: "Dinámica Patterns",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio2,
      Title: "Scratch Mobile App",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio3,
      Title: "Automated Machine",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio4,
      Title: "Lactica Sweet Break",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio5,
      Title: "Spacing it Easier",
      Link: "",
      Description: "lorem ipsun",
    },
    {
      PortImg: Portfolio6,
      Title: "Badalona Diseño",
      Link: "",
      Description: "lorem ipsun",
    },
  ];

  return (
    <div>
      <section className="portfolio-grid-gallery">
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
          <Row>
            <Col className="portfolio-blog-sec">
              <div className="grid">
                {Portfolios.map((Portfolio) => (
                  <div className="grid-item" key={Portfolio.id}>
                    <figure className="effect-milo">
                      <Image src={Portfolio.PortImg.src} alt={Portfolio.Title} />
                      <figcaption>
                        {/* <h2>{Portfolio.Title} <span>{Portfolio.Title}</span></h2> */}
                        <h2>
                          <span>{Portfolio.Title}</span>
                        </h2>
                        <p>{Portfolio.Description}</p>
                        {/* <a
                          href={Portfolio.Link}
                          className="mainlink"
                        >
                          lern more
                        </a> */}
                        <a href={Portfolio.Link} className="btn btn-outline-light portbtn">Visit Site</a>{' '}
                      </figcaption>
                    </figure>
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
