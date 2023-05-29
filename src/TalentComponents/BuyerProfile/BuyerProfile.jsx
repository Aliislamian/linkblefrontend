import React, { useRef, useState } from "react";
import backArrow from "../../images/backArrow.png";
import nft from "../../images/nft.png";
import circularprofile from "../../images/circularprofile.png";
import whiteArrow from "../../images/whiteArrow.png";
import whiteFarwardArrow from "../../images/whiteFarwardArrow.png";
import TalentNavbar from "../TalentNavbar/TalentNavbar.jsx";
import StarIcon from "@material-ui/icons/Star";

import "./BuyerProfile.css";
import { useNavigate } from "react-router-dom";
const BuyerProfile = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  return (
    <div>
      <TalentNavbar ref={navRef} />

      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="buyer-profile-container">
          <div className="buyer-profile-left-container">
            <div className="buyer-profile-back-btn-container"
              onClick={() => navigate(-1)}
            >
              <img src={backArrow} alt="arrow" />
              <div className="buyer-profile-back-btn-text">Back</div>
            </div>
            <div className="buyer-profile-top-text">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="buyer-profile-img-container">
              <img src={nft} alt="profile" />
            </div>
            <div className="buyer-profile-detail-heading">Details</div>
            <div className="buyer-profile-detail-text">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Duis
              magna justo, scelerisque eteu ismod sit amet, eleifend quis magna.
              Sed fringilla, est at volutpat sodales, nisl eros tristique
              sapien, ut gravida urna lorem a odio.
            </div>
            <div className="buyer-profile-detail-heading">Details</div>
            <div className="buyer-profile-detail-text">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Duis
              magna justo, scelerisque eteu ismod sit amet, eleifend quis magna.
              Sed fringilla, est at volutpat sodales, nisl eros tristique
              sapien, ut gravida urna lorem a odio.
            </div>
          </div>
          <div className="buyer-profile-right-container">
            <div className="buyer-profile-right-inner-container">
              <div className="buyer-profile-info-container">
                <div className="buyer-profile-info-img">
                  <img src={circularprofile} alt="profile" />
                </div>
                <div className="buyer-profile-info-right-container">
                  <div className="buyer-profile-info-name">Alexa Susan</div>
                  <div className="buyer-profile-info-rating-and-city">
                    <StarIcon className="buyer-profile-stars" />
                    <span style={{ marginLeft: "2px" }}>(5)</span>
                    <span style={{ marginLeft: "10px" }}>United States</span>
                  </div>
                </div>
              </div>

              <div className="buyer-profile-project-detail-container">
                <div className="buyer-profile-project-detail-inner-container">
                  <div className="buyer-profile-project-detail-headings-container">
                    <div className="buyer-profile-project-detail-heading">
                      Project Info
                    </div>
                    <div className="buyer-profile-project-detail-heading">
                      App Development
                    </div>
                  </div>
                  <div className="buyer-profile-project-detail">
                    Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                    Duis magna justo, scelerisque eteu ismod sit amet, eleifend
                    quis magna. Sed fringilla, est at volutpat sodales, nisl
                    eros tristique sapien, ut gravida urna lorem a odio.
                  </div>

                  <div className="buyer-profile-project-budget-and-time-headings-container">
                    <div className="buyer-profile-project-budget-and-time-heading">
                      Budget
                    </div>
                    <div className="buyer-profile-project-budget-and-time-heading">
                      Delivery Time
                    </div>
                  </div>
                  <div className="buyer-profile-project-budget-and-time-container">
                    <div className="buyer-profile-project-budget">$ 350</div>
                    <div className="buyer-profile-project-time">7 days</div>
                  </div>
                </div>

                <div className="buyer-profile-send-offer-btn">
                  Send Offer <img src={whiteFarwardArrow} alt="farword arrow" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default BuyerProfile;
