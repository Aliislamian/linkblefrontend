import React from "react";
import "../AcceptOffer/Acceptoffer.css"
import cross3 from "../../images/cross3.png";
import one from "../../images/one.png";
import StarIcon from "@material-ui/icons/Star";
import Dialog from "@mui/material/Dialog";
import profilepic from "../../images/profilepic.png"
import tickGreen from "../../images/tickGreen.png"
import orderUpdate from "../../images/orderUpdate.png"
import greenclock from "../../images/greenclock.png"

const SelectAcceptServicePopUp = (props) => {
  // const {description, budget, delivery_time, revisions, services} = props;
  // console.log("propspropsporps", description);
  console.log('=====asdasd=>>',props);

  var result = Object.keys(props).map((key) => [key, props[key]]);
  return (
    <>
      <Dialog
        className="select-service-dialog"
        open={props.Acceptoffer}
        onClose={props.handleAcceptservicePopup}
        fullScreen={true}
        fullWidth={true}>
                {
                  result.map((item, index) => (
                  
                    <div className="Main" key={index}>
                <div className="info">
                  <img src={profilepic} alt="" />
                  <div className="info_1">
                    <h3>Me</h3>
                    <p className="infoparagrapgh">jun 03 ,4:30PM</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card1">
                    <h1 className="card1h1">Budget</h1>
                    <span className="card1span">$ {console.log(result)}</span>
                  </div>
                  <hr />
                  <div className="card2">
                    <p className="card2p">Contrary to popular belief, word in classical literature</p>
                  </div>
                  <hr />
                  <div className="card3">
                    <h1 className="card3h1">Your offer include</h1>
                    <div className="spandiv">
                      <img className="spanimage" src={greenclock} alt="" />
                      <span className="card3span">2 day revision</span>
                      <img className="spanimage" src={greenclock} alt="" />
                      <span className="card3span">2 day delivery</span>
                      <img className="spanimage" src={tickGreen} alt="" />
                      <span className="card3span">Service</span>
                    </div>
                  </div>
                  <hr />
                  <div className="Expireoffer">
                    <span className="Expireoffespan">offer expire on 2 jun 20233</span>
                    <div className="Expireofferbtn">
                      <button className="vieworderbtn">
                        view order
                      </button>
                      <button className="Acceptofferbtn">
                        offer  Accepted
                      </button>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
                  ))
                }
      </Dialog>
    </>
  );
};

export default SelectAcceptServicePopUp;
