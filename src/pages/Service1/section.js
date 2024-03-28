import React, { Component } from "react";
import { Container } from "reactstrap";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    // No need to bind callModal in the constructor if you're using arrow functions
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-service1 service-half">
          <Container>
            <div className="wave-effect wave-anim">
              {/* Adjust the layout and visibility of waves for different screen sizes */}
              <div className="waves-shape shape-one">
                <div className="wave wave-one"></div>
              </div>
              <div className="waves-shape shape-two">
                <div className="wave wave-two"></div>
              </div>
              <div className="waves-shape shape-three">
                <div className="wave wave-three"></div>
              </div>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
