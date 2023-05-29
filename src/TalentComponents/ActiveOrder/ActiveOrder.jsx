import React from "react";
import "./ActiveOrder.css";
import one from "../../images/one.png";
import tabprofileimg3 from "../../images/tabprofileimg3.png";
import clockicon from "../../images/clockicon.png";
import dollarSign from "../../images/dollarSign.png";
import deliveryPendingIcon from "../../images/deliveryPendingIcon.png";
import StarIcon from "@material-ui/icons/Star";
import noOrders from "../../images/noOrders.png";

const ActiveOrder = (props) => {
  return (
    <div className="manage-order-right-main-container">
      <div className="talent-account-form-heading">Active Orders</div>
      <div className="talent-manage-section">
        <table className="manage-orders-table" style={{ border: "none" }}>
          <tr>
            <th>Order on Service</th>
            <th>Buyer</th>
            <th>Delivery</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Rating</th>
          </tr>
          {props.orders.length === 0 ? (
            <div className="no-orders-img">
              <img src={noOrders} alt="no Orders" />
              <h1>NO ORDERS</h1>
            </div>
          ) : (
            props.orders.map((order) => {
              return (
                <tr
                  className="manage-card-card-row"
                  style={{ borderRadius: "5px" }}
                >
                  <td className="manage-order-card-td">
                    <div className="manage-order-on-service">
                      <img src={one} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-profile">
                      <img src={tabprofileimg3} alt="" />
                      <div className="manage-order-profile-below-text">
                        Johnethen
                      </div>
                      <div className="manage-order-profile-below-text">
                        <span>USA</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-delivery">
                      <div className="manage-order-delivery-time-container">
                        <img src={clockicon} alt="icon" />
                        <div className="manage-order-delivery-time-text">
                          2day, 11hr, 44min
                        </div>
                      </div>
                      <div className="manage-order-delivery-btn-container">
                        <img src={deliveryPendingIcon} alt="icon" />
                        <div className="manage-order-delivery-btn-txt">
                          Deliver Work Now
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-account-column-container">
                      <div className="manage-order-budget">
                        <img src={dollarSign} alt="" />
                        <div className="manage-order-budget-text">700 $</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-account-column-container">
                      <div className="manage-order-completion-status">
                        InComplete
                      </div>
                      <div className="manage-order-revision-status">
                        In Revision
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="manage-order-account-column-container">
                      <div className="manage-order-rating">
                        <StarIcon className="manage-order-rating-star" />
                        <StarIcon className="manage-order-rating-star" />
                        <StarIcon className="manage-order-rating-star" />
                        <StarIcon className="manage-order-rating-star" />
                        <StarIcon className="manage-order-rating-star" />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })

          )}

        </table>
      </div>
    </div>
  );
};

export default ActiveOrder;
