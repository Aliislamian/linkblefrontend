import React from "react";
import "./BuyerProfilesList.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import backArrow from "../../images/backArrow.png";
import graySearch from "../../images/graySearch.png";
import fillDownIcon from "../../images/fillDownIcon.png";
import topicon from "../../images/topicon.png";
import tabprofileimg1 from "../../images/tabprofileimg1.png";
import whiteArrow from "../../images/whiteArrow.png";
import StarIcon from "@material-ui/icons/Star";

import { useRef } from "react";
import AllCategoryBtn from "../AllCategoryBtn/AllCategoryBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectOfferPopUP from "../SelectOfferPopUP/SelectOfferPopUP";
let buyersProfileData = [
  1, 2, 3, 4, 5, 6, 7, 7, 7, 81, 2, 3, 4, 5, 6, 7, 7, 7, 81, 2, 3, 4, 5, 6, 7,
  7, 7, 81, 2, 3, 4, 5, 6, 7, 7, 7, 8,
];
const BuyerProfilesList = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState(false);
  // const [offerPopUp, setOfferPopUp] = useState(false);

  return (

    <div>

      {/* {offerPopUp && <SelectOfferPopUP />} */}
      <span
        onClick={() => {
          setCategoryList(false);
        }}
      >

        <TalentNavbar ref={navRef} />
      </span>
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="buyer-profile-list-container">
          <div className="buyer-profile-list-top-container">
            <div className="buyer-profile-list-top-left-container">
              <div
                onClick={() => { navigate("/talent-home") }}
                className="account-security-back-btn-container"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={backArrow}
                  alt="arrow icon"
                  style={{ transform: "rotate(0deg)" }}
                />
                <div className="account-security-back-btn-text">Back</div>
              </div>
              <div className="buyer-profile-list-search-container">
                <label htmlFor="buyerProfileListSerach">
                  {" "}
                  <img src={graySearch} alt="icon" />
                </label>
                <input
                  type="text"
                  placeholder="Search for service here..."
                  name="buyerProfileListSerach"
                  id="buyerProfileListSerach"
                />
              </div>
            </div>
            <div className="buyer-profile-list-top-right-container">
              <div className="buyer-profile-all-btn-container">
                <div className="buyer-profile-all-btn-text">All</div>
                <img
                  src={fillDownIcon}
                  alt="icon"
                  className="buyer-profile-all-btn-icon"
                />
              </div>
              {/* <div className="buyer-profile-all-categories-btn-container">
                <div className="buyer-profile-all-categories-btn-text">
                  All Categories
                </div>
                <div className="buyer-profile-all-categories-btn-icon">
                  <img src={topicon} alt="arrow icon" />
                </div>
              </div> */}

              <span
                onClick={() => {
                  setCategoryList(!categoryList);
                }}
              >
                <AllCategoryBtn categoryList={categoryList} />
              </span>
            </div>
          </div>
          <div className="buyer-profile-list-bottom-container">
            {buyersProfileData.map((dat) => {
              return (
                ProfileCard()
              )
            })}
          </div>
        </div>
      </span>
    </div>
  );
};

const ProfileCard = () => {
  const navigate = useNavigate();
  return <div className="buyer-profile-list-item-container">
    <div className="buyer-profile-list-item-inner-container">
      <div className="buyer-profile-list-item-top-container">
        <div className="buyer-profile-list-item-top-img-container">
          <img src={tabprofileimg1} alt="profile" />
        </div>
        <div className="buyer-profile-list-item-top-info-container">
          <h2>Alexa Susan</h2>
          <div className="buyer-profile-list-item-top-info-rating">
            <div className="buyer-profile-list-item-top-info-rating-left">
              <StarIcon
                style={{ color: "#FFAB03", fontSize: "20px" }}
              />{" "}
              <div style={{ marginLeft: "2px" }}> (5)</div>
            </div>

            <div className="buyer-profile-list-item-top-info-rating-middle">
              |
            </div>
            <div className="buyer-profile-list-item-top-info-rating-right">
              United States
            </div>
          </div>
        </div>
      </div>
      <div className="buyer-profile-list-item-project-info-heading-container">
        <div className="buyer-profile-list-item-project-info-heading">
          Project Info
        </div>
        <div className="buyer-profile-list-item-project-info-heading">
          App Development
        </div>
      </div>
      <div className="buyer-profile-list-item-project-info-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis magna justo, scelerisque et euismod sit amet,
        eleifend quis magna. Sed fringilla, est at volutpat
        sodales, nisl eros tristique sapien, ut gravida urna lorem
        a odio.
      </div>
      <div className="buyer-profile-list-item-project-budget-container">
        <div className="buyer-profile-list-item-project-budget-div">
          <div className="buyer-profile-list-item-project-budget-heading">
            Budget
          </div>
          <div className="buyer-profile-list-item-project-budget-text">
            $ 350
          </div>
        </div>
        <div className="buyer-profile-list-item-project-budget-div">
          <div className="buyer-profile-list-item-project-budget-heading">
            Delivery Time
          </div>
          <div className="buyer-profile-list-item-project-budget-text">
            7 days
          </div>
        </div>
      </div>
      <div className="buyer-profile-list-item-btn-container"
        onClick={() => { navigate("/buyer-profile") }}
      >
        <div className="buyer-profile-list-item-btn-text"
        >
          Send Offer
        </div>
        <img src={whiteArrow} alt="arrow icon" />
      </div>
    </div>
  </div>
}

export default BuyerProfilesList;
