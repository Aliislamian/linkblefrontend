import React from "react";
import "./TalentGigInfo.css";
import whiteTopArrowIcon from "../../images/whiteTopArrowIcon.png";
import one from "../../images/one.png";
import tabprofileimg1 from "../../images/tabprofileimg1.png";
import TabCard from "../../components/BuyerTab/TabCard";

const TalentOrderCompleted = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="talent-gig-info-top-container-right">
      <div className="talent-completed-order-drop-down">
        <div className="talent-completed-order-drop-down-left">
          Completed orders - 12 ($570)
        </div>
        <div className="talent-completed-order-drop-down-right">
          <div className="talent-completed-order-drop-down-right-btn">
            <div className="talent-completed-order-drop-down-right-btn-text">
              Completed Orders (12)
            </div>
            <img src={whiteTopArrowIcon} alt="icon" />
          </div>
        </div>
      </div>

      {arr.map(() => {
        return (
          <div className="talent-gig-order-info-container" style={{ marginBottom: "20px" }}>
            <div className="talent-gig-order-info-inner-container">
              <TabCard
                Image={one}
                ProfileImage={tabprofileimg1}
                ProfileName={"Julia Abbot"}
                OrderBudget={"$100"}
                OrderStatus="COMPLETED"
                OrderDate={"1-22"}
                OrderNumber={"none"}
                StatusColor="000000"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TalentOrderCompleted;
