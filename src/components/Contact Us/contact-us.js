import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <div
                className="text-center"
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <i
                  className="pe-7s-mail icon"
                  style={{ fontSize: "24px", marginBottom: "15px" }}
                ></i>
                <h4>Message Us At</h4>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:admin@lifeisok.info"
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    admin@lifeisok.info
                  </a>
                </p>
              </div>
            </Col>

            <Col lg="6">
              <div
                className="text-center"
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <i
                  className="pe-7s-map icon"
                  style={{ fontSize: "24px", marginBottom: "15px" }}
                ></i>
                <h4>Location</h4>
                <p>
                  Address:{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=48+Trower+Rd,+Millner+NT+0810"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Shop 16 (Rapid Creek Shopping Village) 48 Trower Road,
                    Milner, NT 0810
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
