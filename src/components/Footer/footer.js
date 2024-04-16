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
      { name: "Instagram", icon: "assets/lifeisok/instagram.png", link: "#" },
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
                  <h3>Life is Ok</h3>
                  <p>
                    Founded by a team of professionals to improve the quality of
                    life for people with difficulties.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <div className="useful-links text-center">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/#about">About Us</a>
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

              <Col
                xs={12}
                md={4}
                lg={4}
                className="d-flex flex-column align-items-end mt-4 mt-md-0 pe-5"
              >
                <h3 className=" text-justify text-left">Follow Us</h3>
                <div className="d-flex flex-column align-items-start">
                  {this.state.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="d-flex align-items-center"
                    >
                      <img
                        className="me-3 mb-3 "
                        src={social.icon}
                        alt={`Social Icon ${index}`}
                        style={{ maxWidth: "32px", height: "auto" }}
                      />
                      <p>{social.name}</p>
                    </a>
                  ))}
                </div>
              </Col>
            </Row>

            <hr className="mt-5" style={{ borderWidth: "8px" }} />
            <Row>
              <Col xs={12} md={8} lg={8} className="text-start text-md-center">
                <p style={{ color: "black", fontSize: "18px", float: "left" }}>
                  &copy; 2024 Life is OK All rights reserved
                  <span className="ms-5">ABN: 32 653 007 713.</span>
                  <span className="ms-5">Developed by True Blue It</span>
                </p>
              </Col>
              <Col xs={12} md={4} lg={4}>
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
