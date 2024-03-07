import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Card from "react-bootstrap/Card";

import { clients } from "../../data";

class Clients extends Component {
  state = {
    clients: clients,
  };

  render() {
    return (
      <React.Fragment>
        <section className="section-sm bg-light">
          <Container fluid>
            <h1 className="text-center mycolor">Our Values</h1>
            <Row>
              {this.state.clients.map((client) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={client.id}
                  className="mb-4"
                >
                  {/* Adjust the maximum number of cards in a row for different screen sizes */}
                  <Card
                    className="text-center value-shadow"
                    style={{ maxWidth: "18rem", overflow: "hidden" }}
                  >
                    <Card.Body>
                      <Card.Title>{client.name}</Card.Title>
                      <Card.Img
                        variant="top"
                        src={client.img}
                        alt="logo-img"
                        className="image-fluid"
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

export default Clients;
