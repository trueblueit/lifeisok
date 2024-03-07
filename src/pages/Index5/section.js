import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../components/Footer/footer";

function Section() {
  return (
    <React.Fragment>
      <section className="section bg-refer home-half" id="contact us">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-white text-center">
              <h1 className="home-title">Referral</h1>
              <p className="pt-3 home-desc mx-auto">
                Get in Touch and Let us Care for you.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Section;
