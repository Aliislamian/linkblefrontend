import GuestOptions from "../GuestOptions/GuestOptions";
import Navbar from "../MyNav/Navbar";
import BuyerNavbar from '../BuyerNavbar/BuyerNavbar';
import GuestHeader from '../GuestHeader/GuestHeader';
import GuestNavbar from '../CompleteGuestNavbar/GuestNavbar';

import GuestHomeSearch from "../GuestHomeSearch/GuestHomeSearch";
import ServicesCard from "../ServicesCard/ServicesCard";
import MultiItemCarousel from "../ServicesCard/MultiItemCrousel";
import ProMultiItemCarousel from "../ProfessionalServicesCard/ProMultiItemCrousel";
import ServicesCardComponent from "../ServicesCardComponent/ServicesCardComponent";
import UltimateServices from "../UltimateServices/UltimateServices";
import Slider from "../Slider/Index";
import Footer from "../Footer/Footer";
// import SuggestedServices from "../SuggestedServices/SuggestedServices";

import React, { useState } from "react";

const FullNav = () => {
  // const [showJoinPopUp, setShowJoinPopUp] = useState(false);
  // const [showModePopup, setShowModePopup] = useState(false);

  // const navigate = useNavigate();

  // const handlePopUp = () => {
  //   setShowJoinPopUp(!showJoinPopUp);
  // };


  return (
    <div style={{overflow:"hidden"}}>
      {/* <Navbar /> */}
      {/* <BuyerNavbar /> */}
      {/* <GuestHeader /> */}
      {/* <GuestHeader
        JoinPopUp={handlePopUp}
        BecomeTalentOption={"Become Talent"}
        SignInOption={"Sign in"}
        JoinNowOption={"Join Now"}
        EnglishOption={"English"}
        USDOption={"USD"}
      /> */}
      <GuestNavbar/>
      <GuestOptions />
      <GuestHomeSearch/>
      {/* <ServicesCard/> */}
      <MultiItemCarousel/>
      <ProMultiItemCarousel/>
      <ServicesCardComponent/>
      <Slider/>
      <UltimateServices/>
      <Footer/>
      {/* <SuggestedServices/> */}
    </div>
  );
};

export default FullNav;
