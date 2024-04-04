import React from "react";
import { Row, Col } from "reactstrap";
import Container from "react-bootstrap/Container";

function Section() {
  return (
    <React.Fragment>
      <section className="section bg-about">
        <Row className="mt-auto">
          <Col lg={{ size: 8 }} className="text-white">
            <h1 className="home-title">About Us</h1>
            <p className="mx-auto">
              Founded by a team of disability professionals with over a decade
              of experience, Life is Ok is dedicated to improving the quality of
              life for <br /> people with disabilities. Life is OK Pty Ltd aims
              to build a partnership with NDIS Participants to learn what they
              want and hope to
              <br /> achieve, then deliver services to meet those needs to feel
              their life dignified and happy. We aspire to be business role
              models
              <br /> through cultural awareness and person-centric support ALL
              SERVICES
            </p>
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
}

export default Section;
