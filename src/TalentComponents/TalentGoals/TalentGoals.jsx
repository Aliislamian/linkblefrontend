import React from "react";
import "./TalentGoals.css";
const TalentGoals = () => {
  return (
    <div className="talent-goals-container">
      <div className="talent-next-level-requirement-container">
        <div className="talent-next-level-requirement-text">
          Selling seniority
        </div>
        <div className="talent-next-level-requirement-inner-container">
          <div className="talent-next-level-requirement-dot"></div>
          <div className="talent-next-level-requirement-inner-text">
            23 days
          </div>
        </div>
      </div>
      <div className="talent-next-level-requirement-container">
        <div className="talent-next-level-requirement-text">Orders</div>
        <div className="talent-next-level-requirement-inner-container">
          <div className="talent-next-level-requirement-dot"></div>
          <div className="talent-next-level-requirement-inner-text">
            2 days
          </div>
        </div>
      </div>
      <div className="talent-next-level-requirement-container">
        <div className="talent-next-level-requirement-text">Earnings</div>
        <div className="talent-next-level-requirement-inner-container">
          <div className="talent-next-level-requirement-dot"></div>
          <div className="talent-next-level-requirement-inner-text">
         $300
          </div>
        </div>
      </div>
      <div className="talent-next-level-requirement-container">
        <div className="talent-next-level-requirement-text">No warnings</div>
        <div className="talent-next-level-requirement-inner-container">
          <div className="talent-next-level-requirement-dot"></div>
          <div className="talent-next-level-requirement-inner-text">
           4 Weeks
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentGoals;


