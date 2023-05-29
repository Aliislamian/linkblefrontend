import React from "react";
import "./TalentHome.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import SubmitCardImage1 from "../../images/submitcardimg1.png";
import SubmitCardImage2 from "../../images/submitcardimg2.png";
import SubmitCardImage3 from "../../images/submitcardimg3.png";
import Level from "../../images/Level.png";
import { useRef } from "react";
import SubmitRequestCard from "../../components/SubmitRequestCard/SubmitRequestCard";
import BuyerTabs from "../../components/BuyerTab/BuyerTabs";
import TalentGoals from "../TalentGoals/TalentGoals";
import TalentSuccessGuide from "../TalentSuccessGuide/TalentSuccessGuide";
import ReviewComponent from "../../components/ReviewComponent/ReviewComponent";
import BuyerFooter from "../../components/BuyerFooter/BuyerFooter";
const TalentHome = () => {
  const navRef = useRef();
  return (
    <div>
      <TalentNavbar ref={navRef} />

      <div
        className="talent-home-span"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="talent-home-top-section">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SubmitRequestCard
              text1={"Hey Alexa! Want to Offer Jobs?"}
              imageCardone={SubmitCardImage1}
              Navigation1={"/buyer-requests"}
              Navigation2={"/posted-job"}
              Navigation3={"/buyer-profile-list"}
              btntextCardone={"Check Buyer Repuest"}
              text2={"Check out I have applied for job"}
              imageCardtwo={SubmitCardImage2}
              btntextCardtwo={"Check Submitted Offers"}
              text3={"Check our Jobs that is relevant to your TALENT!"}
              imageCardthree={SubmitCardImage3}
              btntextCardthree={"Check Jobs"}
            />
          </div>
          <div className="talent-home-analytics-heading">Analytics</div>
          <div className="talent-home-analytics-main-container">
            <div className="talent-home-analytics-container">
              <div className="talent-home-analytics-text">Personal Balance</div>
              <div className="talent-home-analytics-price-container">
                <div className="talent-home-analytics-price-dot"></div>
                <div className="talent-home-analytics-price">$ 2830</div>
              </div>
            </div>
            <div className="talent-home-analytics-container">
              <div className="talent-home-analytics-text">Personal Balance</div>
              <div className="talent-home-analytics-price-container">
                <div className="talent-home-analytics-price-dot"></div>
                <div className="talent-home-analytics-price">$ 2830</div>
              </div>
            </div>
            <div className="talent-home-analytics-container">
              <div className="talent-home-analytics-text">Personal Balance</div>
              <div className="talent-home-analytics-price-container">
                <div className="talent-home-analytics-price-dot"></div>
                <div className="talent-home-analytics-price">$ 2830</div>
              </div>
            </div>
            <div className="talent-home-analytics-container">
              <div className="talent-home-analytics-text">Personal Balance</div>
              <div className="talent-home-analytics-price-container">
                <div className="talent-home-analytics-price-dot"></div>
                <div className="talent-home-analytics-price">$ 2830</div>
              </div>
            </div>
          </div>

          <div className="talent-home-order-heading">Orders Activity</div>
        </div>
        <div style={{ marginBottom: "2rem", width: "100%" }}>
          <BuyerTabs CardNavigation="/talent-order-delivery" />
        </div>
        <div className="talent-home-bottom-section">
          <div>
            <div className="talent-goal-text">
              Achieve these goals to become a Unlock the next level
            </div>
            <TalentGoals />
          </div>
          <div className="talent-peformance-level">
            <div className="talent-peformance-level-text">
              Your talent level Performance
            </div>
            <div className="talent-peformance-level-img">
              <img src={Level} alt="talent level" />
            </div>
          </div>
          <div style={{ marginTop: "8rem" }}>
            <TalentSuccessGuide />
          </div>
          <div>
            <div className="talent-home-reviews" >
              <ReviewComponent />
            </div>
          </div>
        </div>
        <BuyerFooter />
      </div>
    </div>
  );
};

export default TalentHome;
