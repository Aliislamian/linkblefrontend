import React, { useState, useRef } from "react";
import "../BecomeSellerStepFive/BecomeSellerStepFive.css";
// import Select, { components } from "react-select";
// import { useNavigate } from "react-router-dom";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import BecomeSellerBar from "../BecomeSellerBar/BecomeSellerBar";
import step6 from "../../images/step6.png";
import { useNavigate } from "react-router-dom";

const BecomeSellerStepFive = () => {
  const navigate = useNavigate();

  const navRef = useRef();

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div>
        <TalentNavbar ref={navRef} />
      </div>
      <div
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
        className="seller-progress-bar-container"
      >
        <BecomeSellerBar stepCount={5} />
      </div>
      <div className="become-seller-six-top-heading">
        {/* Mobile App Development Gig Has been Published! */}
        Gig Has been Published!
      </div>
      <div
        className="become-seller-six-container"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="become-seller-six-left-container">
          <span>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
            justo, scelerisque et euismod sit amet, eleifend quis magna. Sed
            fringilla, est at volutpat sodales, nisl eros tristique sapien, ut
            gravida urna lorem a odio. Sed bibendum lacinia nisl, sit amet
            blandit velit porta ultrices. Pellentesque vehicula maximus augue,
            id consequat mi. Aenean eget ju
          </span>
          <div className="become-seller-six-btn-container">
            <div className="become-seller-six-btn"
              onClick={() => navigate("/manage-gigs")}
            >Done</div>
          </div>
        </div>
        <div className="become-seller-six-right-container">
          <img src={step6} alt="Beome-seller" />
        </div>
      </div>
    </div>
  );
};

export default BecomeSellerStepFive;
