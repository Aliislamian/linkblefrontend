import React, { useState } from "react";
import "../ProfileToolTip/ProfileToolTip.css";
import { Box } from "@mui/material";
// import LanguageIcon from '@mui/icons-material/Language';
import LanguageGlobe from "../../images/globe.png";
import BlackDollar from "../../images/dollar.png";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
const ToolTip = () => {
  const [toggleState, setToggelState] = useState(false);
  const navigate = useNavigate();
  const handleClick = async (item) => {
    if (item.text === "Logout") {
      console.log("logout");
      try {
        await newRequest.post("/logout");
        console.log("logout api called");
        localStorage.setItem("currentUser", null);
        console.log("logout");
        // navigate("/talent-gig-earning-info");
        navigate(item.navigation);
      } catch (err) {
        console.log("errr in logout")
        console.log(err);
      }

      // it is used to reload the page
      // window.location.reload();

    } else {
      // setToggelState(!toggleState);
      navigate(item.navigation);
    }

  }


  const TooltipData = [
    {
      text: "My Profile",
    },
    {
      text: "My Talent Dashboard",
    },
    {
      text: "Post Service Request",
    },
    {
      text: "Posted Request",
    },
    {
      text: "Settings",
    },
    {
      text: "Help/Support",
    },

    {
      text: "English",
    },
    {
      text: "USD",
    },
    {
      text: "Logout",
    },
  ];
  const TooltipData2 = [
    {
      text: "My Profile",
      navigation: "/talent-add-new-gig",
    },
    {
      text: "Analytics",
      navigation: "/talent-gig-earning-info",
    },
    {
      text: "Buyer Servie Request",
      navigation: "/buyer-requests",
    },
    {
      text: "Settings",
      navigation: "/talent-account",
    },
    {
      text: "Help/Support",
      navigation: "/account-security",
    },
    {
      text: "Logout",
      navigation: "/talent-gig-earning-info",
    },
  ];

  let toggleData = toggleState ? TooltipData : TooltipData2;
  return (
    <div className="ParentContainer">
      <Box
        className="pro-pop-up-tip"
        sx={{
          position: "absolute",
          zIndex: 10,
          right: 13,
          top: 55,
          background: "#F6F6F6",
          width: ".8rem",
          height: ".8rem",
          transform: "translateY(-50%) rotate(45deg)",
        }}
      ></Box>
      <Box
        className="pro-pop-up-box"
        sx={{
          backgroundColor: "#F6F6F6",
          paddingTop: "2rem",
          // paddingBottom: "2rem",
          color: "black",
          width: "320px",
          maxHeight: "auto",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          borderRadius: "15px",
          position: "absolute",
          overflowY: "auto",
          top: 55,
          right: -16,
        }}
      >
        <div className="btn-container">
          <button className="top-btn">Balance: USD $ 133</button>
          <div className="toggle-btn">
            <button
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/buyerhome")}
              className={
                toggleState ? "toogle-btn-1 select-btn" : "toogle-btn-1"
              }
            >
              Buyer Mode
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => setToggelState(false)}
              className={
                !toggleState ? "toogle-btn-2 select-btn" : "toogle-btn-2"
              }
            >
              Talent Mode
            </button>
          </div>
        </div>

        {toggleData.map((item) => {
          return (
            <Box
              //  onClick={() => navigate(item.navigation)}
              onClick={() => handleClick(item)}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
                justifyContent: "left",
                marginBottom: "1.5rem",
                marginLeft: "30px",
              }}
            >
              <Box
                style={{ paddingBottom: "5px", fontSize: "23px" }}
                className="pro-box-text"
              >
                {item.text === "English" ? (
                  <div className="languageDiv">
                    <span>
                      {" "}
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src={LanguageGlobe}
                        alt="lan"
                      />
                    </span>
                    <span style={{ paddingBottom: "8px", marginLeft: "8px" }}>
                      English
                    </span>
                  </div>
                ) : item.text === "USD" ? (
                  <div className="languageDiv">
                    <span>
                      {" "}
                      <img
                        style={{ width: "20px", height: "25px" }}
                        src={BlackDollar}
                        alt="lan"
                      />
                    </span>
                    <span style={{ paddingBottom: "8px", marginLeft: "13px" }}>
                      USD
                    </span>
                  </div>
                ) : (
                  item.text
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default ToolTip;
