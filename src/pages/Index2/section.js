import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import Container from "react-bootstrap/Container";
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
          <Container fluid>
            <Container>
              <Row>
                <p className="animationbox">
                  <Lottie animationData={animationdata}></Lottie>
                </p>
                <p className="animationbox1">
                  <motion.img
                    src="assets/lifeisok/Photo-1.jpg"
                    width="350" /* Ensure it doesn't overflow its container */
                    height="auto"
                    class="rounded-circle"
                    initial={{ y: 0 }} // Initial position at the start of the animation
                    animate={{ y: [0, -30, 0] }} // Sequence of positions to create the bounce effect
                    transition={{
                      duration: 4, // Time in seconds for one bounce
                      ease: "easeInOut", // Type of easing for the animation
                      repeat: Infinity, // Repeat the animation indefinitely
                      repeatType: "reverse", // Makes the animation reverse back to the start, creating a continuous effect
                    }}
                  />
                </p>

                <Col
                  lg={{ size: 8, offset: 2 }}
                  className="text-white text-center"
                >
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
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
