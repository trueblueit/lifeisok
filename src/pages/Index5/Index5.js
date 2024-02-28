import React, { Component } from "react";
import Section from "./section";
import Referral from "./referral";

import NavbarPage from "../../components/Navbar/NavbarPage";
class Index5 extends Component {
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
        <Referral />
      </React.Fragment>
    );
  }
}

export default Index5;
