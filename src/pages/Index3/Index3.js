import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Services from "./services";
import Footer from "../../components/Footer/footer";

class Index3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "",
    };
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

        <Services />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index3;
