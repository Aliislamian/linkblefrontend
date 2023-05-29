import React, { useState } from "react";
import "../GuestHeader/GuestHeader.css";
import logo from "../../images/logo.png";
import dollar from "../../images/dollar.png";
import globe from "../../images/globe.png";
// import JoinNowPopUp from "../JoinNowPopUp/JoinNowPopUp";
// import ModeSelectPopup from "../ModeSelectPopup/ModeSelectPopup";
// import JoinNowPopUp from "../JoinNowPopUp/JoinNowPopUp";
// import styled from "styled-components";
// import HamburgerMenuIcon from '../../images/hamburger.png'

const GuestHeader = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div>
      <div className="main_div">
        <div className="sub_main_one">
          <div className="logo_div">
            <img src={logo} alt="logo" className="buyer-nav-logo" />
          </div>
        </div>
        <div className="sub_main_two">
          <div className="header_buttons" onClick={() => props.JoinSignUp()}>
            {props.BecomeTalentOption}
          </div>
          <div className="header_buttons" onClick={() => props.JoinPopUp()}>
            {props.SignInOption}
          </div>
          <div className="join_main_button" onClick={() => props.JoinSignUp()}>
            {props.JoinNowOption}
          </div>
          <div
            className="English_Dollar_button_main"
            onClick={props.handleLanguagePopUp}
          >
            <img
              src={globe}
              alt="globe"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <p style={{ paddingLeft: "10px" }}>{props.EnglishOption}</p>
          </div>
          <div
            className="English_Dollar_button_main"
            onClick={props.handleCurrencyPopUp}
          >
            <img
              src={dollar}
              alt="dollar"
              style={{ height: "1.2rem", width: "1rem" }}
            />

            <p style={{ paddingLeft: "7px" }}>{props.USDOption}</p>
          </div>
        </div>
        <div
          className="menu_icon_main"
          onClick={() => {
            handleMenuToggle();
            props.handlePopUps();
          }}
        >
          <i
            className={"fas fa-bars icon_Css"}
            style={{ color: "black", fontSize: "30px", marginTop: "5px" }}
          />
          {/* <img src={HamburgerMenuIcon} alt="menu icon" className="icon_Css" /> */}
        </div>
        {menuToggle && (
          <div className="dropdown_menu_main">
            <div className="menu_logo_div">
              <img src={logo} alt="logo" className="menu_logo" />
            </div>
            <div className="menu_first_heading_css">
              {props.BecomeTalentOption}
            </div>
            <div
              className="menu_second_heading_css"
              onClick={() => {
                props.JoinPopUp();
                handleMenuToggle();
              }}
            >
              {props.SignInOption}
            </div>
            <div
              className="menu_third_heading_css"
              onClick={() => {
                props.JoinSignUp();
                handleMenuToggle();
              }}
            >
              {props.JoinInOption}
            </div>
            <div
              className="menu_fourth_heading_css"
              onClick={() => {
                handleMenuToggle();
                props.handleLanguagePopUp();
              }}
            >
              <p>{props.EnglishOption}</p>
            </div>
            <div
              className="menu_fifth_heading_css"
              onClick={() => {
                handleMenuToggle();
                props.handleCurrencyPopUp();
              }}
            >
              <p>{props.USDOption}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestHeader;
