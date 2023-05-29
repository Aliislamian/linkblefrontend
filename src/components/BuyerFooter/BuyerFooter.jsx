import React from "react";
import "../BuyerFooter/BuyerFooter.css";
import AppStoreImage from "../../images/appstore.png";
import GooglePlayStore from "../../images/googleplay.png";
import Facebook from "../../images/facebook.png";
import Youtube from "../../images/youtube.png";
import Twiter from "../../images/twiter.png";
import Instagram from "../../images/instagram.png";
import Notification from "../../images/bellicon.png";
import TopIcon from "../../images/topicon.png";
import logo from "../../images/logo.png";
import DollarImage from "../../images/whitedollar.png";
import GlobeImage from "../../images/whiteglobe.png";
import { useNavigate } from "react-router-dom";

const BuyerFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="Buyer_footer_main">
      <div className="Buyer_column_main">
        <div className="Buyer_column">
          <div className="Buyer_columns_tag">Linkeble</div>
          <div className="Buyer_headings"
          >Categories</div>
          <div className="Buyer_headings"
            onClick={() => navigate("/programmingservices")}
          >Projects</div>
          <div className="Buyer_headings"
            onClick={() => navigate("/submitrequest")}>Service request</div>
          <div className="Buyer_headings">Top Services</div>
        </div>
        <div className="column">
          <div className="columns_tag">About</div>
          <div className="headings" onClick={() => navigate("/about")}>About us</div>
          <div className="headings" onClick={() => navigate("/guidancepage")}>How it works?</div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>News</div>
          <div className="headings">Jobs</div>
        </div>
        <div className="column">
          <div className="columns_tag">Terms</div>
          <div className="headings" onClick={() => navigate("/privacypolicy")} >Privacy Policy</div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>Terms and Conditions</div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>Fees and Charges</div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>Copyright Policy</div>
        </div>
      </div>
      <div className="Buyer_column_below_main">
        <div className="Buyer_column_below_text">
          Get the Linkeble App Now on:
        </div>
        <div className="Buyer_images_main">
          <img
            src={AppStoreImage}
            alt="App Store"
            className="Buyer_AppGoogleStore"
          />
          <img
            src={GooglePlayStore}
            alt="Play Store"
            className="Buyer_AppGoogleStore"
          />
        </div>
      </div>
      <div className="Buyer_social_sites_main">
        <div className="Buyer_social_icon_image">
          <img src={Facebook} alt="facebook icon" className="Buyer_icons_css" />
        </div>
        <div className="social_icon_image">
          <img src={Youtube} alt="youtube_icon" className="Buyer_icons_css" />
        </div>
        <div className="social_icon_image">
          <img src={Twiter} alt="twiter_icon" className="Buyer_icons_css" />
        </div>
        <div className="social_icon_image">
          <img
            src={Instagram}
            alt="instagram_icon"
            className="Buyer_icons_css"
          />
        </div>
        <div className="social_icon_image">
          <img
            src={Notification}
            alt="notification_icon"
            className="Buyer_icons_css"
          />
        </div>
      </div>
      <div
        className="Buyer_top_main"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img src={TopIcon} alt="icon" className="Buyer_top_icon_css" />
        Top
      </div>
      <div className="Buyer_last_one_main">
        <div className="Buyer_linkeble_logo">
          <img src={logo} alt="linkeble logo" className="Buyer_logo_css" />
        </div>
        <div className="Buyer_center_bottom_text">
          Linkeble ® is a registered Trademark of Linkeble Technology <br />
          Copyright © 2021 Linkeble Technology
        </div>
        <div className="Buyer_English_USD_main">
          <div className="Buyer_English_Dollar_button_sub_main">
            <img
              src={GlobeImage}
              alt="globe"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <p style={{ paddingLeft: "7px", color: "white" }}>English</p>
          </div>
          <div className="English_Dollar_button_sub_main">
            <img
              src={DollarImage}
              alt="dollar"
              style={{ height: "1.2rem", width: "1rem" }}
            />
            <p style={{ paddingLeft: "7px", color: "white" }}>USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerFooter;
