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
}) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // const [groupChatState, setGroupChatState] = useState(false);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  let mobile;

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
  return (
    <div
      className={
        !groupChatState ? "order_card_main" : "order_card_main overlay"
      }
      style={{
        cursor: !groupChatState && "pointer",
        backgroundColor: overlay && "rgb(0, 150, 107, .5)",
      }}
      // onClick={() => !groupChatState && navigate("/completed-order-info")}
      onClick={() => !groupChatState && navigate(OrderCardNavigation)}
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
          <div className="order_name_country_details_div">
            <text
              className="order-card-heading"
              style={{
                fontSize: "large",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {ProfilerName}
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
              {ProfilerCountry}
            </text>
            <text
              style={{ color: "white", fontSize: "small" }}
              className="order-card-text"
            >
              Check Order Details
            </text>
          </div>
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
