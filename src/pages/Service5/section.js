import React, { Component } from "react";
import { Container } from "reactstrap";
import Navbar_Page from "../../components/Navbar/NavbarPage";
import Service5 from "./Service5";
import ContactUs from "../../components/Contact Us/contact-us";
import Footer from "../../components/Footer/footer";
class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <Navbar_Page />
        <section className="section bg-service5 service-half"></section>
        <Service5 />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Section;
