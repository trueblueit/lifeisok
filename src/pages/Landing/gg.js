import React, { Component } from "react";
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
        <section
          style={{ height: "800px", paddingTop: "0px", position: "relative" }}
          className="section home-section"
          id="home"
        >
          <div className="carousel-container">
            <Carousel indicators={false}>
              <Carousel.Item interval={3000}>
                <img
                  className="carousel-image"
                  src="assets/images/img-1.png"
                  alt="First slide"
                />
                <a
                  href="/index3"
                  className="btn mybtn  pb-3"
                  style={{
                    borderRadius: "30px",
                    position: "absolute",
                    left: "15%",
                    bottom: "200px",
                    zIndex: "10",
                  }}
                >
                  Our Services
                </a>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image"
                  src="assets/images/img-2.png"
                  alt="Second slide"
                />
                <a
                  href="/index3"
                  className="btn mybtn  pb-3"
                  style={{
                    borderRadius: "30px",
                    position: "absolute",
                    left: "15%",
                    bottom: "200px",
                    zIndex: "10",
                  }}
                >
                  Our Services
                </a>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image"
                  src="assets/images/img-4.png"
                  alt="Third slide"
                />
                <a
                  href="/index3"
                  className="btn mybtn  pb-3"
                  style={{
                    borderRadius: "30px",
                    position: "absolute",
                    left: "15%",
                    bottom: "200px",
                    zIndex: "10",
                  }}
                >
                  Our Services
                </a>
              </Carousel.Item>
            </Carousel>
          </div>
          <Container fluid>
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
