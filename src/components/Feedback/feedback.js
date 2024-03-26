import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    description: "",
  });
  const toast = useToast();

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [submitMessage, setSubmitMessage] = useState(null);
  // Handles form submission and posts feedback to the server

  // Renders a star for each rating value
  const renderStar = (value, index) => {
    const filled = value <= formData.rating;
    const tooltip = (
      <Tooltip id={`star-${index}`}>{`Rate ${index} stars`}</Tooltip>
    );

    return (
      <OverlayTrigger key={index} overlay={tooltip}>
        <span
          className={`star ${filled ? "filled" : ""}`}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      </OverlayTrigger>
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:80/feedback.php",
        formData
      );
      const data = response.data; // Response from PHP script
      if (data.success) {
        setSubmitMessage(data.message); // Set the success message
      } else {
        setSubmitMessage(data.message); // Set the error message
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, show an error message or handle error cases
    }
  };

  return (
    <React.Fragment>
      <section className="section feedback-bg " id="feedback">
        {/* Render section title */}

        <div className="bg-overlay"></div>
        <Container fluid>
          <Row>
            <h1 className="get-started-title text-white text-center">
              Rate our Service
            </h1>
            <div className="section-title-border mt-4 bg-white"></div>
            <p className="section-subtitle font-secondary text-white text-center pt-4">
              Share your thoughts on our service! Rate your experience with us
              and let us know what you liked. Your feedback is valuable in
              helping us enhance our services.
            </p>
            {/* Render feedback form */}
            <Form onSubmit={handleSubmit} className="mt-4">
              <Form.Group controlId="rating">
                <Form.Label>Star Rating:</Form.Label>
                <div className="star-rating text-white">
                  {[1, 2, 3, 4, 5].map((value, index) =>
                    renderStar(value, index + 1)
                  )}
                </div>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Additional Comments:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Feedback;
