import React from "react";
import "../AcceptOffer/Acceptoffer.css"
import cross3 from "../../images/cross3.png";
import one from "../../images/one.png";
import StarIcon from "@material-ui/icons/Star";
import Dialog from "@mui/material/Dialog";
import profilepic from  "../../images/profilepic.png"
import tickGreen from "../../images/tickGreen.png"
import orderUpdate  from "../../images/orderUpdate.png"
import greenclock from "../../images/greenclock.png"

const SelectAcceptServicePopUp = (props) => {
  // const { budget, description, delivery_time, revisions, services } = props.data;
  // const propertyNames = Object.keys(props.data);

// console.log(propertyNames);
  return (
    <>
    <Dialog
      className="select-service-dialog"
      open={props.Acceptoffer}
      onClose={props.handleAcceptservicePopup}
      fullScreen={true}
      fullWidth={true}
    >

      <div  className="Main">

       
       

        <div className="info">
        <img  src={profilepic}alt="" />
        <div  className="info_1">
         <h3>Me</h3>
         <p className="infoparagrapgh">jun 03 ,4:30PM  </p>
         </div>
        </div>

        {/* <div  className="custom">
        <span className="customspan">here is your Custum offer</span>
        </div> */}

<div  className="card">

<div className="card1">

  <h1 className="card1h1">i will write seo optimized content</h1>
  <span  className="card1span">$ 40</span>
</div>
<hr />
 <div className="card2">
  <p className="card2p">Contrary to popular belief, word in classical literature</p>
</div>
<hr />
<div className="card3">

<h1 className="card3h1">Your offer include</h1>
<div  className="spandiv">
         <img className="spanimage" src={greenclock} alt="" />
         <span className="card3span">2 day revision</span>
         <img className="spanimage" src={greenclock} alt="" />
        <span className="card3span">2 day delivery</span>
        <img className="spanimage" src={tickGreen} alt="" />
        <span className="card3span">Service</span>

        </div>
     </div>
    <hr />  
    <div  className="Expireoffer">

      <span  className="Expireoffespan">offer expire on 2 jun 20233</span>

   <div  className="Expireofferbtn">
   <button className="vieworderbtn">
        view order
      </button>
      
      <button  className="Acceptofferbtn">
         offer  Accepted
      </button>


   </div>
   <hr/>
    
       </div>

</div>
      </div>



 

 
  




     
      {/* <div className="select-service-container">
        <div className="select-service-inner-container">
          <div className="select-service-top-container">
            <div className="select-service-top-text">
        
            </div>
            <div className="select-service-cross-icon">
              <img
                src={cross3}
                alt="cross icon"
                onClick={props.handleAcceptservicePopup}
              />
            </div>
          </div>
             */}
      

      {/* <> */}

              {/* <div
                 className="select-service-bottom-container"
                onClick={props.handleAcceptservicePopup}
             >
                 <p>hi  this is me</p>
                 <div className="talent-gig-img-and-review-container">
                 <div className="talent-payment-gig-img-div">
                    <img src={one} alt="gig" />
                  </div>
                  <div className="payment-gig-review-container">
                    <div className="payment-payment-gig-heading">
                   
                   </div>
                   <div className="payment-gig-review-star-container">
                   
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
              
                    </div>
                  </div>
                </div>
            </div> */}
{/* 
            </>
          
          
        </div>
      </div> */}
    </Dialog>
    </>
  );
};

export default SelectAcceptServicePopUp;
