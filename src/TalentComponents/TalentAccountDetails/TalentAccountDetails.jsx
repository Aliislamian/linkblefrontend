import React from "react";
import TalentBtn from "../TalentBtn/TalentBtn";
import "./TalentAccountDetails.css";
const TalentAccountDetails = () => {
  return (
    <div className="talent-account-form-main-container">
      <div className="talent-account-form-heading">Account Details</div>
      <div className="talent-account-form-container">
        <div className="account-details-form-container">
          <div className="account-details-form-inner-container">
            <label
              htmlFor="talentName"
              className="talent-account-details-label"
            >
              FULL NAME
            </label>
            <br />
            <input
              style={{ marginBottom: "20px" }}
              placeholder="JOHN SNOW"
              type="text"
              name="talentName"
              id="talentName"
              className="talent-account-details-input"
            />
            <label htmlFor="talentName">EMAIL</label>
            <br />
            <input
              style={{ marginBottom: "20px" }}
              placeholder="SNOW@LINKEBLE.COM"
              type="text"
              name="talentName"
              id="talentName"
              className="talent-account-details-input"
            />
            <label htmlFor="talentName">ONLINE STATUS</label>
            <br />
            <input
              placeholder="Go Offline for (10 hour, 1 day, 1 week or Forever & Ever)"
              type="text"
              name="talentName"
              id="talentName"
              className="talent-account-details-input"
            />

            <div className="talent-account-details-bottom-text">
              When online, your Gigs are visible under the Online search filter.
            </div>
            <div className="talent-account-details-save-btn">
              <TalentBtn text="SAVE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentAccountDetails;
