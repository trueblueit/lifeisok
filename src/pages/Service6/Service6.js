import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Service5 extends React.Component {
  render() {
    const cardStyle = {
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      margin: "40px 0",
      padding: "40px",
      backgroundColor: "#f2f2f2",
      border: " solid",
      borderColor: "#efa27d",
      background: "#f2f2f2",
      borderRadius: "15px",
    };

    const textStyle = {
      fontSize: "18px !important", // Bigger font size for main text
      lineHeight: "1.8", // More line spacing for readability
      textAlign: "left", // Justify text for a polished look
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
              <Col lg={10} xl={8}>
                <Card style={cardStyle}>
                  <motion.div variants={itemVariants}>
                    <Card.Title style={titleStyle}>
                      {" "}
                      School Leaver Employment Supports(SLES)
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      Life Is OK provides School Leaver Employment Support
                      (SLES) in NT Australia. A SLES is an NDIS support
                      available to students leaving secondary school that helps
                      them on a pathway to employment.
                      <br />
                      <br /> SELS and other individual and group based supports
                      to achieve your employment goals.
                      <br />
                      Supports can help you learn more about your work skills
                      and develop your confidence to begin job seeking. For
                      example, you might like to ‘try and test’ work, with
                      supports in place, to identify your work skills, learn how
                      to communicate with others at work, or better understand
                      what an employer might expect from you.
                      <br />
                      <br />
                      You might also like to become more independent at work or
                      progress your career goals.
                    </Card.Text>
                    <Link to="/index1" className="btn mybtn">
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

export default Service5;
