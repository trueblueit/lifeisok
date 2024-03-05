import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
class Gallery extends Component {
  state = {
    images: [
      { id: 1, img: "assets/lifeisok/1.jpeg" },
      {
        id: 2,
        img: "assets/lifeisok/about.jpeg",
      },
      { id: 3, img: "assets/lifeisok/aboutus.jpeg" },
      { id: 4, img: "assets/lifeisok/img1.jpeg" },
      { id: 5, img: "assets/lifeisok/info.jpg" },
      { id: 6, img: "assets/lifeisok/image3.jpg" },
    ],
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
