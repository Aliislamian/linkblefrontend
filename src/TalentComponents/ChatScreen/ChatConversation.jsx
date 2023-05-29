import React, { useEffect, useRef, useState } from "react";

import ChatScreen from "../../components/ChatScreen/ChatScreen.css";
import Picture from "../../images/profilepic.png";
import threeDots from "../../images/threeDots.png";
import tabprofileimg3 from "../../images/tabprofileimg3.png";
import designedDeleteIcon from "../../images/designedDeleteIcon.png";
import mailIcon from "../../images/mailIcon.png";
import verifiedicon from "../../images/verifiedicon.png";
import locationicon from "../../images/locationicon.png";
import sentTextIcon from "../../images/sentTextIcon.png";
import { StarBorder } from "@material-ui/icons";
import SelectServicePopUp from "../SelectServicePopUp/SelectServicePopUp";
import SelectPaymentPopUp from "../SelectPaymentPopUp/SelectPaymentPopUp";
import SelectOfferPopUP from "../SelectOfferPopUP/SelectOfferPopUP";
import CustomOffer from "../CustomOffer/CustomOffer";
import CustomOfferButton from "../../components/customOfferButton/CustomOfferButton";
import newRequest from "../../utils/newRequest";
const ChatConversation = (props) => {


  const [messageData, setMessageData] = useState([
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
    {
      img: Picture,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personOne message_text_container",
    },
    {
      img: tabprofileimg3,
      message: "Lorem ipsum dolor sit amet, consectetur",
      class: "personTwo message_text_container",
    },
  ]);
  const [servicePopUpState, setServicePopUpState] = useState(false);
  const [paymentPopUpState, setPaymentPopUpState] = useState(false);
  const [offerPopUpState, setOfferPopUpState] = useState(false);
  const handleServicePopUP = () => {
    setServicePopUpState(false);
  };
  const handlePaymentPopUP = () => {
    setPaymentPopUpState(false);
  };
  const handleofferPopUp = () => {
    setOfferPopUpState(false);
  };
  const HandleServiceSelection = () => {
    setServicePopUpState(false);
    setPaymentPopUpState(true);
  };
  const handelCreatePaymetOffer = () => {
    setServicePopUpState(false);
    setPaymentPopUpState(false);
    setOfferPopUpState(true);
  };
  const ref = useRef();
  const inputRef = useRef();
  // const [obj, setObj] = useState({
  //   img: Picture,
  //   message: "",
  //   class: "personOne message_text_container",
  // });
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [messageData]);
  // useEffect(() => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // }, []);
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (e.target.message.value.length !== 0) {
      let obj = {
        img: Picture,
        message: e.target.message.value,
        class: "personOne message_text_container",
      };

      setMessageData((prev) => {
        return [...prev, obj];
      });
      inputRef.current.value = "";
    }
  };
  return (
    <>
        <div className="chat_conversation_main_div">
      <SelectServicePopUp
        servicePopUpState={servicePopUpState}
        handleServicePopUP={handleServicePopUP}
        HandleServiceSelection={HandleServiceSelection}
      />

      <SelectPaymentPopUp
        paymentPopUpState={paymentPopUpState}
        handlePaymentPopUP={handlePaymentPopUP}
        handelCreatePaymetOffer={handelCreatePaymetOffer}
      />
      <SelectOfferPopUP
        offerPopUpState={offerPopUpState}
        handleofferPopUp={handleofferPopUp}
      />

      <div className="chat_box_header_main">

        <div className="chat_box_header_left">
          <div className="receiver_profile_pic_main_div">
            <img src={Picture} alt="img" className="receiver_profile_pic_css" />
          </div>
          <div className="receiver_name_with_designation_main">
            <div className="receiver_name_text_css">Sunny</div>
            <div className="receiver_designation_text_css">
              Professional Mobile App Developer
            </div>
          </div>
        </div>
        
        <div className="talent_chat_box_header_icons_container">
         
          <div className="talent_chat_box_header_icons">
            <img src={threeDots} alt="dot icon" />
          </div>
        </div>
      
        

      </div>
      <div className="chat_box_with_profile_details_main">
        <div className="message_screen_main_container">
          <div className="message_screen_main">
            {messageData.map((data) => {
              return (
                <div
                  className="message_container"
                  style={{
                    flexDirection:
                      data.class === "personTwo message_text_container" &&
                      "row-reverse",
                  }}
                >
                  <div className="message-container-profile">
                    <img src={data.img} alt="profile" />
                  </div>
                  <div className={data.class} ref={ref}>
                    {data.message}
                  </div>
                </div>
              );
            })}
            <CustomOffer />
          </div>
          <form className="text-bar-container" onSubmit={handleMessageSubmit}>
            <textarea
              type="text"
              name="message"
              placeholder="Type a message..."
              ref={inputRef}
            />
              {/* <CustomOfferButton/> */}
            
            <button type="submit" className="sent-text-icon">
              <img src={sentTextIcon} alt="sent icon" />
            </button>
          </form>
        </div>
        <div className="profiler_details_at_left_chat_screen">
          <div className="profiler_details_at_left_chat_screen_heading">
            About Seller
          </div>
          <div className="profiler_details_at_left_chat_screen_details">
            <div className="profiler_details_at_left_chat_screen_img">
              <img src={Picture} alt="profile" />
            </div>
            <div className="profiler_details_at_left_chat_screen_bio_container">
              Sunney <span style={{ marginLeft: "5px" }}> (level 2)</span>{" "}
              <span style={{ marginLeft: "10px" }}>
                <img
                  src={verifiedicon}
                  alt="verify icon"
                  className="profiler_details_at_left_chat_screen_bio_icon"
                />
              </span>
            </div>
            <div className="profiler_details_at_left_title">
              Professional Mobile App Developer
            </div>
            <div className="profiler_details_at_left_location">
              <div className="profiler_details_at_left_location_icon">
                <img src={locationicon} alt="location icon" />
              </div>
              <div className="profiler_details_at_left_location_text">
                New York United States{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChatConversation;
