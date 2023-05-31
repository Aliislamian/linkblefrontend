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

const SelectAcceptServicePopUp = ( {PropData,Acceptoffer,handleAcceptservicePopup} ) => {
// let {_id,description}=PropData
console.log(PropData && PropData._id,"prop data");

  const getData2=async()=>{
    try {
    const response = await axios.get('https://linkablebackend-production-e3d2.up.railway.app/sendoffer');
    // console.log("=========>>>>>>>get",response.data);
    const data =await response.data;
// console.log('show me data',data);
    // setGetData(data);

  } catch (error) {
    console.error(error);
  }
  }

  useEffect(()=>{
          // console.log("fuckkkkkkkkkkkk")
          getData2()
        },[])
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
          </div>
          <div className="card">
            <div className="card1">
              <h1 className="card1h1">i will write seo optimized content</h1>
              <span className="card1span">$ 40</span>
            </div>
            <hr />
            <div className="card2">
              <p className="card2p">{PropData && PropData._id}</p>
              <p className="card2p">{PropData && PropData.budget}</p>
              
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
      </Dialog>
    </>
  );
};

export default SelectAcceptServicePopUp;
