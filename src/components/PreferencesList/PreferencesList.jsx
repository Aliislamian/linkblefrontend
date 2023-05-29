import React, { useRef } from "react";
import "./PreferencesList.css";
import Navbar from "../../components/MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import BlackEditIcon from "../../images/BlackEditIcon.png";
import BlackShareIcon from "../../images/BlackShareIcon.png";
import RedDeleteIcon from "../../images/RedDeleteIcon.png";
import CardServices from "./Card";
import ServicesCardComponent from "../ServicesCardComponent/ServicesCardComponent";
import BuyerFooter from "../BuyerFooter/BuyerFooter";

// import { Card } from "reactstrap";
import six from "../../images/six.png";
import seven from "../../images/seven.png";

const PreferencesList = () => {
  const Services = [
    {
      subject: "expert mixing and mastering engineer",
      image: six,
    },
    {
      subject: "engaging article or blog post",
      image: seven,
    },
  ];

  const navRef = useRef();
  return (
    <div>
      <Navbar ref={navRef} />{" "}
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />

        <div className="preferences-list-top-container">
          <div className="preferences-list-heading">Preferences</div>
          <div className="preferences-top-paragraph-div">
            <p className="preferences-top-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
            </p>
          </div>
        </div>

        <div className="favourite-lists-container">
          <div className="favourite-list-top-container">
            <div className="preferences-list-heading">App development</div>
            <div className="favourite-list-icons-div">
              <div className="favourite-list-icons">
                <img
                  src={BlackShareIcon}
                  alt="share icon"
                  className="favourite-list-share-icon"
                />
              </div>
              <div className="favourite-list-icons">
                <img
                  src={RedDeleteIcon}
                  alt="delete icon"
                  className="favourite-list-delete-icon"
                />
              </div>
              <div className="favourite-list-icons">
                <img
                  src={BlackEditIcon}
                  alt="edit icon"
                  className="favourite-list-edit-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="preference-list-hr" />
        <div className="favourite-list-card-container">
          {Services.map((item) => {
            return <CardServices data={item} />;
          })}
        </div>
        <hr className="preference-list-hr" />
        <ServicesCardComponent
          title={"Talents You might also like"}
          //   subTitle={"Recently viewed Services"}
        />

        <BuyerFooter />
      </span>
    </div>
  );
};

export default PreferencesList;
