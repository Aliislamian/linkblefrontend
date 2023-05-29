import React, { useState } from "react";
import "../GuestHome/GuestHome.css";
import GuestHeader from "../GuestHeader/GuestHeader";
import JoinNowPopUp from "../JoinNowPopUp/JoinNowPopUp";
import ModeSelectPopup from "../ModeSelectPopup/ModeSelectPopup";
import { useNavigate } from "react-router-dom";

const GuestHome = () => {
  const [showJoinPopUp, setShowJoinPopUp] = useState(false);
  const [showModePopup, setShowModePopup] = useState(false);

  const navigate = useNavigate();

  const handlePopUp = () => {
    setShowJoinPopUp(!showJoinPopUp);
  };

  const SignInFunction = () => {
    setShowModePopup(true);
    setShowJoinPopUp(false);
  };

  const crossIconFunction = () => {
    setShowModePopup(false);
  };

  const BuyerFunction = () => {
    navigate("/buyerhome");
  };

  return (
    <div>
      <GuestHeader
        JoinPopUp={handlePopUp}
        BecomeTalentOption={"Become Talent"}
        SignInOption={"Sign in"}
        JoinNowOption={"Join Now"}
        EnglishOption={"English"}
        USDOption={"USD"}
      />
      {/* <GuestOptions />   */}
      <JoinNowPopUp
        showPopUp={showJoinPopUp}
        hidePopUp={() => setShowJoinPopUp(false)}
        handleSignIn={() => SignInFunction()}
      />
      {/* <GuestHomeSearch /> */}
      <ModeSelectPopup
        showModePopup={showModePopup}
        hideModePopup={() => setShowModePopup(false)}
        handleCrossIcon={() => crossIconFunction()}
        handleBuyer={() => BuyerFunction()}
      />
    </div>
  );
};

export default GuestHome;
