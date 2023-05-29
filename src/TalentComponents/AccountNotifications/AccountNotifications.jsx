import React from "react";
import "./AccountNotifications.css";
import GreenbellIcon from "../../images/GreenbellIcon.png";
import orderUpdate from "../../images/orderUpdate.png";
import profileAvatar from "../../images/profileAvatar.png";
import buyerRequest from "../../images/buyerRequest.png";
import chat from "../../images/chat.png";
import message from "../../images/message.png";
import emailicon from "../../images/emailicon.png";
const AccountNotifications = () => {
  return (
    <div className="talent-account-form-main-container">
      <div className="talent-account-form-heading">Notifications</div>
      <div className="talent-account-form-container">
        <div className="talent-account-notification-form">
          <img className="talent-account-notification-form-img" src={GreenbellIcon} alt="bell Icon" />
          <div className="talent-account-notification-form-top-heading">
            Notifications
          </div>
          <div className="talent-account-notifications-options-container">
            <div className="talent-account-notifications-option-icon">
              <img src={orderUpdate} alt="icon" />
            </div>
            <div className="talent-account-notifications-option-right-content">
              <div className="talent-account-notifications-option-right-content-text">
                Order Updates
              </div>
              <div className="talent-account-notifications-option-right-account-notifications-toggle-container">
                <label class="account-notifications-toggle">
                  <input
                    class="account-notifications-toggle-checkbox"
                    type="checkbox"
                  />
                  <div class="account-notifications-toggle-switch"></div>
                </label>{" "}
              </div>
            </div>
          </div>
          <div className="talent-account-notifications-options-container">
            <div className="talent-account-notifications-option-icon">
              <img src={message} alt="icon" />
            </div>
            <div className="talent-account-notifications-option-right-content">
              <div className="talent-account-notifications-option-right-content-text">
                Messages
              </div>
              <div className="talent-account-notifications-option-right-account-notifications-toggle-container">
                <label class="account-notifications-toggle">
                  <input
                    class="account-notifications-toggle-checkbox"
                    type="checkbox"
                  />
                  <div class="account-notifications-toggle-switch"></div>
                </label>{" "}
              </div>
            </div>
          </div>
          <div className="talent-account-notifications-options-container">
            <div className="talent-account-notifications-option-icon">
              <img src={chat} alt="icon" />
            </div>
            <div className="talent-account-notifications-option-right-content">
              <div className="talent-account-notifications-option-right-content-text">
                Chat
              </div>
              <div className="talent-account-notifications-option-right-account-notifications-toggle-container">
                <label class="account-notifications-toggle">
                  <input
                    class="account-notifications-toggle-checkbox"
                    type="checkbox"
                  />
                  <div class="account-notifications-toggle-switch"></div>
                </label>{" "}
              </div>
            </div>
          </div>
          <div className="talent-account-notifications-options-container">
            <div className="talent-account-notifications-option-icon">
              <img src={buyerRequest} alt="icon" />
            </div>
            <div className="talent-account-notifications-option-right-content">
              <div className="talent-account-notifications-option-right-content-text">
                Buyer Request
              </div>
              <div className="talent-account-notifications-option-right-account-notifications-toggle-container">
                <label class="account-notifications-toggle">
                  <input
                    class="account-notifications-toggle-checkbox"
                    type="checkbox"
                  />
                  <div class="account-notifications-toggle-switch"></div>
                </label>{" "}
              </div>
            </div>
          </div>
          <div className="talent-account-notifications-options-container">
            <div className="talent-account-notifications-option-icon">
              <img src={profileAvatar} alt="icon" />
            </div>
            <div className="talent-account-notifications-option-right-content">
              <div className="talent-account-notifications-option-right-content-text">
                Accounts and other
              </div>
              <div className="talent-account-notifications-option-right-account-notifications-toggle-container">
                <label class="account-notifications-toggle">
                  <input
                    class="account-notifications-toggle-checkbox"
                    type="checkbox"
                  />
                  <div class="account-notifications-toggle-switch"></div>
                </label>{" "}
              </div>
            </div>
          </div>
          <div className="talent-account-notifications-options-container">
            <div className="talent-account-notifications-option-icon">
              <img src={emailicon} alt="icon" className="talent-account-notifications-email-icon" />
            </div>
            <div className="talent-account-notifications-option-right-content">
              <div className="talent-account-notifications-option-right-content-text">
                Receive via Email
              </div>
              <div className="talent-account-notifications-option-right-account-notifications-toggle-container">
                <label class="account-notifications-toggle">
                  <input
                    class="account-notifications-toggle-checkbox"
                    type="checkbox"
                  />
                  <div class="account-notifications-toggle-switch"></div>
                </label>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountNotifications;
