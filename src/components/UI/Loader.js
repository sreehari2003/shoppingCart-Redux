import React from "react";
import "loader.css";

const link = "https://i.ibb.co/bP83CgK/spinner-PNG14.png";
const Loader = () => {
  return (
    <>
      <div className="preloader">
        <img src={link} alt={"preloader"} />
      </div>
    </>
  );
};

export default Loader;
