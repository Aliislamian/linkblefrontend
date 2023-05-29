import React from "react";
import "../EmailVerification/EmailVerification.css";
import CrossIcon from "../../../images/crossicon.png";
import Lock from "../../../images/lock.png";
import EmailIcon from "../../../images/emailicon.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@material-ui/core";

const EmailVerification = (props) => {
  const navigate = useNavigate();
  return (
    <Dialog
      className="forget-password-parent-div"
      open={props.showEmailPopUp}
      onClose={props.handleCrossIcon}
    >
      <div className="mode-main-div">
        <div className="sub_main_mode_div1">
          <div className="cross_icon_main_div1">
            <img
              src={CrossIcon}
              alt="cross_icon"
              className="mode_cross_icon_css1"
              onClick={() => props.handleCrossIcon()}
            />
          </div>

          {/* <div className="continue_as_div1">Continue as!</div> */}
          <div className="forget-password">
            <div className="back-arrow-div">
              <ChevronLeftIcon
                className="back-arrow"
                onClick={() => {
                  navigate("/mynav");
                }}
              />
            </div>
            <div className="forget-password-text">Forgot Password</div>
          </div>

          <div className="middle-div">
            <div className="lock-img-text-div">
              <div className="img-div">
                <img src={Lock} alt="lock image" className="lock-img" />
              </div>
              <div className="lock-img-text">Forgot Passoword</div>
            </div>
          </div>
          <div className="email-input">
            <div className="email-verification-tag ">Email</div>
            <div className="email-verification-input-div">
              <div className="email-verification-input-field">
                <img
                  src={EmailIcon}
                  alt="email icon"
                  className="email-verification-Icon"
                />
                <input
                  type="text"
                  placeholder="appuser2021@gmail.com"
                  className="signup_input_css"
                />
              </div>
            </div>
          </div>

          <div
            className="send-code-btn-div"
            onClick={() => props.handleSendCode()}
          >
            <div className="send-code-btn">Send Code</div>
          </div>
          <div className="email-verifiaction-bottom-text">
            <div className="email-verifiaction-text">
              Enter your email that your provided in the Sign up, We will
              Security code to your that email.
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EmailVerification;
