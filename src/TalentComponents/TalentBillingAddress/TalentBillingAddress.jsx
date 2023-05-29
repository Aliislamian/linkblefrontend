import React from "react";
import TalentBtn from "../TalentBtn/TalentBtn";
import "./TalentBillingAddress.css";
const TalentBillingAddress = () => {
  const billingAddressLabels = [
    // { left: "First Name", right: "Postcode" },
    // { left: "Surname", right: "City" },
    // { left: "Company name  (optional)", right: "Phone" },
    // { left: "Country / Region", right: "Email address" },
    // { left: "Complete Address", right: "Other Info (Optional)" },

    { left: "First Name", right: "Surname" },
    { left: "Company name  (optional)", right: "Country / Region" },
    { left: "Complete Address", right: "Postcode" },
    { left: "City", right: "Phone" },
    { left: "Email address", right: "Other Info (Optional)" },
  ];
  return (
    <div className="talent-account-form-main-container">
      <div className="talent-account-form-heading">Billing Address</div>
      <div className="talent-account-form-container">
        <div className="billing-address-form-container">
          {billingAddressLabels.map((data) => {
            return (
              <div className="billing-address-form-inner-container">
                <div className="billing-address-form-inner-left-container">
                  <label
                    htmlFor="talentName"
                    className="talent-account-details-label"
                  >
                    {data.left}
                  </label>
                  <br />
                  <input
                    style={{ marginBottom: "20px" }}
                    type="text"
                    name="talentName"
                    id="talentName"
                    className="talent-account-details-input"
                  />
                </div>
                <div className="billing-address-form-inner-right-container">
                  <label
                    htmlFor="talentName"
                    className="talent-account-details-label"
                  >
                    {data.right}
                  </label>
                  <br />
                  <input
                    style={{ marginBottom: "20px" }}
                    type="text"
                    name="talentName"
                    id="talentName"
                    className="talent-account-details-input"
                  />
                </div>
              </div>
            );
          })}

          <div className="talent-billing-address-save-btn">
            <TalentBtn text="SAVE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentBillingAddress;
