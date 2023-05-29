import React, { useRef, useState } from "react";
import tickGreen from "../../images/tickGreen.png";
import whiteTopArrowIcon from "../../images/whiteTopArrowIcon.png";
import downloadIcon from "../../images/downloadIcon.png";
import "../OrderInformation/ServiceRequirementDropDown.css";
import "./ServiceDeliveryComponent.css";
const ServiceDeliveryComponent = (props) => {
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
        <div className="order-info-dropdown-heading"> Service delivery</div>
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
          <div
            className="service-delivery-content-text"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {/* Hey great buyer! Here are the completed project delivery. kindly go
            through the service describe, and let me know if there is even a
            single changes, modifications or suggestions. I would be happy to do
            that.
            <br />
            <br />
            Thanks again Have a great time. Stay Blessed.
            <br />
            Scarlet_ann */}
            {props.text}
          </div>

          {props.documentHeading !== "false" && (
            <div
              className="service-delivery-content-text"
              style={{ marginTop: "5px", fontWeight: "normal" }}
            >
              {props.documentHeading}
            </div>
          )}
          {props.document.map((document) => {
            return (
              <div className="service-delivery-documents-container">
                <div className="service-delivery-img-container">
                  <div className="service-delivery-img-div">
                    <img src={document.name} alt="file" />
                  </div>
                  <div
                    className="service-delivery-img-name"
                    style={{ color: document.titleColor }}
                  >
                    {document.title}
                  </div>
                </div>
                <div className="service-delivery-download-icon">
                  <img src={downloadIcon} alt="download icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDeliveryComponent;

