import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Service1 extends React.Component {
  render() {
    const cardStyle = {
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      margin: "40px 0",
      padding: "40px",
      backgroundColor: "#f2f2f2",
      border: "none",
    };

    const textStyle = {
      fontSize: "18px", // Bigger font size for main text
      lineHeight: "1.8", // More line spacing for readability
      // Soft color for text, less harsh on the eyes
      textAlign: "justify", // Justify text for a polished look
    };

    const titleStyle = {
      fontWeight: "600",
      fontSize: "30px", // Larger and bolder title for emphasis
      marginBottom: "20px", // More space below the title
    };

    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { x: -20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 120,
        },
      },
    };

    return (
      <React.Fragment>
        <Container style={{ marginTop: "60px", marginBottom: "60px" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="justify-content-center">
              <Col>
                <Card style={cardStyle}>
                  <motion.div variants={itemVariants}>
                    <Card.Title style={titleStyle}>
                      Daily Activities & Improved living Choice
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      Outreach support to the core (home-bound or community
                      place).
                      <br />
                      <br /> We are excellent in providing all home-bound
                      personal and self-care support as well as community access
                      supports to assist you in visiting family and friends or
                      participating in daily scheduled or innovative activities
                      or social events in the community.
                      <br /> <br /> Your core funding section of your NDIS plan
                      back you up for your Core outreach support. Supports for
                      you will be available 24 hours a day, 7 days a week. These
                      supports are currently available in the Greater Darwin
                      regions.
                    </Card.Text>
                    <Link to="/index1" className=" btn mybtn m-3">
                      Enquire Now
                    </Link>
                  </motion.div>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Service1;
