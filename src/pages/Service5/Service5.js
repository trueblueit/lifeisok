import React from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ContactUs from "../../components/Contact Us/contact-us";
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
      border: "none",
    };

    const textStyle = {
      fontSize: "18px", // Bigger font size for main text
      lineHeight: "1.8", // More line spacing for readability
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
              <Col lg={10} xl={8}>
                <Card style={cardStyle}>
                  <motion.div variants={itemVariants}>
                    <Card.Title style={titleStyle}>
                      Supported Independent Living (SIL)
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      In our SIL, you will find a safe, comfortable, and
                      supportive living environment, where all your everyday
                      needs will be met. You will receive person-centred care
                      from our SIL team; they will assist you in planning your
                      recovery journey, strengthening you to build your
                      independence, and reaching your goals.
                      <br />
                      <br /> Our long-term basis SIL services are available in
                      Palmerston and in Darwin.
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
