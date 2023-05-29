import React, { useRef, useState } from "react";
import "../OrderInformation/OrderInformation.css";
import Navbar from "../../components/MyNav/Navbar";
import OrderCard from "../OrderDetailsMain/OrderCard";
import ProfileImage from "../../images/circularprofile.png";
import orderImageOne from "../../images/one.png";
import orderImageTwo from "../../images/two.png";
import orderImageThree from "../../images/three.png";
import orderImageFour from "../../images/four.png";
import ClockIcon from "../../images/clockicon.png";
import tickGreen from "../../images/tickGreen.png";
import whiteTick from "../../images/whiteTick.png";
import chatIcon from "../../images/chatIcon.png";
import whiteTopArrowIcon from "../../images/whiteTopArrowIcon.png";
import ServiceRequirementDropDown from "./ServiceRequirementDropDown";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

const OrderInformation = () => {
  const [day, setDays] = useState(0);
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const navRef = useRef();
  const percentage = 90;
  var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = 500 + Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours =
      24 + Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = 60 + Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = 60 + Math.floor((timeleft % (1000 * 60)) / 1000);
    setSecond(seconds);
    setHours(hours);
    setDays(days);
    setMinutes(minutes);
  }, 1000);

  const deliverTime = [
    { heading: "Days", timeValue: day },
    { heading: "Hours", timeValue: hour },
    { heading: "Minutes", timeValue: minute },
    { heading: "Sec", timeValue: second },
  ];
  const navigate = useNavigate();
  const item =
  {
    OrderImage: orderImageOne,
    ProfileImage: ProfileImage,
    ProfilerName: "Johnathen",
    ProfilerCountry: "USA",
    OrderBudget: "$700",
    OrderDetails: "Develop Professional Mobile Apps for Android & iOS",
    OrderStatus: "InComplete",
    DeliveryTime: "5day, 11hr, 44min",
  }
  const [groupChatState, setGroupChatState] = useState(false);
  const [orderState, setOrderState] = useState(false);
  return (
    <div>
      <div>
        <Navbar ref={navRef} />
      </div>
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="order_info_main">
          <div className="order_info_card_top_heading">
            Your order has been placed Successfully!
          </div>
          <OrderCard
            OrderImage={item.OrderImage}
            ProfileImage={item.ProfileImage}
            ProfilerName={item.ProfilerName}
            ProfilerCountry={item.ProfilerCountry}
            OrderBudget={item.OrderBudget}
            OrderDetails={item.OrderDetails}
            OrderStatus={item.OrderStatus}
            DeliveryTime={item.DeliveryTime}
            groupChatState={groupChatState}
            orderState={orderState}
            OrderCardNavigation={"#"}
          />
          <PlaceOrderDropDown />
          <ServiceRequirementDropDown />
          <div className="order-info-order-accepted-container">
            <div className="order-info-dropdown-heading">Order Accepted</div>
            <img
              src={whiteTick}
              alt="arrow icon"
              className="order-info-order-accepted-dropdown-icon"
            />
          </div>
          <div className="order-info-order-accepted-container">
            <div className="order-info-dropdown-heading">
              Delivery Date changed to 30 October, 2021
            </div>
          </div>
          <div className="order-info-order-accepted-container">
            <div className="order-info-dropdown-heading">Service delivery</div>
          </div>
          <div className="delivery-count-down-heading">DELIVERY COUNT DOWN</div>
          <div className="order-delivery-count-down-bar">
            {deliverTime.map(({ heading, timeValue }) => {
              return (
                <div className="circular-time-progress-bar-container">
                  <CircularProgressbarWithChildren
                    className="circular-time-progress-bar"
                    value={80}
                    strokeWidth={10}
                    // text={`${percentage}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // rotation: 0.25,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      // strokeLinecap: "butt",
                      // Text size
                      textSize: "1.7rem",
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',
                      // Colors
                      pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                      textColor: "black",
                      trailColor: "#D5D5D5",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <h3 className="circular-time-progress-bar-h3">
                      {timeValue}
                    </h3>
                    <h4 className="circular-time-progress-bar-h4">{heading}</h4>
                  </CircularProgressbarWithChildren>
                </div>
              );
            })}
          </div>
          <div className="go-to-conservation-contianer"
            onClick={() => {
              navigate("/chat");
            }}
          >
            <img src={chatIcon} alt="chat icon" />
            <div className="go-to-conservation-text">GO TO CONVERSTATION</div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default OrderInformation;

export const PlaceOrderDropDown = ({ heading }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const heightRef = useRef(null);
  const [answerHeight, setAnswerHeight] = useState("0px");
  const handleQuestionClick = async () => {
    setIsContentVisible(!isContentVisible);
    // setAnswerHeight(
    //   isContentVisible ? `${heightRef.current.scrollHeight}px` : "0px"
    // );
    !isContentVisible
      ? setAnswerHeight(`${heightRef.current.scrollHeight}px`)
      : setAnswerHeight("0px");
  };
  return (
    <div
      className="order-info-dropdown-container"
      style={{ marginTop: "20px" }}
    >
      <div
        className="order-info-dropdown-heading-container"
        onClick={handleQuestionClick}
      >
        <div className="order-info-dropdown-heading">ORDER PLACED</div>
        <img
          style={{ transform: !isContentVisible && "rotate(180deg)" }}
          src={whiteTopArrowIcon}
          alt="arrow icon"
          className="order-info-dropdown-icon"
        />
      </div>

      <div
        ref={heightRef}
        className="order-info-dropdown-content"
        style={{ height: `${answerHeight}` }}
      >
        <div className="order-info-order-placed-container">
          <div className="order-placed-date-container">
            <div className="order-placed-date-medium-text">
              11 October, 2021
            </div>
            <div className="order-placed-date-medium-text">
              {" "}
              Order # FO2C8DEB9AZ2
            </div>
          </div>
          <div className="order-placed-date-medium-text order-placed-date-deadline">
            Delivery Date: 25 October, 2021
          </div>
          <div className="order-placed-date-medium-text order-placed-date-deadline">
            Develop Mobile Apps Android & iOS
          </div>

          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              Revisions
            </div>
            <div className="order-info-order-placed-services-right-text">
              Unlimited
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              App Mobile Operating Systems
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              Network Integration
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              App Deployment
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              AI Model Integrations
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              Ads Integration
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              Ads Integration
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              Source Files
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              App Animations
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
          <div className="order-info-order-placed-services-container">
            <div className="order-info-order-placed-services-left-text">
              Network Integration
            </div>
            <div className="order-info-order-placed-services-right-tick">
              <img src={tickGreen} alt="tick icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
