import React from "react";
import "./BuyerAboutMeCard.css";
import ProfileImage from "../../images/circularprofile.png";
import verifiedicon from "../../images/verifiedicon.png";
import locationicon from "../../images/locationicon.png";
import profileMember from "../../images/profileMember.png";
import receantDeliveryIcon from "../../images/receantDeliveryIcon.png";
import globe from "../../images/globe.png";
import responseTime from "../../images/responseTime.png";
import grayDot from "../../images/grayDot.png";
import greenDot from "../../images/greenDot.png";
import blockIcon from "../../images/blockIcon.png";
import reportIcon from "../../images/reportIcon.png";

const BuyerAboutMeCard = () => {
  return (
    <div className="buyer-about-card-container">
      <div className="talent-about-card-inner-container">
        <img
          src={ProfileImage}
          alt="profle"
          className="talent-about-card-img"
        />
        <div className="talent-about-card-name-and-level-container">
          <div className="buyer-about-card-name">Emma Julia</div>
          <img
            src={verifiedicon}
            alt="verify tick"
            className="talent-about-card-verified-tick"
          />
        </div>
        <div className="buyer-about-me-card-options-container">
          <div className="buyer-about-me-card-options">
            <img src={reportIcon} alt="icon" />
            <div className="buyer-about-me-card-text">Report Buyer</div>
          </div>
          <div className="buyer-about-me-card-options">
            <img src={blockIcon} alt="icon" />
            <div className="buyer-about-me-card-text">Block</div>
          </div>
          <div className="buyer-about-me-card-block-options"></div>
        </div>
        <div className="talent-about-card-address-container">
          <img
            src={locationicon}
            alt="location icon"
            className="talent-about-card-address-icon"
          />
          <div className="talent-about-card-address">
            New York United States
          </div>
        </div>

        <div className="talent-about-card-detail-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={profileMember} alt="prifile icon" />
            <div className="talent-about-card-detail-heading">Member Since</div>
          </div>
        </div>

        <div className="talent-about-card-detail-language-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={globe} alt="globe icon" />
            <div className="talent-about-card-detail-heading">Languages</div>
          </div>
          <div className="talent-about-card-languages-parent-div">
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">English</div>
            </div>
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">
                Urdu (Native)
              </div>
            </div>
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">Pashto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerAboutMeCard;
