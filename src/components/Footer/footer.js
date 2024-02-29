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
      <footer className="footer">
        <Row>
          <div>
            <img src="assets/lifeisok/NDIS.jpeg" />
          </div>
        </Row>
        <Row>
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
        </Row>
        <p className="mt-5 mb-0">
          &copy; 2024 Life Iis Ok. All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
