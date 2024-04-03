import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

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
        <section className="section bg-support">
          <Container>
            <Row className="mt-auto">
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h1 className="home-title">Our Support Services</h1>
                <h4 className="mx-auto">
                  We offer person-centred, strength-based support services,
                  committed to maintaining excellence throughout your journey
                  with us.
                </h4>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
