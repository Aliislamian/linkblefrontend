import "../ExplorePage/ExplorePage.css";
import React, { useState, useRef } from "react";
import GuestOptions from "../../components/GuestOptions/GuestOptions";
import Navbar from "../../components/MyNav/Navbar";
import GuestHomeSearch from "../../components/GuestHomeSearch/GuestHomeSearch";
// import ServicesCard from "../../components/ServicesCard/ServicesCard";
import MultiItemCarousel from "../../components/ServicesCard/MultiItemCrousel";
import ProMultiItemCarousel from "../../components/ProfessionalServicesCard/ProMultiItemCrousel";
import ServicesCardComponent from "../../components/ServicesCardComponent/ServicesCardComponent";
import UltimateServices from "../../components/UltimateServices/UltimateServices";
import Slider from "../../components/Slider/Index";
import Footer from "../../components/Footer/Footer";
// import SuggestedServices from "../SuggestedServices/SuggestedServices";
const GuestMainHome = () => {
  const navRef = useRef();
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar ref={navRef} />
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />
        <GuestHomeSearch />
        <MultiItemCarousel
          CarouselTitle="Recently Viewed Services"
          CarouselAllServices="View All"
        />
        <ProMultiItemCarousel
          CarouselTitle="Top rated Professional Services on Linkeble"
          CarouselAllServices="View All"
        />
        <ServicesCardComponent />
        <Slider />
        <UltimateServices />
        <Footer />
      </span>
    </div>
  );
};

export default GuestMainHome;

// const ExplorePage = () => {
//   return (
//     <div>
//     </div>
//   )
// }

// export default ExplorePage
