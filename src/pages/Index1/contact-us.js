import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/footer";
function Contactus() {
  return (
    <Container fluid class="mt-5">
      <div class="row">
        <Form class="col text-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="FullName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="subject" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type your message here</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div>
            <Button
              className="position-absolute top-90 start-50 translate-middle mt-5"
              variant="primary"
              type="submit"
            >
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
