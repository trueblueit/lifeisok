import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
import Contact from "../../components/Contact Us/contact-us";
import Aboutbody from "./about-body";
import Gallery from "./gallery";
import Section from "./section";
class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Section />
        <Aboutbody />
        <Gallery />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index4;
