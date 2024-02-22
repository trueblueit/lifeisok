import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contactus() {
  return (
    <div class="container">
      <div class="row">
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
      </div>
    </div>
    
  );
}

export default Contactus;