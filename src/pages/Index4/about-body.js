import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  FaHandHoldingHeart,
  FaPeopleCarry,
  FaHeartbeat,
  FaTools,
  FaBriefcase,
  FaLightbulb,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    title: "Assistance with social and community participation",
    Icon: FaPeopleCarry,
  },
  {
    title: "Increased social and community participation",
    Icon: FaHandHoldingHeart,
  },
  { title: "Improve health and wellbeing", Icon: FaHeartbeat },
  { title: "Improve daily living", Icon: FaHome },
  { title: "Finding and keeping the job", Icon: FaBriefcase },
  { title: "Improve life choices", Icon: FaLightbulb },
  { title: "Assistance with daily living", Icon: FaTools },
  { title: "School Leavers Employment", Icon: FaGraduationCap },
];

function Aboutbody() {
  const listStyle = {
    listStyleType: "none",
    paddingLeft: "0",
    marginTop: "20px",
  };

  const listItemStyle = {
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    color: "black",
    fontSize: "18px",
    fontWeight: "550",
  };

  const iconStyle = {
    marginRight: "10px",
    minWidth: "24px",
    fontSize: "20px",
  };

  return (
    <React.Fragment>
      <Container fluid>
        <Container>
          <Row className="align-items-center ">
            <Col lg="5" className="order-lg-1 mb-4 mb-lg-0">
              <div className="features-box mt-5 mt-lg-0">
                <h3>About Us</h3>
                <p className="text-muted web-desc home-desc">
                  Life is OK is seeking to provide care support services under
                  the National Disability Insurance Scheme (NDIS) in NT, seeking
                  to deliver services that include:
                </p>
                <ul style={listStyle}>
                  {services.map(({ title, Icon }, index) => (
                    <li key={index} style={listItemStyle}>
                      <Icon style={iconStyle} /> {title}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/index3" className="btn btn-orange m-3">
                Our Services
              </Link>
            </Col>
            <Col lg="7">
              <div className="features-img mx-auto text-center">
                <img
                  src="assets/lifeisok/3.jpeg"
                  className="img-fluid"
                  alt="About Us"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default Aboutbody;
