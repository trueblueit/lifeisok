import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import { values } from "../../data";
import animationdata from "../../animation/Animation - 1708004346894.json";
import Lottie from "lottie-react";

class Values extends Component {
  state = {
    values: values,
  };

  render() {
    const textColor = "#34568B";
    return (
      <React.Fragment>
        <section className="section-sm bg-light">
          <Container>
            <h2
              className="section-heading"
              style={{
                textAlign: "center",
                color: textColor,
                marginBottom: "20px",
              }}
            >
              Our Values
            </h2>

            <Row className="justify-content-center">
              {this.state.values.map((value) => (
                <Col
                  key={value.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4 d-flex align-items-stretch"
                >
                  <Card
                    className="text-center value-shadow"
                    style={{ width: "100%" }}
                  >
                    <Card.Body>
                      <Card.Title>{value.name}</Card.Title>
                      <Card.Img
                        variant="top"
                        src={value.img}
                        alt="logo-img"
                        className="img-fluid"
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Values;
