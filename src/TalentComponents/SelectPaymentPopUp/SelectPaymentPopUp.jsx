import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import cross3 from "../../images/cross3.png";
import milestonesPayment from "../../images/milestonePayment.png";
import milstone from "../../images/milstone.PNG";
import farwardArrow from "../../images/farwardArrow.png";
import "./SelectPaymentPopUp.css";
const SelectPaymentPopUp = (props) => {
  const [singlePayment, setSinglePayment] = useState(false);
  const [milestonePayment, setMilestonePayment] = useState(false);
  return (
    <span className="select-payment-popup-span">
      <Dialog  className="select-payment-popup-dialogue"
        fullWidth={true}
        onClose={props.handlePaymentPopUP} open={props.paymentPopUpState}

      >
        <div className="select-payment-popup-container">
          <div className="select-payment-popup-inner-container">
            <div className="select-payment-cross-icon">
              <img src={cross3} alt="cross" onClick={props.handlePaymentPopUP} />
            </div>
            <div
              className="select-payment-top-heading"
              style={{ marginTop: "5px" }}
            >
              Payment Option
            </div>
            <div className="select-payment-top-heading">
              Choose one option from the following to be get paid
            </div>
            <div
              className="select-payment-card-container"
              onClick={() => {
                setSinglePayment(!singlePayment);
                setMilestonePayment(false);
              }}
            >
              <div className="select-payment-card-inner-container">
                <div className="select-payment-card-inner-left-container">
                  <div className="select-payment-outer-circle">
                    <div
                      className="select-payment-inner-circle"
                      style={{
                        backgroundColor: !singlePayment ? "transparent" : "white",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="select-payment-card-inner-right-container">
                  <div className="select-payment-card-inner-right-text-container">
                    <div className="select-payment-card-inner-right-text-heading">
                      Single Payment
                    </div>
                    <div className="select-payment-card-inner-right-text-desc">
                      You will receive single payment for the whole project once
                      completed.
                    </div>
                  </div>
                  <div className="select-payment-card-inner-right-img-container">
                    <img src={milstone} alt="milestone" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="select-payment-card-container"
              onClick={() => {
                setMilestonePayment(!milestonePayment);
                setSinglePayment(false);
              }}
            >
              <div className="select-payment-card-inner-container">
                <div className="select-payment-card-inner-left-container">
                  <div className="select-payment-outer-circle">
                    <div
                      className="select-payment-inner-circle"
                      style={{
                        backgroundColor: !milestonePayment
                          ? "transparent"
                          : "white",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="select-payment-card-inner-right-container">
                  <div className="select-payment-card-inner-right-text-container">
                    <div className="select-payment-card-inner-right-text-heading">
                      Milestones Payment
                    </div>
                    <div className="select-payment-card-inner-right-text-desc">
                      Get paid in series as client project completed step-by-step
                    </div>
                  </div>
                  <div className="select-payment-card-inner-right-img-container">
                    <img src={milestonesPayment} alt="milestone" />
                  </div>
                </div>
              </div>
            </div>
            <div className="select-payment-create-offer-btn-container">
              <div
                className="select-payment-create-offer-btn-text"
                onClick={props.handelCreatePaymetOffer}
              >
                Create Offer
              </div>
              <div className="select-payment-create-offer-btn-icon">
                <img src={farwardArrow} alt="arrow icon" />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </span>
  );
};

export default SelectPaymentPopUp;
