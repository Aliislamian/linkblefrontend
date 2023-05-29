import React, { useRef, useState } from "react";
import tickGreen from "../../images/tickGreen.png";
import whiteTopArrowIcon from "../../images/whiteTopArrowIcon.png";
import "./ServiceRequirementDropDown.css";
const ServiceRequirementDropDown = () => {
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
    <div className="order-info-dropdown-container">
      <div
        className="order-info-dropdown-heading-container"
        onClick={handleQuestionClick}
      >
        <div className="order-info-dropdown-heading">Service Requirements</div>
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
        <div className="order-info-services-container">
          <div className="order-info-client-requirement">
            <div className="order-info-client-requirement-heading">Me:</div>
            <div className="order-info-client-requirement-text">
              Hey Sir! Kindly let know complete details for the app
            </div>
          </div>

          <div className="order-info-requirement-details-heading">
            Johnathen:
          </div>
          <div className="order-info-requirement-details-text">
            Basic Features-Cost to Develop Online Marketplace App like Fiverr.
            System User Client mobile app+web, Freelancer mobile app+web & Admin
            Panel
          </div>

          <div className="order-info-services-requirements">1. Sign up:</div>
          <div className="order-info-services-requirements">
            2. Finding a service:
          </div>
          <div className="order-info-services-requirements">
            3. Placing an order:
          </div>
          <div className="order-info-services-requirements">
            4. Buyer Request: <br />
            Remove Request
            <br />
            Send Offer
          </div>
          <div className="order-info-services-requirements">5. Messaging:</div>
          <div className="order-info-services-requirements">
            6. Pay for Gig:
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequirementDropDown;
