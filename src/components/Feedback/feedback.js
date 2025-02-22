import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Tooltip,
  OverlayTrigger,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    rating: "", // Initialize rating as an empty string
    description: "",
    email: "",
  });
  const toast = useToast();
  // Define emojis for the rating system
  const emojis = ["😍", "😊", "😐", "😟", "😡"];
  const textColor = "black";
  const emojiRatings = { "😡": 1, "😟": 2, "😐": 3, "😊": 4, "😍": 5 };
  // Reverse order of emojis
  const handleEmojiClick = (emoji) => {
    const numericalRating = emojiRatings[emoji]; // Convert emoji to numerical rating
    setFormData({
      ...formData,
      rating: numericalRating,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderEmoji = (emoji, index) => {
    const tooltip = (
      <Tooltip id={`emoji-${index}`}>{`Rate as ${emoji}`}</Tooltip>
    );

    const isSelected = formData.rating === emojiRatings[emoji]; // Check if this numerical rating is selected

    return (
      <OverlayTrigger key={index} overlay={tooltip}>
        <span
          className="emoji"
          role="img"
          aria-label={`rate-${emoji}`}
          style={{
            cursor: "pointer",
            fontSize: "36px",
            backgroundColor: isSelected ? "orange" : "transparent", // Highlight selected emoji
            borderRadius: "50%", // Circular background
            padding: "5px",
            margin: "5px",
          }}
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
      console.log(data);
      if (data.success) {
        toast({
          title: "Success",
          description: data.message,
          status: data.status,
          duration: 3000,
          isClosable: true,
        });
        setFormData({
          rating: "",
          description: "",
          email: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.message,
          status: data.status,
          duration: 3500,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting your feedback.");
    }
  };

  return (
    <section
      className="section-sm "
      id="feedback"
      style={{ backgroundColor: "#fffff2" }}
    >
      <Container fluid>
        <Row>
          <div
            className="mx-auto"
            style={{
              maxWidth: "600px",
              padding: "20px",
              backgroundColor: "#f2f2f2",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,.1)",
              border: " solid",
              borderColor: "#efa27d",
              background: "#f2f2f2",
              borderRadius: "15px",
            }}
          >
            <div className="col-12 text-center">
              <h2
                className="section-heading"
                style={{
                  textAlign: "center",
                  color: textColor,
                  marginBottom: "20px",
                }}
              >
                Rate Our Service
              </h2>
              <p>
                Share your thoughts on our service! Rate your experience with us
                and let us know what you liked. Your feedback is valuable in
                helping us enhance our services.
              </p>
            </div>
            <Form
              onSubmit={handleSubmit}
              style={{ color: "black", fontWeight: "bold" }}
            >
              <Form.Group>
                <Form.Label>Rate Us:</Form.Label>
                <div>{emojis.map(renderEmoji)}</div>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
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
                  placeholder="Write a comment"
                />
              </Form.Group>
              <a
                variant="primary"
                className="btn mybtn"
                onClick={handleSubmit}
                style={{ width: "100%" }}
              >
                Submit
              </a>
            </Form>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
