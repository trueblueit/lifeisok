import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkBox, LinkOverlay, Heading, Text } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <React.Fragment>
      <section
        className="section"
        id="contact"
        style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ marginBottom: "20px" }}>Get In Touch</h2>
            <p>
              We thrive when coming up with innovative ideas but also understand
              that a smart concept should be supported with measurable results.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <LinkBox
                p="4"
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                textAlign="center"
                mb="4"
              >
                <Heading size="md" mb="3">
                  <i
                    className="pe-7s-mail icon me-3"
                    style={{ fontSize: "24px" }}
                  ></i>
                  Message Us At
                </Heading>
                <Text>
                  Email:{" "}
                  <LinkOverlay
                    href="mailto:admin@lifeisok.info"
                    color="blue.500"
                  >
                    admin@lifeisok.info
                  </LinkOverlay>
                </Text>
              </LinkBox>
            </Col>

            <Col lg="6">
              <LinkBox
                p="4"
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                textAlign="center"
                mb="4"
              >
                <Heading size="md" mb="3">
                  Location
                  <i
                    className="pe-7s-map icon ms-3"
                    style={{ fontSize: "24px" }}
                  ></i>
                </Heading>
                <Text>
                  Address:{" "}
                  <LinkOverlay
                    href="https://www.google.com/maps/search/?api=1&query=48+Trower+Rd,+Millner+NT+0810"
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shop 16 (Rapid Creek Shopping Village) 48 Trower Road,
                    Milner, NT 0810
                  </LinkOverlay>
                </Text>
              </LinkBox>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
