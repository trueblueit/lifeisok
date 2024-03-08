import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";

import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import ContactUs from "../../components/Contact Us/contact-us";

import { houses, accordionData } from "../../data";

const RenderAccordionItems = () => {
  return accordionData.map((item, index) => (
    <Accordion.Item key={index} eventKey={index.toString()}>
      <Accordion.Header>{item.title}</Accordion.Header>
      <Accordion.Body>{item.content}</Accordion.Body>
    </Accordion.Item>
  ));
};

class Service3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.getElementById("colorTheme").href = "assets/colors/orange.css";
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <NavbarPage />

        {/* Importing Section */}
        <Section />
        <Row className="mt-5">
          <Col>
            <Accordion defaultActiveKey="0">
              <RenderAccordionItems />
            </Accordion>
          </Col>
          <Col xs={12} md={6}>
            <Carousel fade>
              {houses.map((house, index) => (
                <Carousel.Item key={index}>
                  <Image
                    className="mt-1"
                    src={house.imag}
                    alt={house.name}
                    rounded
                    fluid
                    loading="lazy"
                  />
                  <Carousel.Caption>
                    <h3>{house.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service3;
