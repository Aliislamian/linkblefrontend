import React, { useRef } from "react";
import Navbar from "../MyNav/Navbar";
import "./Payment.css";
import StepsProgressBar from "../StepsProgressBar/StepsProgressBar";
import CreditCard2 from "../../images/CreditCard2.png";
import CreditCard1 from "../../images/CreditCard1.png";
import CircularTick from "../../images/CircularTick.png";
import one from "../../images/one.png";
import BlueBackgroundTick from "../../images/BlueBackgroundTick.png";
import StarIcon from "@material-ui/icons/Star";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const navRef = useRef();

  return (
    <div>
      <Navbar ref={navRef} />

      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="payment-container">
          <div className="step-progress-bar-div">
            <StepsProgressBar stepCount="two" />
          </div>
          <div className="payment-inner-container">
            <div className="payment-method">
              <div className="payment-method-heading">
                <h2>Select Payment method</h2>
              </div>
              <div className="payment-method-sub-heading">
                <p> Add your Debit/Credit Card Details</p>
              </div>
              <div className="card-selection-container">
                <div className="payment-card-img-container">
                  <div className="payment-tick-img">
                    <img src={BlueBackgroundTick} alt="tick image" />
                  </div>
                  <img src={CreditCard1} alt="credit card img" />
                </div>
                <div className="payment-card-img-container">
                  <img src={CreditCard2} alt="credit card img" />
                </div>
              </div>
              <div className="payment-input-container">
                <div className="payment-single-input-container">
                  <label htmlFor="cardNumber" className="payment-input-label">
                    CARD NUMBER
                  </label>
                  <br />
                  <div className="payment-input-div">
                    <input
                      type="text"
                      className="payment-input payment-input-one"
                    />
                    <div className="payment-input-tick-icon">
                      <img src={CircularTick} alt="tick" />
                    </div>
                  </div>
                </div>
                <div className="payment-single-input-container">
                  <label
                    htmlFor="cardHolderName"
                    className="payment-input-label"
                  >
                    CARDHOLDER NAME
                  </label>
                  <br />
                  <div className="payment-input-div">
                    <input
                      name="cardHolderName"
                      type="text"
                      className=" payment-input payment-input-two"
                    />
                  </div>
                </div>
                <div className="payment-single-input-container">
                  <div className="payment-exp-date-and-cvv-container">
                    <div className="payment-exp-date-container">
                      <label
                        htmlFor="cardNumber"
                        className="payment-input-label"
                      >
                        EXPIRY DATE
                      </label>
                      <input
                        type="text"
                        className="payment-input"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="payment-exp-date-container">
                      <label
                        htmlFor="cardNumber"
                        className="payment-input-label"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        className="payment-input"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-detail-for-payment-container">
              <div className="order-detail-for-payment-card">
                <div className="order-detail-for-payment-inner-card">
                  <div className="gig-img-and-review-container">
                    <div className="payment-gig-img-div">
                      <img src={one} alt="gig" />
                    </div>
                    <div className="payment-gig-review-container">
                      <div className="payment-gig-heading">
                        Develop Mobile Apps Android & iOS
                      </div>
                      <div className="payment-gig-review-star-container">
                        {/* <div className="order-detail-info-rating-star-div"> */}
                        <div className="payment-rating-star-div">
                          <StarIcon
                            style={{ color: "gold", fontSize: "20px" }}
                            className="payment-stars"
                          />
                          <StarIcon
                            style={{ color: "gold", fontSize: "20px" }}
                            className="payment-stars"
                          />
                          <StarIcon
                            style={{ color: "gold", fontSize: "20px" }}
                            className="payment-stars"
                          />
                          <StarIcon
                            style={{ color: "gold", fontSize: "20px" }}
                            className="payment-stars"
                          />
                          <StarIcon
                            style={{ color: "gold", fontSize: "20px" }}
                            className="payment-stars"
                          />
                        </div>
                        <div className="payment-rating-reviews-number">
                          <h2>5 (28)</h2>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="payment-order-card-row">
                    <div className="payment-order-card-gig-title">
                      Complete Linkeble App Screen UI/UX Design
                    </div>
                    <div className="payment-order-card-order-price">$350</div>
                  </div>
                  <div className="payment-order-card-row">
                    <div className="payment-premium-package-container">
                      <div className="payment-premium-package-heading">
                        Premium Package
                      </div>
                      <div className="payment-premium-package-revision-heading">
                        Unlimited revisions
                      </div>
                    </div>
                    <div className="payment-order-card-order-price">$350</div>
                  </div>
                  <div className="payment-order-card-row">
                    <div className="payment-order-card-delivery-date-heading">
                      Delivery Date
                    </div>
                    <div className="payment-order-card-delivery-date">
                      Mon, 11 Oct 2021
                    </div>
                  </div>
                  <div className="payment-order-card-row">
                    <div className="payment-detail-card-third-row">
                      <div className="price-card-order-info">Order Info</div>
                      <div className="price-card-order-fee">
                        <div className="price-card-order-fee-text">
                          Order total fee
                        </div>
                        <div className="price-card-order-fee-amount">$350</div>
                      </div>
                      <div className="price-card-order-fast-delivery-fee">
                        <div className="price-card-order-fee-text">
                          Order total fee
                        </div>
                        <div className="price-card-order-fee-amount">$50</div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-order-card-row">
                    <div className="payment-order-card-container">
                      <div className="payment-detail-card-total">
                        <div className="payment-detail-card-total-text">
                          Total
                        </div>
                        <div className="payment-detail-card-total-amount">
                          $ 420
                        </div>
                      </div>
                      <div className="payment-detail-card-continue-btn-container">
                        <div
                          className="payment-detail-card-continue-btn"
                          onClick={() => {
                            navigate("/order-requirements");
                          }}
                        >
                          Continue
                        </div>
                      </div>
                      <div className="payment-detail-card-bottom-text-container">
                        {/* <div className="payment-detail-card-bottom-text"> */}
                        All payments are encrypted with high SSL Protocol
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Payment;
