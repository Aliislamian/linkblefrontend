import React, { useState, useEffect } from "react";
import "../BuyerNavbar/BuyerNavbar.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import NotificationIcon from "../../images/notification.png";
import ProfilePicIcon from "../../images/profilepic.png";
import AyazImage from "../../images/Ayaz.png";
import { useNavigate } from "react-router-dom";
import ToolTip from "../ToolTip/ToolTip";

// app runing now ddd
const BuyerNavbar = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main_nav_bar_div">
      <div className="sub_navbar_logo_main">
        <img src={logo} alt="logo image" className="logo_navbar_css" />
      </div>
      <div className="Main_search_bar_buyer">
        <div className="Search_icon_main">
          <img src={search} alt="searchIcon" className="searchIcon_css" />
        </div>
        <div className="input_field_main">
          <input
            type="search"
            placeholder="Search for any service..."
            className="search_input_text_field"
          />
        </div>
        <div className="SearcchButton">Get Started</div>
      </div>
      <div className="BuyerSearchBar_Options_main">
        <div className="subMain_BuyerSearchBar_Options">
          <div
            className="DashBoard_option_div"
            onClick={() => navigate("/buyerhome")}
          >
            Dashboard
          </div>
          <div
            className="Chat_Orders_preferences"
            onClick={() => navigate("/chat")}
          >
            Chat
          </div>
          <div
            className="Chat_Orders_preferences"
            onClick={() => navigate("/buyerorders")}
          >
            Orders
          </div>
          <div
            className="Chat_Orders_preferences"
            onClick={() => navigate("/preferences")}
          >
            Preferences
          </div>
          <div className="NotificationIcon_main">
            <img
              src={NotificationIcon}
              alt="icon"
              className="NotificationIcon_css"
              onClick={() => setShowToolTip(!showToolTip)}
            />
            {showToolTip && <ToolTip />}
          </div>
          <div className="ProfilePic_IconMain">
            <img src={AyazImage} alt="icon" className="ProfilePictureIcon" />
            <div className="active_dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerNavbar;
