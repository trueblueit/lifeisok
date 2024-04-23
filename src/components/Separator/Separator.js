import React from "react";

const Separator = ({ imageUrl }) => {
  const separatorStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    position: "relative",
  };

  return (
    <>
      <div className="separator" style={separatorStyle}></div>
    </>
  );
};

export default Separator;
