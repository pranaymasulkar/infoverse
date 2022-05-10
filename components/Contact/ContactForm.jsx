import React from "react";
import { Col, Form, Button, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <Form>
        <Row className="bgbunting px-3 py-4 rounded">
            <Col xs={12}>
            <h3 className="white fs-24 fw-semibold">Send us a message</h3>
            </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Your name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Your name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Message</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Button variant="outline-light" size="lg" className="mt-2">Submit</Button>{" "}
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ContactForm;
