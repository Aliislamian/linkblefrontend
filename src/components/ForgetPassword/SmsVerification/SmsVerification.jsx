import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "../SmsVerification/SmsVerification.css";
import CrossIcon from "../../../images/crossicon.png";
import Lock from "../../../images/lock.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@material-ui/core";
const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleChange = (code) => setCode(code);
  const hanleClick = () => {
    setCode("");
  };
  return (
    <Dialog
      className="forget-password-parent-div"
      open={props.showSmsVerificationPopUp}
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
                onClick={props.handleVerifyBackEvent}
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

          <div className="verification-div">
            <div className="verification-text">Verification</div>
            <div className="text-below-verification-text">
              An EMAIL with a confirmation code has been sent to your email
            </div>
            <div className="Otp-input-div">
              <div className="Otp-input">
                <OtpInput
                  className="otp-container"
                  value={code}
                  onChange={handleChange}
                  numInputs={4}
                  separator={<span style={{ width: "2.5vw" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    // border: "1px solid green",
                    borderRadius: "3px",
                    border: "none",
                    backgroundColor: "rgba(167, 167, 167)",
                    width: "30px",
                    height: "30px",
                    fontSize: "16px",
                    color: "#ffff",
                    fontWeight: "400",
                    caretColor: "white",
                    marginBottom: "5px",
                    // outline: "none",
                    // boxShadow:"#00966B 0px 1px 2px"
                    // boxShadow: "#00966B 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                    boxShadow: "#00966B 0px 1px 2px",
                  }}
                  containerStyle={
                    {
                      // borderBottom: "1px solid green",
                      // borderBottom: "dashed 2px green",
                    }
                  }
                  focusStyle={{
                    // border: "1px solid ",

                    outline: "none",
                  }}
                />
              </div>
              <div className="verifiaction-cross-icon" onClick={hanleClick}>
                <CloseIcon />
              </div>
            </div>
            {/* <div className="under-line-div">
                <div className="lines">
                  <img className="line-img" src={Line} alt="under line" />
                  <img className="line-img" src={Line} alt="under line" />
                  <img className="line-img" src={Line} alt="under line" />
                  <img className="line-img" src={Line} alt="under line" />
                </div>
              </div> */}

            <div className="underline-contianer">
              <div className="line-div"></div>
              <div className="line-div"></div>
              <div className="line-div"></div>
              <div className="line-div"></div>
            </div>
          </div>

          <div className="verify-btn-div" onClick={() => props.handleVerify()}>
            <div className="send-code-btn">Verify & Continue</div>
          </div>

          <div className="below-verify-button-div">
            <div className="resend-div">Resent Code</div>
            <div className="change-email-div">Change Email?</div>
          </div>
          <div className="password-reset-bottom-text">
            <div className="password-reset-text">
              Enter security code that we have sent to your email, make sure to
              check your spam, junk mail box folder
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ResetPassword;
