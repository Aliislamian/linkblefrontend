import React, { useRef, useState } from "react";
import whiteTopArrowIcon from "../../../images/whiteTopArrowIcon.png";
import "../../OrderInformation/ServiceRequirementDropDown.css";
import "./RevisionDelivery.css";
const RevisionDelivery = (props) => {
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
        <div className="order-info-dropdown-heading">Revision delivery</div>
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
        <div className="revison-delivery-services-container">
          <div className="revison-delivery-text-area">
            <textarea
              id="txtArea"
              rows="10"
              cols="30"
              placeholder="Your feedback here"
            ></textarea>
          </div>
          <div className="revison-delivery-post-feedback-btn-container">
            <div className="revison-delivery-post-feedback-btn">
              Request Revision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionDelivery;
