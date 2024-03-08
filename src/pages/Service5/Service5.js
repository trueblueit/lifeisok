import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";

import Container from "react-bootstrap/Container";
import ContactUs from "../../components/Contact Us/contact-us";

class Service5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.getElementById("colorTheme").href = "assets/colors/orange.css";
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <NavbarPage />

        {/* Importing Section */}
        <Section />

        <Container className="d-flex align-items-center">
          <p className="value-shadow text-center ">
            We are excellent in providing all home-bound personal and self-care
            support as well as community access supports to assist you in
            visiting family and friends or participating in daily scheduled or
            innovative activities or social events in the community. Your core
            funding section of your NDIS plan enable you to get the core
            outreach support. Supports for you will be available 24 hours a day,
            7 days a week. These supports are currently available in the Greater
            Darwin regions.
          </p>
        </Container>
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service5;
