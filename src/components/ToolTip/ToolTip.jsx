import React from "react";
import "../ToolTip/ToolTip.css";
import { Box, Typography } from "@mui/material";
import ClockIcon from "../../images/clockicon.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Picture from "../../images/profilepic.png";
import clockIcon from "../../images/tooltipclock.png";
import Picture1 from "../../images/tabprofileimg1.png";
import Picture2 from "../../images/tabprofileimg2.png";
import Picture3 from "../../images/tabprofileimg3.png";
import Picture4 from "../../images/circularprofile.png";
import { useNavigate } from "react-router-dom";

const ToolTip = () => {
  const TooltipData = [
    {
      image: Picture,
      text: "New Message from Nutella",
      time: "2 minutes ago",
    },
    {
      image: Picture1,
      text: "Alexa Liras Deliver order",
      time: "23 hours ago",
    },
    {
      image: Picture2,
      text: "Laurent Perrier accepted order",
      time: "5 days ago",
    },
    {
      image: Picture3,
      text: "New Message from Michael Levi",
      time: "1 weeks ago",
    },
    // {
    //   image: Picture4,
    //   text: "New Message from Nutella",
    //   time: "2minutes ago",
    // },
    // {
    //   image: Picture2,
    //   text: "New Message from Nutella",
    //   time: "2minutes ago",
    // },
  ];
  const navigate = useNavigate();
  return (
    <div style={{ zIndex: "1" }}>
      <Box
        className="pop-up-tip"
        sx={{
          // content: "",
          position: "absolute",
          zIndex: 10,
          right: -2,
          top: 55,
          // left: "80%",
          background: "#F6F6F6",
          width: "1.5rem",
          height: "1.5rem",
          // width: "12px",
          // height: "12px",
          transform: "translateY(-50%) rotate(45deg)",
          // marginTop: "-23px",
          // borderTeft: "1px solid #E1E1E1",
          // borderTop: "1px solid #E1E1E1",
          // zIndex: 5,
        }}
      ></Box>
      <Box
        className="pop-up-box"
        sx={{
          backgroundColor: "#F6F6F6",
          padding: "2rem 3rem",
          color: "black",
          // width: "20%",
          width: "20vw",
          maxHeight: "auto",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          alignContent: "center",
          borderRadius: "15px",
          position: "absolute",
          overflowY: "auto",
          top: 55,
          right: -80,
        }}
      >
        {TooltipData.map((item) => {
          return (
            <Box
              onClick={() => {
                navigate("/service-delivery");
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  className="box-img"
                  alt="img"
                  src={item.image}
                  sx={{ width: 56, height: 56 }}
                />
              </Stack>
              <Box
                style={{
                  displa: "flex",
                  flexDirection: "column",
                  paddingLeft: "15px",
                }}
              >
                <Box style={{ paddingBottom: "5px" }} className="box-text">
                  {item.text}
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "2px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      height: ".9rem",
                      width: ".9rem",
                      borderRadius: "50%",
                      color: "darkgrey",
                    }}
                  >
                    <img
                      className="box-time-img"
                      src={clockIcon}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </Box>
                  <Box
                    style={{ color: "grey", paddingLeft: "10px" }}
                    className="box-text"
                  >
                    {item.time}
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default ToolTip;
