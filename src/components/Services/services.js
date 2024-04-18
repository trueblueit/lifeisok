import React, { Component } from "react";
import { Container, Row } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";

// Import Service Box
import ServiceBox from "./service-box";
import { services } from "../../data";

class Services extends Component {
  state = {
    services: services,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section-sm " id="services">
          <Container>
            {/* Render section title with custom styles */}
            <h2
              className="section-heading"
              style={{
                textAlign: "center",
                color: "black",
                marginBottom: "20px",
              }}
            >
              Our Services
            </h2>
            <p
              className="text-center"
              style={{ color: "black", marginBottom: "40px" }}
            >
              Explore our tailored support services designed to empower and
              provide excellent care on your journey with Life Is Ok.
            </p>
            <Row className="mt-5">
              {/* Render service box */}
              {this.state.services.map((service, key) => (
                <ServiceBox
                  key={key}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  mylink={service.mylink}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
