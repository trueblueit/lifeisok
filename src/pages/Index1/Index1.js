import React, { Component } from "react";
import Topsection from "../../components/common_section/topsection";
import Contactus from "./contact-us";

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
        <Topsection
          mycss={"section bg-contact contact-half"}
          text={"Contact Us"}
        />
        <Contactus />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
