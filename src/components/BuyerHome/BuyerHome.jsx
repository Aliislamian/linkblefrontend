import React, { useState } from "react";
import BuyerNavbar from "../BuyerNavbar/BuyerNavbar";
import Navbar from "../MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import SubmitRequestCard from "../SubmitRequestCard/SubmitRequestCard";
import SubmitCardImage1 from "../../images/submitcardimg1.png";
import SubmitCardImage2 from "../../images/submitcardimg2.png";
import SubmitCardImage3 from "../../images/submitcardimg3.png";
import BuyerTabs from "../BuyerTab/BuyerTabs";
import MultiItemCarousel from "../../components/ServicesCard/MultiItemCrousel";
import ServicesCardComponent from "../ServicesCardComponent/ServicesCardComponent";
import CardServices from "../ServicesCard/Card";
import RecomendedServicesCard from "../RecomendedServicesCardComponent/RecomendedServicesCard";
import BuyerFooter from "../BuyerFooter/BuyerFooter";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const BuyerHome = () => {


  const [searchTerm, setSearchTerm] = useState("");

  const SubmitCardData = [
    {
      text1: "Hey Alexa Beck! Hire some one?",
      image: SubmitCardImage1,
      btntext: "Submit Request Now",
    },
    {
      text1: "Check out jobs you Have Posted",
      image: SubmitCardImage2,
      btntext: "Check Posted Jobs",
    },
    {
      text1: "Services You may need to order",
      image: SubmitCardImage3,
      btntext: "Explore",
    },
  ];

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
    <div>
      <div>
        <Navbar gigsData={data} 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
        />
      </div>
      <div>
        <GuestOptions />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SubmitRequestCard
          text1={"Hey Alexa Beck! Hire some one?"}
          imageCardone={SubmitCardImage1}
          Navigation1={"/submitrequest"}
          Navigation2={"/postjob"}
          Navigation3={"/explore"}
          btntextCardone={"Submit Request Now"}
          text2={"Check out jobs you Have Posted"}
          imageCardtwo={SubmitCardImage2}
          btntextCardtwo={"Check Posted Jobs"}
          text3={"Services You may need to order"}
          imageCardthree={SubmitCardImage3}
          btntextCardthree={"Explore"}
        />
      </div>
      <div style={{ marginBottom: "4rem" }}>
        <BuyerTabs CardNavigation={"/orderdetails"} />
      </div>
      <div>
        <ServicesCardComponent
          gigsData={data}
          title={"Continue browsing history"}
          subTitle={"Recently viewed Services"}
        />
      </div>
      <div>
     
  <MultiItemCarousel gigsData={data} />

        {/* <RecomendedServicesCard title={"Recommended for you, from USA"} /> */}
      </div>
      <div>
        {/* <RecomendedServicesCard title={"Most popular Gigs in UX Design "} /> */}
        <MultiItemCarousel
          gigsData={data}
        />
      </div>
      <BuyerFooter />
    </div>
  );
};

export default BuyerHome;
