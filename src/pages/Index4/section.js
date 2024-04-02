import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Container from "react-bootstrap/Container";

function Section() {
  return (
    <React.Fragment>
      <section className="section bg-home home-half">
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
                  Founded by a team of disability professionals with over a
                  decade of experience, Life is Ok is dedicated to improving the
                  quality of life for people with disabilities. Life is OK Pty
                  Ltd aims to build a partnership with NDIS Participants to
                  learn what they want and hope to achieve, then deliver
                  services to meet those needs to feel their life dignified and
                  happy. We aspire to be business role models through cultural
                  awareness and person-centric support ALL SERVICES
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
