import GuestOptions from "../../components/GuestOptions/GuestOptions";
import Navbar from "../../components/MyNav/Navbar";
import GuestNavbar from "../../components/CompleteGuestNavbar/GuestNavbar";
import GuestHomeSearch from "../../components/GuestHomeSearch/GuestHomeSearch";
// import ServicesCard from "../../components/ServicesCard/ServicesCard";
import MultiItemCarousel from "../../components/ServicesCard/MultiItemCrousel";
import ProMultiItemCarousel from "../../components/ProfessionalServicesCard/ProMultiItemCrousel";
import ServicesCardComponent from "../../components/ServicesCardComponent/ServicesCardComponent";
import UltimateServices from "../../components/UltimateServices/UltimateServices";
import Slider from "../../components/Slider/Index";
import Footer from "../../components/Footer/Footer";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const GuestMainHome = () => {
  const childRef = useRef(null);
  const navigate = useNavigate();
  const handleCardClick = () => {
    childRef.current.handleSignUpp();
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['allServices'],
    queryFn: () =>
      newRequest.get("/guest/all-services").then
        ((res) => res.data), 

  })
  console.log(data);
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>




  return (
    <div style={{ overflow: "hidden" }}>
      <GuestNavbar ref={childRef} />
      <GuestOptions />
      <GuestHomeSearch />
      <MultiItemCarousel

        gigsData={data}
        CarouselTitle="Recently Viewed Services"
        CarouselAllServices="View All"
      />

      {/* <span onClick={() => navigate("/talent-about")}> */}
      <ProMultiItemCarousel
        // onClick={() => navigate("/talent-about")}
        // onClick={handleNav}
        CarouselTitle="Top rated Professional Services on Linkeble"
        CarouselAllServices="View All"
      />
      {/* </span> */}

      <ServicesCardComponent
        gigsData={data}
      />
      <Slider />
      <span>
        <UltimateServices handleCardClick={handleCardClick} />
      </span>
      <Footer />
      {/* <SuggestedServices/> */}
    </div>
  );
};

export default GuestMainHome;
