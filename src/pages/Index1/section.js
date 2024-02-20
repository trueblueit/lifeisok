import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

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
        <section className="section" id="contact us"> 
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                
                <h1 className="home-title">
                Contact Us
                </h1>
                <p className="pt-3 home-desc mx-auto">
                Get in Touch and Let us Care for you.
                </p>
              </Col>
              {/* Render ModalSection Component for Modal */}
              <ModalSection ref="child" channel="vimeo" videoId="99025203" />
            </Row>
          </Container>

          <div className="white">Home Contact us</div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
