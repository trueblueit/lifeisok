import React, { Component } from "react";
import { Col} from "reactstrap";

import Lottie from "lottie-react";
import animationdata from "../../animation/Animation - bg2.json";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
 
        <Col lg="4" className="mt-4">
          <div className="services-box text-center hover-effect " >
            <div className="d-flex">
              <i className={this.props.icon + " text-primary"}></i>
              <div className="ms-4">
                <h4>{this.props.title}</h4>
                <p className="pt-2 text-muted">{this.props.description}</p>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default ServiceBox;
