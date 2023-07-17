import React, {useRef, useContext, useEffect, useState } from "react";
import axios from "axios";
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
  const [userLogin, setuserLogin] = useState(null);
  const [userID, setuserID] = useState('');
  console.log("userinfo--------", userID);
  
  let userinfo = userData && userData.user_id || {};
  const percentage = 90;
  const navigate = useNavigate();
  const memberSince = new Date(userinfo.createdAt);
  
  useEffect(() => {
    // Retrieve "currentUser" data from localStorage
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      // Parse the JSON data
      const currentUser = JSON.parse(currentUserData);
      console.log("currentUsersASasASasas;;;;;;;;;;;;;;;;;;;;;;;;;;;;", currentUser._id);
      setuserID(currentUser._id)
      // Do something with the currentUser data
    }
  }, []);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make an API request to fetch the logged-in user data
        const response = await axios.get("https://linkablebackend-production-e3d2.up.railway.app/signIn", {
          headers: {
            user_id: userID // Replace with the logged-in user's ID
          }
        });
        console.log("----->>>>", response.data.userData._id);
        // Set the fetched user data to the state
        setuserLogin(response.data.userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
     <>

        {userLogin ? (
        <div>
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
          <div className="flex flex-col justify-center">
          <div className="talent-about-card-name">{userLogin.username}</div>
          <div className="talent-about-card-level">{userLogin.status}</div>
          </div>
          <img
            src={verifiedicon}
            alt="verify tick"
            className="talent-about-card-verified-tick"
          />
        </div>

        <div className="talent-about-card-description">
        {userLogin.location}
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
        <div className="talent-about-card-detail-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={responseTime} alt="clock icon" />
            <div className="talent-about-card-detail-heading">
              Response time
            </div>
          </div>
          <div className="talent-about-card-detail-text">30 min</div>
        </div>
        <div className="talent-about-card-detail-language-container">
          <div className="talent-about-card-detail-icon-and-heading">
            <img src={globe} alt="globe icon" />
            <div className="talent-about-card-detail-heading">Languages</div>
          </div>
          <div className="talent-about-card-languages-parent-div">
            <div className="talent-about-card-languages-div">
              <img src={grayDot} alt="dot icon" />
              <div className="talent-about-card-languages-text">{userLogin.languages}</div>
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
          {/* {userLogin.description} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
          justo, scelerisque et euismod sit amet, eleifend quis magna. Sed
          fringilla, est at volutpat sodales, nisl eros tristique sapien,
        </div>

        <div className="talent-about-card-heading">Services & Experties</div>
        <div className="talent-about-card-servies-container">
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">{userLogin.servicesExperties}</div>
          </div>
          <div className="talent-about-card-service-div">
            <img src={greenDot} alt="dot icon" />
            <div className="talent-about-card-service">{userLogin.servicesExperties}</div>
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
          {userLogin.education}
          </div>
          <div className="talent-about-card-education">
            Certificate - Marine Engineering
          </div>
        </div>

        <div className="talent-about-card-heading">Certificate</div>
        <div className="talent-about-card-education-conatiner">
          <div className="talent-about-card-education">Certification</div>
          <div className="talent-about-card-education">
          {userLogin.certificate}
          
          </div>
          <div className="talent-about-card-education">Lorem ipsum</div>
        </div>
      </div>

    </div>
                </div> 

                <div className="bg-black-800 ml-[20rem] mt-[-50rem]">
                <EditProfileForm/>
                </div>
        </div>
       
      ) : (
            <div>Loding....</div>
      )}

   

     </>

);
};

export default BuyerMyProfile;
