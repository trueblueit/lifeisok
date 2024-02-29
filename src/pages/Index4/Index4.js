import React, { Component } from "react";
import NavbarPage from "../../components/Navbar/NavbarPage";
import Footer from "../../components/Footer/footer";
import Contact from "../../components/Contact Us/contact-us";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-home h-75" id="home">
          <div className="bg-overlay"></div>
          <Container>
            <Row className="mt-auto">
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h4 className="home-small-title"></h4>
                <h1 className="home-title">About Us</h1>
                <p className="pt-3 home-desc mx-auto">
                  “Life Is OK” aspires to be business role models through
                  cultural awareness and person-centric support strategies; we
                  also have the vision to uphold our commitment to serving NDIS
                  participants with excellence.
                </p>

                <Link
                  to="/index3"
                  className="btn btn-success mt-5 waves-effect waves-light"
                >
                  Our Services
                </Link>
              </Col>
            </Row>
          </Container>

          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div
                className="wave wave-one"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave1.png)`,
                }}
              ></div>
            </div>
            <div className="waves-shape shape-two">
              <div
                className="wave wave-two"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave2.png)`,
                }}
              ></div>
            </div>
            <div className="waves-shape shape-three">
              <div
                className="wave wave-three"
                style={{
                  backgroundImage: `url(assets/images/wave-shape/wave3.png)`,
                }}
              ></div>
            </div>
          </div>
        </section>
        <Container>
          <Row className="align-items-center">
            <Col lg="5" className="order-2 order-lg-1">
              <div className="features-box mt-5 mt-lg-0">
                <h3>About Us</h3>
                <p className="text-muted web-desc">
                  Life is OK is seeking to provide care support services under
                  the National Disability Insurance Scheme (NDIS) in NT, seeking
                  to deliver services that includes:
                </p>

                <ul className="text-muted list-unstyled mt-4 features-item-list list-group list-group-flush">
                  <li className="list-group-item">
                    Assistance with social and community participation
                  </li>
                  <li className="list-group-item">
                    Increased social and community participation
                  </li>
                  <li className="list-group-item">
                    Improve health and wellbeing
                  </li>
                  <li className="list-group-item">Improve daily living</li>
                  <li className="list-group-item">
                    Finding and keeping the job
                  </li>
                  <li className="list-group-item">Improve life choices </li>
                  <li className="list-group-item">
                    Assistance with daily living
                  </li>
                  <li className="list-group-item">School Leavers Employment</li>
                </ul>
              </div>
            </Col>
            <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
              <div className="features-img mx-auto me-lg-0">
                <img src="assets/lifeisok/img2.png" />
              </div>
            </Col>
          </Row>
        </Container>
        {/* Importing Get Footer */}
        <Contact />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Index4;
