import React, { Component } from "react";
import { Col } from "reactstrap";
import { LinkBox, LinkOverlay, Heading, Text, Box } from "@chakra-ui/react";

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
      minHeight: "455px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f2f2f2",
    };

    return (
      <Col lg="4" className="mt-4">
        <LinkBox
          p="5"
          borderWidth="1px"
          rounded="md"
          className="services-box text-left hover-effect"
          style={boxStyle}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <LinkOverlay href={this.props.mylink}>
            <Heading size="md" my="2">
              <div className="d-flex justify-content-center">
                <i
                  className={this.props.icon + " text-primary"}
                  style={{ fontSize: "60px" }}
                ></i>
              </div>

              <h4>{this.props.title}</h4>
            </Heading>
          </LinkOverlay>
          <p>{this.props.description}</p>
        </LinkBox>
      </Col>
    );
  }
}

export default ServiceBox;
