import React, { useRef, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import whiteTopArrowIcon from "../../../images/whiteTopArrowIcon.png";
import "../../OrderInformation/ServiceRequirementDropDown.css";
import "./ServiceReview.css";
const ServiceReview = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const heightRef = useRef(null);
  const [answerHeight, setAnswerHeight] = useState("0px");
  const handleQuestionClick = async () => {
    setIsContentVisible(!isContentVisible);
    !isContentVisible
      ? setAnswerHeight(`${heightRef.current.scrollHeight}px`)
      : setAnswerHeight("0px");
  };
  const percentage = 90;

  return (
    <div className="order-info-dropdown-container">
      <div
        className="order-info-dropdown-heading-container"
        onClick={handleQuestionClick}
      >
        <div className="order-info-dropdown-heading">My review</div>
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
          <div className="service-review-heading">
            Leave Feedback about Service
          </div>
          <div className="service-review-suub-heading">Service Deliver</div>
          <div className="service-review-inner-container">
            <div className="service-review-star-container">
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
            </div>
            <div className="service-review-progress-bar-container">
              <div className="service-review-progress-bar">
                <CircularProgressbarWithChildren
                  className="circular-time-progress-bar"
                  value={4}
                  strokeWidth={13}
                  minValue={0}
                  maxValue={5}
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
                    pathColor: `rgba(0, 150, 107, ${4 / 100})`,
                    textColor: "black",
                    pathColor: "#00966b",
                    trailColor: "#D5D5D5",
                  })}
                >
                  <div className="service-review-progress-bar-text">4.0</div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="service-review-progress-bar-stars">
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
              </div>
            </div>
          </div>
          <div className="service-review-suub-heading">Communication</div>
          <div className="service-review-inner-container">
            <div className="service-review-star-container">
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
            </div>
            <div className="service-review-progress-bar-container">
              <div className="service-review-progress-bar">
                <CircularProgressbarWithChildren
                  className="circular-time-progress-bar"
                  value={2.5}
                  strokeWidth={13}
                  minValue={0}
                  maxValue={5}
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
                    pathColor: `rgba(0, 150, 107, ${2.5 / 100})`,
                    textColor: "black",
                    pathColor: "#00966b",
                    trailColor: "#D5D5D5",
                  })}
                >
                  <div className="service-review-progress-bar-text">2.5</div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="service-review-progress-bar-stars">
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
              </div>
            </div>
          </div>
          <div className="service-review-suub-heading">
            Recommended to others
          </div>
          <div className="service-review-inner-container">
            <div className="service-review-star-container">
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
              <StarIcon
                style={{ color: "gold" }}
                className="service-review-star"
              />
            </div>
            <div className="service-review-progress-bar-container">
              <div className="service-review-progress-bar">
                <CircularProgressbarWithChildren
                  className="circular-time-progress-bar"
                  value={2.5}
                  strokeWidth={13}
                  minValue={0}
                  maxValue={5}
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
                    pathColor: `rgba(0, 150, 107, ${2.5 / 100})`,
                    textColor: "black",
                    pathColor: "#00966b",
                    trailColor: "#D5D5D5",
                  })}
                >
                  <div className="service-review-progress-bar-text">2.5</div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="service-review-progress-bar-stars">
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
                <StarIcon
                  style={{ color: "gold" }}
                  className="service-review-progress-bar-star"
                />
              </div>
            </div>
          </div>

          <div className="service-review-text-area">
            <textarea
              id="txtArea"
              rows="10"
              cols="30"
              placeholder="Your feedback here"
            ></textarea>
          </div>
          <div className="service-review-post-feedback-btn-container">
            <div className="service-review-post-feedback-btn">
              Post Feedback
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;
