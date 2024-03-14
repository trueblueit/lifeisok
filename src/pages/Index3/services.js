import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { services, servicesDetail, houses, accordionData } from "../../data";

import { Link } from "react-router-dom";

const RenderAccordionItems = () => {
  return accordionData.map((item, index) => (
    <Accordion.Item key={index} eventKey={index.toString()}>
      <Accordion.Header>{item.title}</Accordion.Header>
      <Accordion.Body>{item.content}</Accordion.Body>
    </Accordion.Item>
  ));
};
const Services = () => {
  const [key, setCount] = useState(0);
  const handleKey = (number) => {
    setCount(number);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <Container fluid>
          <Row>
            <div id="list-example" class="list-group mt-5 mb-5">
              <ButtonGroup
                aria-label="Basic example"
                vertical
                className="d-md-flex flex-md-row"
              >
                {servicesDetail.map((service, index) => (
                  <Button
                    key={index}
                    variant={key === index ? "primary" : "secondary"}
                    onClick={() => handleKey(index)}
                  >
                    {service.name}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </Row>

          <Row className="mb-5">
            {key !== 2 && (
              <>
                <Col>
                  <h2 className="mx-auto text-success text-center">
                    {servicesDetail[key].name}
                  </h2>
                  <p className="ml-auto">{servicesDetail[key].description}</p>
                  <Link
                    to={services[key].mylink}
                    className="btn class mt-5"
                    style={{ background: "#ff6900" }}
                  >
                    Read More
                  </Link>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    className="mt-3"
                    src={servicesDetail[key].imag}
                    alt={servicesDetail[key].name}
                    rounded
                    fluid
                  />
                </Col>
              </>
            )}
            {key === 2 && (
              <>
                <Col>
                  <Accordion defaultActiveKey="0">
                    <RenderAccordionItems />
                  </Accordion>
                  <Link
                    to={services[key].mylink}
                    className="btn class mt-5"
                    style={{ background: "#ff6900" }}
                  >
                    Read More
                  </Link>
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
              </>
            )}
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Services;
