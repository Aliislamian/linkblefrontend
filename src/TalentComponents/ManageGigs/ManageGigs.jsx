import React from "react";
import "./ManageGigs.css";
import one from "../../images/one.png";
import noOrders from "../../images/noOrders.png";
import greenDropdonwIcon from "../../images/greenDropdonwIcon.png";
import deleteWhite from "../../images/deleteWhite.png";
import puase from "../../images/puase.png";
import editwhite from "../../images/editwhite.png";
import gigGraph from "../../images/gigGraph.PNG";
import { useState } from "react";
import SelectBox from "./SelectBox";

import StarIcon from "@material-ui/icons/Star";
import circularprofile from "../../images/circularprofile.png";
import {
  // CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
const ManageGigs = (props) => {
  let i = 0;
  const [boxState, setBoxState] = useState(false);
  const handleSelectClick = () => {
    setBoxState(!boxState);
  };
  const navigate = useNavigate();
  return (
    <div className="manage-gig-right-main-container">
      <div className="manage-gig-top-contianer">
        <div
          className="talent-account-form-heading"
          style={{ marginBottom: "10px" }}
        >
          Active Services
        </div>
        <div className="manage-gig-top-right-contianer">
          <span className="manage-gig-btn-container">


            <div
              className="manage-gig-edit-btn-container"
              onClick={() => navigate("/seller-step-one")}
            >
              <img src={editwhite} alt="icon" className="manage-gig-btn-img1" />
              Edit
            </div>
            <div className="manage-gig-pause-btn-container">
              <img src={puase} alt="icon" className="manage-gig-btn-img2" />
              Pause
            </div>
          </span>
          <span className="manage-gig-btn-container">


            <div className="manage-gig-delete-btn-container">
              <img src={deleteWhite} alt="icon" className="manage-gig-btn-img3" />
              Delete
            </div>
            <div className="manage-gig-time-btn-container">
              4 Weeks
              <img
                src={greenDropdonwIcon}
                alt="icon"
                className="manage-gig-btn-img4"
              />
            </div>
          </span>
        </div>
      </div>

      <div className="talent-gig-manage-section">
        <table className="manage-gig-table">
          <tr>
            <th>
              {props.manageGigMethod === "pauseGig" ? (
                <div className="pause-gig-icon">
                  <img src={puase} alt="icon" />
                </div>
              ) : (
                <div
                  className={
                    !boxState
                      ? "manage-gig-select-box"
                      : "manage-gig-select-box manage-gig-select-box-active"
                  }
                  onClick={handleSelectClick}
                ></div>
              )}
            </th>

            <th className="service-th">Service</th>
            <th>Impressions</th>
            <th>Profile Views</th>
            <th>Orders</th>
            <th>Cancellation</th>
            <th>Rating</th>
          </tr>
          {props.orders.length === 0 ? (
            <div className="no-orders-img">
              <img src={noOrders} alt="no Orders" />
              <h1>NO ORDERS</h1>
            </div>
          ) : (
            props.orders.map((order) => {
              i++;
              return i === 2 ? (
                <tr
                  className="manage-gig-card-row"
                  style={{ borderRadius: "5px" }}
                >
                  <td className="manage-gig-graph-td" colspan="100%">
                    <img src={gigGraph} alt="graph" />

                    <div className="manage-gig-review-top-container">
                      <div className="manage-gig-review-top-heading">5.0</div>
                      <div className="manage-gig-review-top-stars-container">
                        <StarIcon className="manage-gig-review-top-star" />
                        <StarIcon className="manage-gig-review-top-star" />
                        <StarIcon className="manage-gig-review-top-star" />
                        <StarIcon className="manage-gig-review-top-star" />
                        <StarIcon className="manage-gig-review-top-star" />
                      </div>
                      <div className="manage-gig-review-top-text">
                        Based on 48 reviews
                      </div>
                      <div className="manage-gig-review-progress-bar-container">
                        <div className="gig-review-progress-bar-div">
                          <div className="gig-review-progress-bar-heading">
                            Service Deliver
                          </div>
                          <div className="gig-review-progress-bar-circle">
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
                                pathColor: "white",
                                trailColor: "#D5D5D5",
                              })}
                            >
                              <div className="gig-service-review-progress-bar-text">
                                5.0
                              </div>
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
                        <div className="gig-review-progress-bar-div">
                          <div className="gig-review-progress-bar-heading">
                            Communication
                          </div>
                          <div className="gig-review-progress-bar-circle">
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
                                pathColor: "white",
                                trailColor: "#D5D5D5",
                              })}
                            >
                              <div className="gig-service-review-progress-bar-text">
                                5.0
                              </div>
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
                        <div className="gig-review-progress-bar-div">
                          <div className="gig-review-progress-bar-heading">
                            Recommend to others
                          </div>
                          <div className="gig-review-progress-bar-circle">
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
                                pathColor: "white",
                                trailColor: "#D5D5D5",
                              })}
                            >
                              <div className="gig-service-review-progress-bar-text">
                                5.0
                              </div>
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
                  </td>
                </tr>
              ) : (
                <tr
                  className="manage-gig-card-row"
                  style={{ borderRadius: "5px" }}
                >
                  <td>
                    <SelectBox
                      boxState={boxState}
                      manageGigMethod={props.manageGigMethod}
                    />
                  </td>
                  <td className="manage-order-card-td">
                    <div className="manage-gig-service">
                      <div className="manage-gig-on-service">
                        <img src={one} alt="" />
                      </div>
                      <div className="manage-gig-service-text">
                        I will Develop Professional Mobile Apps Android & iOS
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-profile">938</div>
                  </td>
                  <td>
                    <div className="manage-order-delivery">27</div>
                  </td>
                  <td>
                    <div className="manage-order-account-column-container">
                      7
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-account-column-container">
                      0
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-account-column-container">
                      5.0
                    </div>
                  </td>
                </tr>
              );
            })
          )}

          {/* <tr className="manage-gig-card-row" style={{ borderRadius: "5px" }}>
            <td className="manage-gig-graph-td" colspan="100%">
              <img src={gigGraph} alt="graph" />

              <div className="manage-gig-review-top-container">
                <div className="manage-gig-review-top-heading">5.0</div>
                <div className="manage-gig-review-top-stars-container">
                  <StarIcon className="manage-gig-review-top-star" />
                  <StarIcon className="manage-gig-review-top-star" />
                  <StarIcon className="manage-gig-review-top-star" />
                  <StarIcon className="manage-gig-review-top-star" />
                  <StarIcon className="manage-gig-review-top-star" />
                </div>
                <div className="manage-gig-review-top-text">
                  Based on 48 reviews
                </div>
                <div className="manage-gig-review-progress-bar-container">
                  <div className="gig-review-progress-bar-div">
                    <div className="gig-review-progress-bar-heading">
                      Service Deliver
                    </div>
                    <div className="gig-review-progress-bar-circle">
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
                          pathColor: "white",
                          trailColor: "#D5D5D5",
                        })}
                      >
                        <div className="gig-service-review-progress-bar-text">
                          5.0
                        </div>
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
                  <div className="gig-review-progress-bar-div">
                    <div className="gig-review-progress-bar-heading">
                      Communication
                    </div>
                    <div className="gig-review-progress-bar-circle">
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
                          pathColor: "white",
                          trailColor: "#D5D5D5",
                        })}
                      >
                        <div className="gig-service-review-progress-bar-text">
                          5.0
                        </div>
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
                  <div className="gig-review-progress-bar-div">
                    <div className="gig-review-progress-bar-heading">
                      Recommend to others
                    </div>
                    <div className="gig-review-progress-bar-circle">
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
                          pathColor: "white",
                          trailColor: "#D5D5D5",
                        })}
                      >
                        <div className="gig-service-review-progress-bar-text">
                          5.0
                        </div>
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
            </td>
          </tr> */}
        </table>
      </div>
    </div>
  );
};

export default ManageGigs;
