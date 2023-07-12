import React, {useRef} from "react";
import "./BuyerMyprofile.css";
import ProfileImage from "../../images/circularprofile.png";
import verifiedicon from "../../images/verifiedicon.png";
import locationicon from "../../images/locationicon.png";
import profileMember from "../../images/profileMember.png";
import receantDeliveryIcon from "../../images/receantDeliveryIcon.png";
import globe from "../../images/globe.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import responseTime from "../../images/responseTime.png";
import grayDot from "../../images/grayDot.png";
import greenDot from "../../images/greenDot.png";
import righticom from "../../images/righticom.png";
import levelBar from "../../images/levelBar.PNG";
import StarIcon from "@material-ui/icons/Star";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Navbar from "../../components/MyNav/Navbar";
import EditProfileForm from "./EditProfileForm";


const BuyerMyProfile = (props) => {

  const navRef = useRef();
  const { userData } = props;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  let userinfo = userData && userData.user_id || {};
  const percentage = 90;
  const navigate = useNavigate();
  const memberSince = new Date(userinfo.createdAt);


  // const handleContactMe = async () => {
  //   let id = "";
  //   if (userData && userData.user_id) {
  //     id = userData.user_id._id || "";
  //   } else {
  //     console.error("userData or userData.user_id is undefined");
  //     // Handle error appropriately here.
  //   }


  //   try {
  //     const res = await newRequest.post("/add-to-chatlist",
  //       { chatWith: id, }

  //     )
  //     console.log(res);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  //   finally {
  //     navigate("/chat");
  //   }

  // };
  return (
     <>
     <div>
        <Navbar ref={navRef} />
      </div>
      <div
        className="order_details_main_page_div"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}

      > 
    <div className="talent-about-card-container">
        
      <div className="talent-about-card-inner-container">
        <img
          src={userinfo.profileImg || ProfileImage}
          alt="profle"
          className="talent-about-card-img"
        />
        <div className="talent-about-card-name-and-level-container">
          <div className="talent-about-card-name">{userinfo.username}</div>
          <div className="talent-about-card-level">(Level 2)</div>
          <img
            src={verifiedicon}
            alt="verify tick"
            className="talent-about-card-verified-tick"
          />
        </div>

        <div className="talent-about-card-description">
        Pakistan
          {userinfo.status}
         
        </div>
        <div className="talent-about-card-address-container">
          <img
            src={locationicon}
            alt="location icon"
            className="talent-about-card-address-icon"
          />
          <div className="talent-about-card-address">
            {userinfo.location}
          </div>
        </div>
        {/* {props.moreDetail === "datails" ? (
          <>
            <div className="talent-level-bar-container">
              <div className="talent-level-bar-inner-container">
                <div className="talent-level-star-container">
                  <StarIcon className="talent-level-star" />
                </div>
                <div className="talent-level-progress-bar-container">
                  <div className="talent-level-progress-bar-text">
                    Next Level
                  </div>
                  <div className="talent-level-progress-bar">
                    <img src={levelBar} alt="bar" />
                  </div>
                </div>

                <div className="talent-level-prgress-bar-number-container">
                  <div className="talent-level-prgress-bar-number-container">
                    90% (Level 1)
                  </div>
                  <img src={righticom} alt="arrow icon" />
                </div>
              </div>
            </div>
            <div className="talent-progress-data">
              <div className="talent_avg_response_rate_div">
                <div className="avg_response_rate_text_n_mins_div_main">
                  <text
                    style={{
                      paddingBottom: "10px",
                      fontWeight: 500,
                      fontFamily: "Roboto",
                    }}
                  >
                    Order Compilation
                  </text>
                  <text style={{ fontFamily: "Roboto" }}>{"24 orders"}</text>
                </div>
                <div className="talent_circular_progress_bar_div">
                  <CircularProgressbar
                    className="talent-circular-bar"
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textSize: "1.7rem",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                      textColor: "black",
                      trailColor: "white",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>
              <div className="talent_avg_response_rate_div">
                <div className="avg_response_rate_text_n_mins_div_main">
                  <text
                    style={{
                      paddingBottom: "10px",
                      fontWeight: 500,
                      fontFamily: "Roboto",
                    }}
                  >
                    Order Compilation
                  </text>
                  <text style={{ fontFamily: "Roboto" }}>{"24 orders"}</text>
                </div>
                <div className="talent_circular_progress_bar_div">
                  <CircularProgressbar
                    className="talent-circular-bar"
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textSize: "1.7rem",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                      textColor: "black",
                      trailColor: "white",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>
              <div className="talent_avg_response_rate_div">
                <div className="avg_response_rate_text_n_mins_div_main">
                  <text
                    style={{
                      paddingBottom: "10px",
                      fontWeight: 500,
                      fontFamily: "Roboto",
                    }}
                  >
                    Order Compilation
                  </text>
                  <text style={{ fontFamily: "Roboto" }}>{"24 orders"}</text>
                </div>
                <div className="talent_circular_progress_bar_div">
                  <CircularProgressbar
                    className="talent-circular-bar"
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textSize: "1.7rem",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                      textColor: "black",
                      trailColor: "white",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>
              <div className="talent_avg_response_rate_div">
                <div className="avg_response_rate_text_n_mins_div_main">
                  <text
                    style={{
                      paddingBottom: "10px",
                      fontWeight: 500,
                      fontFamily: "Roboto",
                    }}
                  >
                    Order Compilation
                  </text>
                  <text style={{ fontFamily: "Roboto" }}>{"24 orders"}</text>
                </div>
                <div className="talent_circular_progress_bar_div">
                  <CircularProgressbar
                    className="talent-circular-bar"
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textSize: "1.7rem",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 150, 107, ${percentage / 100})`,
                      textColor: "black",
                      trailColor: "white",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className="talent-about-card-btn"
            onClick={

              handleContactMe
            }
          >
            Contact me
          </div>
        )} */}

        <div className="talent-about-card-detail-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={profileMember} alt="prifile icon" />
            <div className="talent-about-card-detail-heading">Member Since</div>
          </div>
          <div className="talent-about-card-detail-text">{memberSince.toLocaleDateString()} </div>
        </div>
        <div className="talent-about-card-detail-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={responseTime} alt="clock icon" />
            <div className="talent-about-card-detail-heading">
              Response time
            </div>
          </div>
          <div className="talent-about-card-detail-text">30 min</div>
        </div>
        <div className="talent-about-card-detail-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={receantDeliveryIcon} alt="delviery icon" />
            <div className="talent-about-card-detail-heading">
              Most Recent Delivery
            </div>
          </div>
          <div className="talent-about-card-detail-text">4 hr ago</div>
        </div>
        <div className="talent-about-card-detail-language-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={globe} alt="globe icon" />
            <div className="talent-about-card-detail-heading">Languages</div>
          </div>
          <div className="talent-about-card-languages-parent-div">
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">English</div>
            </div>
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">
                Urdu (Native)
              </div>
            </div>
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">Pashto</div>
            </div>
          </div>
        </div>
        <div className="talent-about-card-heading">Description</div>
        <div className="talent-about-card-about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
          justo, scelerisque et euismod sit amet, eleifend quis magna. Sed
          fringilla, est at volutpat sodales, nisl eros tristique sapien,
        </div>

        <div className="talent-about-card-heading">Services & Experties</div>
        <div className="talent-about-card-servies-container">
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">Flutter</div>
          </div>
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">Node JS</div>
          </div>
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">AWS</div>
          </div>
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">Firebase</div>
          </div>
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">JavaScript</div>
          </div>
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">React Native</div>
          </div>
        </div>
        <div className="talent-about-card-heading">Education</div>
        <div className="talent-about-card-education-conatiner">
          <div className="talent-about-card-education">
            B.Sc. - Mechanical engineering MIT, United States
          </div>
          <div className="talent-about-card-education">
            Certificate - Marine Engineering
          </div>
        </div>

        <div className="talent-about-card-heading">Certificate</div>
        <div className="talent-about-card-education-conatiner">
          <div className="talent-about-card-education">Certification</div>
          <div className="talent-about-card-education">
            Native App developer
          </div>
          <div className="talent-about-card-education">Lorem ipsum</div>
        </div>
      </div>

    </div>
                </div> 

                <div className="bg-black-800 ml-[20rem] mt-[-55rem]">
                <EditProfileForm/>
                </div>

     </>

);
};

export default BuyerMyProfile;
