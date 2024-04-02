import React from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ContactUs from "../../components/Contact Us/contact-us";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Service2 extends React.Component {
  render() {
    const cardStyle = {
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      borderRadius: "15px",
      margin: "40px 0",
      padding: "40px",
      backgroundColor: "#fff",
      border: "none",
    };

    const textStyle = {
      fontSize: "18px", // Bigger font size for main text
      lineHeight: "1.8", // More line spacing for readability
      color: "#4a4a4a", // Soft color for text, less harsh on the eyes
      textAlign: "justify", // Justify text for a polished look
    };

    const titleStyle = {
      fontWeight: "600",
      fontSize: "30px", // Larger and bolder title for emphasis
      marginBottom: "20px", // More space below the title
      color: "#FFA500", // A color that stands out
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
                      Assistance with Social and Community Participation
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      Our wide range of non-clinical capacity-building services
                      includes social skills, employment, life skills, and
                      tenancy support.
                      <br /> As part of our person-centered recovery approach,
                      we also provide life transition planning, mentoring, and
                      peer support. These supports for you are available 7 days
                      a week Your NDIS plan may include the following funding
                      sections for capacity-building support:
                      <br />
                      <p>→ Improved living arrangement</p>
                      <p>→ Increased social and community participation</p>
                      <p>→ Finding and keeping a job</p>
                      <p>→ Improved relationships</p>
                      <p>→ Improved daily living skills</p>
                    </Card.Text>
                    <Link to="/index1" className="btn btn-orange m-3">
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

export default Service2;
