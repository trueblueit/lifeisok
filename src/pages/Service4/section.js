import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

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
        <section className="section bg-home h-75" id="home">
          <div className="bg-overlay"></div>
          <Container>
            <Row className="mt-auto">
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h1 className="home-title">Support Coordination</h1>
              </Col>
            </Row>
          </Container>

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
        </section>

        <Container fluid>
          <div className="service4-bg"></div>

          <div className="align-items-center mt-5 ">
            <div className="features-box mt-5 mt-lg-0">
              <h3 className="text-center">What is a Support Coordination?</h3>
              <p className="text-muted home-desc">
                Support coordination helps you to make the best use of your
                supports in plan. Support coordination is a capacity building
                support which helps you to:
              </p>
              <ul className="text-muted list-unstyled mt-4 features-item-list home-desc">
                <li className="">
                  Understand and use you NDIS plan to pursue your goals
                </li>
                <li className="">
                  Connect you with NDIS providers, community, mainstream and
                  other government services
                </li>
                <li className="">
                  Build your confidence and skills to use and coordinate your
                  supports.
                </li>
              </ul>
              <br />
            </div>

            <h1 className="text-center">
              Specialised Support Coordination Services
            </h1>

            <p className="text-muted home-desc">
              Specialist support coordination is a higher level of Support. The
              focus is on reducing complexity in the participant’s support
              environment and helping the participant overcome immediate and/or
              significant barriers in plan implementation.
            </p>
            <ul className="text-black mt-4 features-item-list home-desc">
              <li>
                <strong>Cultural Understanding: </strong>We deeply respect and
                appreciate the cultural heritage of our Aboriginal clients. Our
                team is trained to understand the unique needs and preferences
                within this community, ensuring that our support is respectful,
                sensitive, and aligned with cultural values.
              </li>
              <br />
              <li>
                <strong>Community Connection: </strong>Being an integral part of
                the Darwin community, we have established strong connections and
                partnerships. We can connect you with culturally appropriate
                support networks and services that can enhance your NDIS
                experience.
              </li>
              <br />
              <li>
                <strong>Individualised Guidance: </strong>Our Support
                Coordinators work closely with you to understand your specific
                needs, goals, and aspirations. We tailor our support to ensure
                it aligns with your cultural background, preferences, and
                circumstances.
              </li>
              <br />
              <li>
                <strong>Advocacy and Empowerment: </strong>We advocate for your
                rights and choices within the NDIS framework. Our aim is to
                empower you to make informed decisions, assisting you in
                navigating the NDIS process while upholding your cultural
                identity.
              </li>
              <br />
              <li>
                <strong>Transparent Communication : </strong>Our Support We
                believe in open and clear communication. Our team ensures that
                you are well-informed about your options, the services
                available, and how they can benefit you. We encourage dialogue,
                questions, and active participation in your NDIS journey.
              </li>
            </ul>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Section;
