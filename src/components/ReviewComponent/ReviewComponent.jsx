import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./ReviewComponent.css";
import circularprofile from "../../images/circularprofile.png";

import {
  // CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
const ReviewComponent = () => {
  return (
    <div>
      <div className="review-top-container">
        <div className="review-top-heading">5.0</div>
        <div className="review-top-stars-container">
          <StarIcon className="review-top-star" />
          <StarIcon className="review-top-star" />
          <StarIcon className="review-top-star" />
          <StarIcon className="review-top-star" />
          <StarIcon className="review-top-star" />
        </div>
        <div className="review-top-text">Based on 48 reviews</div>
        <div className="review-progress-bar-container">
          <div className="review-progress-bar-div">
            <div className="review-progress-bar-heading">Service Deliver</div>
            <div className="review-progress-bar-circle">
              <CircularProgressbarWithChildren
                // className="circular-time-progress-bar"
                value={5}
                strokeWidth={10}
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
                  pathColor: `rgba(0, 150, 107, ${5 / 100})`,
                  textColor: "black",
                  pathColor: "#00966b",
                  trailColor: "#D5D5D5",
                })}
              >
                <div className="service-review-progress-bar-text">5.0</div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="review-progress-bar-stars">
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
            </div>
          </div>
          <div className="review-progress-bar-div">
            <div className="review-progress-bar-heading">Communication</div>
            <div className="review-progress-bar-circle">
              <CircularProgressbarWithChildren
                // className="circular-time-progress-bar"
                value={5}
                strokeWidth={10}
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
                  pathColor: `rgba(0, 150, 107, ${5 / 100})`,
                  textColor: "black",
                  pathColor: "#00966b",
                  trailColor: "#D5D5D5",
                })}
              >
                <div className="service-review-progress-bar-text">5.0</div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="review-progress-bar-stars">
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
            </div>
          </div>
          <div className="review-progress-bar-div">
            <div className="review-progress-bar-heading">
              Recommend to others
            </div>
            <div className="review-progress-bar-circle">
              <CircularProgressbarWithChildren
                // className="circular-time-progress-bar"
                value={5}
                strokeWidth={10}
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
                  pathColor: `rgba(0, 150, 107, ${5 / 100})`,
                  textColor: "black",
                  pathColor: "#00966b",
                  trailColor: "#D5D5D5",
                })}
              >
                <div className="service-review-progress-bar-text">5.0</div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="review-progress-bar-stars">
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
              <StarIcon className="review-progress-bar-star" />
            </div>
          </div>
        </div>
      </div>

      <div className="review-bottom-container">
        <div className="bottom-container-review">
          <div className="reviewer-bio-container">
            <div className="reviewer-bio-div">
              <div className="reviewer-bio-profile">
                <img src={circularprofile} alt="profile" />
              </div>
              <div className="reviewer-bio-name-&-rating-contianer">
                <div className="reviewer-bio-name">
                  Johnathon James <span>(United States)</span>
                </div>{" "}
                <div className="reviewer-bio-rating-contianer">
                  <div className="reviewer-bio-rating-stars-contianer">
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                  </div>
                  <div className="reviewer-rating-number">5.0</div>
                </div>
              </div>
            </div>
            <div className="reviewer-review-time">2 days ago</div>
          </div>

          <div className="reviewer-desc">
            He is excellent hardworking. He knows how to give a realist touch to
            the job service. Being to young for this job but he is perfectly
            professional.
          </div>
        </div>
        <div className="bottom-container-review">
          <div className="reviewer-bio-container">
            <div className="reviewer-bio-div">
              <div className="reviewer-bio-profile">
                <img src={circularprofile} alt="profile" />
              </div>
              <div className="reviewer-bio-name-&-rating-contianer">
                <div className="reviewer-bio-name">
                  Johnathon James <span>(United States)</span>
                </div>{" "}
                <div className="reviewer-bio-rating-contianer">
                  <div className="reviewer-bio-rating-stars-contianer">
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                  </div>
                  <div className="reviewer-rating-number">5.0</div>
                </div>
              </div>
            </div>
            <div className="reviewer-review-time">2 days ago</div>
          </div>

          <div className="reviewer-desc">
            He is excellent hardworking. He knows how to give a realist touch to
            the job service. Being to young for this job but he is perfectly
            professional.
          </div>
        </div>
        <div className="bottom-container-review">
          <div className="reviewer-bio-container">
            <div className="reviewer-bio-div">
              <div className="reviewer-bio-profile">
                <img src={circularprofile} alt="profile" />
              </div>
              <div className="reviewer-bio-name-&-rating-contianer">
                <div className="reviewer-bio-name">
                  Johnathon James <span>(United States)</span>
                </div>{" "}
                <div className="reviewer-bio-rating-contianer">
                  <div className="reviewer-bio-rating-stars-contianer">
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                    <StarIcon className="reviewer-progress-bar-star" />
                  </div>
                  <div className="reviewer-rating-number">5.0</div>
                </div>
              </div>
            </div>
            <div className="reviewer-review-time">2 days ago</div>
          </div>

          <div className="reviewer-desc">
            He is excellent hardworking. He knows how to give a realist touch to
            the job service. Being to young for this job but he is perfectly
            professional.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
