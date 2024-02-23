import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export function DemoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="m-5 ">
        <Form>
          <Row>
            <Col>
              <FloatingLabel
                controlId="f-name"
                label="First Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="l-name"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel
                controlId="qual"
                label="Qualifications"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Select the position </option>
                <option value="1">Support Worker</option>
                <option value="2">Support Coordinator </option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type Here" />
          </Form.Group>

          <Button className="mx-auto" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export function WebsiteDescription() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <section className="section" id="get-started">
        <div className="bg-overlay"></div>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="text-white">Join Our Team Today</h2>
            <p className="pt-3 home-desc mx-auto">
              Founded by a team of professionals to improve the quality of life
              for people with difficulties.
            </p>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Join Us
            </Button>

            <DemoModal show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
}
