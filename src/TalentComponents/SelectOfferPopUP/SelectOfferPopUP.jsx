import React from "react";
import axios from "axios";
import "./SelectOfferPopUP.css";
import Dialog from "@mui/material/Dialog";
import cross3 from "../../images/cross3.png";
import one from "../../images/one.png";
import StarIcon from "@material-ui/icons/Star";
import { useState, useEffect } from "react";
import budget from "../../images/budget.png";
import revisionIcon from "../../images/revisionIcon.png";
import service from "../../images/service.png";
import requestRequirement from "../../images/requestRequirement.png";
import offerExp from "../../images/offerExp.png";
import autoSave from "../../images/autoSave.png";
import responseTime from "../../images/responseTime.png";
import topArrowIcon from "../../images/topArrowIcon.png";
import TalentBtn from "../TalentBtn/TalentBtn";
import CustomOffer from "../CustomOffer/CustomOffer";
import TalentChatPage from "../../TalentPages/TalentChatPage/TalentChatPage";
const SelectOfferPopUP = (props) => {

  const [selectedOption, setSelectedOption] = useState('');
  const [post , setPost] = useState({
    description: '',
    budget: '',
    delivery_time: '',
    revisions: '',
    services: '',
  })
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleInput = (event) => {
      setPost({...post, [event.target.name]: event.target.value})
  }
  const sendDataToDatabase = async (data) => {
    try {
      const response = await axios.post('https://linkablebackend-production-e3d2.up.railway.app/sendoffer', data);
      console.log("=========>>>>>>>POst",response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      description: post.description,
      budget: post.budget,
      delivery_time: post.delivery_time,
      revisions: post.revisions,
      services: post.services
    };
    sendDataToDatabase(data);
  };
  return (

     <Dialog
      onClose={props.handleofferPopUp}
      open={props.offerPopUpState}
      className="select-offer-dialogue"
      fullWidth={true}
    >
      <div className="select-offer-popup-container">
        <form onSubmit={handleSubmit}>
        <div className="select-offer-popup-inner-container">
          <div className="select-offer-cross-icon">
            <img src={cross3} alt="cross"
              onClick={props.handleofferPopUp}
            />
          </div>
          <div
            className="select-offer-top-heading"
            style={{ marginTop: "5px" }}
          >
            Send an Offer
          </div>
          <div className="select-offer-sub-heading-container">
            <div className="select-offer-select-service-heading">
              Select Service
            </div>
            <div className="select-offer-change-service-heading">Change</div>
          </div>

          {/* // */}
          <div className="select-offer-bottom-container">
            <div className="select-offer-gig-img-and-review-container">
              <div className="select-offer-gig-img-div ">
                <img src={one} alt="gig" />
              </div>
              <div className="payment-gig-review-container">
                <div className="select-offer-gig-heading">
                  Develop Mobile Apps Android 
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
                    <h2 style={{ color: "black", fontSize: "1rem" }}>5 (28)</h2>
                  </div>
                  {/* </div> */}
                </div>
                <div className="select-offer-starting-price-heading">
                  From $10
                </div>
              </div>
            </div>
          </div>

          <div className="select-offer-description-container">
            Offer Description
          </div>
          <div className="select-offer-text-area-container">
            <textarea
              className="select-offer-textarea"
              placeholder="project delivery, deadlines, requirements etc. "
              name="description"
              id="offerDescription"
              cols="30"
              rows="8"
              maxLength={1000}

              onChange={handleInput}
            ></textarea>
            <span className="select-offer-word-count">1000</span>
          </div>

          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={budget}
                alt="icon"
                className="select-offer-details-icon"
              />
              <div className="select-offer-details-text">Total Budget</div>
            </div>
            <div className="select-offer-details-right-container">
              
              <input type="number" min="0" placeholder="$" name="budget" onChange={handleInput}  />
            </div>
          </div>
          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={responseTime}
                alt="icon"
                className="select-offer-details-icon"
              />
              <div className="select-offer-details-text">Delivery Time</div>
            </div>
            <div className="select-offer-details-right-container">
              <input type="number" min="0" placeholder="Days" name="delivery_time"  onChange={handleInput} />
            </div>

            
          </div>
          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={revisionIcon}
                alt="icon"
                className="select-offer-details-icon"
              />
            

              <div className="select-offer-details-text">Revisions</div>
            </div>
            <div className="select-offer-details-right-container" onChange={handleInput}>
              <select onChange={handleOptionChange} name="revisions">
              <option value="Select Days"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
            </select>
            </div>
          </div>
          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={service}
                alt="icon"
                className="select-offer-details-icon"
              />
              <div className="select-offer-details-text">Services</div>
            </div>
            <div className="select-offer-details-right-container" onChange={handleInput}>
              <select onChange={handleOptionChange} name="services">
              <option value="Select Days"></option>
        <option value="App">App</option>
        <option value="web">Web</option>
        <option value="AI">AI</option>
        <option value="IOT">IOT</option>
            </select>
            </div>
          </div>
          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={requestRequirement}
                alt="icon"
                className="select-offer-details-icon"
              />
              <div className="select-offer-details-text">
                Request Requirments
              </div>
            </div>
            <div className="select-offer-details-right-container">
              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" />
                <div class="toggle-switch"></div>
              </label>{" "}
            </div>
          </div>
          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={offerExp}
                alt="icon"
                className="select-offer-details-icon"
              />
              <div className="select-offer-details-text">
                Offer Expiration (Opt)
              </div>
            </div>
            <div className="select-offer-details-right-container">
              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" />
                <div class="toggle-switch"></div>
              </label>{" "}
            </div>
          </div>
          <div className="select-offer-details-container">
            <div className="select-offer-details-left-container">
              <img
                src={autoSave}
                alt="icon"
                className="select-offer-details-icon"
              />
              <div className="select-offer-details-text">
                Save for future offers
              </div>
            </div>
            <div className="select-offer-details-right-container">
              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" />
                <div class="toggle-switch"></div>
              </label>{" "}
            </div>
          </div>
          <div className="select-offer-btn-container">
          <button type="submit" class="bg-[#47966B] hover:bg-[#47966B] text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
          </div>
        </div>
   </form>
      </div>
    </Dialog>
  );
}
export default SelectOfferPopUP;
