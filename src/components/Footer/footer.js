import { Component } from "react";
import React from "react";

import { Row, Col } from "reactstrap";

class Footer extends Component {
  state = {
    socials: [
      { icon: "mdi mdi-facebook", link: "#" },
      { icon: "mdi mdi-linkedin", link: "#" },
    ],
  };
  render() {
    return (
      <footer className="footer footerbg">
        <Row>
          <Col>
            <div>
              <img src="assets/lifeisok/NDIS.jpeg" />
            </div>
          </Col>

          <Col className="text-white text-center">
            <h3>Life is Ok</h3>
            <p>
              Founded by a team of professionals to improve the quality of life
              for people with difficulties.
            </p>
          </Col>
          <Col>
            <h3 className="text-white">Follow Us</h3>
            <div className="mt-3">
              <a href="https://www.facebook.com/lifeisok.au/">
                <img src="assets/lifeisok/facebook.png" />
              </a>
              <a href="https://www.linkedin.com/company/life-is-ok/">
                <img className="ms-3" src="assets/lifeisok/linkedin.png" />
              </a>
              <a href="">
                <img className="ms-3" src="assets/lifeisok/instagram.png" />
              </a>
            </div>
          </Col>
        </Row>
        <p className="mt-5 text-center">
          We acknowledge and pay our respects to the traditional custodians of
          this land, their deep cultural heritage, and their vital role in
          shaping our community and country.
        </p>
        <Row>
          <Col>
            <p className="mt-2  text-left">
              &copy; 2024 Life is OK All rights reserved ABN: 32 653 007 713
            </p>
          </Col>
          <Col>
            <p className="mt-2 ms-5 text-center">
              Developed by TRUE BLUE IT SERVICES.
            </p>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
