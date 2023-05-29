import React, { useEffect, useMemo, useReducer, useState } from "react";
import "../ManageAccountSection/ManageAccountSection.css";
import "./ManageGigsSection.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import righticom from "../../images/righticom.png";
import Path from "../../images/Path.png";
import cross3 from "../../images/cross3.png";
import hamburger from "../../images/hamburger.png";
import { useRef } from "react";
import ManageGigs from "../ManageGigs/ManageGigs";
import { useNavigate } from "react-router-dom";

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
    case "pause":
      return {
        newState,
        pause: true,
      };
    case "pending":
      return {
        newState,
        pending: true,
      };
    case "draft":
      return {
        newState,
        draft: true,
      };
    case "rejected":
      return {
        newState,
        rejected: true,
      };

    default:
      return currentState;
  }
};
const ManageGigsSection = () => {
  const navRef = useRef();
  const [sidebarVisibiality, setSidebarVisibiality] = useState(true);


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
    pause: false,
    pending: false,
    draft: false,
    rejected: false,
  };
  const [state, dispatch] = useReducer(reducer, initail_state);
  const navigate = useNavigate();
  return (
    <div>
      <TalentNavbar ref={navRef} />

      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="manage-gig-app-bar">
          <div className="talent-gig-section-heading">

            <div className="talent-manage-account-section-hamburger-container"
              onClick={() => {
                setSidebarVisibiality(!sidebarVisibiality);
              }}
            >
              <img src={sidebarVisibiality ? hamburger : cross3} alt="hamburger" />
            </div>
            <span style={{ whiteSpace: "nowrap" }}>
              My Service
            </span>

          </div>
          <div className="recieve-custom-offer-container">
            <div className="recieve-custom-offer-text">
              Received Custom Offers
            </div>
            <div className="recieve-custom-gig-select">
              <label class="gig-notifications-toggle">
                <input
                  class="gig-notifications-toggle-checkbox"
                  type="checkbox"
                />
                <div class="gig-notifications-toggle-switch"></div>
              </label>{" "}
            </div>
          </div>
        </div>
        <div className="talent-manage-account-section-container">
          <div className="talent-manage-account-section-sidebar-container"
            style={{
              width: sidebarVisibiality && "0",
            }}
          >
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => navigate("/seller-guide")}

            >

              <div className="create-new-service-main-container">
                <div className="create-new-service-container">
                  <img
                    src={Path}
                    alt="icon"
                    className="manage-gig-create-service-img1"
                  />
                  Create New Service
                </div>
              </div>
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => dispatch({ type: "active" })}
            // onClick={() => dispatch({ type: "pause" })}
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
              onClick={() => dispatch({ type: "pause" })}
            >
              <div
                className={
                  !state.pause
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Pause
              </div>
              {state.pause ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => dispatch({ type: "pending" })}
            >
              <div
                className={
                  !state.pending
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Pending
              </div>
              {state.pending ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => dispatch({ type: "draft" })}
            >
              <div
                className={
                  !state.draft
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Draft
              </div>
              {state.draft ? <img src={righticom} alt="arrow" /> : null}
            </div>
            <div
              className="talent-manage-account-section-sidebar-inner-container"
              onClick={() => dispatch({ type: "rejected" })}
            >
              <div
                className={
                  !state.rejected
                    ? "talent-manage-account-section-sidebar-text"
                    : "talent-manage-account-section-sidebar-text-active"
                }
              >
                Rejected
              </div>
              {state.rejected ? <img src={righticom} alt="arrow" /> : null}
            </div>
          </div>
          <div className="talent-manage-order-right-container">
            {state.active && <ManageGigs orders={activeOrders} />}
            {state.late && (
              <ManageGigs orders={lateOrders} manageGigMethod={"pauseGig"} />
            )}
            {state.pause && (
              <ManageGigs
                orders={notDeliverOrders}
                manageGigMethod={"pauseGig"}
              />
            )}
            {state.delivered && <ManageGigs orders={noOrders} />}
          </div>
        </div>
      </span>
    </div>
  );
};

export default ManageGigsSection;
