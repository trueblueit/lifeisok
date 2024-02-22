import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "reactstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

function DemoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
                <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Home">
                <Container>
            <Row>
              <Col lg="12" className="text-center"></Col>
                <Form class="col text-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Type your message here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div><Button className="position-absolute top-90 start-50 translate-middle" variant="primary" type="submit">
                  Submit
                </Button></div>
              </Form>
              </Row>
              </Container>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  Tab content for Contact
                </Tab>
              </Tabs>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function WebsiteDescription () {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <React.Fragment>
        <section className="section">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">Join Our Team Today</h2>
                <p className="pt-3 home-desc mx-auto">
                Founded by a team of professionals to improve the quality of life for people with difficulties.
                </p>
                <Button variant="primary" onClick={() => setModalShow(true)}>
        Join Us
      </Button>

      <DemoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }


export default WebsiteDescription;
