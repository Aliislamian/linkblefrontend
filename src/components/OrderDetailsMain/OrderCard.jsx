import React, { useEffect, useState } from "react";
import "../OrderDetailsMain/OrderDetailsMain.css";
import "../OrderDetailsMain/OrderDetailsMain.css";
import ClockIcon from "../../images/clockicon.png";
import { useNavigate } from "react-router-dom";
import checkBox from "../../images/tickMarkWhite.png";
import emptyCheckBox from "../../images/Rectangle.png";
import { display } from "@mui/system";
import DeliveryPendingIcon from "../../images/deliveryPendingIcon.png";
import newRequest from "../../utils/newRequest";
import axios from "axios"; // Import Axios library

const OrderCard = ({
  OrderImage,
  ProfileImage,
  ProfilerName,
  ProfilerCountry,
  OrderBudget,
  OrderDetails,
  OrderStatus,
  DeliveryTime,
  groupChatState,
  orderState,
  OrderCardNavigation,
  orderDatas
}) => {
  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [orderData, setOrderData] = useState(null); // State to store the fetched order data

  // const [groupChatState, setGroupChatState] = useState(false);
      console.log("============orderdata", orderDatas);
  // Fetch order data when the component mounts
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          'https://linkablebackend-production-e3d2.up.railway.app/buyer/get-one-order/64957b0654fafddb751e16d8',
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU5NTJlNGM4OGMxMjY2NTE4MGM1NzUiLCJlbWFpbCI6ImJ1eWVyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYnV5ZXIxMjMiLCJwcm9maWxlSW1nIjoiIiwibG9jYXRpb24iOiJQYWtpc3RhbiIsInN0YXR1cyI6ImNsaWVudCBzYXRpc2ZpY3Rpb24gaXMgbXkgbWFpbiBtb3RvIiwiY2hhdGxpc3RJZCI6IjY0NTk1MmUzYzg4YzEyNjY1MTgwYzU3MSIsImdyb3VwQ2hhdExpc3RJZCI6IjY0NTk1MmUzYzg4YzEyNjY1MTgwYzU3MyIsImZhdm91cml0ZUdpZ3MiOltdLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA4VDE5OjUyOjA0LjAyMloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA4VDE5OjUyOjA0LjAyMloiLCJpYXQiOjE2ODc1MTQ2MTQsImV4cCI6MTY5MDEwNjYxNH0.YJts6oZd-KV2XY1EY8x2RsIHQfpZf8dFX4bq1CC29fM',
            },
          }
        );
        setOrderData(response.data);
        console.log("setOrderData(response.data)", response.data);
      } catch (error) {
        console.error(error);
      }

      
    };
    

    fetchOrderData();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
    console.log("Order Details Clicked:", orderData);
    console.log("============orderdata", orderDatas);      
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
      
<div className="order_image_div_mainn">
<img src={OrderImage} alt="image" className="order_image_css" />
</div>
<div className="second_order_card_div_main">
<div className="profile_mainnn">
  <div className="order_profile_image_div">
    <img
      src={ProfileImage}
      alt="img"
      className="Order_profile_image_csss"

    />
  </div>
  {orderData && orderData.data && orderData.data.buyerId && (

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
    {orderData.data.buyerId.username}
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
          {orderData.data.buyerId.location}

    </text>
    <text
      style={{ color: "white", fontSize: "small" }}
      className="order-card-text"
    >
        {orderData.data.buyerId.status}

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
<div className="third_order_card_div_main">
<div className="status_n_incomplete_main">
  <div className="status_div_">Status</div>
  <div className="InComplete_div_">{OrderStatus}</div>
</div>
<div className="Delivery_n_time_divs">
  <div className="delivery_divv_">Dlivery</div>
  <div className="clock_icon_n_time">
    <img src={ClockIcon} alt="icon" className="clock_icon_css" />
    <time dateTime="" className="remaining_days_time">
      {DeliveryTime}
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


























































































