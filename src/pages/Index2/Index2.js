import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Values from "../../components/Values/values";
import Features from "../../components/Features/features";
import Services from "../../components/Services/services";
import { Career } from "../../components/career/career";
import AboutUs from "../../components/About Us/about-us";
import Accomodation from "../../components/accomodation/accomodation";
import Feedback from "../../components/Feedback/feedback";
import ContactUs from "../../components/Contact Us/contact-us";
import Footer from "../../components/Footer/footer";

class Index2 extends Component {
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
        <NavbarPage navClass={this.state.navClass} />
        <Section />
        <Values />
        <Features />
        <Services />
        <Career />
        <AboutUs />
        <Accomodation />
        <Feedback />
        <ContactUs />
        <Footer />*
      </React.Fragment>
    );
  }
}

export default Index2;
