import React, { useState } from "react";
import "../ResetPassword/ResetPassword.css";
import CrossIcon from "../../../images/crossicon.png";
import Lock from "../../../images/lock.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PasswordIcon from "../../../images/passwordlock.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@material-ui/core";

const EmailVerification = (props) => {
  const navigate = useNavigate();
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isPasswordShown2, setIsPasswordShown2] = useState(true);

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  const togglePasswordVisiblity2 = () => {
    setIsPasswordShown2(!isPasswordShown2);
  };
  return (
    <Dialog
      className="forget-password-parent-div"
      open={props.showResetPassword }
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
            <div className="forget-password">
              <div className="back-arrow-div">
                <ChevronLeftIcon
                  className="back-arrow"
                  onClick={props.handleResetPasswordBackEvent}
                />
              </div>
              <div className="forget-password-text">Forgot Password</div>
            </div>

            <div className="password-middle-div">
              <div className="lock-img-text-div">
                <div className="img-div">
                  <img src={Lock} alt="lock image" className="lock-img" />
                </div>
                <div className="lock-img-text">Forgot Passoword</div>
              </div>
            </div>
            <div className="password-input">
              <div className="password-tag ">New Password</div>
              <div className="email-verification-input-div">
                <div className="email-verification-input-field">
                  <img
                    src={PasswordIcon}
                    alt="email icon"
                    className="lock-icon"
                  />
                  <input
                    type={isPasswordShown ? "password" : "text"}
                    placeholder="password"
                    className="signup_input_css"
                  />
                  <div
                    className="eye-icon-div"
                    onClick={togglePasswordVisiblity}
                  >
                    {isPasswordShown ? (
                      <VisibilityOffIcon className="eye-icon" />
                    ) : (
                      <RemoveRedEyeIcon className="eye-icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="password-input">
              <div className="password-tag ">Confirm Password</div>
              <div className="email-verification-input-div">
                <div className="email-verification-input-field">
                  <img
                    src={PasswordIcon}
                    alt="email icon"
                    className="lock-icon"
                  />
                  <input
                    type={isPasswordShown2 ? "password" : "text"}
                    placeholder="confirm password"
                    className="signup_input_css"
                  />
                  <div
                    className="eye-icon-div"
                    onClick={togglePasswordVisiblity2}
                  >
                    {isPasswordShown2 ? (
                      <VisibilityOffIcon className="eye-icon" />
                    ) : (
                      <RemoveRedEyeIcon className="eye-icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="change-password-btn-div"
              onClick={() => props.handleChangePassword()}
            >
              <div className="change-password-btn">Change Password</div>
            </div>
            <div className="reset-password-bottom-text">
              <div className="reset-password-text">
                Make sure your Password must be at least 8 characters long
                contain a number and an uppercase letter
              </div>
            </div>
          </div>
        </div>
    
    </Dialog>
  );
};

export default EmailVerification;
