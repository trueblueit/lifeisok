import React, { Component } from "react";
import { Col } from "reactstrap";

import { Link } from "react-router-dom";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Col lg="4" className="mt-4">
          <div className="services-box text-center hover-effect ">
            <div className="d-flex">
              <i className={this.props.icon + " text-primary"}></i>
              <div className="ms-4">
                <h4>{this.props.title}</h4>
                <p className="pt-2 text-muted">{this.props.description}</p>
              </div>
            </div>
            <Link
              to="/index3"
              className="btn btn-orange class mt-5 waves-effect waves-light"
            >
              Read More
            </Link>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default ServiceBox;
