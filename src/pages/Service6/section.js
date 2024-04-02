import React, { Component } from "react";
import { Container } from "reactstrap";
import Navbar_Page from "../../components/Navbar/NavbarPage";
import Service6 from "./Service6";
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
        <section className="section bg-service5 service-half">
          <Container>
            <div className="wave-effect wave-anim">
              <div className="waves-shape shape-one">
                <div
                  className="wave wave-one"
                  style={{
                    backgroundImage: `url(assets/images/wave-shape/wave1.png)`,
                  }}
                ></div>
              </div>
              <div className="waves-shape shape-two">
                <div
                  className="wave wave-two"
                  style={{
                    backgroundImage: `url(assets/images/wave-shape/wave2.png)`,
                  }}
                ></div>
              </div>
              <div className="waves-shape shape-three">
                <div
                  className="wave wave-three"
                  style={{
                    backgroundImage: `url(assets/images/wave-shape/wave3.png)`,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
        <Service6 />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Section;
