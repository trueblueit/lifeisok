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
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#f2f2f2",
    };

    return (
      <Col lg="4" className="mt-4">
        <LinkBox
          p="5"
          borderWidth="1px"
          rounded="md"
          className="services-box text-center hover-effect"
          style={boxStyle}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Heading size="md" my="2">
            <div className="d-flex justify-content-center">
              <i
                className={this.props.icon + " text-primary"}
                style={{ fontSize: "60px" }}
              ></i>
            </div>
            <LinkOverlay href={this.props.mylink}>
              <h4>{this.props.title}</h4>
            </LinkOverlay>
          </Heading>
          <Text mb="3">{this.props.description}</Text>
          {this.state.isHovered && (
            <Box
              as="a"
              color="orange.400"
              href={this.props.mylink}
              fontWeight="bold"
            >
              Read more
            </Box>
          )}
        </LinkBox>
      </Col>
    );
  }
}

export default ServiceBox;
