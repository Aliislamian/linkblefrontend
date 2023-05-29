import React, { useRef, useState } from "react";
import whiteTopArrowIcon from "../../images/whiteTopArrowIcon.png";
import "./DeliveryStatus.css";
import "../../components/OrderInformation/ServiceRequirementDropDown.css";
import "./ServiceDeliveryComponent.css";
const DeliveryStatus = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const heightRef = useRef(null);
  const [answerHeight, setAnswerHeight] = useState("0px");
  const handleQuestionClick = async () => {
    setIsContentVisible(!isContentVisible);
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
        <div className="order-info-dropdown-heading">Delivery Satus</div>
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
          <div className="delivery-status-container">
            <div
              className="delivery-status-accept-btn"
              onClick={props.handleAcceptBtnClick}
            >
              Accept
            </div>
            <div className="delivery-status-request-revison-btn" onClick={props.requestRevision}>
              Request Revision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
