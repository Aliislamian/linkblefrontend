import React from "react";
import "../GuestStarter/GuestStarter.css";
import logo from "../../images/logo.png";
import Group1 from "../../images/Group1.png";
import Group2 from "../../images/Group2.png";
import { useNavigate } from "react-router-dom";
const GuestStarter = () => {
  let navigate = useNavigate();
  const handleBuyingServices = () => {
    navigate("/guesthome");
  };
  const handleTalentClick = () => {
    navigate("/talent-gig-earning-info");
  };

  return (
    <div className="main_guest_starter">
      <div className="guest_starter_logo">
        <img src={logo} alt="logo" className="guest_starter_logo_image" />
      </div>
      <div className="get_started_text">Get Started as</div>
      <div className="main_two_boxes">
        <div className="box_one" onClick={handleBuyingServices}>
          <div className="both_boxes_images_div">
            <img src={Group1} alt="Group1" className="both_Group_image" />
          </div>
          <div className="first_box_text">Buying Services</div>
        </div>
        <div className="box_second" onClick={handleTalentClick}>
          <div className="both_boxes_images_div">
            <img src={Group2} alt="Group2" className="both_Group_image" />
          </div>
          <div className="second_box_text">Talent</div>
        </div>
      </div>
    </div>
  );
};

export default GuestStarter;
