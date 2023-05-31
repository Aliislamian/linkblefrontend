import React from "react";
import "./CustomOffer.css";
import budget from "../../images/budget.png";
import revisionIcon from "../../images/revisionIcon.png";
import service from "../../images/service.png";
import responseTime from "../../images/responseTime.png";

const CustomOffer = () => {
  
  return (
    <div className="custom-offer-container">
      <div className="custom-offer-top-container">
        I will do unique mobile app UI UX design and prototype in xd or figma
      </div>
      <div className="custom-offer-bottom-container">
      <div className="milstone-payment-btn">
      Requested Milestone Payment
      </div>
        <div className="custom-offer-desc">
          I will design the the given Screen with Unique & Stunning UI/UX.
        </div>
        <div className="custom-offer-services-container">
          <div className="custom-offer-details-container">
            <div className="custom-offer-details-left-container">
              <img
                src={budget}
                alt="icon"
                className="custom-offer-details-icon"
              />
              <div className="custom-offer-details-text">
                Total Budget <span>(Single Payment)</span>
              </div>
            </div>
            <div className="custom-offer-details-right-container">
              <span style={{ marginRight: "5px" }}>$</span>600
            </div>
          </div>
          <div className="custom-offer-details-container">
            <div className="custom-offer-details-left-container">
              <img
                src={responseTime}
                alt="icon"
                className="custom-offer-details-icon"
              />
              <div className="custom-offer-details-text">Delivery Time</div>
            </div>
            <div className="custom-offer-details-right-text-container">
              5 Days Delivery
            </div>
          </div>
          <div className="custom-offer-details-container">
            <div className="custom-offer-details-left-container">
              <img
                src={revisionIcon}
                alt="icon"
                className="custom-offer-details-icon"
              />
              <div className="custom-offer-details-text">Revisions</div>
            </div>
            <div className="custom-offer-details-right-text-container">3</div>
          </div>
          <div className="custom-offer-details-container">
            <div className="custom-offer-details-left-container">
              <img
                src={service}
                alt="icon"
                className="custom-offer-details-icon"
              />
              <div className="custom-offer-details-text">Services</div>
            </div>
            <div className="custom-offer-details-right-text-container">
              XD, Wireframes & Source File
            </div>
          </div>
        </div>
        <div className="custom-offer-btn-container">
          <div
            className="custom-offer-btn"
            style={{ backgroundColor: "#00966b" }}
          >
            Pending
          </div>
          <div
            className="custom-offer-btn"
            style={{ backgroundColor: "#919191" }}
          >
            Withdraw Offer
          </div>
        </div>
        <div className="cutom-offer-exp-time">offers expires in 12hr</div>
      </div>
    </div>
  );
};

export default CustomOffer;
