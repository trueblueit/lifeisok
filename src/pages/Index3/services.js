import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Accordion from "react-bootstrap/Accordion";

import { Row, Col } from "reactstrap";

const Services = () => {
  const teamMembers = [
    {
      name: "Core Outreach Support",
      description:
        " We are excellent in providing all home-bound personal and self-care support as well as community access supports to assist you in visiting family and friends or participating in daily scheduled or innovative activities or social events in the community. Your core funding section of your NDIS plan enable you to get the core outreach support. Supports for you will be available 24 hours a day, 7 days a week. These supports are currently available in the Greater Darwin regions.",
      imag: "assets/lifeisok/supports.jpg",
    },
    {
      name: "Capacity Building Outreach Supports",
      description:
        "Our wide range of non-clinical capacity-building services includes social skills, employment, life skills, and tenancy support. As part of our person-centered recovery approach, we also provide life transition planning, mentoring, and peer support. These supports for you are available 7 days a weekCreative designer with a keen eye for detail.",
      imag: "assets/lifeisok/sil.jpg",
    },
    {
      name: "",
      description: "",
    },
    {
      name: "Support Coordination",
      description:
        "We’re dedicated to providing exceptional NDIS Support Coordination services in Darwin, NT, Australia. Our experienced and professional team believes in open communication and breaking barriers as a small provider. We’re on a mission to enrich lives, and we’re here to make it happen.",
      imag: "assets/lifeisok/daily.jpg",
    },
    {
      name: "Supports in Employment",
      description:
        "As a registered NDIS provider of Supports in employment, we offer a comprehensive range of services to assist participants in their employment journey. This includes providing support beyond the requirements of traditional employment services and employers, ensuring that participants receive the necessary assistance for success. Our services cover a spectrum of needs, including personal care, transportation assistance, assistive technology, and more, tailored to each participant's specific requirements irrespective of the activity they are engaged in. Additionally, we actively engage in building relationships with mainstream providers and the local community to enhance our understanding of the employment needs of people with disabilities. Funding for our employment support services is allocated in the Core budget of a participant’s NDIS plan under the support category 'Assistance with Social Economic and Community Participation.' Moreover, we provide capacity-building employment supports, such as employment-related assessments and counseling, workplace assistance, and School Leaver Employment Supports (SLES). Our commitment is to contribute to the overall well-being and inclusivity of individuals with disabilities in the workforce.",
      imag: "assets/lifeisok/mta.jpg",
    },
  ];
  const [key, setCount] = useState(0);
  const handleKey = (number) => {
    setCount(number);
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <div id="list-example" class="list-group ">
            <ButtonGroup vertical aria-label="Basic example">
              <Button onClick={() => handleKey(0)} variant="secondary">
                Core Outreach Support
              </Button>
              <Button onClick={() => handleKey(1)} variant="secondary">
                Capacity Building Outreach Supports
              </Button>
              <Button onClick={() => handleKey(2)} variant="secondary">
                Accommodation Supports
              </Button>
              <Button onClick={() => handleKey(3)} variant="secondary">
                Support Coordination
              </Button>
              <Button onClick={() => handleKey(4)} variant="secondary">
                Supports in Employment
              </Button>
            </ButtonGroup>
          </div>
        </Col>

        <Col lg={{ size: 8, offset: 2 }}>
          {key !== 2 && (
            <div>
              <h2 className="mx-auto text-success text-center">
                {teamMembers[key].name}
              </h2>
              <h4 className="ml-auto">{teamMembers[key].description}</h4>
              <img src={teamMembers[key].imag} height={350} width={350} />
            </div>
          )}
          {key === 2 && (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Supported independent living{" "}
                </Accordion.Header>
                <Accordion.Body>
                  In our SIL, you’ll enjoy a safe, comfortable, and supportive
                  living environment where your daily needs are met. Our
                  dedicated SIL team provides person-centered care to help plan
                  your recovery journey, build independence, and achieve your
                  goals. Long-term SIL services are offered in Palmerston and
                  Darwin.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Short term accommodation</Accordion.Header>
                <Accordion.Body>
                  Our Short-Term Accommodation (STA) provides a safe haven away
                  from your usual residence. During your stay, we offer
                  personalized support that covers appointments, social outings,
                  family visits, daily living, self-care, and planning for
                  psychosocial recovery and NDIS. STA is available for up to 14
                  days at shared residential sites in Darwin.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Medium term accommodation (MTA)
                </Accordion.Header>
                <Accordion.Body>
                  NDIS participants can stay at our MTA during a transitional
                  period (such as when leaving the hospital or released from
                  Corrections). Throughout your recovery journey, our
                  residential staff will provide you with support and guidance
                  so that you can move into more permanent accommodations and
                  support your psychosocial recovery goal. For a period of up to
                  90 days, we provide MTA at shared residential locations
                  throughout Darwin.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Services;
