import React, { useState } from "react";
import "./BuyerReview.css";
import Navbar from "../MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import TalentAboutMeCard from "../TalentAboutMeCard/TalentAboutMeCard";
import ReviewComponent from "../ReviewComponent/ReviewComponent";
import { useRef } from "react";
import TalentServices from "../TalentServices/TalentServices";
const BuyerReview = () => {
  const navRef = useRef();
  const [buyerReviewOption, setBuyerReviewOption] = useState(false);
  const handleClick = () => {
    setBuyerReviewOption(!buyerReviewOption)
  }
  return (
    <div>
      <Navbar ref={navRef} />
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />

        <div className="buyer-review-container">
          <div className="buyer-review-about">
            <TalentAboutMeCard />
          </div>
          <div className="buyer-review-right-section">
            <div className="review-options-container">
              <div className="review-service-option-div" onClick={handleClick}>
                <div className="review-option-text" style={{ color: !buyerReviewOption ? "#00966B" : "#919191" }}>Services</div>
                <div className="review-option-border" style={{ backgroundColor: !buyerReviewOption ? "#00966B" : "#919191" }}></div>
              </div>
              <div className="review-review-option-div" onClick={handleClick}>
                <div className="review-option-text" style={{ color: buyerReviewOption ? "#00966B" : "#919191" }}>Reviews</div>
                <div className="review-option-border" style={{ backgroundColor: buyerReviewOption ? "#00966B" : "#919191" }}></div>
              </div>
            </div>
            {!buyerReviewOption && <TalentServices />}
            {buyerReviewOption && <ReviewComponent />}
          </div>
        </div>
      </span>
    </div>
  );
};

export default BuyerReview;
