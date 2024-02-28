import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

const data =
  "At Life is OK Support Services, we're dedicated to providing exceptional NDIS Support Coordination services right here in Darwin, NT, Australia. We believe in making lives better through professional and experienced support. ✨ Why Choose Us?  \n Experienced and Professional Staff: Our team comprises dedicated professionals with years of experience in the disability support sector. We understand the unique needs of our clients and work tirelessly to provide tailored support solutions that empower individuals to live their best lives. Open Communication: Communication is at the heart of what we do. We believe in open and honest dialogue with our clients and their families. It's the key to building trust and ensuring that every aspect of the support journey is as transparent as possible. Breaking Barriers as a Small Provider: As a small provider in Darwin, NT, we face unique challenges. However, these challenges fuel our determination to deliver outstanding services. We're committed to breaking down barriers and ensuring that all NDIS participants receive the support they deserve. 💪 Our Mission: We're on a mission to ensure that individuals with disabilities have access to the best possible support coordination services. We're driven by the belief that everyone's life can be enriched, and we're here to make it happen. If you're a NDIS participant looking for support coordination, or if you have any questions about our services, please don't hesitate to reach out. Let's work together to make life more than just 'OK' – let's make it exceptional!";

function Section() {
  return (
    <React.Fragment>
      <section className="section">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-white text-center">
              <h4 className="home-small-title"></h4>
              <h1 className="home-title">ABOUT US</h1>
              <p className="pt-3 home-desc mx-auto">
                “Life Is OK” aspires to be business role models through cultural
                awareness and person-centric support strategies; we also have
                the vision to uphold our commitment to serving NDIS participants
                with excellence.
              </p>
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
      <div className="about m-3 p-5">{data}</div>
    </React.Fragment>
  );
}

export default Section;
