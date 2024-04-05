import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

function Section() {
  return (
    <Container fluid className="section bg-about pt-5 p-0">
      <Row className="align-items-center mt-5 mx-0">
        <Col lg={7} className="text-white p-5">
          <h1 className="home-title">About Us</h1>
          <p>
            Founded by a team of disability professionals with over a decade of
            experience, Life is Ok is dedicated to improving the quality of life
            for people with disabilities. Life is OK Pty Ltd aims to build a
            partnership with NDIS Participants to learn what they want and hope
            to achieve, then deliver services to meet those needs to feel their
            life dignified and happy. We aspire to be business role models
            through cultural awareness and person-centric support ALL SERVICES
          </p>
        </Col>
        <Col lg={5} className="p-0">
          <Image
            src="assets/lifeisok/img2.png"
            fluid
            className="mx-auto d-block"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Section;
