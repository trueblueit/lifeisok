import React, { Component } from "react";
/* Importing Components */
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* Importing Bootstrap */
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/*Importing datas from data.js */
import { accordionData } from "../../data";

const RenderAccordionItems = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };
  return accordionData.map((item, index) => (
    <Accordion.Item key={index} eventKey={index.toString()}>
      <Accordion.Header>{item.title}</Accordion.Header>
      <Accordion.Body>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="align-self-start">
            {item.content}
          </Col>
          <Col xs={12} md={6}>
            <Slider {...sliderSettings}>
              {item.imgSrc.map((src, imgIndex) => (
                <div key={imgIndex} style={{ textAlign: "center" }}>
                  <Image
                    src={src}
                    alt={`${item.name} ${imgIndex + 1}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Accordion.Body>
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
