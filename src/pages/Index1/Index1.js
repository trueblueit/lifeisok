import React, { Component } from "react";
import Section from "./section";
import Contactus from "./contact-us";
import footer from "../../components/Footer/footer";

import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "navbar-white",
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavbarPage navClass={this.state.navClass} />
        <Section />
        <Contactus />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
