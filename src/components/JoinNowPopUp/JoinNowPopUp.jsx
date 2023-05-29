import React, { useEffect } from "react";
import JoinNowPopUpImage from "../../images/joinnowimage.png";
import CrossIcon from "../../images/crossicon.png";
import "../JoinNowPopUp/JoinNowPopUp.css";
import { useState } from "react";
import EmailIcon from "../../images/emailicon.png";
import PasswordIcon from "../../images/passwordlock.png";
import FaceBookicon from "../../images/faceboook.png";
import GoogleIcon from "../../images/googleicon.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Dialog } from "@material-ui/core";
import newRequest from "../../utils/newRequest";
const JoinNowPopUp = ({
  showPopUp,
  hidePopUp,
  handleSignIn,
  handleForgetPassword,
  handleJoinNow,
}) => {

  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [checkIcon, setCheckIcon] = useState(true);
  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post("/signin", {
        password,
        email,
      });
      localStorage.setItem("currentUser", JSON.stringify(response.data.userData));
      console.log(response.data.userData);
      handleSignIn();
    } catch (error) {
      setError(error.response.data.error);

      console.log(error);
      console.log(error.response.data.error);
    }
  };
  useEffect(() => {
    setError(null);
  }, [email, password]);

  return (
    // <div className="parent-div">
    <Dialog
      className="parent-div"
      open={showPopUp}
      onClose={hidePopUp}
      fullScreen={true}
      fullWidth={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit} className="popup_main">
        <div className="popUp_sub_main">
          <div className="first_main">
            <div className="pic_above_css">
              Search the ultimate freelance service providers
            </div>
            <div className="image-div">
              <img
                src={JoinNowPopUpImage}
                alt="Join Now Image"
                className="join_now_image"
              />
            </div>
          </div>
          <div className="second_main">
            <div className="cross_icon_main">
              <img
                src={CrossIcon}
                alt="image"
                className="join_now_cross_icon_css"
                onClick={() => {
                  hidePopUp();
                  setError(null);
                }}
              />
            </div>
            <div className="welcome_heading">Welcome Back!</div>
            <div className="welcome_heading_below_text">
              Sign in to our app to hire exactly what you need.
            </div>
            <div className="main_div_input_field">
              <div className="email_tag_div">Email</div>
              <div className="first-input">
                <div className="_input_field">
                  <img
                    src={EmailIcon}
                    alt="email icon"
                    className="email_Icon_css_1"
                  />
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="appuser2021@gmail.com"
                    className="input_css"
                  />
                </div>
              </div>
              <div className="password_tag_div">Password</div>
              <div className="second-input">
                <div className="_input_field">
                  <img
                    src={PasswordIcon}
                    alt="email icon"
                    className="email_Icon_css_2"
                  />
                  <input
                    required
                    placeholder="password"
                    type={isPasswordShown ? "text" : "password"}
                    className="input_css"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div
                    className="eye-icon-div"
                    onClick={togglePasswordVisiblity}
                  >
                    {!isPasswordShown ? (
                      <VisibilityOffIcon className="eye-icon" />
                    ) : (
                      <RemoveRedEyeIcon className="eye-icon" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="main_forgot_password_checkbox">
              <div className="checkBox_remeber_me_div">
                {/* <input type="checkbox" className="checkbox_css" /> */}
                {/* <img src={CheckList} alt="check List icon"  className="check-list-img" /> */}
                <TaskAltIcon
                  className={
                    checkIcon ? "check-list-before" : "check-list-after"
                  }
                  onClick={() => setCheckIcon(!checkIcon)}
                />
                <text className="remeber_me_text">Remember me</text>
              </div>
              <div
                className="forgot_password_div"
                onClick={() => handleForgetPassword()}
              >
                Forgot Password?
              </div>
            </div>
            <button type="submit"
              style={{
                outline: "none", border: "none",
                cursor: "pointer"
              }}
              className="sign_in_button_main"

            >
              Sign in
            </button>
            {error && (
              <div className="signup_error_div">
                <div className="signup_error_div_text">
                  {error}
                </div>
              </div>
            )}
            <div className="Join_now_main">
              <text className="dont_have_account_text_css">
                Don't have account?
              </text>
              <text className="join_now_text_css" onClick={handleJoinNow}>
                Join Now
              </text>
            </div>
            <div className="sign_in_with_main">
              <div className="left_line"></div>
              <div className="text_between_line">Or Sign in with</div>
              <div className="right_line"></div>
            </div>
            <div className="google_facebook_main">
              <div className="google_div">
                <img
                  src={GoogleIcon}
                  alt="google_icon"
                  className="google_icon_css"
                />
                <text className="google_text">Google</text>
              </div>
              <div className="facebook_div">
                <img
                  src={FaceBookicon}
                  alt="facebook_icon"
                  className="facebook_icon_css"
                />
                <text className="facebook_text">Facebook</text>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Dialog>
    // </div>
  );
};

export default JoinNowPopUp;
