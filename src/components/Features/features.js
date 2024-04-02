import React, { Component } from "react";
import Lottie from "lottie-react";
import animationData from "../../animation/Animation - bg.json";
import {
  FaRegSmile,
  FaHeart,
  FaUserFriends,
  FaBalanceScaleRight,
  FaThumbsUp,
} from "react-icons/fa";

class Features extends Component {
  render() {
    const textColor = "#34568B"; // Dark blue color for text
    const iconColor = "#FF6F61"; // Light red color for icons
    const boxBackgroundColor = "#f2f2f2"; // Light grey color for box background
    const imageUrl = "assets/lifeisok/about.jpeg"; // Path to your single right-side image

    return (
      <React.Fragment>
        <section className="section" id="features">
          <div className="container-fluid">
            <h2
              className="section-heading"
              style={{
                textAlign: "center",
                color: textColor,
                marginBottom: "20px",
              }}
            >
              Why Life is OK?
            </h2>
            <p
              className="text-center"
              style={{ color: textColor, marginBottom: "40px" }}
            >
              Discover how "Life is OK" enhances your life through our dedicated
              services and support.
            </p>
            <div className="row align-items-center">
              {/* List of features on the left */}
              <div className="col-lg-7">
                {[
                  {
                    icon: <FaRegSmile style={{ color: iconColor }} />,
                    title: "Cultural Sensitivity",
                    description:
                      "Experience worker with exceptional cultural awareness",
                  },
                  {
                    icon: <FaHeart style={{ color: iconColor }} />,
                    title: "Life Enrichment",
                    description:
                      "Ability to dignify your life and to make you feel your life is ok",
                  },
                  {
                    icon: <FaUserFriends style={{ color: iconColor }} />,
                    title: "Expert Guidance",
                    description:
                      "Free consultation sessions with our experienced team",
                  },
                  {
                    icon: <FaBalanceScaleRight style={{ color: iconColor }} />,
                    title: "Integrity and Respect",
                    description:
                      "Our policies ensure our team treat you with fairness, respect, and honesty",
                  },
                  {
                    icon: <FaThumbsUp style={{ color: iconColor }} />,
                    title: "Empowered Decisions",
                    description: "You have the choice and control, always.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "20px",
                      padding: "20px",
                      backgroundColor: boxBackgroundColor,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginRight: "15px", fontSize: "24px" }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h5 style={{ color: textColor }}>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Single image on the right */}
              <div className="col-lg-5">
                <div style={{ textAlign: "center" }}>
                  <img
                    src={imageUrl}
                    alt="Feature Representation"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="animationboxbg">
            <Lottie animationData={animationData} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
