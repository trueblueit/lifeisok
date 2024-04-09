import React, { useState } from "react";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";

import { useToast } from "@chakra-ui/react";

export function DemoModal(props) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    qualification: "",
    position: "",
    description: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles form submission and posts feedback to the server

  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:80/career.php",
        formData
      );
      const data = response.data;
      setSubmitMessage(data.message); // Response from PHP script
      if (data.success) {
        // Set the success message
        // Show success toast
        toast({
          title: data.heading,
          description: data.message,
          status: data.status,
          duration: 1000,
          isClosable: true,
        });
        // Reset form data after toast is displayed
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          qualification: "",
          position: "",
          description: "",
        });
      } else {
        setSubmitMessage(data.message); // Set the error message
        toast({
          title: data.heading,
          description: data.message,
          status: data.status,
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, show an error message or handle error cases
      toast({
        title: "Error",
        description: "Cannot access your server",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="m-3 m-lg-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            <h1 style={{ color: "#ff6900" }} className="mb-3">
              Register your Intrest
            </h1>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="first_name" label="First Name">
                <Form.Control
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="last_name" label="Last Name">
                <Form.Control
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="phone" label="Phone" className="mb-3">
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="qualifications" label="Qualifications">
                <Form.Control
                  type="text"
                  name="qualifications"
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <Form.Select
                aria-label="position"
                onChange={handleChange}
                name="position"
              >
                <option>Select the position</option>
                <option>Support Worker</option>
                <option>Support Coordinator</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type Here"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>

          <a className="mx-auto btn mybtn" onClick={handleSubmit}>
            Submit
          </a>
        </Form>
      </div>
    </Modal>
  );
}

export function Career() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <section className="section mybg" id="career">
        <div className="bg-overlay"></div>
        <Container fluid>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="text-white">Join Our Team Today</h2>
              <p className="pt-3 home-desc mx-auto">
                Founded by a team of professionals to improve the quality of
                life for people with difficulties.
              </p>
              <a
                className="mt-3 mt-lg-5 btn mybtn"
                onClick={() => setModalShow(true)}
              >
                Join Us
              </a>

              <DemoModal show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
