import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
  state = {
    services: [
      {
        title: "DAILY ACTIVITIES & IMPROVED LIVING CHOICE",
        icon: "pe-7s-diamond",
        description:
          "Outreach support to the core (home-bound or community place).",
      },
      {
        title: "COMMUNITY ACCESS/ SOCIAL AND PARTICIPATION",
        icon: "pe-7s-display2",
        description:
          "Non-clinical capacity-building services includes social skills, life skills, and support.",
      },
      {
        title: "ACCOMMODATION SUPPORT",
        icon: "pe-7s-piggy",
        description:
          "Funding for Accommodation Supports generally comes from the Core funding section of your NDIS plan..",
      },
      {
        title: "SUPPORTED INDEPENDENT LIVING (SIL)",
        icon: "pe-7s-science",
        description:
          "In our SIL, you will find a safe, comfortable, and supportive living environment.",
      },
      {
        title: "SHORT TERM ACCOMMODATION (STA)",
        icon: "pe-7s-news-paper",
        description:
          "Our STA offers a safe place for you to experience time away from your normal place of residence.",
      },
      {
        title: "MEDIUM TERM ACCOMMODATION (MTA)",
        icon: "pe-7s-plane",
        description:"NDIS participants can stay at our MTA during a transitional period (such as when leaving the hospital or released from Corrections).",
      },
      {
        title: "SUPPORTS IN EMPLOYMENT",
        icon: "pe-7s-arc",
        description:
          "As a registered NDIS provider of Supports in employment supports, we assist participants with employment..",
      },
      {
        title: "SCHOOL LEAVER EMPLOYMENT SUPPORTS (SLES)box",
        icon: "pe-7s-tools",
        description:
          "A SLES is an NDIS support available to students leaving secondary school that helps them on a pathway to employment..",
      },
      {
        title: "Capacity Building Outreach Supports",
        icon: "pe-7s-timer",
        description:
          "Non-clinical services like social skills development, employment support, life skills training, and tenancy support, with a focus on person-centred recovery.",
      },
    ],
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
