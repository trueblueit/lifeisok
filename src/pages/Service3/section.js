import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar_Page from "../../components/Navbar/NavbarPage";

import Footer from "../../components/Footer/footer";
import ContactUs from "../../components/Contact Us/contact-us";
import Accomadation from "../../components/accomodation/accomodation";

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
        <Navbar_Page />
        <section className="section-sm bg-service3 service-half" id="home">
          <Container>
            <Row className="mt-auto">
              <Col lg={{ size: 8, offset: 2 }} className=" text-center">
                <h1 className="home-title text-white">ACCOMMODATION SUPPORT</h1>
              </Col>
            </Row>
          </Container>
        </section>

        <Accomadation />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Section;
