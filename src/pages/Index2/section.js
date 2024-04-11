import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

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
            <Container fluid>
              <Row className="justify-content-center align-items-center">
                <Col className="text-center">
                  <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    style={{ color: "#ffffff" }}
                  >
                    Providing best Support for Your Choice
                  </motion.h1>
                  <motion.p
                    className="home-desc"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3 }}
                    style={{ color: "#ffffff" }}
                  >
                    Dedicated to improving the quality of life for people with
                    disabilities. Aims to build a partnership with NDIS
                    Participants to learn what they want to learn and achieve.
                  </motion.p>
                  <a
                    href="/index3"
                    className="btn mybtn mt-4"
                    style={{
                      padding: "10px 30px",
                      borderRadius: "30px",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    Our Services
                  </a>
                </Col>
              </Row>
            </Container>

            <div className="wave-effect wave-anim">
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
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
