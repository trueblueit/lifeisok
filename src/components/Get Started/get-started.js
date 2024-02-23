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

const GetStarted = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    description: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform additional actions on form submission if needed
    console.log("Form submitted:", formData);
  };

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

  return (
    <React.Fragment>
      <section className="section section-lg bg-get-start" id="get-started">
        <div className="bg-overlay"></div>
        <Container>
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

            <Form onSubmit={handleSubmit} className="mt-4">
              <Form.Group controlId="rating">
                <Form.Label>Star Rating:</Form.Label>
                <div className="star-rating text-white">
                  {[1, 2, 3, 4, 5].map((value, index) =>
                    renderStar(value, index + 1)
                  )}
                </div>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
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

export default GetStarted;
