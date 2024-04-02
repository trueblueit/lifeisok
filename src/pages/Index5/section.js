import React from "react";
import { Container, Row, Col } from "reactstrap";

function Section() {
  return (
    <React.Fragment>
      <section className="section bg-refer refer-half" id="contact us">
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
        <Container>
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
