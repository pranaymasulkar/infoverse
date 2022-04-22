import React from "react";
import { Col, Form, Button, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <Form>
        <Row className="bgbunting px-3 py-4 rounded">
            <Col xs={12}>
            <h3 className="white">Send us a message</h3>
            </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white">Your name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white">Your name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white">Message</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Button variant="outline-light">Submit</Button>{" "}
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ContactForm;
