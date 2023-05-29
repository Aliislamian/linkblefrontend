import React from "react";
import "../UltimateServices/UltimateServices.css";
import Ultimateimage from "../../images/ultimateCard.png";

const UltimateServices = ({ handleCardClick }) => {
  return (
    <div className="main_ultimate_services">
      <div className="ultimateTextMain">
        <div className="ultimate_text">
          The Ultimate services that <br /> fits your brand personality.
        </div>
        <div
          className="button_div"
          onClick={handleCardClick}
          style={{ cursor: "pointer" }}
        >
          Get Started
        </div>
      </div>
      <div className="image_ultimate_design">
        <img
          src={Ultimateimage}
          alt="ultimate Services image"
          className="ultimate_image_css"
        />
      </div>
    </div>
  );
};

export default UltimateServices;
