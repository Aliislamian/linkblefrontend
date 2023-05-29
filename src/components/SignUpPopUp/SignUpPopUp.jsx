import React, { useEffect } from "react";
import JoinNowPopUpImage from "../../images/ultimateCard.png";
import CrossIcon from "../../images/crossicon.png";
import "../SignUpPopUp/SignUpPopUp.css";
import { useState } from "react";
import EmailIcon from "../../images/emailicon.png";
import Profile from "../../images/profile.png";
import PasswordIcon from "../../images/passwordlock.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Dialog } from "@material-ui/core";
import newRequest from "../../utils/newRequest";
const SignUpPopUp = ({
  showSignUpPopUp,
  hideSignUpPopUp,
  handleSignUp,
  handleSignInHere,
}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isPasswordShown, setIsPasswordShown] = useState();
  const [checkIcon, setCheckIcon] = useState(true);
  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  useEffect(() => {
    setError(null);
  }, [email, password, username]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post("/signup", {
        username,
        password,
        email,
      });
      localStorage.setItem("currentUser", JSON.stringify(response && response.data && response.data.userData));
      console.log(response && response.data && response.data.userData);
      handleSignUp();
    } catch (error) {
      setError(error.response && error.response.data || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <Dialog
      className="signup-parent-div"
      open={showSignUpPopUp}
      onClose={hideSignUpPopUp}
      fullScreen={true}
      fullWidth={true}
    >
      <form onSubmit={handleSubmit} className="signup_popup_main">
        <div className="signup_popUp_sub_main">
          <div className="signup_first_main">
            <div className="signup_pic_above_css">
              The Ultimate services that fits your brand personality.{" "}
            </div>
            <div className="signup-image-div">
              <img
                src={JoinNowPopUpImage}
                alt="Join Now Image"
                className="signup-image"
              />
            </div>
          </div>
          <div className="signup_second_main">
            <div className="signup_cross_icon_main">
              <img
                src={CrossIcon}
                alt="image"
                className="signup_join_now_cross_icon_css"
                onClick={() => {
                  hideSignUpPopUp();
                  setError(null);
                }}
              />
            </div>
            <div className="signup_welcome_heading">Welcome!</div>
            <div className="signup_welcome_heading_below_text">
              Sing Up to access all feature and Functionality{" "}
            </div>
            <div className="signup_main_div_input_field">
              <div className="signup_email_tag_div">Email</div>
              <div className="signup_first-input">
                <div className="signup_signup_input_field">
                  <img
                    src={EmailIcon}
                    alt="email icon"
                    className="signup_email_Icon_css_1"
                  />
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="appuser2021@gmail.com"
                    className="signup_input_css"
                    required

                  />
                </div>
              </div>
              <div className="signup_email_tag_div">Username</div>
              <div className="signup_first-input">
                <div className="signup_signup_input_field">
                  <img
                    src={Profile}
                    alt="email icon"
                    className="signup_email_Icon_css_profile"
                  />
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    minLength="6"
                    maxLength="20"
                    required
                    placeholder="FreelanceAppUser2021"
                    className="signup_input_css"
                  />
                </div>
              </div>
              <div className="username-text ">
                Username will be Visible to everyone & You can't change it
              </div>

              <div className="signup_password_tag_div">Password</div>
              <div className="signup_second-input">
                <div className="signup_signup_input_field">
                  <img
                    src={PasswordIcon}
                    alt="email icon"
                    className="signup_email_Icon_css_2"
                  />
                  <input
                    type={isPasswordShown ? "text" : "password"}
                    className="signup_input_css"
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
              <div className="username-text ">
                Enter Upper, Lowercase letters & Number for strong Password{" "}
              </div>
            </div>
            <div className="signup_forgot_password_checkbox">
              <div className="signup_checkBox_remeber_me_div">
                {/* <input type="checkbox" className="signup_checkbox_css" /> */}
                <TaskAltIcon
                  className={
                    checkIcon ? "signup-check-list-before" : "signup-check-list-after"
                  }
                  onClick={() => setCheckIcon(!checkIcon)}
                />
                <text className="signup_remeber_me_text">
                  By Joining, I agree with App's Terms and Conditions
                </text>
              </div>
            </div>
            <button type="submit" style={{
              outline: "none", border: "none",
              cursor: checkIcon ? "not-allowed" : "pointer"
            }} className="signup_button"

              // disable it if check box is not checked
              disabled={checkIcon}


            >
              Sign Up
            </button>
            {/* condioitno error */}
            {error && (
              <div className="signup_error_div">
                <div className="signup_error_div_text">
                  {error}
                </div>
              </div>
            )}
            <div className="signup_Join_now_main">
              <text className="sign-in-text">Already have an account?</text>
              <text
                className="join_now_text_css"
                onClick={() => handleSignInHere()}
              >
                {" "}
                Sign in Here
              </text>
            </div>
          </div>
        </div>
      </form>

    </Dialog >
  );
};

export default SignUpPopUp;
