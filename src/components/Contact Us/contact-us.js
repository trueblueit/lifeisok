import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

// Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container fluid>
          <Container>
            <SectionTitle
              title="Get In Touch"
              description="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results."
            />
            <div className="mt-4">
              <Row className="justify-content-center">
                <Col lg="6" className="mb-4 mb-lg-0">
                  <div className="services-box text-center hover-effect">
                    <div className="d-flex">
                      <i className="pe-7s-mail text primary"></i>
                      <div className="ms-4">
                        <h4>Message Us At</h4>
                        <p className="pt-2 text-muted">
                          Email: admin@lifeisok.info{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" className="mb-4 mb-lg-0">
                  <div className="services-box text-center hover-effect">
                    <div className="d-flex">
                      <i className="pe-7s-map text primary"></i>
                      <div className="ms-4">
                        <h4>Location</h4>
                        <p className="pt-2 text-muted">
                          Address: Shop 16 (Rapid Creek Shopping Village) 48
                          Trower Road, Milner, NT 0810 Phone number: 0414787572
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Row className="justify-content-center">
            <Col className="mb-3">
              <Link
                to="/index5"
                className="btn btn-orange d-flex align-items-start mt-3 text-center"
              >
                Referral
              </Link>
            </Col>
            <Col className="mb-3">
              <Link
                to="/index1"
                className="btn btn-orange d-flex align-items-start mt-3 text-center"
              >
                Enquire
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
