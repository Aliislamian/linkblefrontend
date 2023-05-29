import React, { useState } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import "../GuestHome/GuestHome.css";
import GuestHeader from "../GuestHeader/GuestHeader";
import JoinNowPopUp from "../JoinNowPopUp/JoinNowPopUp";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";
import ModeSelectPopup from "../ModeSelectPopup/ModeSelectPopup";
import LanguagePopUp from "../LanguagePopUp/LanguagePopUp";
// import CurrencyPopUp from "../CurrencyPopUp/CurrencyPopUp";
import CurrencyPopUp from "../CurrencyPopUp/CurrencyPopUp";
import EmailVerification from "../ForgetPassword/EmailVerification/EmailVerification";
import SmsVerification from "../ForgetPassword/SmsVerification/SmsVerification";
import ResetPassword from "../ForgetPassword/ResetPassword/ResetPassword";
import { useNavigate } from "react-router-dom";

const GuestNavbar = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleSignUp() {
      setShowSignUpPopUp(!showSignUpPopUp);
      setShowJoinPopUp(false);
      setShowModePopup(false);
      setShowEmailPopUp(false);
      setshowSmsVerificationPopUp(false);
      setShowResetPassword(false);
    },
  }));
  const [showJoinPopUp, setShowJoinPopUp] = useState(false);
  const [showSignUpPopUp, setShowSignUpPopUp] = useState(false);
  const [showModePopup, setShowModePopup] = useState(false);
  const [showLanguagePopUp, setShowLanguagePopUp] = useState(false);
  const [showCurrencyPopUp, setShowCurrencyPopUp] = useState(false);
  const [showEmailPopUp, setShowEmailPopUp] = useState(false);
  const [showSmsVerificationPopUp, setshowSmsVerificationPopUp] =
    useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const navigate = useNavigate();

  const handlePopUp = () => {
    setShowJoinPopUp(!showJoinPopUp);
    setShowSignUpPopUp(false);
    setShowModePopup(false);
    setShowEmailPopUp(false);
    setshowSmsVerificationPopUp(false);
    setShowResetPassword(false);
  };
  const handleSignUp = () => {

    setShowSignUpPopUp(!showSignUpPopUp);
    setShowJoinPopUp(false);
    setShowModePopup(false);
    setShowEmailPopUp(false);
    setshowSmsVerificationPopUp(false);
    setShowResetPassword(false);
  };
  const handleSignInHere = () => {
    setShowSignUpPopUp(false);
    setShowJoinPopUp(true);
  };
  const handleJoinNow = () => {
    setShowSignUpPopUp(true);
    setShowJoinPopUp(false);
  };

  const SignInFunction = () => {
    setShowModePopup(true);
    setShowJoinPopUp(false);
    setShowSignUpPopUp(false);
  };
  const handleForgetPassword = () => {
    setShowEmailPopUp(true);
    setShowModePopup(false);
    setShowJoinPopUp(false);
    setShowSignUpPopUp(false);
  };
  const handlePopUps = () => {
    setShowSignUpPopUp(false);
    setShowJoinPopUp(false);
  };
  const handleLanguagePopUp = () => {
    setShowLanguagePopUp(!showLanguagePopUp);
  };
  const handleCurrencyPopUp = () => {
    setShowCurrencyPopUp(!showCurrencyPopUp);
  };

  const crossIconFunction = () => {
    setShowModePopup(false);
  };

  const BuyerFunction = () => {
    navigate("/buyerhome");
  };
  const TalentFunction = () => {
    navigate("/talent-home");
  };
  const handleSendCode = () => {
    //second form link
    // navigate("/mynav");
    setShowEmailPopUp(false);
    setshowSmsVerificationPopUp(true);
  };
  // const handleResetPassword = () => {
  //   //second form link
  //   // navigate("/mynav");
  //   setshowSmsVerificationPopUp(false);
  //   setShowResetPassword(true);
  // };
  const handleVerify = () => {
    //second form link
    setshowSmsVerificationPopUp(false);
    setShowResetPassword(true);
  };
  const handleChangePassword = () => {
    //second form link
    setShowJoinPopUp(true);
    setShowResetPassword(false);
  };

  return (
    <div>
      <GuestHeader
        JoinPopUp={handlePopUp}
        JoinSignUp={handleSignUp}
        handlePopUps={handlePopUps}
        handleLanguagePopUp={handleLanguagePopUp}
        handleCurrencyPopUp={handleCurrencyPopUp}
        BecomeTalentOption={"Become Talent"}
        SignInOption={"Sign in"}
        JoinNowOption={"Join Now"}
        JoinInOption={"Join Now"}
        EnglishOption={"English"}
        USDOption={"USD"}
      />
      {/* <GuestOptions />   */}
      <JoinNowPopUp
        showPopUp={showJoinPopUp}
        hidePopUp={() => setShowJoinPopUp(false)}
        handleSignIn={() => SignInFunction()}
        handleForgetPassword={() => handleForgetPassword()}
        handleJoinNow={handleJoinNow}
      />
      <SignUpPopUp
        showSignUpPopUp={showSignUpPopUp}
        hideSignUpPopUp={() => setShowSignUpPopUp(false)}
        handleSignUp={() => SignInFunction()}
        handleSignInHere={handleSignInHere}
      />
      {/* <GuestHomeSearch /> */}
      <ModeSelectPopup
        showModePopup={showModePopup}
        hideModePopup={() => setShowModePopup(false)}
        handleCrossIcon={() => crossIconFunction()}
        handleBuyer={() => BuyerFunction()}
        handleTalent={() => TalentFunction()}
      />
      <LanguagePopUp
        showLanguagePopUp={showLanguagePopUp}
        // hideModePopup={() => setShowModePopup(false)}
        handleCrossIcon={() => setShowLanguagePopUp(false)}
        handleBuyer={() => BuyerFunction()}
      />
      <CurrencyPopUp
        showCurrencyPopUp={showCurrencyPopUp}
        // hideModePopup={() => setShowModePopup(false)}
        handleCrossIcon={() => setShowCurrencyPopUp(false)}
        handleBuyer={() => BuyerFunction()}
      />
      <EmailVerification
        showEmailPopUp={showEmailPopUp}
        hideModePopup={() => setShowEmailPopUp(false)}
        handleCrossIcon={() => setShowEmailPopUp(false)}
        handleSendCode={() => handleSendCode()}
      />
      <SmsVerification
        showSmsVerificationPopUp={showSmsVerificationPopUp}
        // hideModePopup={() => setshowSmsVerificationPopUp(false)}
        handleCrossIcon={() => setshowSmsVerificationPopUp(false)}
        handleVerify={() => handleVerify()}
        handleVerifyBackEvent={() => {
          setshowSmsVerificationPopUp(false);
          setShowEmailPopUp(true);
        }}
      />
      <ResetPassword
        showResetPassword={showResetPassword}
        // hideModePopup={() => setshowSmsVerificationPopUp(false)}
        handleCrossIcon={() => setShowResetPassword(false)}
        handleChangePassword={() => handleChangePassword()}
        handleResetPasswordBackEvent={() => {
          setshowSmsVerificationPopUp(true);
          setShowResetPassword(false);
        }}
        handleSendCode={() => handleSendCode()}
      />
    </div>
  );
});

export default GuestNavbar;
