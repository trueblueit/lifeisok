import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Navbar_Page from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
import ContactUs from "../../components/Contact Us/contact-us";
import Service1 from "../Service1/Service1";
import Service2 from "../Service2/Service2";
import Service3 from "../Service3/Service3";
import Service4 from "../Service4/Service4";
import Service5 from "../Service5/Service5";
import Service6 from "../Service6/Service6";

import { services } from "../../data";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const renderService = (selected) => {
    switch (selected) {
      case 0:
        return <Service1 />;

      case 1:
        return <Service2 />;

      case 2:
        return <Service3 />;

      case 3:
        return <Service4 />;

      case 4:
        return <Service5 />;

      case 5:
        return <Service6 />;

      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Navbar_Page />
      <Row className="mt-4">
        <Col xs={12} md={4} className="ms-5 mt-5 pt-5">
          <ButtonGroup vertical className="mb-3" aria-label="Basic example">
            {services.map((service, index) => (
              <Button
                key={index}
                onClick={() => setSelectedService(index)}
                variant={
                  index === selectedService ? "primary" : "outline-warning"
                }
                block
                className="mb-2"
              >
                <strong>{service.title}</strong>
              </Button>
            ))}
          </ButtonGroup>
        </Col>

        <Col className="d-flex align-items-top">
          {selectedService !== null && renderService(selectedService)}
        </Col>
      </Row>

      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default Services;
