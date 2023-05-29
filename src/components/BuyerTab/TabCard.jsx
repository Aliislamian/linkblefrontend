import React, { useState, useEffect } from "react";
import "./TabCard.css";

// import "./TabCard";
import checkBox from "../../images/tickMarkWhite.png";
import emptyCheckBox from "../../images/Rectangle.png";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardContentText,
  CardMedia,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TabCard = ({
  Image,
  ProfileImage,
  ProfileName,
  OrderBudget,
  OrderStatus,
  OrderDate,
  OrderNumber,
  StatusColor,
  handleAllCheckBoxClick,
  IsLinkJobClicked,
  allCheckBoxState,
  CardNavigation,
}) => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [allCheckBox, setAllCheckBox] = useState(false);
  const [singleCheckBox, setSingleCheckBox] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  let count = 0;
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (allCheckBoxState === true) {
      setCheckBoxState(true);
    } else {
      setCheckBoxState(false);
    }
  }, [allCheckBoxState]);

  if (width <= 650) {
    count = 1;
  } else {
    count = 0;
  }
  const handleCheckBoxClick = () => {
    setCheckBoxState(!checkBoxState);
  };
  return (
    <div>
      {count === 0 ? (
        <div className="card-wrapper">
          {IsLinkJobClicked && (
            <div className="check-box-wrapper">
              <img
                onClick={handleCheckBoxClick}
                class="movable-card-chek-box"
                src={checkBoxState ? checkBox : emptyCheckBox}
                alt="checkbox"
              />
            </div>
          )}
          <Card
            className="parent-card"
            sx={{
              // width: '100%',
              maxWidth: "100%",
              height: "130px",
              backgroundColor: "#F2F2F2",
              marginTop: "10px",

              display: "flex",
              flexDirection: "row",
              borderRadius: "10px",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="card-img-box"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "0.625vw",
              }}
            >
              <CardActions
                className="tab-card-img-container"
              // style={{
              //   paddingRight: "1.25vw",
              // }}
              >
                <CardMedia
                  className="card-img"
                  component="img"
                  // height="100"
                  image={Image}
                  alt="Order Image"
                  sx={{
                    width: "8rem",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </CardActions>
            </Box>
            <Box
              className="movable-card-profile"
              style={{
                width: "20vw",
                // backgroundColorvwyellow",
                paddingLeft: "2vw",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardActions>
                <Avatar>
                  <img
                    src={ProfileImage}
                    alt="img"
                    style={{ objectFit: "cover" }}
                  />
                </Avatar>
                <Typography
                  className="movable-card-profile-text"
                  style={{ paddingLeft: "1vw", fontSize: "1.3rem" }}
                >
                  {ProfileName}
                </Typography>
              </CardActions>
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                width: "15vw",
              }}
            >
              <CardContent className="text-card">
                <Typography
                  className="movable-card-heading"
                  style={{ paddingBottom: ".1vw" }}
                >
                  Budget
                </Typography>
                <Typography
                  className="movable-card-tile"
                  style={{
                    color: "black",
                    fontWeight: "700",
                    paddingLeft: "5px",
                    fontSize: "1.3rem",
                  }}
                >
                  {OrderBudget}
                </Typography>
              </CardContent>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                width: "15vw",
              }}
            >
              <CardContent className="text-card">
                <Typography
                  className="movable-card-heading"
                  style={{ paddingBottom: ".1rem" }}
                >
                  Status
                </Typography>
                <Typography
                  className="movable-card-tile"
                  style={{
                    fontWeight: 700,
                    color: `#${StatusColor}`,
                    fontSize: "1.3rem",
                  }}
                >
                  {OrderStatus}
                </Typography>
              </CardContent>
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "cornflowerblue",
                // paddingLeft: '10%',
                width: "25vw",
              }}
            >
              <CardContent className="text-card">
                <Typography
                  className="movable-card-heading"
                  style={{ paddingBottom: ".1rem" }}
                >
                  Date
                </Typography>
                <Typography
                  className="movable-card-tile"
                  style={{
                    fontWeight: 700,
                    color: "black",
                    fontSize: "1.3rem",
                    whiteSpace: "nowrap"
                  }}
                >
                  {OrderDate}
                </Typography>
              </CardContent>
            </Box>

            {OrderNumber !== "none" && (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  className="movable-card-order-number"
                  style={{
                    backgroundColor: "#FFFFFF",
                    fontSize: "small",
                    position: "absolute",
                    right: "-2px",
                    paddingRight: "8px",
                    borderTopRightRadius: "10px",
                    height: "20px",
                  }}
                >
                  {OrderNumber}
                </Box>
              </Box>
            )}

            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "2vw",
              }}
            >
              <Box
                className="view-order-btn"
                onClick={() => navigate(CardNavigation)}
                style={{
                  width: "8rem",
                  backgroundColor: "#00966B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  color: "white",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <span className="view-order-text"> View Order</span>
              </Box>
            </Box>
          </Card>
        </div>
      ) : (
        <div className="card-wrapper">
          {IsLinkJobClicked && (
            <div className="check-box-wrapper">
              <img
                onClick={handleCheckBoxClick}
                class="movable-card-chek-box"
                src={checkBoxState ? checkBox : emptyCheckBox}
                alt="checkbox"
              />
            </div>
          )}
          <Card
            className="mobile-parent-card"
            sx={{
              // width: '100%',
              maxWidth: "100%",
              height: "140px",
              backgroundColor: "#F2F2F2",
              marginTop: "10px",

              // display: "flex",
              // flexDirection: "row",
              borderRadius: "10px",
              // justifyContent: "space-between",
            }}
          >
            <div className="movable-card-mobile-div">
              <div className="movable-card-mobile-top-div">
                <div className="movable-card-mobile-top-left-div">
                  <div className="movable-card-mobile-profile">
                    <img
                      src={ProfileImage}
                      alt="img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="movable-card-mobile-name">{ProfileName}</div>
                </div>
                <div className="movable-card-mobile-top-right-div">
                  {OrderNumber !== "none" && (
                    <div className="movable-card-mobile-order-number">
                      {OrderNumber}
                    </div>
                  )
                  }
                  <div className="movable-card-mobile-btn">
                    <Box
                      className="view-order-btn"
                      onClick={() => navigate(CardNavigation)}
                      style={{
                        width: "8rem",
                        backgroundColor: "#00966B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        color: "white",
                        height: "1.2rem",
                        cursor: "pointer",
                      }}
                    >
                      <span className="view-order-text"> View Order</span>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="movable-card-mobile-bottom-div">
                <div className="movable-card-mobile-bottom-left-div">
                  <Box
                    className="card-img-box"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "0.625vw",
                    }}
                  >
                    <CardActions
                      className="tab-card-img-container"
                    // style={{
                    //   paddingRight: "1.25vw",
                    // }}
                    >
                      <CardMedia
                        className="card-img"
                        component="img"
                        // height="100"
                        image={Image}
                        alt="Order Image"
                        sx={{
                          width: "8rem",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                      />
                    </CardActions>
                  </Box>
                </div>
                <div className="movable-card-mobile-bottom-right-div">
                  {/* <div className="movable-card-text-div"> */}
                  <div className="movable-card-text-wrapper">
                    <div className="movable-card-mobile-text-heading">
                      Budget
                    </div>
                    <div className="budget-data"> {OrderBudget}</div>
                  </div>
                  <div className="movable-card-text-wrapper">
                    <div className="movable-card-mobile-text-heading">
                      Status
                    </div>
                    <div
                      className="status-data"
                      style={{
                        color: `#${StatusColor}`,
                      }}
                    >
                      {OrderStatus}
                    </div>
                  </div>
                  <div className="movable-card-text-wrapper">
                    <div className="movable-card-mobile-text-heading">Date</div>
                    <div className="date-data">{OrderDate} </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Card>
        </div>
      )}
    </div>
  );
};

export default TabCard;
