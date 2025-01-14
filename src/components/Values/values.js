import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
            <h2
              className="section-heading"
              style={{
                textAlign: "center",

                marginBottom: "20px",
              }}
            >
              Our Values
            </h2>

            <Row>
              {this.state.values.map((value, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",
                    padding: "5px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    border: " solid",
                    borderColor: "#efa27d",
                    background: "#f2f2f2",
                    borderRadius: "15px",
                    overflow: "auto",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>
                    <i
                      className={value.icon + " me-2"}
                      style={{ fontSize: "55px" }}
                    ></i>
                  </div>
                  <div>
                    <h5>{value.name}</h5>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Values;
