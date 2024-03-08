import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Footer from "../../components/Footer/footer";

import Container from "react-bootstrap/Container";
import ContactUs from "../../components/Contact Us/contact-us";

class Service2 extends Component {
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
            Our wide range of non-clinical capacity-building services includes
            social skills, employment, life skills, and tenancy support. As part
            of our person-centered recovery approach, we also provide life
            transition planning, mentoring, and peer support. These supports for
            you are available 7 days a week
          </p>
        </Container>
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service2;
