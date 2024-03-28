import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Tooltip,
  OverlayTrigger,
  Row,
} from "react-bootstrap";

const Feedback = () => {
  const [formData, setFormData] = useState({
    rating: "", // Adjusted for emoji rating

    rating: null,

    description: "",
    email: "",
  });

  // Define emojis for the rating system
  const emojis = ["😡", "😟", "😐", "😊", "😍"];

  const handleEmojiClick = (emoji) => {
    setFormData({
      ...formData,
      rating: emoji,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handles form submission and posts feedback to the server
  const [submitMessage, setSubmitMessage] = useState(null);

  const renderEmoji = (emoji, index) => {
    const tooltip = (
      <Tooltip id={`emoji-${index}`}>{`Rate as ${emoji}`}</Tooltip>
    );

    return (
      <OverlayTrigger key={index} overlay={tooltip}>
        <span
          className="emoji"
          role="img"
          aria-label={`rate-${emoji}`}
          style={{ cursor: "pointer", fontSize: "36px" }} // Emoji size adjusted previously
          onClick={() => handleEmojiClick(emoji)}
        >
          {emoji}
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
      const data = response.data;
      // Set the  message
      setSubmitMessage(data.message); // Response from PHP script
      if (data.success) {
        // Show success toast
        toast({
          title: "Sucessful",
          description: data.message,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        // Reset form data after toast is displayed
        setFormData({
          rating: 0,
          description: "",
          email: "",
        });
      } else {
        setSubmitMessage(data.message); // Set the error message
        toast({
          title: data.heading,
          description: data.message,
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, show an error message or handle error cases
    }
  };

  return (
    <React.Fragment>
      <section className="section feedback-bg" id="blog">
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

            {/* Updated form design */}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted:", formData);
              }}
              className="mt-4"
              style={{
                maxWidth: "600px",
                margin: "auto",
                background: "rgba(255, 255, 255, 0.9)",
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,.1)",
              }}
            >
              <Form.Group controlId="rating">
                <Form.Label>Rate Us:</Form.Label>
                <div className="emoji-rating text-white">
                  {emojis.map(renderEmoji)}
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
              <Button
                type="submit"
                style={{
                  width: "100%",
                  background: "#007bff",
                  borderColor: "#007bff",
                }}
              >
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Feedback;
