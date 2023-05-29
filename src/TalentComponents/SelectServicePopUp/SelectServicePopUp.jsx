import React from "react";
import "./SelectServicePopUp.css";
import cross3 from "../../images/cross3.png";
import one from "../../images/one.png";
// import BlueBackgroundTick from "../../images/BlueBackgroundTick.png";
import StarIcon from "@material-ui/icons/Star";
import Dialog from "@mui/material/Dialog";

const SelectServicePopUp = (props) => {
  const arr = [1, 2];
  return (
    <Dialog
      className="select-service-dialog"
      open={props.servicePopUpState}
      onClose={props.handleServicePopUP}
      fullScreen={true}
      fullWidth={true}
    >
      <div className="select-service-container">
        <div className="select-service-inner-container">
          <div className="select-service-top-container">
            <div className="select-service-top-text">
              Select Service for Offer
            </div>
            <div className="select-service-cross-icon">
              <img
                src={cross3}
                alt="cross icon"
                onClick={props.handleServicePopUP}
              />
            </div>
          </div>
          {arr.map((data) => {
            return (
              <div
                className="select-service-bottom-container"
                onClick={props.HandleServiceSelection}
              >
                <div className="talent-gig-img-and-review-container">
                  <div className="talent-payment-gig-img-div">
                    <img src={one} alt="gig" />
                  </div>
                  <div className="payment-gig-review-container">
                    <div className="payment-payment-gig-heading">
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
                        <h2 style={{ color: "black", fontSize: "1rem" }}>
                          5 (28)
                        </h2>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Dialog>
  );
};

export default SelectServicePopUp;
