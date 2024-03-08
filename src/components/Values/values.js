import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import { values } from "../../data";

class Values extends Component {
  state = {
    values: values,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section-sm bg-light">
          <Container>
            <h1 className="text-center mycolor">Our Values</h1>
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
