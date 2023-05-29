import React, { useEffect, useMemo, useState } from "react";
import "./TalentAccountSection.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import righticom from "../../images/righticom.png";
import hamburger from "../../images/hamburger.png";
import cross3 from "../../images/cross3.png";
import { useRef } from "react";
import TalentAccountDetails from "../TalentAccountDetails/TalentAccountDetails";
import AccountNotifications from "../AccountNotifications/AccountNotifications";
import TalentBillingAddress from "../TalentBillingAddress/TalentBillingAddress";
const TalentAccountSection = () => {
  const [accountDetails, setAccountDetailState] = useState(true);
  const [accountNotification, setAccountNotification] = useState(false);
  const [billingAddress, setBillingAddress] = useState(false);
  const [sidebarVisibiality, setSidebarVisibiality] = useState(true);
  const navRef = useRef();
  // const handleSidebarVisibiality = () => {
  //   setSidebarVisibiality(!sidebarVisibiality);
  // };
  const handleAccountDetailClick = () => {
    setAccountDetailState(true);
    setAccountNotification(false);
    setBillingAddress(false);
    if (width <= 768) {
      setSidebarVisibiality(true);
    }
  };
  const handleNotificationClick = () => {
    setAccountDetailState(false);
    setAccountNotification(true);
    setBillingAddress(false);
    if (width <= 768) {
      setSidebarVisibiality(true);
    }
  };
  const handleBillingClick = () => {
    setAccountDetailState(false);
    setAccountNotification(false);
    setBillingAddress(true);
    if (width <= 768) {
      setSidebarVisibiality(true);
    }
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);

  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


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


        <div className="talent-account-section-heading"


        >

          <div className="talent-account-section-hamburger-container"
            onClick={() => {
              setSidebarVisibiality(!sidebarVisibiality);
            }}
          >
            <img src={sidebarVisibiality ? hamburger : cross3} alt="hamburger" />
          </div>

          <span>Account</span> </div>
        <div className="talent-account-section-container">

          <div className="talent-account-section-sidebar-container"



            style={{
              width: sidebarVisibiality && "0",
              // position: !sidebarVisibiality && "absolute",
            }}
          >
            <div
              className="talent-account-section-sidebar-inner-container"
              onClick={handleAccountDetailClick}
            >
              <div
                className={
                  !accountDetails
                    ? "talent-account-section-sidebar-text"
                    : "talent-account-section-sidebar-text-active"
                }
              >
                Account Details
              </div>
              {accountDetails && <img src={righticom} alt="arrow" />}
            </div>
            <div
              className="talent-account-section-sidebar-inner-container"
              onClick={handleNotificationClick}
            >
              <div
                className={
                  !accountNotification
                    ? "talent-account-section-sidebar-text"
                    : "talent-account-section-sidebar-text-active"
                }
              >
                Notifications
              </div>
              {accountNotification && <img src={righticom} alt="arrow" />}
            </div>
            <div
              className="talent-account-section-sidebar-inner-container"
              onClick={handleBillingClick}
            >
              <div
                className={
                  !billingAddress
                    ? "talent-account-section-sidebar-text"
                    : "talent-account-section-sidebar-text-active"
                }
              >
                Billing Address
              </div>
              {billingAddress && <img src={righticom} alt="arrow" />}
            </div>
          </div>
          <div className="talent-account-section-right-container">
            {accountDetails ? <TalentAccountDetails /> : null}
            {accountNotification ? <AccountNotifications /> : null}
            {billingAddress ? <TalentBillingAddress /> : null}
          </div>
        </div>
      </span >
    </div >
  );
};

export default TalentAccountSection;
