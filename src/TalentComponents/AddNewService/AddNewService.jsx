import React from "react";

import "./AddNewService.css";
import one from "../../images/one.png";
import plusicon from "../../images/plusBlack.png";
import StarIcon from "@material-ui/icons/Star";
import TalentSuccessGuide from "../TalentSuccessGuide/TalentSuccessGuide";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import newRequest from "../../utils/newRequest";
import { useState } from "react";
import CustomSnakebar from "../../utils/CustomSnakebar";
let gigArray = [1, 2, 4, 2];


const AddNewService = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const resetSnakeBarMessages = () => {
    setError(null);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await newRequest.get('/get-services-data');
        console.log(response.data);
        setData(response.data.data);

        // Clear any previous error messages
        setError(null);
      } catch (error) {
        console.error(error);

        // Display a user-friendly error message
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls outside the range of 2xx
          setError(`Error ${error.response.status}: ${error.response.data.message}`);
        } else if (error.request) {
          // The request was made but no response was received
          setError('Error: The server did not respond. Please try again.');
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Error: ${error.message}`);
        }
      }
    };

    getServices();
  }, []);

  return (
    <>
      {error && <CustomSnakebar message={error} severity="error" onClose={resetSnakeBarMessages} />}

      <div className="add-new-service-main-parent-container">
        <div className="add-new-service-main-container">
          <div className="add-new-service-main-gig-container">
            {data.map((service) => {
              return (
                <div className="add-new-service-gig">
                  <div className="add-new-service-gig-img-review-container">
                    <div className="add-new-service-gig-img-div">
                      <img src={
                        service.servicesImages[0] ? service.servicesImages[0].imgUrl : one} alt="gig" />
                    </div>
                    <div className="payment-gig-review-container">
                      <div className="select-offer-gig-heading">
                        {service.description}
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
                            {service.rating}
                          </h2>
                        </div>
                        {/* </div> */}
                      </div>
                      <div className="add-new-service-starting-price">
                        From ${service.pricing && service.pricing.basic && service.pricing.basic.price ? service.pricing.basic.price : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="add-new-service-btn-container" onClick={() => {
            navigate("/seller-guide")
          }}>
            <div className="add-new-service-btn-div">
              <img src={plusicon} alt="add" />
              <div className="add-new-service-btn-div">Create New Service</div>
            </div>
          </div>
        </div>
        <div className="add-new-service-bottom-container">
          <TalentSuccessGuide backgroundColor={"#003123"} customColor={"white"} />
        </div>
      </div>
    </>
  );
};

export default AddNewService;
