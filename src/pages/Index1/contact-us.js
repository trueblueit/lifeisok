import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/footer";
function Contactus() {
  return (
    <Container fluid className="mt-5">
      <div className="row justify-content-center">
        <Form className="col-md-8 text-center">
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type your message here"
            />
          </Form.Group>
          <div className="d-grid gap-2 mb-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
  <Footer />;
}

export default Contactus;
