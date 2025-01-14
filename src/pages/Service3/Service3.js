import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { accommodations } from "../../data";

const AccommodationsSection = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const handleAccommodationClick = (index) => {
    setSelectedAccommodation(index);
  };

  const handleCloseModal = () => {
    setSelectedAccommodation(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <section className="section-sm bg-light" id="accommodation">
      <Container>
        <h2
          className="section-heading"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Our Accommodation
        </h2>
        <p className="text-center" style={{ marginBottom: "40px" }}>
          Available for Independent Living, Short & Medium-Term Accommodation
        </p>

        <Row className="mt-5">
          {accommodations.map((accommodation, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleAccommodationClick(index)}
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
                {selectedAccommodation === index && (
                  <div>
                    <p>{accommodation.description}</p>
                    <p style={{ marginTop: "5px" }}>
                      <FontAwesomeIcon icon={faBed} /> {accommodation.bedrooms}{" "}
                      Bedrooms
                      <br />
                      <FontAwesomeIcon icon={faBath} />{" "}
                      {accommodation.bathrooms} Bathrooms
                      <br />
                      <FontAwesomeIcon icon={faCar} /> {accommodation.parking}{" "}
                      Parking Spots
                    </p>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>

        <Link to="/index3" className="btn mybtn mt-5">
          Read More
        </Link>
      </Container>
    </section>
  );
};

export default AccommodationsSection;
