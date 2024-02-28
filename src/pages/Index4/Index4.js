import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col } from "reactstrap";

import Section from "./section";

class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Section />
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <div className="about-title mx-auto text-center">
                <h2 className="font-weight-light">About Us </h2>
                <p className="text-muted pt-4">
                  “Life Is OK” aspires to be business role models through
                  cultural awareness and person-centric support strategies; we
                  also have the vision to uphold our commitment to serving NDIS
                  participants with excellence.
                </p>
                <div></div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Importing Get Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index4;
