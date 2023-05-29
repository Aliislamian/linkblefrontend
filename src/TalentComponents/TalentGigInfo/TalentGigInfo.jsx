import React from "react";
import "./TalentGigInfo.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";

import earningGraph from "../../images/earningGraph.PNG";
import { useRef } from "react";
import Level from "../../images/Level.png";
import TalentAboutMeCard from "../../components/TalentAboutMeCard/TalentAboutMeCard";
import TalentGoals from "../TalentGoals/TalentGoals";
import TalentSuccessGuide from "../TalentSuccessGuide/TalentSuccessGuide";
import ReviewComponent from "../../components/ReviewComponent/ReviewComponent";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
import TalentOrderCompleted from "./TalentOrderCompleted";
import TalentGigInfoTabCard from "./TalentGigInfoTabCard";
import AddNewService from "../AddNewService/AddNewService";
import { useNavigate } from "react-router-dom";
const TalentGigInfo = (props) => {
  const navRef = useRef();
  const navigate = useNavigate();
  return (
    <div>
      <TalentNavbar ref={navRef} />
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="talent-gig-info-main-container">
          <div className="talent-gig-info-top-container">
            <div className="talent-gig-info-top-container-left">
              <TalentAboutMeCard moreDetail={"datails"} />
            </div>

            {props.RightSideBar === "orderCompleted" ? (

              <TalentOrderCompleted />

            ) : props.RightSideBar === "earningGraph" ? (
              <div className="talent-gig-info-middle-container">
                <div className="talent-gig-info-graph-top-container">
                  <div className="talent-gig-info-graph-heading-containers">
                    <div className="talent-gig-info-graph-left-heading">
                      Earning Overview
                    </div>
                    <div className="talent-gig-info-graph-right-heading">
                      Learn more
                    </div>
                  </div>
                  <img
                    style={{ cursor: "pointer" }}
                    src={earningGraph}
                    alt="graph"
                    onClick={() => navigate("/buyerorders")}
                  />
                </div>
              </div>
            ) : props.RightSideBar === "addNewService" ? (
              <AddNewService />
            ) : (
              <TalentGigInfoTabCard />
            )}
          </div>
          {props.RightSideBar !== "earningGraph" &&
            props.RightSideBar !== "addNewService" && (
              <div className="talent-gig-info-middle-container">
                <div className="talent-gig-info-graph-container">
                  <div className="talent-gig-info-graph-heading-containers">
                    <div className="talent-gig-info-graph-left-heading">
                      Earning Overview
                    </div>
                    <div className="talent-gig-info-graph-right-heading">
                      Learn more
                    </div>
                  </div>
                  <img src={earningGraph} alt="graph" />
                </div>
              </div>
            )}
        </div>
      </span >
      <div
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
        className="talent-home-bottom-section"
        style={{ marginTop: "5rem" }}
      >
        {props.RightSideBar !== "addNewService" && (
          <div>
            <div className="talent-goal-text">
              Achieve these goals to become a Unlock the next level
            </div>
            <TalentGoals />
          </div>
        )}
        {props.RightSideBar !== "addNewService" && (
          <div className="talent-peformance-level">
            <div className="talent-peformance-level-text">
              Your talent level Performance
            </div>
            <div className="talent-peformance-level-img">
              <img src={Level} alt="talent level" />
            </div>
          </div>
        )}
        {props.RightSideBar !== "addNewService" && (
          <div style={{ marginTop: "8rem" }}>
            <TalentSuccessGuide
              backgroundColor={"#003123"}
              customColor={"white"}
            />
          </div>
        )}
        <div>
          <div className="talent-gig-info-review-container" style={{ marginTop: "8rem", marginBottom: "1rem" }}>
            <ReviewComponent />
          </div>
        </div>
      </div>
      <BuyerFooter />
    </div >
  );
};

export default TalentGigInfo;
