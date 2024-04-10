import React, { Component } from "react";
import { Container } from "reactstrap";
import Service2 from "./Service2";
import ContactUs from "../../components/Contact Us/contact-us";
import Footer from "../../components/Footer/footer";
import Navbar_Page from "../../components/Navbar/NavbarPage";

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
        <section className="section bg-service2 service-half"></section>
        <Service2 />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Section;
