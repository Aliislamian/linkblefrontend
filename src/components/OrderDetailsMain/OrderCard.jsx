import React, { useEffect, useState } from "react";
import "../OrderDetailsMain/OrderDetailsMain.css";
import "../OrderDetailsMain/OrderDetailsMain.css";
import ClockIcon from "../../images/clockicon.png";
import { useNavigate, } from "react-router-dom";
import checkBox from "../../images/tickMarkWhite.png";
import emptyCheckBox from "../../images/Rectangle.png";
import { display } from "@mui/system";
import DeliveryPendingIcon from "../../images/deliveryPendingIcon.png";
import newRequest from "../../utils/newRequest";
import axios from "axios"; // Import Axios library

const OrderCard = ({
  ProfileImage,
  OrderBudget,
  OrderDetails,
  groupChatState,
  orderState,
  OrderCardNavigation,
  selectedPlans
}) => {
  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [orderData, setOrderData] = useState(null); // State to store the fetched order 
  

  const [selectedPlan, setSelectedPlan] = useState({});

  useEffect(() => {
    const storedPlan = JSON.parse(sessionStorage.getItem('selectedPlan'));
    const initialPlan = storedPlan || {};
    setSelectedPlan(initialPlan);
  }, []);

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

    const deliveryDays = selectedPlan && selectedPlan.pricing && selectedPlan.pricing[selectedPlanName] ? selectedPlan.pricing[selectedPlanName].delivery    : 0;
    const revision = selectedPlan && selectedPlan.pricing && selectedPlan.pricing[selectedPlanName] ? selectedPlan.pricing[selectedPlanName].revisions : 0;

    const futureDate = getFutureDate(deliveryDays);
    console.log("futureDate......>>>>>>---", deliveryDays);
    console.log(revision);
    setDeliveryDate(futureDate);
    if (!selectedPlan || !selectedPlanName) {
      navigate(-1);
    }
    console.log(selectedPlan);
    console.log(selectedPlanName);
  }, [selectedPlan, selectedPlanName]);

  
  useEffect(() => {
    console.log("selectedPlanselectedPlanselectedPlan", selectedPlan
    );
  }, [selectedPlan]);

  // const [groupChatState, setGroupChatState] = useState(false);
  // Fetch order data when the component mounts


  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  let mobile;

  useEffect(() => {
    setCheckBoxState(false);
    if (groupChatState) {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }, [groupChatState]);

  if (width <= 500) {
    mobile = 1;
  } else {
    mobile = 0;
  }

  const handleOrderDetailsClick = () => {
    console.log("Order Details Clicked:", selectedPlans);
    console.log("============orderdata", selectedPlans);      
    navigate(OrderCardNavigation);
  };

  return (
    <div
      className={
        !groupChatState ? "order_card_main" : "order_card_main overlay"
      }
      style={{
        cursor: !groupChatState && "pointer",
        backgroundColor: overlay && "rgb(0, 150, 107, .5)",
      }}
      onClick={handleOrderDetailsClick}
    >
      {selectedPlan  && selectedPlan.servicesImages && (
<div className="order_image_div_mainn">
<img src={selectedPlan.servicesImages[0].imgUrl} alt="image" className="order_image_css" />
</div>
)}
<div className="second_order_card_div_main">
<div className="profile_mainnn">
  
  <div className="order_profile_image_div">
    <img
      src={ProfileImage}
      alt="img"
      className="Order_profile_image_csss"

    />
  </div>
  {selectedPlan  && selectedPlan.user_id && (

  <div className="order_name_country_details_div">

  <text
    className="order-card-heading"
    style={{
      fontSize: "large",
      fontWeight: "bold",
      color: "white",
    }}
    onClick={handleOrderDetailsClick}
  >
    {selectedPlan.user_id.username}
  </text>

    <text
      className="order-card-text"
      style={{
        lineHeight: "10px",
        color: "white",
        fontSize: "small",
        paddingBottom: "4px",
      }}
    >
              {selectedPlan.user_id.location}

    </text>
    <text
      style={{ color: "white", fontSize: "small" }}
      className="order-card-text"
    >
    {selectedPlan.user_id.status}


    </text>
  </div>
)}

</div>
{mobile === 0 && (
  <div className="order_budget_main_div">
    <text
      className="order-card-heading"
      style={{
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    >
      $ {selectedPlan && selectedPlan.pricing && selectedPlan.pricing[selectedPlanName] ? selectedPlan.pricing[selectedPlanName].price : 0}
    </text>
    <text
      className="order-card-text order-detail"
      style={{ color: "white", lineHeight: "20px" }}
    >
      {selectedPlan && selectedPlan.pricing && selectedPlan.pricing[selectedPlanName] ? selectedPlan.pricing[selectedPlanName].packageDetails : 0}

    </text>

  </div>
)}
</div>
{selectedPlan  && selectedPlan.serviceStatus && (
<div className="third_order_card_div_main">
<div className="status_n_incomplete_main">
  <div className="status_div_">Status</div>
  <div className="InComplete_div_">{selectedPlan.serviceStatus}</div>
</div>
<div className="Delivery_n_time_divs">
  <div className="delivery_divv_">Dlivery</div>
  <div className="clock_icon_n_time">
    <img src={ClockIcon} alt="icon" className="clock_icon_css" />
    <time dateTime="" className="remaining_days_time">
      {selectedPlan && selectedPlan.pricing && selectedPlan.pricing[selectedPlanName] ? selectedPlan.pricing[selectedPlanName].delivery    : 0} days
    </time>
  </div>
</div>

{mobile === 1 && (
  <div className="order_budget_main_div">
    <text
      className="order-card-heading"
      style={{
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    >
      {OrderBudget}
    </text>
    <text
      className="order-card-text order-detail"
      style={{ color: "white", lineHeight: "20px" }}
    >
      {OrderDetails}
    </text>
  </div>
)}
</div>
)}

{groupChatState && (
<div className="check-box-container">
  <img
    className="check-box-img"
    src={!checkBoxState ? emptyCheckBox : checkBox}
    onClick={() => {
      setCheckBoxState(!checkBoxState);
      setOverlay(!overlay);
    }}
    alt="check box"
  />
</div>
)}

{orderState && (
<div className="delivery-pending-btn-div">
  <div className="delivery-pending-btn-icon">
    <img src={DeliveryPendingIcon} alt="pending icon" />
  </div>
  <div className="delivery-pending-btn-text">Delivery Pending</div>
</div>
)}
    </div>
  );
};

export default OrderCard;


























































































