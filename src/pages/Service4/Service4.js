import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";

import Container from "react-bootstrap/Container";
import ContactUs from "../../components/Contact Us/contact-us";

class Service4 extends Component {
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
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service4;
