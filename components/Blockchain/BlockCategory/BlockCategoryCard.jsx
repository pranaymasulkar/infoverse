import React from "react";
import { Card, Col } from "react-bootstrap";

const BlockCategoryCard = () => {
  const BlockCategories = [
    {
      Title: "DeFi 2.0 Development",
      Subtitle: "Leverage the power of DeFi 2.0 to stand out in the crypto space. Backed by Ethereum blockchain, we will help you design completely decentralized and transparent platforms and financial products on the most trusted DeFi 2.0 protocols.",
    },
    {
      Title: "Dapp",
      Subtitle: "Raise capital in crypto tokens with Antier’s comprehensive IDO development services. End-to-end IDO development solutions include strategy design, whitepaper drafting, token development, token listing advisory, marketing, and support.",
    },
    {
      Title: "NFTS Development",
      Subtitle: "Invest in our robust end-to-end NFT & marketplace development services to trade non-fungible tokens securely. We use impressive token stands to develop an exceptional NFT smart contract auditing solution for you.",
    },
    {
      Title: "Marketplace",
      Subtitle: "Amplify your revenues by integrating OTC trading into your crypto exchange. Eliminate slippage and provide liquidity to your exchange users while enabling them to exchange large amounts of cryptocurrency anonymously.",
    },
    {
      Title: "Metaverse Development",
      Subtitle: "Amplify your revenues by integrating OTC trading into your crypto exchange. Eliminate slippage and provide liquidity to your exchange users while enabling them to exchange large amounts of cryptocurrency anonymously.",
    },
  ];
  return (
    <>
      {BlockCategories.map((Bcategory) => (
        <Col xs={12} md={4} key={Bcategory.id}>
          <Card className="mainbg white mb-4">
            <Card.Body className="p-4">
              <Card.Title className="white fs-22 fw-semibold">{Bcategory.Title}</Card.Title>
              <Card.Text className="white fs-16 fw-semibold">{Bcategory.Subtitle}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlockCategoryCard;
