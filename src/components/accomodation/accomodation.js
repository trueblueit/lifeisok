import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const accommodations = [
  {
    name: "Luxury House",
    description:
      "This stunning luxury house offers unparalleled comfort and elegance, featuring state-of-the-art amenities and exquisite design for a truly opulent living experience.",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/3.jpg", // Additional images
      ".././assets/lifeisok/house/5.jpg",
    ],
  },
  {
    name: "Cozy Cottage",
    description:
      "Our Cozy Cottage provides a cozy and inviting atmosphere, perfect for those seeking a peaceful and comfortable retreat from the hustle and bustle of daily life.",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/2.jpg",
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/6.jpg",
    ],
  },
  {
    name: "Modern Apartment",
    description:
      "Experience modern living in our stylish apartment, equipped with contemporary furnishings and smart home features for a convenient and sophisticated lifestyle.",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/3.jpg",
    ],
  },

  // Add more accommodations as needed
];

const AccommodationsSection = () => {
  const [show, setShow] = useState(false);
  const [currentAccommodation, setCurrentAccommodation] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (accommodation) => {
    setCurrentAccommodation(accommodation);
    setShow(true);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <section className="section bg-light" id="accomodation">
      <Container>
        <div className="section-title" style={{ textAlign: "center" }}>
          <h2>Our Accommodation</h2>
          <br />
          <p>
            Available for Independent Living, Short & Medium-Term Accommodation
          </p>
        </div>

        <Row className="mt-5">
          {accommodations.map((accommodation, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleShow(accommodation)}
              >
                <Slider {...sliderSettings}>
                  {accommodation.imgSrc.map((src, imgIndex) => (
                    <div key={imgIndex} style={{ textAlign: "center" }}>
                      <img
                        src={src}
                        alt={`${accommodation.name} ${imgIndex + 1}`}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </Slider>
                <h3 style={{ marginTop: "20px" }}>{accommodation.name}</h3>
                <p style={{ marginTop: "10px" }}>{accommodation.description}</p>
                <p style={{ marginTop: "5px" }}>
                  <FontAwesomeIcon icon={faBed} /> {accommodation.bedrooms}{" "}
                  Bedrooms
                  <br />
                  <FontAwesomeIcon icon={faBath} /> {accommodation.bathrooms}{" "}
                  Bathrooms
                  <br />
                  <FontAwesomeIcon icon={faCar} /> {accommodation.parking}{" "}
                  Parking Spots
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{currentAccommodation?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Slider {...sliderSettings}>
              {currentAccommodation?.imgSrc.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${currentAccommodation.name} ${index + 1}`}
                  className="img-fluid"
                />
              ))}
            </Slider>
            <p style={{ marginTop: "20px" }}>
              {currentAccommodation?.description}
            </p>
            <p>
              <FontAwesomeIcon icon={faBed} /> {currentAccommodation?.bedrooms}{" "}
              Bedrooms
              <br />
              <FontAwesomeIcon icon={faBath} />{" "}
              {currentAccommodation?.bathrooms} Bathrooms
              <br />
              <FontAwesomeIcon icon={faCar} /> {currentAccommodation?.parking}{" "}
              Parking Spots
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Link
          to="/index3"
          className="btn mt-5"
          style={{ background: "#ff6900", color: "white" }}
        >
          Read More
        </Link>
      </Container>
    </section>
  );
};

export default AccommodationsSection;
