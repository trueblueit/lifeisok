import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";
import { services } from "../../data";
class Services extends Component {
  state = {
    services: services,
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Services"
              description="The Support services Life Is Ok offer, are person-centred, strength-based, and determined to be excellent
              throughout your journey with us."
            />

            <Row className="mt-5">
              {/* render service box */}
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
