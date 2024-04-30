import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
import Contact from "../../components/Contact Us/contact-us";
import Aboutbody from "./about-body";
import Gallery from "./gallery";
import Topsection from "../../components/common_section/topsection";
class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Topsection
          mycss={"section bg-about refer-half mt-5"}
          text={"About Us"}
        />
        <Aboutbody />
        <Gallery />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index4;
