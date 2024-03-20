import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Lottie from "lottie-react";
import animationdata from "../../animation/Animation - bg.json";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-1">
                <div
                  className="features-box mt-5 mt-lg-0 fadeIn"
                  style={{
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    animationDelay: "0.3s",
                  }}
                >
                  <h3
                    className="enhancedText flipIn"
                    style={{ maxWidth: "600px" }}
                  >
                    Why Life is Ok?
                  </h3>
                  <p
                    className="text-muted home-desc slideUpFadeIn enhancedText"
                    style={{ animationDelay: "0.7s" }}
                  >
                    At Life is OK, we're more than a service provider; we're
                    your partner in a journey toward a fulfilling life. Our
                    collaboration with NDIS ensures personalized services that
                    champion well-being, embrace cultural diversity, and empower
                    your choices.
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list home-desc">
                    {[
                      "Cultural Sensitivity: Our team’s exceptional cultural awareness enriches your experience with us.",
                      "Life Enrichment: We're dedicated to enhancing your life, ensuring you feel valued and respected.",
                      "Expert Guidance: Benefit from a complimentary consultation with our seasoned experts.",
                      "Integrity and Respect: Count on us to interact with you with the utmost integrity, fairness, and honesty.",
                      "Empowered Decisions: Your preferences and decisions are paramount; we're here to support, not dictate.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`fadeSlideFromLeft enhancedText`}
                        style={{ animationDelay: `${1 + index * 0.2}s` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 order-lg-2">
                <div
                  className="features-img mx-auto me-lg-0 zoomInFadeIn"
                  style={{ textAlign: "center", animationDelay: "1s" }}
                >
                  <img
                    src="assets/lifeisok/about.jpeg"
                    alt="Inspirational Image"
                    className="img-fluid"
                    style={{
                      boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                      borderRadius: "10px",
                      maxWidth: "80%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="animationboxbg">
            <Lottie animationData={animationdata}></Lottie>
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000,
};
