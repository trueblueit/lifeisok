import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { servicesDetail, houses, accordionData } from "../../data";

const RenderAccordionItems = () => {
  return accordionData.map((item, index) => (
    <Accordion.Item key={index} eventKey={index.toString()}>
      <Accordion.Header>{item.title}</Accordion.Header>
      <Accordion.Body>{item.content}</Accordion.Body>
    </Accordion.Item>
  ));
};
const Services = () => {
  const services = servicesDetail;

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
                {services.map((service, index) => (
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
                    {services[key].name}
                  </h2>
                  <p className="ml-auto">{services[key].description}</p>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    className="mt-3"
                    src={services[key].imag}
                    alt={services[key].name}
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
