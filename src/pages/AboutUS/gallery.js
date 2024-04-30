import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { images } from "../../data";
class Gallery extends Component {
  state = {
    images: images,
  };
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <h1 class="text-center">Gallery</h1>
          <Row>
            {this.state.images.map((image) => (
              <Col key={image.id} md={4} sm={6} xs={12}>
                <Card style={{ marginBottom: "15px" }}>
                  <Card.Img variant="top" src={image.img} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Gallery;
