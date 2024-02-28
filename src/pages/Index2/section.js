import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Image from "react-bootstrap/Image";

import Lottie from "lottie-react";
import animationdata from "../../animation/Animation - 1708004346894.json";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-home home-half" id="home">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <p className="animationbox">
                <Lottie animationData={animationdata}></Lottie>
              </p>
              <p className="animationbox1">
                <Image
                  src="assets/lifeisok/Photo-1.jpg"
                  height={350}
                  width={350}
                  roundedCircle
                />
              </p>

              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h4 className="home-small-title"></h4>
                <h1 className="home-title">
                  Providing best Support for Your Choice
                </h1>
                <p className="pt-3 home-desc mx-auto">
                  Dedicated to improving the quality of life for people with
                  disabilites. Aims to build a partnership with NDIS
                  Participants to learn what they want to learn and achieve.
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
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
