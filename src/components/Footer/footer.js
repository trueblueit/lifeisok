import { Component } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

class Footer extends Component {
  state = {
    socials: [
      {
        name: "Facebook",
        icon: "assets/lifeisok/facebook.png",
        link: "https://www.facebook.com/lifeisok.au/",
      },
      {
        name: "LinkedIn",
        icon: "assets/lifeisok/linkedin.png",
        link: "https://www.linkedin.com/company/life-is-ok/",
      },
    ],
  };

  render() {
    return (
      <>
        <footer className="footer pt-5">
          <div className="ft-overlay"></div>
          <div style={{ width: "85%", margin: "0 auto" }}>
            <Row className=" justify-content-center">
              <Col xs={12} md={4} lg={4} className=" mt-4 mt-md-0">
                <div className="d-flex flex-column align-items-start">
                  <h3> Our Mission</h3>
                  <p>
                    At Life is OK, we partner with NDIS to provide
                    person-centric services that promote well-being, cultural
                    awareness, and inclusivity.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <div className="useful-links">
                  <h3 className="useful-links">Useful Links</h3>
                  <ul className="useful-links">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/index4">About Us</a>
                    </li>
                    <li>
                      <a href="/index3">Services</a>
                    </li>
                    <li>
                      <a href="/#features">Features</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xs={12} md={4} lg={4} className="follow-us-column">
                <h3 className="follow-us-header">Follow Us</h3>
                <div className="follow-us-socials">
                  {this.state.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="follow-us-link"
                    >
                      <img
                        className="follow-us-icon"
                        src={social.icon}
                        alt={`Social Icon ${index}`}
                      />
                      <p className="follow-us-name">{social.name}</p>
                    </a>
                  ))}
                </div>
              </Col>
            </Row>

            <hr className="mt-5" style={{ borderWidth: "8px" }} />
            <Row>
              <Col xs={12} md={9} lg={9}>
                <Row className="text-start text-white text-md-center">
                  <Col xs={12} md={4} lg={4}>
                    &copy; 2024 Life is OK All rights reserved
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    ABN: 32 653 007 713.
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    Developed by True Blue It
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={3} lg={3}>
                <img
                  src="assets/lifeisok/NDIS.png"
                  alt="Feature Representation"
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                    float: "right",
                  }}
                />
              </Col>
            </Row>
          </div>
        </footer>
        <div className="bg-dark py-4">
          <Row style={{ width: "80%", margin: "0 auto" }}>
            <Col xs={12} md={3} lg={3}>
              <Row className="justify-content-end">
                <img
                  src="assets/lifeisok/flag1.png"
                  alt="Feature Representation"
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                  }}
                />

                <img
                  className="ms-3 me-5"
                  src="assets/lifeisok/flag2.png"
                  alt="Feature Representation"
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                  }}
                />
              </Row>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <p className="text-white">
                Life is OK acknowledge and pay our respects to the traditional
                custodians of this land, their deep cultural heritage, and their
                vital role in shaping our community and country.
              </p>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Footer;
