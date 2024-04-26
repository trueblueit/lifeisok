import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useToast } from "@chakra-ui/react"; // Assuming you're using Chakra UI for toast notifications

function Contactus() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    subject: "",
    description: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:80/enquire.php", // Update with your backend API URL
        formData
      );
      const data = response.data;
      if (data.success) {
        toast({
          title: data.heading,
          description: data.message,
          status: data.status,
          duration: 3000,
          isClosable: true,
        });
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
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
      toast({
        title: "Error main",
        description: "An error occurred while submitting the form.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Container fluid className="mt-5">
        <h3 className="text-center">Enquire Form</h3>
        <div className="row justify-content-center">
          <Form className="col-md-8 text-center " onSubmit={handleSubmit}>
            <Form.Text style={{ fontWeight: "600", color: "black" }}>
              We'll never share your details with anyone else.
            </Form.Text>
            <Form.Group className="mb-3 mt-5 text-lg" controlId="formFullName">
              <Form.Control
                style={{ fontWeight: "bold" }}
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                style={{ fontWeight: "bold" }}
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control
                style={{ fontWeight: "bold" }}
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                style={{ fontWeight: "bold" }}
                as="textarea"
                rows={3}
                placeholder="Type your message here"
                name="description"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <a className="btn mybtn mb-5" onAuxClick={handleSubmit}>
              Submit
            </a>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Contactus;
