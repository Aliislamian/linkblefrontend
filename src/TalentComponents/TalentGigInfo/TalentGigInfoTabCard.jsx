import React from "react";
import { Navigate } from "react-router-dom";
import BuyerTabs from "../../components/BuyerTab/BuyerTabs";
import SubmitCardImage1 from "../../images/submitcardimg1.png";
import "./TalentGigInfo.css";
const TalentGigInfoTabCard = () => {
  return (
    <div className="talent-gig-info-tabcard-container">
      <div className="talent-gig-info-tabcard-inner-container">
        <div className="main_sumbmit_card">
          <div className="above_div">
            <text className="text_css">
              {" "}
              Hi Alexa! <br />
              Want to Work?{" "}
            </text>
            <img
              src={SubmitCardImage1}
              alt="image"
              className="submit_card_image_css"
            />
          </div>
          <div className="below_div" onClick={() => Navigate("/submitrequest")}>
            Check Buyer Repuest
          </div>
        </div>
        <div className="main_sumbmit_card">
          <div className="above_div">
            <text className="text_css">
              Check out buyer request you Have applied for
            </text>
            <img
              src={SubmitCardImage1}
              alt="image"
              className="submit_card_image_css"
            />
          </div>
          <div className="below_div" onClick={() => Navigate("/submitrequest")}>
            Check Posted Jobs
          </div>
        </div>
      </div>
      <div className="checkk">
        <BuyerTabs />
      </div>
    </div>
  );
};

export default TalentGigInfoTabCard;
