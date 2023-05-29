import React from "react";
import "../Footer/Footer.css";
import FooterCard from "./FooterCard";
import Footer1 from "../../images/footer1.png";
import Footer2 from "../../images/footer2.png";
import Footer3 from "../../images/footer3.png";
import Footer4 from "../../images/footer4.png";
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

const Footer = () => {
  const Services = [
    {
      image: Footer1,
      title: "Post a Service",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti nihil vel corrupti Praesentium doloremque minus quia adipisci, dolorum itaque corrupti cupiditate vitae, voluptatem blanditiis esse.",
    },
    {
      image: Footer2,
      title: "Hire Best Talent",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti nihil vel corrupti Praesentium doloremque minus quia adipisci, dolorum itaque corrupti cupiditate vitae, voluptatem blanditiis esse.",
    },
    {
      image: Footer3,
      title: "Pay securely",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti nihil vel corrupti Praesentium doloremque minus quia adipisci, dolorum itaque corrupti cupiditate vitae, voluptatem blanditiis esse.",
    },
    {
      image: Footer4,
      title: "Get Delivery",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias deleniti nihil vel corrupti Praesentium doloremque minus quia adipisci, dolorum itaque corrupti cupiditate vitae, voluptatem blanditiis esse.",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="footer_main">
      <div className="footer_above_text">
        With one click hire the best Talents
      </div>
      <div className="footer_card">
        {Services.map((item) => {
          return <FooterCard data={item} />;
        })}
      </div>
      <div className="column_main">
        <div className="column">
          <div className="columns_tag">Linkeble</div>
          <div className="headings">Categories</div>
          <div
            className="headings"
            onClick={() => navigate("/programmingservices")}
          >
            Projects
          </div>
          <div className="headings" onClick={() => navigate("/submitrequest")}>
            Service request
          </div>
          <div className="headings">Top Services</div>
        </div>
        <div className="column">
          <div className="columns_tag">About</div>
          <div className="headings" onClick={() => navigate("/about")}>
            About us
          </div>
          <div className="headings" onClick={() => navigate("/guidancepage")}>
            How it works?
          </div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>
            News
          </div>
          <div className="headings">Jobs</div>
        </div>
        <div className="column">
          <div className="columns_tag">Terms</div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>
            Privacy Policy
          </div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>
            Terms and Conditions
          </div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>
            Fees and Charges
          </div>
          <div className="headings" onClick={() => navigate("/privacypolicy")}>
            Copyright Policy
          </div>
        </div>
      </div>
      <div className="column_below_main">
        <div className="column_below_text">Get the Linkeble App Now on:</div>
        <div className="images_main">
          <img src={AppStoreImage} alt="App Store" className="AppGoogleStore" />
          <img
            src={GooglePlayStore}
            alt="Play Store"
            className="AppGoogleStore"
          />
        </div>
      </div>
      <div className="social_sites_main">
        <div className="social_icon_image">
          <img src={Facebook} alt="facebook icon" className="icons_css" />
        </div>
        <div className="social_icon_image">
          <img src={Youtube} alt="youtube_icon" className="icons_css" />
        </div>
        <div className="social_icon_image">
          <img src={Twiter} alt="twiter_icon" className="icons_css" />
        </div>
        <div className="social_icon_image">
          <img src={Instagram} alt="instagram_icon" className="icons_css" />
        </div>
        <div className="social_icon_image">
          <img
            src={Notification}
            alt="notification_icon"
            className="icons_css"
          />
        </div>
      </div>
      <div
        className="top_main"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img src={TopIcon} alt="icon" className="top_icon_css" />
        Top
      </div>
      <div className="last_one_main">
        <div className="linkeble_logo">
          <img src={logo} alt="linkeble logo" className="footer-nav-logo" />
        </div>
        <div className="center_bottom_text">
          Linkeble ® is a registered Trademark of Linkeble Technology <br />
          Copyright © 2021 Linkeble Technology
        </div>
        <div className="English_USD_main">
          <div className="English_Dollar_button_sub_main">
            <img
              src={GlobeImage}
              alt="globe"
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <p style={{ paddingLeft: "10px", color: "white" }}>English</p>
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

export default Footer;
