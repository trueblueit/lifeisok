import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";

const Separator = ({ text, imageUrl }) => {
  const separatorStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    position: "relative",
  };

  return (
    <>
      <div className="separator" style={separatorStyle}>
        <div className="bg-overlay"></div>
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="text-center" style={{ zIndex: 5 }}>
            {text}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Separator;
