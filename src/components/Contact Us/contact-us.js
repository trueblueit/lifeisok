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
            <Col lg="6" md="12" className="mb-4 mb-lg-0">
              <LinkBox
                p="4"
                bg="#f2f2f2"
                boxShadow="md"
                textAlign="center"
                mb="4"
                height={{ base: "auto", lg: "150px" }}
                border="solid"
                borderColor="#efa27d"
                background="#f2f2f2"
                borderRadius="15px"
                className="mb-3"
              >
                <Heading>
                  <i
                    className="fa fa-envelope
                    icon me-3 mb-3"
                    style={{ fontSize: "38px" }}
                  ></i>
                  Message Us At
                </Heading>

                <LinkOverlay href="mailto:admin@lifeisok.info">
                  <p style={{ color: "#fb5607" }}>admin@lifeisok.info</p>
                </LinkOverlay>
              </LinkBox>
            </Col>

            <Col lg="6" md="12">
              <LinkBox
                p="4"
                bg="#f2f2f2"
                boxShadow="md"
                textAlign="center"
                mb="4"
                height={{ base: "auto", lg: "150px" }}
                border="solid"
                borderColor="#efa27d"
                background="#f2f2f2"
                borderRadius="15px"
                className="mb-3"
              >
                <Heading>
                  <i
                    className="fa fa-map icon me-3 mb-3"
                    style={{ fontSize: "38px" }}
                  ></i>
                  Location
                </Heading>

                <LinkOverlay
                  href="https://www.google.com/maps/search/?api=1&query=48+Trower+Rd,+Millner+NT+0810"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p style={{ color: "#fb5607" }}>
                    Shop 16 (Rapid Creek Shopping Village) 48 Trower Road,
                    Milner, NT 0810
                  </p>
                </LinkOverlay>
              </LinkBox>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
