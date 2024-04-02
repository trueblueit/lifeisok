import React, { Component } from "react";
/* Importing Components */
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";
/* Importing Bootstrap */
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import ContactUs from "../../components/Contact Us/contact-us";

/*Importing datas from data.js */
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
        <Accordion defaultActiveKey="0">
          <RenderAccordionItems />
        </Accordion>
      </React.Fragment>
    );
  }
}

export default Service3;
