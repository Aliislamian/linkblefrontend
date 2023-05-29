import React from "react";
import { useRef } from "react";
import BecomeSellerBar from "../BecomeSellerBar/BecomeSellerBar";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import whiteFarwardArrow from "../../images/whiteFarwardArrow.png";

import "./BecomeSellerGuide.css";
import { useNavigate } from "react-router-dom";

const BecomeSellerGuide = () => {
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
        <div className="become-seller-guide-container">
          <h1>Become Seller On Linkeble Now!</h1>
          <h3>
            Complete the following easy steps to get started your selling
            services on Linkeble.
          </h3>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
            justo, scelerisque et euismod sit amet, eleifend quis magna.
          </h3>
          <div className="become-steps-guide">
            <BecomeSellerBar stepCount={0} />
          </div>
          <div
            className="seller-get-started-btn-container"
            onClick={() => {
              navigate("/seller-step-one");
            }}
          >
            <div className="seller-get-started-btn-text">Get Started Now</div>
            <img src={whiteFarwardArrow} alt="arrow" />
          </div>
        </div>
      </span>
    </div>
  );
};

export default BecomeSellerGuide;
