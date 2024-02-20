import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


class WebsiteDescription extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">Join Our Team Today</h2>
                <p className="pt-3 home-desc mx-auto">
                Founded by a team of professionals to improve the quality of life for people with difficulties.
                </p>
                <Link
                  to="/index4"
                  className="btn btn-light mt-5 waves-effect waves-light"
                >
                  Join Us
                </Link>
        
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;
