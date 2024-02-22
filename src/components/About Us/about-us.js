import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Team Box
import TeamBox from "./team-box";

class AboutUs extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "",
        image: "assets/lifeisok/aboutus.jpeg",
        post: "",
      },
      
    ], 
  }; 
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="about-title mx-auto text-center">
                  <h2 className="font-weight-light">
                    About Us{" "}
                  </h2>
                  <p className="text-muted pt-4">
                  “Life Is OK” aspires to be business role models through cultural awareness and person-centric support strategies; we also have the vision to uphold our commitment to serving NDIS participants with excellence.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              {/* Render Team members */}
              {this.state.members.map((member, key) => (
                <TeamBox
                  key={key}
                  name={member.name}
                  image={member.image}
                  post={member.post}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
