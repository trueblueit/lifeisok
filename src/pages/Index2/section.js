import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

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
        <section id="home">
          <Container fluid style={{ padding: "0px" }} className="home-slider ">
            <div className="carousel-container ">
              <Carousel indicators={false}>
                <Carousel.Item interval={3000}>
                  <img
                    className="carousel-image"
                    src="assets/images/img-1.png"
                    alt="First slide"
                    display=" block"
                    marginleft="auto"
                    marginright="auto"
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="carousel-image"
                    src="assets/images/img-2.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="carousel-image"
                    src="assets/images/img-4.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
