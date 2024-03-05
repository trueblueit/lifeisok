import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <div className="about-title text-center">
                  <h2 className="font-weight-light">About Us </h2>
                  <p className="text-muted pt-4">
                    “Life Is OK” aspires to be business role models through
                    cultural awareness and person-centric support strategies; we
                    also have the vision to uphold our commitment to serving
                    NDIS participants with excellence.
                  </p>
                  <Link
                    to="/index4"
                    className="btn btn-orange mt-5 waves-effect waves-light"
                  >
                    More About Us
                  </Link>
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
