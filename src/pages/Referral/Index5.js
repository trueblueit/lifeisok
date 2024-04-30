import React, { Component } from "react";
import Referral from "./referral";
import Topsection from "../../components/common_section/topsection";

import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
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
        <Topsection
          mycss={"section bg-refer refer-half mt-5"}
          text={"Referral"}
        />
        <Referral />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index5;
