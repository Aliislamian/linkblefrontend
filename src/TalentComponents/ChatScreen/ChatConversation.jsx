import React, { useEffect, useRef, useState } from "react";
import "../ChatScreen/ChatScreen.css";
import Picture from "../../images/profilepic.png";
import defaultImage from "../../images/avatar.jpg";
import threeDots from "../../images/threeDots.png";
import tabprofileimg3 from "../../images/tabprofileimg3.png";
import designedDeleteIcon from "../../images/designedDeleteIcon.png";
import mailIcon from "../../images/mailIcon.png";
import verifiedicon from "../../images/verifiedicon.png";
import locationicon from "../../images/locationicon.png";
import sentTextIcon from "../../images/sentTextIcon.png";
import SelectPaymentPopUp from "../../TalentComponents/SelectPaymentPopUp/SelectPaymentPopUp";
import SelectServicePopUp from "../../TalentComponents/SelectServicePopUp/SelectServicePopUp";
import SelectOfferPopUP from "../../TalentComponents/SelectOfferPopUP/SelectOfferPopUP";
import SelectAcceptServicePopUp from "../../components/AcceptOffer/SelectAcceptServicePopUp";


import { StarBorder } from "@material-ui/icons";
import newRequest, { baseURL } from "../../utils/newRequest";
import socketIOClient from 'socket.io-client';
import axios from "axios";

const ChatConversation = ({ show, ...props }) => {
  console.log("showshowshowshow", show);

  const [servicePopUpState, setServicePopUpState] = useState(false);
  const [paymentPopUpState, setPaymentPopUpState] = useState(false);
  const [offerPopUpState, setOfferPopUpState] = useState(false);
  // const [Acceptoffer ,  setAcceptoffer]=useState(false)


  
  const handleServicePopUP = () => {
    setServicePopUpState(false);
  };
// const handleAcceptservicePopup =()=>{
//   setAcceptoffer(false)
// }
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

  // creatae state to get the currentUser from local storage if it exists or else set it to null
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  console.log("currentUser", currentUser);

  const socket = useRef();

  // props.user is the user object of the user with whom the current user is chatting  user.to
  const [messageData, setMessageData] = useState([

  ]);
  const [PropData, setPropData] = useState();
  const getData=async()=>{
    try {
    const response = await axios.get('https://linkablebackend-production-e3d2.up.railway.app/sendoffer', data);
    // console.log("=========>>>>>>>get",response.data);
    const data =await response.data;
    setPropData(data.data)
  } catch (error) {
    console.error(error);
  }
  }
  useEffect(() => {
    getData()
    // socket.current = socketIOClient('http://localhost:5000');
    socket.current = socketIOClient(baseURL);

    const handleMessage = (message) => {
      setMessageData((prev) => {
        if (prev.some((msg) => msg._id === message._id)) {
          return prev;
        } else {

          return [...prev, message];
        }
      });
    };
    socket.current.on('message', handleMessage);
    return () => {
      socket.current.off('message', handleMessage);
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await newRequest.get(`/get-messages?to=${props.user && props.user._id}`);
        setMessageData(res.data && res.data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [props.user && props.user._id]);

  const ref = useRef();
  const inputRef = useRef();
  const [obj, setObj] = useState({

  });
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageData]);

  useEffect(() => {

    socket.current.on('message', (message) => {
      // Here you update your state with the new message
      // setMessageData((prev) => [...prev, message]);
    });

    // Clean up the effect
    return () => {
      socket.current.off('message'); // Remove the 'message' event listener
      socket.current.disconnect();
    };
  }, []);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const messageText = e.target.message.value;

    if (messageText.length !== 0) {
      const message = {
        text: messageText,
        to: props.user && props.user._id,
        
        sender: { _id: currentUser._id }
      };

      socket.current.emit('chatMessage', message, (response) => {
        console.log("response", response);
        if (response && response.success) {
          // setMessageData((prev) => [...prev, response.message]);
        }
      });

      inputRef.current.value = "";
    }
  };

  const autoGrow = () => {
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  };

  const determineClassAndImage = (data) => {
    if (data.sender === (props.user && props.user._id)) {
      return { class: 'personTwo message_text_container', img: null };  // You can replace null with the logged-in user's image if available
    } else {
      return { class: 'personOne message_text_container', img: null };  // You can replace null with the other user's image if available
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
      {/* <SelectAcceptServicePopUp
      PropData={PropData}
          Acceptoffer={Acceptoffer}
          handleAcceptservicePopup ={handleAcceptservicePopup }
        HandleServiceSelection={HandleServiceSelection}
        /> */}


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
     
          
                    <div className="receiver_name_text_css">
                    {props.user && props.user.username}
          </div>
              <div className="receiver_designation_text_css">
              {props.user && props.user.status}
              </div>
          </div>
        </div>
        {/* {show &&
        <div
            className="sent-offer-btn"
            onClick={() => {
              handleAcceptservicePopup()
              setAcceptoffer(true);
            }}
          >
              Accept Offer 
          </div>
} */}
        <div className="chat_box_header_icons_container">
          <div className="chat_box_header_icons">
            <img src={designedDeleteIcon} alt="delete icon" />
          </div>
          <div className="chat_box_header_icons">
            <StarBorder
              style={{ color: "gold", fontSize: "large" }}
              className="chat_box_header_icon_star"
            />{" "}
          </div>
          <div className="chat_box_header_icons">
            <img src={mailIcon} alt="mail icon" />
          </div>
          <div className="chat_box_header_icons">
            <img src={threeDots} alt="dot icon" />
          </div>
        </div>
      </div>
      <div className="chat_box_with_profile_details_main">
        <div className="message_screen_main_container">
          <div className="message_screen_main">
            {messageData.map((data, index) => {
              const { class: messageClass, img } = determineClassAndImage(data);
              return (
                <div
                  className="message_container"
                  style={{
                    flexDirection:
                      messageClass === "personTwo message_text_container" &&
                      "row-reverse",
                  }}
                >
                  <div className="message-container-profile">
                    <img src={img || defaultImage} alt="profile" />  {/* Use a default image if img is null */}
                  </div>
                  <div className={messageClass}
                    ref={index === messageData.length - 1 ? ref : null}
                  >
                    {data.message}
                  </div>
                </div>
              );
            })}

          </div>
          <form className="text-bar-container" onSubmit={handleMessageSubmit}>
            <textarea
              onChange={autoGrow}
              type="text"
              name="message"
              placeholder="Type a message..."
              ref={inputRef}
            />
             {show &&
            <div
            className="sent-offer-btn"
            onClick={() => {
              setServicePopUpState(true);
            }}
          >
            Send Offer
          </div>
}
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
            <div>
              <p>{props.user && props.user.username}</p>
            </div>

                <div className="profiler_details_at_left_chat_screen_bio_container">
                      <span style={{ marginLeft: "5px" }}> (level 2)</span>{" "}
                  <span style={{ marginLeft: "10px" }}>
                    <img
                  src={verifiedicon}
                  alt="verify icon"
                  className="profiler_details_at_left_chat_screen_bio_icon"
                />
              </span>
            </div>
            {/* </>   
                  );
                })} */}
            <div className="profiler_details_at_left_title">
            {props.user && props.user.status}
            </div>
            <div className="profiler_details_at_left_location">
              <div className="profiler_details_at_left_location_icon">
                <img src={locationicon} alt="location icon" />
              </div>
              <div className="profiler_details_at_left_location_text">
              {props.user && props.user.location}{" "}
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
