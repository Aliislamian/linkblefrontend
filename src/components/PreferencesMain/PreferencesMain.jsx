import React, { useRef, useState } from "react";
import "../PreferencesMain/PreferencesMain.css";
import Navbar from "../../components/MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import { MoreVert } from "@material-ui/icons";
import { Card, CardMedia, IconButton, Typography, Box } from "@mui/material";
import { CardHeader } from "@mui/material";
import FavoriteCardImage1 from "../../images/fvrtone.png";
import FavirouteImage2 from "../../images/two.png";
import FavirouteImage3 from "../../images/fvrtthree.png";
import Path from "../../images/Path.png";
import ServicesCardComponent from "../ServicesCardComponent/ServicesCardComponent";
import RecomendedServicesCard from "../RecomendedServicesCardComponent/RecomendedServicesCard";
import BuyerFooter from "../BuyerFooter/BuyerFooter";
import LinkedJobPopup from "../LinkedJobPopup/LinkedJobPopup";
import { useNavigate } from "react-router-dom";
import ProMultiItemCarousel from "../ProfessionalServicesCard/ProMultiItemCrousel";
import MultiItemCarousel from "../ServicesCard/MultiItemCrousel";

const PreferencesMain = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [showLinkedPopup, setShowLinkedPopup] = useState(false);

  const handleSubmitLinkedJobListFunc = () => {
    navigate("/preferencesresult");
  };

  return (
    <div>
      <div>
        <LinkedJobPopup
          showPopup={showLinkedPopup}
          hidePopup={() => setShowLinkedPopup(false)}
          title={"Add New List"}
          heading={"Add new list and talents"}
          FirstInputLabel={"List Name"}
          SecondInputLabel={"Details"}
          opt={"(opt)"}
          SubmitBtn={"Create List"}
          CancelBtn={"Cancel"}
          handelSubmitBtn={() => handleSubmitLinkedJobListFunc()}
          Navigation={"/preferences-list"}
        />
      </div>
      <div>
        <Navbar ref={navRef} />
      </div>
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div>
          <GuestOptions />
        </div>
        <div className="preferneces_main_div">
          <div className="my_fvrt_main_div">My Favorites</div>
          <p className="fvrts_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
            justo, scelerisque et euismod sit amet, eleifend quis magna.
            scelerisque et euismod sit amet, eleifend quis magna scelerisque et
            euismod sit amet.
          </p>
          <div className="fvrts_services_headings">Favorites Services</div>
          <div className="favorite-series-container">
            <div className="fvrt_card_main">
              <div className="card_heading_with_icon">
                <div className="heading_name_div">Mobile App UIUX</div>
                <div className="icon_More_div">
                  <MoreVert />
                </div>
              </div>
              <div className="total_services_div">Services (2)</div>
              <div className="fvrt_card_images_main">
                <div className="vertical_img_div">
                  <img
                    src={FavoriteCardImage1}
                    alt="img"
                    className="vertical_img_css"
                  />
                </div>
                <div className="rest_two_images">
                  <div className="fvrt_card_above_imge">
                    <img
                      src={FavirouteImage2}
                      alt="img"
                      className="above_img_css"
                    />
                  </div>
                  <div className="fvrt_card_below_img">
                    <img
                      src={FavirouteImage3}
                      alt="img"
                      className="below_img_css"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="Add_new_list_main">
              <div className="add_new_list_text_css">Add New List</div>
              <div className="plus_main">
                <div
                  className="plus_css"
                  onClick={() => setShowLinkedPopup(true)}
                >
                  <img src={Path} alt="icon" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Services_card_component_div">
          <ServicesCardComponent
            title={"Continue browsing history"}
            subTitle={"Recently viewed Services"}
          />
        </div>
        <div>
          {/* <RecomendedServicesCard title={"Recommended for you, from USA"} /> */}
          <MultiItemCarousel
            CarouselTitle="Recommended for you, from USA"
            CarouselAllServices="null"
          />
        </div>
        <div>
          {/* <RecomendedServicesCard title={"Most popular Gigs in UX Design "} /> */}
          <MultiItemCarousel
            CarouselTitle="Most popular Gigs in UX Design"
            CarouselAllServices="null"
          />
        </div>
        <div>
          <BuyerFooter />
        </div>
      </span>
    </div>
  );
};

export default PreferencesMain;
