import React from "react";
import "./BuyerReview.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import GuestOptions from "../../components/GuestOptions/GuestOptions";
import BuyerAboutMeCard from "../BuyerAboutMeCard/BuyerAboutMeCard";
import ReviewComponent from "../../components/ReviewComponent/ReviewComponent";
import { useRef } from "react";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";

const BuyerReview = () => {
  const navRef = useRef();
  return (
    <div>
      <TalentNavbar ref={navRef} />
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />

        <div className="buyer-review-container">
          <div className="buyer-review-about">
            <BuyerAboutMeCard />
          </div>
          <div className="buyer-review-right-section">
            <div className="review-options-heading">
              <h1>Review as Buyer</h1>
            </div>

            <ReviewComponent />
          </div>
        </div>

        <BuyerFooter />
      </span>
    </div>
  );
};

export default BuyerReview;
