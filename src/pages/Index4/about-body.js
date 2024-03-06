import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Aboutbody() {
  return (
    <React.Fragment>
      <Container fluid>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" className="order-lg-1 mb-4 mb-lg-0">
              <div className="features-box mt-5 mt-lg-0">
                <h3>About Us</h3>
                <p className="text-muted web-desc home-desc">
                  Life is OK is seeking to provide care support services under
                  the National Disability Insurance Scheme (NDIS) in NT, seeking
                  to deliver services that include:
                </p>

                <ul className="mt-4 features-item-list list-group list-group-flush home-desc">
                  <li className="list-group-item">
                    Assistance with social and community participation
                  </li>
                  <li className="list-group-item">
                    Increased social and community participation
                  </li>
                  <li className="list-group-item">
                    Improve health and wellbeing
                  </li>
                  <li className="list-group-item">Improve daily living</li>
                  <li className="list-group-item">
                    Finding and keeping the job
                  </li>
                  <li className="list-group-item">Improve life choices </li>
                  <li className="list-group-item">
                    Assistance with daily living
                  </li>
                  <li className="list-group-item">School Leavers Employment</li>
                </ul>
              </div>
              <Link to="/index3" className="btn btn-orange m-3">
                Our Services
              </Link>
            </Col>
            <Col lg="7">
              <div className="features-img mx-auto text-center">
                <img
                  src="assets/lifeisok/img2.png"
                  className="img-fluid"
                  alt="About Us"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Aboutbody;
