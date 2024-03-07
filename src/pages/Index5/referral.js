import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Referral() {
  return (
    <div className="container mt-5">
      <div>
        <Form className="m-3">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Participant Details</Form.Label>
            <Row>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="f-name"
                  label="Participant Name"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="NDIS Number"
                  label="NDIS Number"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel controlId="address" label="Address" className="mb-3">
              <Form.Control type="text" />
            </FloatingLabel>
            <Row>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="pnone"
                  label="Contact Number"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <Form.Select aria-label="Default select example">
                  <option>Select the Service </option>
                  <option value="Daily Activities &amp; Improved living Choice">
                    Daily Activities &amp; Improved living Choice
                  </option>
                  <option value="Community Access/ Social and Community Participation">
                    Community Access/ Social and Community Participation{" "}
                  </option>
                  <option value="SIL">
                    SIL (Supported Independent Living){" "}
                  </option>
                  <option value="STA">STA (Short Term Accommodation) </option>
                  <option value="MTA">MTA (Medium Term Accommodation) </option>
                  <option value="Supports in Employment">
                    Supports in Employment{" "}
                  </option>
                  <option value="SLES (School Leaver employment support)">
                    SLES (School Leaver employment support)
                  </option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Select aria-label="Default select example">
              <option>Funding Body </option>
              <option value="NDIS-Funding">NDIS Funding</option>
              <option value="Self-funding">Self-funding</option>
              <option value="Other">Other </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Referee Details</Form.Label>
            <Row>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="f-name"
                  label="Referee Name"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="Organisation Name"
                  label="Organisation Name"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="email"
                  label=" Email"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <Form.Select aria-label="Default select example">
                  <option>Relation to Participant </option>
                  <option value="Support Coordinator">
                    Support Coordinator
                  </option>
                  <option value="Plan Nominee">Plan Nominee</option>
                  <option value="Friend/family">Friend/family </option>
                </Form.Select>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="pnone"
                  label="Contact Number"
                  className="mb-3"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Check
                    type="switch"
                    id="call-back"
                    label="Call Back Request"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>

          <Button className="mx-auto" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Referral;
