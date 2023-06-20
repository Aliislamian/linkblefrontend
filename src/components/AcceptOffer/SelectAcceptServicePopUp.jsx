import React, { useEffect } from "react";
import "../AcceptOffer/Acceptoffer.css"
import cross3 from "../../images/cross3.png";
import one from "../../images/one.png";
import StarIcon from "@material-ui/icons/Star";
import Dialog from "@mui/material/Dialog";
import profilepic from "../../images/profilepic.png"
import tickGreen from "../../images/tickGreen.png"
import orderUpdate from "../../images/orderUpdate.png"
import greenclock from "../../images/greenclock.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SelectAcceptServicePopUp = ( {PropData,Acceptoffer,handleAcceptservicePopup} ) => {
  const navigate = useNavigate();

  return (
    <>
      <Dialog
        className="select-service-dialog"
        open={Acceptoffer}
        onClose={handleAcceptservicePopup}
        fullScreen={true}
        fullWidth={true}>
        <div className="Main">
          <div className="info">
            <img src={profilepic} alt="" />
            <div className="info_1">
              <h3>Me</h3>
              <p className="infoparagrapgh">jun 03 ,4:30PM  </p>
            </div>
            <div className="select-service-cross-icon">
              <img
                src={cross3}
                alt="cross icon"
                onClick={handleAcceptservicePopup}
              />
            </div>
          </div>
          <div className="card">
            <div className="card1">
              <h1 className="card1h1">Budget</h1>
              <span className="card1span">$ {PropData && PropData.budget}</span>
            </div>
            <hr />
            <div className="card2">
              <p className="card2p">{PropData && PropData.description}</p>              
            </div>
            <hr />
            <div className="card3">
              <h1 className="card3h1">Your offer include</h1>
              <div className="spandiv">
                <img className="spanimage" src={greenclock} alt="" />
                <span className="card3span">{PropData && PropData.revisions}time revision</span>
                <img className="spanimage" src={greenclock} alt="" />
                <span className="card3span">{PropData && PropData.delivery_time} day delivery</span>
                <img className="spanimage" src={tickGreen} alt="" />
                <span className="card3span">{PropData && PropData.services}</span>
              </div>
            </div>
            <hr />
            <div className="Expireoffer">
              <span className="Expireoffespan">offer expire on 2 jun 20233</span>
              <div className="Expireofferbtn">
                <button className="vieworderbtn">
                  view order
                </button>
                <button className="Acceptofferbtn" onClick={() => {
                  // navigate("/payment-page");
                  navigate("/stripe-pay");

                }}
                > 

                  offer  Accepted
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SelectAcceptServicePopUp;

