import React from "react";
import { Card } from "react-bootstrap";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Address = () => {
  return (
    <>
      <Card className="bgbunting border-0 mb-4">
        <Card.Body className="py-4">
          <h3 className="white">Send us a message</h3>
          <Card.Text className="white">
            <FaLocationArrow /> 202, 2 floor, Shree Krishna Enclave, Near
            Jayanti Nagri 3, New Somalwada, Beltarodi NAGPUR -34, MS (IND)
          </Card.Text>
          <Card.Text className="white">
            <a href="#" className="white text-decoration-none">
              <AiOutlineMail /> info@infoverse.com
            </a>
          </Card.Text>
          <Card.Text className="white">
            <FiPhoneCall /> +918976565432 | +917876988900
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Address;
