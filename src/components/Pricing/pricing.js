import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

class Pricing extends Component {
  state = {
    pricings: [
      {
        id: 1,
        title: "House 1",
        price: "100",
        duration: "5 months",
        features: {
          bandwith: "",
          onlinespace: "",
          support: "",
          domain: "",
          hiddenFees: "",
        },
      },
     
      
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Our Accomodation"
              description="Available for Independent Living, Short & Medium-Term Accommodation"
            />

            <Row className="mt-5">
              {/* Render Pricing Box */}
              {this.state.pricings.map((pricing, key) => (
                <PricingBox key={key} pricing={pricing} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
