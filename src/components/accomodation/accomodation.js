import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import { house1, house, houses } from "../../data";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

// Import Section Title
import SectionTitle from "../common/section-title";

class Accomodation extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="accomodation">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Accommodation"
              description="Available for Independent Living, Short & Medium-Term Accommodation"
            />

            <Row className="mt-5">
              <Col xs={12} md={6}>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>luxury House 1</Accordion.Header>
                    <Accordion.Body>
                      <pre>{house1}</pre>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Simple House</Accordion.Header>
                    <Accordion.Body>
                      <pre>{house}</pre>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={12} md={6}>
                <Carousel fade>
                  {houses.map((house, index) => (
                    <Carousel.Item key={index}>
                      <Image
                        className="mt-3"
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
            <Link
              to="/index3"
              className="btn class mt-5"
              style={{ background: "#ff6900" }}
            >
              Read More
            </Link>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Accomodation;
