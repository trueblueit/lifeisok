import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";



class Clients extends Component {
  state = {
    clients: [
      { id: 1, img: "assets/images/icons/1.png", name: "COMPASSION" },
      { id: 2, img: "assets/images/icons/2.png" , name:"TOGETHERNESS/INTEGRITY" },
      { id: 3, img: "assets/images/icons/3.png" , name:"RESEPCT" },
      { id: 4, img: "assets/images/icons/4.png" , name:"TRUST" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section-sm bg-light">
          
          <Container >
            <h1 class="text-center" >
            Our Values
            </h1>
            <Row>
              {this.state.clients.map((client, key) => (
                  <Col md="3" key={key}>
                    <div className=" text-center value-shadow">
                      {client.name}
                      <img
                        src={client.img}
                        alt="logo-img"
                        className="mx-auto img-fluid d-block"
                      />
                    </div>
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
