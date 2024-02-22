import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormFeedback,
  Form,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  return (
    <React.Fragment>
      <section className="section " id="contact">
        <Container>
          {/* Render section title */}
          <SectionTitle
            title="Get In Touch"
            description="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results."
          />
          <div className="">
            <Col lg="4" className="mt-4">
              <div className="services-box text-center hover-effect ">
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
            <Col lg="4" className="mt-4">
              <div className="services-box text-center hover-effect ">
                <div className="d-flex">
                  <i className="pe-7s-map text primary"></i>
                  <div className="ms-4">
                    <h4>Location</h4>
                    <p className="pt-2 text-muted">
                      Address: Shop 16 (Rapid Creek Shopping Village) 48 Trower
                      Road, Milner, NT 0810 Phone number: 0414787572
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <Link
            to="/index1"
            className="btn btn-light ml-50 waves-effect waves-light"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
