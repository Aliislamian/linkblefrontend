import React from "react";
import "./TalentSuccessGuide.css";
import SuccessFactor from "../../images/SuccessFactor.png";
import { PropaneSharp } from "@mui/icons-material";

const TalentSuccessGuide = (props) => {
  return (
    <div
      className="talent-success-guide-card"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.customColor,
      }}
    >
      <div className="talent-success-guide-card-left">
        <div className="talent-success-guide-card-left-heading">
          Learn to build your success be the best on Linkeble
        </div>
        <div className="talent-success-guide-card-left-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
          justo, scelerisque et euismod sit amet, eleifend quis magna. Sed
          fringilla, est at volutpat sodales, nisl eros tristique sapien, ut
          gravida urna lorem a odio. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis magna justo, scelerisque et euismod sit amet,
          eleifend quis magna. S
        </div>
      </div>
      <div className="talent-success-guide-card-right">
        <div className="talent-success-guide-card-right-img">
          <img src={SuccessFactor} alt="success factor" />
        </div>
      </div>
    </div>
  );
};

export default TalentSuccessGuide;
