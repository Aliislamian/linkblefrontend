import React, { useRef } from "react";
import Navbar from "../MyNav/Navbar";
import "./Guidance.css";
import GuestOptions from "../GuestOptions/GuestOptions";
import PostService from "../../images/PostService.png";
import HireTalent from "../../images/HireTalent.png";
import PaySecurely from "../../images/PaySecurely.png";
import Delivery from "../../images/Delivery.png";
const Guidance = () => {
  const navRef = useRef();
  return (
    <div>
      <Navbar ref={navRef} />
      <div
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />
      </div>

      <div className="guidance-main-container">
        <div className="guidace-upper-text">How it works?</div>
        <div className="guidance-steps-parent-div">
          <div className="guidance-steps-div">
            <div className="guidance-steps-logo-1">
              <img src={PostService} alt="post service logo" />
            </div>
            <div className="guidance-steps-heading">Post a service</div>
            <div className="guidance-steps-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
              Sed fringilla, est at volutpat sodales,
            </div>
          </div>
          <div className="guidance-steps-div">
            <div className="guidance-steps-logo-2">
              <img src={HireTalent} alt="Hire talent logo" />
            </div>
            <div className="guidance-steps-heading">Hire Best Talent</div>

            <div className="guidance-steps-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
              Sed fringilla, est at volutpat sodales,
            </div>
          </div>
          <div className="guidance-steps-div">
            <div className="guidance-steps-logo-3">
              <img src={PaySecurely} alt="Pay Securely Logo" />
            </div>
            <div className="guidance-steps-heading">Pay securely</div>

            <div className="guidance-steps-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
              Sed fringilla, est at volutpat sodales,
            </div>
          </div>
          <div className="guidance-steps-div">
            <div className="guidance-steps-logo-4">
              <img src={Delivery} alt="Delivery log" />
            </div>
            <div className="guidance-steps-heading">Get delivery</div>

            <div className="guidance-steps-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
              Sed fringilla, est at volutpat sodales,
            </div>
          </div>
        </div>
        <div className="guidace-lower-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
          justo, scelerisque et euismod sit amet, eleifend quis magna.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Duis magna justo,
          scelerisque et euismod sit amet, eleifend quis magna.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Duis magna justo, scelerisque
          et euismod sit amet, eleifend quis magna.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis magna justo, scelerisque et euismod
          sit amet, eleifend quis magna.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis magna justo, scelerisque et euismod sit amet,
          eleifend quis magna.
        </div>
      </div>
    </div>
  );
};

export default Guidance;
