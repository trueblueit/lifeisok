import React from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ContactUs from "../../components/Contact Us/contact-us";
import { motion } from "framer-motion";

class Service4 extends React.Component {
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
        <NavbarPage />
        <Section />

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
                      Support Coordination
                    </Card.Title>
                    <Card.Text style={textStyle}>
                      <Container fluid>
                        <div className="align-items-center mt-5 ">
                          <div className="features-box mt-5 mt-lg-0">
                            <p className="text-muted home-desc">
                              Support coordination helps you to make the best
                              use of your supports in plan. Support coordination
                              is a capacity building support which helps you to:
                            </p>
                            <ul className="text-muted list-unstyled mt-4 features-item-list home-desc">
                              <li className="">
                                Understand and use you NDIS plan to pursue your
                                goals
                              </li>
                              <li className="">
                                Connect you with NDIS providers, community,
                                mainstream and other government services
                              </li>
                              <li className="">
                                Build your confidence and skills to use and
                                coordinate your supports.
                              </li>
                            </ul>
                            <br />
                          </div>

                          <h1 className="text-center">
                            Specialised Support Coordination Services
                          </h1>

                          <p className="text-muted home-desc">
                            Specialist support coordination is a higher level of
                            Support. The focus is on reducing complexity in the
                            participant’s support environment and helping the
                            participant overcome immediate and/or significant
                            barriers in plan implementation.
                          </p>
                          <ul className="text-black mt-4 features-item-list home-desc">
                            <li>
                              <strong>Cultural Understanding: </strong>We deeply
                              respect and appreciate the cultural heritage of
                              our Aboriginal clients. Our team is trained to
                              understand the unique needs and preferences within
                              this community, ensuring that our support is
                              respectful, sensitive, and aligned with cultural
                              values.
                            </li>
                            <br />
                            <li>
                              <strong>Community Connection: </strong>Being an
                              integral part of the Darwin community, we have
                              established strong connections and partnerships.
                              We can connect you with culturally appropriate
                              support networks and services that can enhance
                              your NDIS experience.
                            </li>
                            <br />
                            <li>
                              <strong>Individualised Guidance: </strong>Our
                              Support Coordinators work closely with you to
                              understand your specific needs, goals, and
                              aspirations. We tailor our support to ensure it
                              aligns with your cultural background, preferences,
                              and circumstances.
                            </li>
                            <br />
                            <li>
                              <strong>Advocacy and Empowerment: </strong>We
                              advocate for your rights and choices within the
                              NDIS framework. Our aim is to empower you to make
                              informed decisions, assisting you in navigating
                              the NDIS process while upholding your cultural
                              identity.
                            </li>
                            <br />
                            <li>
                              <strong>Transparent Communication : </strong>Our
                              Support We believe in open and clear
                              communication. Our team ensures that you are
                              well-informed about your options, the services
                              available, and how they can benefit you. We
                              encourage dialogue, questions, and active
                              participation in your NDIS journey.
                            </li>
                          </ul>
                        </div>
                      </Container>
                    </Card.Text>
                  </motion.div>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Container>

        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service4;
