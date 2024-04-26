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
        <section style={{ position: "relative" }} id="home">
          <Container fluid style={{ padding: "0px" }} className="home-slider ">
            <div className="carousel-container ">
              <Carousel indicators={false} controls={false} pause={false}>
                <Carousel.Item interval={2000}>
                  <img
                    className="carousel-image"
                    src="assets/images/img-1.jpg"
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
          <Container>
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
