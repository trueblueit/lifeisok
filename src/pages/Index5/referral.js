import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { SlArrowDownCircle } from "react-icons/sl";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
function Referral() {
  const [formData, setFormData] = useState({
    participant_name: "",
    ndis_number: "",
    email: "",
    address: "",
    contact_number: "",
    service_type: "",
    funding_body: "",
    referee_name: "",
    organisation_name: "",
    referee_email: "",
    relation_to_participant: "",
    referee_contact_number: "",
    callback_request: false,
  });
  const [submitMessage, setSubmitMessage] = useState(null);
  const [submitHeadinh, setSubmitHeading] = useState(null);
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform additional actions on form submission if needed

    try {
      const response = await axios.post(
        "http://localhost:80/referral.php",
        formData
      );
      const data = response.data;
      setSubmitMessage(data.message);
      setSubmitMessage(data.message); // Response from PHP script

      if (data.success) {
        toast({
          title: data.heading,
          description: data.message,
          status: data.status,
          duration: 2000,
          isClosable: true,
        });
      } else {
        // Set the error message
        toast({
          title: data.heading,
          description: data.message,
          status: data.status,
          duration: 2500,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, show an error message or handle error cases
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="container mt-5">
      <span
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "underline",
        }}
      >
        <SlArrowDownCircle style={{ marginRight: "5px" }} />{" "}
        {/* Add some margin to space out the icon and text */}
        <a
          href="https://lifeisok.com.au/wp-content/uploads/2022/08/LIO-NDIS-Referral-Form-updated-2022.pdf"
          download
          // This underlines the text
          className="color-link"
        >
          Download PDF
        </a>
      </span>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Participant Details</Form.Label>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="f-name"
                label="Participant Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="participant_name"
                  value={formData.participant_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      participant_name: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="NDIS Number"
                label="NDIS Number"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="ndis_number"
                  value={formData.ndis_number}
                  onChange={(e) =>
                    setFormData({ ...formData, ndis_number: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="email"
                label="Email Address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="address"
                label="Address"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="pnone"
                label="Contact Number"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact_number: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <Form.Select
                aria-label="Default select example"
                name="service_type"
                value={formData.service_type}
                onChange={(e) =>
                  setFormData({ ...formData, service_type: e.target.value })
                }
              >
                <option>Select the Service </option>
                <option value="Daily Activities &amp; Improved living Choice">
                  Daily Activities &amp; Improved living Choice
                </option>
                <option value="Community Access/ Social and Community Participation">
                  Community Access/ Social and Community Participation{" "}
                </option>
                <option value="SIL">SIL (Supported Independent Living) </option>
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
          <Form.Select
            aria-label="Default select example"
            name="funding_body"
            value={formData.funding_body}
            onChange={(e) =>
              setFormData({ ...formData, funding_body: e.target.value })
            }
          >
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
                <Form.Control
                  type="text"
                  name="referee_name"
                  value={formData.referee_name}
                  onChange={(e) =>
                    setFormData({ ...formData, referee_name: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                controlId="Organisation Name"
                label="Organisation Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="organisation_name"
                  value={formData.organisation_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      organisation_name: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel controlId="email" label=" Email" className="mb-3">
                <Form.Control
                  type="text"
                  name="referee_email"
                  value={formData.referee_email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      referee_email: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <Form.Select
                aria-label="Default select example"
                name="relation_to_participant"
                value={formData.relation_to_participant}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    relation_to_participant: e.target.value,
                  })
                }
              >
                <option>Relation to Participant </option>
                <option value="Support Coordinator">Support Coordinator</option>
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
                <Form.Control
                  type="text"
                  name="referee_contact_number"
                  value={formData.referee_contact_number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      referee_contact_number: e.target.value,
                    })
                  }
                />
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
                  name="callback_request"
                  checked={formData.callBackRequest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      callBackRequest: e.target.checked,
                    })
                  }
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
  );
}

export default Referral;
