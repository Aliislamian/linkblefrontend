import React, { useEffect, useMemo, useReducer, useState } from "react";
import "./ManageAccountSection.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import righticom from "../../images/righticom.png";
import { useRef } from "react";
import ActiveOrder from "../ActiveOrder/ActiveOrder";
import hamburger from "../../images/hamburger.png";
import cross3 from "../../images/cross3.png";

const reducer = (currentState, action) => {
  let newState = Object.keys(currentState).forEach((key) => {
    currentState[key] = false;
  });
  switch (action.type) {
    case "active":
      return {
        newState,
        active: true,
      };
    case "notDeliver":
      return {
        newState,
        notDeliver: true,
      };
    case "late":
      return {
        newState,
        late: true,
      };
    case "delivered":
      return {
        newState,
        delivered: true,
      };
    case "completed":
      return {
        newState,
        completed: true,
      };
    case "cancelled":
      return {
        newState,
        cancelled: true,
      };
    case "label":
      return {
        newState,
        label: true,
      };

    default:
      return currentState;
  }
};
const ManageAccountSection = () => {
  const [sidebarVisibiality, setSidebarVisibiality] = useState(true);

  const navRef = useRef();
  // this value will be fetched from data base for active orders notdeliverd and for all the other
  // and will be pass in props of active orders
  const [activeOrders, setActiveOrders] = useState([
    1,
    2,
    ,
    3,
    2,
    2,
    4,
    1,
    2,
    2,
    4,
    2,
  ]);
  const [lateOrders, setLateOrders] = useState([1, 2]);
  const [notDeliverOrders, SetNotDeliverOrders] = useState([
    1, 2, 2, 4, 1, 2, 2, 4, 2, 2, 4, 1, 2, 2, 4, 2, 2, 4, 1, 2, 2, 4,
  ]);
  const [noOrders, setNoOrders] = useState([]);

  const initail_state = {
    active: true,
    notDeliver: false,
    late: false,
    delivered: false,
    completed: false,
    cancelled: false,
    label: false,
  };
  const [state, dispatch] = useReducer(reducer, initail_state);

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);

  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handeSideBarClick = () => {
    if (width <= 768) {
      setSidebarVisibiality(true);
    }
  }
  useMemo(() => {
    if (width <= 768) {
      setSidebarVisibiality(true);
    } else {
      setSidebarVisibiality(false);
    }
  }, [width]);
  return (
    <div>
      <TalentNavbar ref={navRef} />

      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="talent-manage-account-section-heading">


          <div className="talent-account-section-hamburger-container"
            onClick={() => {
              setSidebarVisibiality(!sidebarVisibiality);
            }}
          >
            <img src={sidebarVisibiality ? hamburger : cross3} alt="hamburger" />
          </div>
          <span> Manage Orders</span>
        </div>
        <div className="talent-manage-account-section-container">
          <div className="talent-manage-account-section-sidebar-container"

            style={{
              width: sidebarVisibiality && "0",
            }}
          >
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "active" });
                handeSideBarClick();
              }}

            >
              <div
                className={
                  !state.active
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Active
              </div>
              {state.active ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "notDeliver" });
                handeSideBarClick();
              }}
            >
              <div
                className={
                  !state.notDeliver
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Not Deliver
              </div>
              {state.notDeliver ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "late" });
                handeSideBarClick();
              }}

            >
              <div
                className={
                  !state.late
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Late
              </div>
              {state.late ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "delivered" });
                handeSideBarClick();
              }}
            >
              <div
                className={
                  !state.delivered
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Delivered
              </div>
              {state.delivered ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "completed" });
                handeSideBarClick();
              }}
            >
              <div
                className={
                  !state.completed
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Completed
              </div>
              {state.completed ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "cancelled" });
                handeSideBarClick();
              }}

            >
              <div
                className={
                  !state.cancelled
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Cancelled
              </div>
              {state.cancelled ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => {
                dispatch({ type: "label" });
                handeSideBarClick();
              }}
            >
              <div
                className={
                  !state.label
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Label
              </div>
              {state.label ? <img src={righticom} alt="arrow" /> : null}
            </div>
          </div>
          <div className="talent-manage-order-right-container">
            {state.active && <ActiveOrder orders={activeOrders} />}
            {state.late && <ActiveOrder orders={lateOrders} />}
            {state.notDeliver && <ActiveOrder orders={notDeliverOrders} />}
            {state.delivered && <ActiveOrder orders={noOrders} />}
          </div>
        </div>
      </span>
    </div>

  );
};

export default ManageAccountSection;
