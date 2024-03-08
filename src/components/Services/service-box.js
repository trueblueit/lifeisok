import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class ServiceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    const link = this.props.link;
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
    console.log(this.props.link);
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <Col lg="4" className="mt-4">
        <div
          className="services-box text-center hover-effect"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="d-flex">
            <i className={this.props.icon + " text-primary"}></i>
            <div className="ms-4">
              <h4>{this.props.title}</h4>
              <p className="pt-2 text-muted">{this.props.description}</p>
            </div>
          </div>
          {this.state.isHovered && (
            <Link
              to={this.props.mylink}
              className="btn class mt-5"
              style={{ background: "#ff6900" }}
            >
              Read More
            </Link>
          )}
        </div>
      </Col>
    );
  }
}

export default ServiceBox;
