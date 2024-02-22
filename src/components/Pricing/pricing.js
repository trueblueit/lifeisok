import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import Accordion from 'react-bootstrap/Accordion';

//Import Section Title
import SectionTitle from "../common/section-title";
const house1 = "Location: Heart of Darwin City \n3 bedroom Modal \n2 Bathroom \n2 Car Park Space";
const house = "Location: Stuart Park \n2 bedroom Modal \n1 Bathroom \n1 Car Park Space\nNote:- No Pet allowed";
class Pricing extends Component {
 
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Accomodation"
              description="Available for Independent Living, Short & Medium-Term Accommodation"
            />

            <Row className="mt-5">
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>luxury House 1</Accordion.Header>
        <Accordion.Body>
        <pre>{house1}</pre>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Simple Houes</Accordion.Header>
        <Accordion.Body>
        <pre>{house}</pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
             
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
