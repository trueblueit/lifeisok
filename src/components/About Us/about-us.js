import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

class AboutUs extends Component {
  render() {
    // Dark blue color for text
    return (
      <React.Fragment>
        <section
          className="section"
          id="about"
          style={{ backgroundColor: "#FAFAFA", padding: "80px 0" }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="10">
                <div
                  className="about-card p-5 shadow-sm"
                  style={{
                    border: " solid",
                    borderColor: "#efa27d",
                    background: "#f2f2f2",
                    borderRadius: "15px",
                    textAlign: "center",
                    position: "relative",
                    top: "0",
                    transition: "top ease 0.5s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.top = "-7px")}
                  onMouseLeave={(e) => (e.currentTarget.style.top = "0")}
                >
                  <h2
                    className="section-heading"
                    style={{
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    About Us
                  </h2>

                  <p style={{ marginBottom: "32px" }}>
                    “Life Is OK” aspires to be business role models through
                    cultural awareness and person-centric support strategies; we
                    also have the vision to uphold our commitment to serving
                    NDIS participants with excellence.
                  </p>
                  <a href="/index4" className="btn mybtn mt-4">
                    More About Us
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
