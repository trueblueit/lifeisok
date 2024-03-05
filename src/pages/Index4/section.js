import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Container from "react-bootstrap/Container";

function Section() {
  return (
    <React.Fragment>
      <section className="section bg-home h-75">
        <div className="bg-overlay"></div>
        <Container>
          <Container>
            <Row className="mt-auto">
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h1 className="home-title">About Us</h1>
                <p className="pt-3 home-desc mx-auto">
                  “Life Is OK” aspires to be business role models through
                  cultural awareness and person-centric support strategies; we
                  also have the vision to uphold our commitment to serving NDIS
                  participants with excellence.
                </p>
              </Col>
            </Row>
          </Container>
          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div
                className="wave wave-one"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave1.png)`,
                }}
              ></div>
            </div>
            <div className="waves-shape shape-two">
              <div
                className="wave wave-two"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave2.png)`,
                }}
              ></div>
            </div>
            <div className="waves-shape shape-three">
              <div
                className="wave wave-three"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave3.png)`,
                }}
              ></div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Section;
