import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Lottie from "lottie-react";
import animationdata from "../../animation/Animation - bg.json";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container fluid>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h3>Why Life Is Ok?</h3>
                  <p className="text-muted home-desc">
                    At Life is OK, we partner with NDIS to provide
                    person-centric services that promote well-being, cultural
                    awareness, and inclusivity.
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list home-desc">
                    <li className="">
                      Cultural Sensitivity: Experienced worker with exceptional
                      cultural awareness
                    </li>
                    <li className="">
                      Life Dignification: Ability to dignify your life and to
                      make you feel your life is o
                    </li>
                    <li className="">
                      Expert Consultation: Free consultation session with our
                      experienced team
                    </li>
                    <li className="">
                      Team Integrity: Our policies ensure our team treat you
                      with fairness, respect, and honesty
                    </li>
                    <li className="">
                      Choice Empowerment: You have the choice and control,
                      always
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
                <div className="features-img mx-auto me-lg-0">
                  <img
                    src="assets/lifeisok/img1.jpeg"
                    alt="macbook"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <p className="animationboxbg">
            <Lottie animationData={animationdata}></Lottie>
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
