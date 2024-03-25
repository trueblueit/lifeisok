import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class ServiceBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const boxStyle = {
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    };

    const darkBlueColor = "#34568B"; // Dark blue color for the title
    const blackColor = "#000000"; // Black color for the description

    return (
      <Col lg="4" className="mt-4">
        <div
          className="services-box text-center hover-effect"
          style={boxStyle}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div>
            <div className="d-flex justify-content-center">
              <i
                className={this.props.icon + " text-primary"}
                style={{ fontSize: "24px" }}
              ></i>
            </div>
            <div>
              <h4 style={{ color: darkBlueColor }}>{this.props.title}</h4>
              <p className="pt-2" style={{ color: blackColor }}>
                {this.props.description}
              </p>{" "}
              {/* Black color applied here */}
            </div>
          </div>
          {this.state.isHovered && (
            <Link
              to={this.props.mylink}
              className="btn mt-5"
              style={{ background: "#ff6900", color: "#fff" }}
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
