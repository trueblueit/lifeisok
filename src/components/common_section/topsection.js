import React from "react";
import { Container } from "reactstrap";

const Topsection = ({ mycss, text, children }) => {
  return (
    <React.Fragment>
      <section className={mycss}>
        <Container>
          <h1 className="home-title">{text}</h1>
        </Container>
        {children !== null ? children : null}
        <Container>
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
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Topsection;
