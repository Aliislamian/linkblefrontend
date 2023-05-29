import React, { useRef, useState } from "react";
import OrderInformation from "../../components/OrderInformation/OrderInformation.css";
import CompletedOrderInformation from "../../components/CompletedOrderInformation/CompletedOrderInformation.css";
import "./ServiceDelivery.css";
import Navbar from "../../components/MyNav/Navbar";
// import OrderCard from "../OrderDetailsMain/OrderCard";
import ProfileImage from "../../images/circularprofile.png";
import orderImageOne from "../../images/one.png";
// import orderImageTwo from "../../images/two.png";
// import orderImageThree from "../../images/three.png";
// import orderImageFour from "../../images/four.png";
import ClockIcon from "../../images/clockicon.png";
import tickGreen from "../../images/tickGreen.png";
import whiteTick from "../../images/whiteTick.png";
import chatIcon from "../../images/chatIcon.png";
import whiteTopArrowIcon from "../../images/whiteTopArrowIcon.png";
import time from "../../images/time.png";
import success from "../../images/success.png";
import writing from "../../images/writing.png";
import order from "../../images/order.png";
import Delivery from "../../images/Delivery.png";
import review from "../../images/review.png";
import apkfile from "../../images/apk-file.png";
import adobexdfile from "../../images/adobe-xd-file.png";
import image from "../../images/image.png";
import ServiceRequirementDropDown from "../../components/OrderInformation/ServiceRequirementDropDown";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import DeliveryStatus from "./DeliveryStatus";
import ServiceReview from "./ServiceReview/ServiceReview";
import {
  // CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import RevisionDelivery from "./RevisionDelivery/RevisionDelivery";
import ServiceDeliveryComponent from "./ServiceDeliveryComponent";
import OrderCard from "../../components/OrderDetailsMain/OrderCard";

const ServiceDelivery = (props) => {
  const [setMyReview, setMyReviewState] = useState(false);
  const [setReviewDelivery, setReviewDeliveryState] = useState(false);
  const [setDeliveryStatus, setDeliveryStatusState] = useState(true);

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
  let message1 = `Hey great buyer  Here are the completed project delivery. kindly go
  through the service describe, and let me know if there is even a
  single changes, modifications or suggestions. I would be happy to do that.

  Thanks again Have a great time. Stay Blessed.
  Scarlet_ann`;
  let message2 = `Hey Scarlet Ann.
  Everything is perfect. I love the design and the development
  I just wanted to let you know kindly change the theme
  color for the app. Here are some inspirations that may help
  
  thanks`;
  let message3 = `Hey Scarlet Ann.
  Everything is perfect. I love the design and the development
  I just wanted to let you know kindly change the theme
  color for the app. Here are some inspirations that may help
  
  thanks`;
  let deliveryDocuments1 = [
    { name: apkfile, title: "Linkeble.apk", titleColor: "#00966b" },
  ];
  let deliveryDocuments2 = [
    { name: apkfile, title: "Linkeble.apk", titleColor: "#00966b" },
    {
      name: adobexdfile,
      title: "Linkeble.xd",
      titleColor: "#FF61F6",
    },
  ];
  let deliveryDocuments3 = [
    { name: image, title: "Theme inspiration.jpg", titleColor: "black" },
  ];

  const handleAcceptBtnClick = () => {
    setMyReviewState(!setMyReview);
    setReviewDeliveryState(false);
    setDeliveryStatusState(false);
  };
  const requestRevision = () => {
    setReviewDeliveryState(!setReviewDelivery);
    setMyReviewState(false);
    setDeliveryStatusState(false);
  };
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
          <div className="order-info-dropdown-wrapper">
            <div className="line-wrapper">
              <div className="line-wrapper-icon">
                <img src={order} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <PlaceOrderDropDown />
          </div>

          <div className="order-info-dropdown-wrapper">
            <div className="service-requirement-line-wrapper">
              <div className="line-wrapper-icon">
                <img src={writing} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <ServiceRequirementDropDown />
          </div>

          {/* <ServiceRequirementDropDown /> */}

          <div className="order-info-dropdown-wrapper">
            <div className="service-requirement-line-wrapper">
              <div className="line-wrapper-icon">
                <img src={success} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <div className="order-info-order-accepted-container">
              <div className="order-info-dropdown-heading">Order Accepted</div>
              <img
                src={whiteTick}
                alt="arrow icon"
                className="order-info-order-accepted-dropdown-icon"
              />
            </div>
          </div>

          <div className="order-info-dropdown-wrapper">
            <div className="service-requirement-line-wrapper">
              <div className="line-wrapper-icon">
                <img src={time} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <div className="order-info-order-accepted-container">
              <div className="order-info-dropdown-heading">
                Delivery Date changed to 30 October, 2021
              </div>
            </div>
          </div>

          <div className="order-info-dropdown-wrapper">
            <div className="service-requirement-line-wrapper">
              <div className="line-wrapper-icon">
                <img src={Delivery} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <ServiceDeliveryComponent
              text={message1}
              document={deliveryDocuments1}
              documentHeading="Source File"
            />
          </div>
          <div className="order-info-dropdown-wrapper">
            <div className="service-requirement-line-wrapper">
              <div className="line-wrapper-icon">
                <img src={Delivery} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <ServiceDeliveryComponent
              text={message2}
              document={deliveryDocuments2}
              documentHeading="false"
            />
          </div>
          <div className="order-info-dropdown-wrapper">
            <div className="service-requirement-line-wrapper">
              <div className="line-wrapper-icon">
                <img src={Delivery} alt="order icon" />
              </div>
              <div class="vl"></div>
            </div>

            <ServiceDeliveryComponent
              text={message3}
              document={deliveryDocuments3}
              documentHeading="false"
            />
          </div>
          {setDeliveryStatus && (
            <div className="order-info-dropdown-wrapper">
              <div className="service-requirement-line-wrapper">
                <div className="line-wrapper-icon">
                  <img src={review} alt="order icon" />
                </div>
                {/* <div class="vl"></div> */}
              </div>

              <DeliveryStatus
                handleAcceptBtnClick={handleAcceptBtnClick}
                requestRevision={requestRevision}
              />
            </div>
          )}
          {setMyReview && (
            <div className="order-info-dropdown-wrapper">
              <div className="service-requirement-line-wrapper">
                <div className="line-wrapper-icon">
                  <img src={review} alt="order icon" />
                </div>
                {/* <div class="vl"></div> */}
              </div>

              <ServiceReview />
            </div>
          )}
          {setReviewDelivery && (
            <div className="order-info-dropdown-wrapper">
              <div className="service-requirement-line-wrapper">
                <div className="line-wrapper-icon">
                  <img src={review} alt="order icon" />
                </div>
                {/* <div class="vl"></div> */}
              </div>

              <RevisionDelivery />
            </div>
          )}

          <div className="delivery-count-down-heading">DELIVERY COUNT DOWN</div>
          <div className="order-delivery-count-down-bar">
            {deliverTime.map(({ heading, timeValue }) => {
              return (
                <div className="circular-time-progress-bar-container">
                  <CircularProgressbarWithChildren
                    className="circular-time-progress-bar"
                    value={70}
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
          <div className="go-to-conservation-contianer">
            <img src={chatIcon} alt="chat icon" />
            <div className="go-to-conservation-text">GO TO CONVERSTATION</div>
          </div>
        </div>
        <BuyerFooter />
      </span>
    </div>
  );
};

export default ServiceDelivery;

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
    <div className="completed-order-info-dropdown-container">
      <div
        className="completed-order-info-dropdown-heading-container"
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
