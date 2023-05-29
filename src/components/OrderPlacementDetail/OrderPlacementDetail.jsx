import React, { useRef } from "react";
import "./OrderPlacementDetail.css";
import Navbar from "../../components/MyNav/Navbar";
import StepsProgressBar from "../../components/StepsProgressBar/StepsProgressBar";
import two from "../../images/two.png";
import tick from "../../images/lightTick.png";
import StarIcon from "@material-ui/icons/Star";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const OrderPlacementDetail = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(() => {
    const storedPlan = JSON.parse(sessionStorage.getItem('selectedPlan'));
    return storedPlan || {};
  });

  const [selectedPlanName, setSelectedPlanName] = useState(() => {
    const storedPlanName = JSON.parse(sessionStorage.getItem('planName'));
    return storedPlanName || '';
  });
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    function getFutureDate(deliveryDays) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + deliveryDays);

      const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };
      return currentDate.toLocaleDateString('en-US', options);
    }

    const deliveryDays = selectedPlan.pricing[selectedPlanName].deliveryDays ? selectedPlan.pricing[selectedPlanName].deliveryDays : 0;
    const futureDate = getFutureDate(deliveryDays);
    console.log(futureDate);
    setDeliveryDate(futureDate);
    if (!selectedPlan || !selectedPlanName) {
      navigate(-1);
    }
    console.log(selectedPlan);
    console.log(selectedPlanName);
  }, [selectedPlan, selectedPlanName]);


  return (
    <div>
      <Navbar ref={navRef} />
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="order-placement-detail-container">
          <div className="order-detail-progress-bar">
            <StepsProgressBar stepCount="one" />
          </div>
          <div className="order-placement-detail-bottom-div">
            <div className="order-detail-info-div">
              <div className="order-detail-info-top-div">
                <div className="order-detail-info-img-div">
                  <img src={selectedPlan.servicesImages && selectedPlan.servicesImages[0].imgUrl ? selectedPlan.servicesImages[0].imgUrl : ""}
                    alt="gig image"
                    style={{ width: "300px", height: "200px", objectFit: "cover" }}

                  />
                </div>
                <div className="order-detail-info-rating-div">
                  <div className="order-detail-info-rating-heading">
                    <h2>
                      {selectedPlan.title ? selectedPlan.title : ""}


                    </h2>
                  </div>
                  <div className="order-detail-info-rating-star-div">
                    <div className="order-detail-info-rating-start-inner-div">
                      <StarIcon
                        style={{ color: "gold", fontSize: "30px" }}
                        className="order-detail-stars"
                      />
                      <StarIcon
                        style={{ color: "gold", fontSize: "30px" }}
                        className="order-detail-stars"
                      />
                      <StarIcon
                        style={{ color: "gold", fontSize: "30px" }}
                        className="order-detail-stars"
                      />
                      <StarIcon
                        style={{ color: "gold", fontSize: "30px" }}
                        className="order-detail-stars"
                      />
                      <StarIcon
                        style={{ color: "gold", fontSize: "30px" }}
                        className="order-detail-stars"
                      />
                    </div>
                    <div className="order-detail-info-rating-reviews-number">
                      <h2>
                        {selectedPlan.rating ? selectedPlan.rating : ""}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-detail-info-bottom-div">
                <div className="order-detail-info-bottom-heading">
                  <h2>{selectedPlanName}</h2>
                </div>
                <div className="order-detail-info-bottom-paragraph">
                  <p>{selectedPlan.description ? selectedPlan.description : ""} </p>
                </div>
                <div className="order-detail-info-bottom-services-contianer">


                  <div className="order-detail-info-bottom-service-div">
                    <div className="order-detail-info-bottom-service-img">
                      <img src={tick} alt="tick image" />
                    </div>
                    <div className="order-detail-info-bottom-service-name">
                      {" "}
                      {selectedPlan.pricing[selectedPlanName].revisions ? selectedPlan.pricing[selectedPlanName].revisions : ""} Revisions
                    </div>
                  </div>
                  <div className="order-detail-info-bottom-service-div">
                    <div className="order-detail-info-bottom-service-img">
                      <img src={tick} alt="tick image" />
                    </div>
                    <div className="order-detail-info-bottom-service-name">
                      {" "}
                      {selectedPlan.pricing[selectedPlanName].totalScreen ? selectedPlan.pricing[selectedPlanName].totalScreen : ""} Screen
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-detail-price-div">
              <div className="order-detail-price-heading">
                <h2> Price Summery</h2>
              </div>
              <div className="order-detail-price-card-container">
                <div className="order-detail-price-card-inner-div">
                  <div className="order-detail-price-card-inner-left-div">
                    <div className="order-detail-package-name">
                      <h2>{selectedPlanName}</h2>
                    </div>
                    <div className="order-detail-revision-number">
                      <h3>
                        {selectedPlan.pricing[selectedPlanName].revisions ? selectedPlan.pricing[selectedPlanName].revisions : ""} Revision
                      </h3>

                    </div>
                  </div>
                  <div className="order-detail-price-card-inner-right-div">
                    $  {selectedPlan.pricing[selectedPlanName].price ? selectedPlan.pricing[selectedPlanName].price : ""}
                  </div>
                </div>
                <div className="order-detail-price-card-inner-div">
                  <div className="order-detail-price-card-inner-left-div">
                    <div className="order-detail-package-name">
                      <h2>Delivery Date</h2>
                    </div>
                  </div>
                  <div className="order-detail-price-card-inner-right-div">
                    {deliveryDate}
                  </div>
                </div>
                <div className="order-detail-price-card-third-row">
                  <div className="price-card-order-info">
                    <h2>Order Info</h2>
                  </div>
                  <div className="price-card-order-fee">
                    <div className="price-card-order-fee-text">
                      Order total fee
                    </div>
                    <div className="price-card-order-fee-amount">
                      $  {selectedPlan.pricing[selectedPlanName].price ? selectedPlan.pricing[selectedPlanName].price : ""}


                    </div>
                  </div>

                </div>
                <div className="third-row-border"></div>
                <div className="order-detail-price-card-inner-div">
                  <div className="order-detail-price-card-inner-left-div">
                    <div className="order-detail-package-name">
                      <h2>Total</h2>
                    </div>
                  </div>
                  <div className="order-detail-price-card-inner-right-div">
                    $  {selectedPlan.pricing[selectedPlanName].price ? selectedPlan.pricing[selectedPlanName].price : ""}

                  </div>
                </div>
              </div>
              <div className="order-detail-continue-btn-div">
                <div
                  className="order-detail-continue-btn"
                  onClick={() => {
                    // navigate("/payment-page");
                    navigate("/stripe-pay");

                  }}
                >
                  Continue
                </div>
              </div>
              <div className="price-summery-bottom-text">
                All payments & Transactions are encrypted with high SSL Protocol{" "}
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default OrderPlacementDetail;
