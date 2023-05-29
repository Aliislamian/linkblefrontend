import React, { useEffect, useState, useRef } from "react";
import "../BuyerTab/BuyerTabs.css";
import { Box, Tabs, Tab, Typography, useTheme, AppBar } from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import TabCard from "./TabCard";
import LinkedTabCard from "../LinkedTabCard/LinkedTabCard";
import TabCardImage1 from "../../images/tabcardimg1.png";
import TabCardImage2 from "../../images/tabcardimg2.png";
import TabCardImage3 from "../../images/tabcardimg3.png";
import TabProfileImage1 from "../../images/tabprofileimg1.png";
import TabProfileImage2 from "../../images/tabprofileimg2.png";
import TabProfileImage3 from "../../images/tabprofileimg3.png";
import LinkedJobPopup from "../LinkedJobPopup/LinkedJobPopup";
import InclineLeft from "../../images/inclineLeft.jpeg";
import Incline2 from "../../images/incline4.jpeg";
import checkBox from "../../images/tickMarkWhite.png";
import emptyCheckBox from "../../images/Rectangle.png";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const BuyerTabs = (props) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const [tabImgLeft, setTabImgLeft] = useState(false);
  const [tabImgRight, setTabImgRight] = useState(true);
  const [showLinkedPopup, setShowLinkedPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allCheckBoxState, setAllCheckBoxState] = useState(false);
  const [linkJob, setLinkJob] = useState(false);
  const [linkJobBtn, setLinkJobBtn] = useState(true);
  const [linkJobBtnFirstClick, setLinkJobBtnFirstClick] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  let tabDistance;
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  if (width <= 300) {
    tabDistance = 90;
  } else if (width <= 350) {
    tabDistance = 96;
  } else if (width <= 768) {
    tabDistance = 112;
  } else {
    tabDistance = 160;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 5) {
      setTabImgRight(false);
      setTabImgLeft(true);
      setCount(tabDistance * newValue);
    } else if (newValue === 0) {
      setTabImgLeft(false);
      setTabImgRight(true);
      setCount(tabDistance * newValue);
    } else {
      setTabImgRight(true);
      setTabImgLeft(true);
      setCount(tabDistance * newValue);
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleAllCheckBoxClick = () => {
    setAllCheckBoxState(!allCheckBoxState);
    // cardRef.current.handleAllCheckBoxClick();
  };

  const handleLinkJob = () => {
    if (!linkJobBtnFirstClick) {
      if (linkJob === true) {
        setLinkJob(false);
      } else {
        setLinkJob(!linkJob);
        setLinkJobBtnFirstClick(true);
      }
    } else {
      setShowLinkedPopup(true);
      setLinkJobBtnFirstClick(false);
    }
  };
  const TabCardData = [
    {
      image: TabCardImage1,
      profileImage: TabProfileImage1,
      profileName: "Julia Abbot",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage3,
      profileImage: TabProfileImage3,
      profileName: "Abigail",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
  ];

  const LinkedTabCardData = [
    {
      image: TabCardImage1,
      profileImage: TabProfileImage1,
      profileName: "Julia Abbot",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
    {
      image: TabCardImage2,
      profileImage: TabProfileImage2,
      profileName: "Quinn Beck",
      Budget: "$100",
      Status: "Active",
      Date: "Feb 2",
      orderNumber: "Order # FO2C8DEB9AZ2",
    },
  ];
  const cardRef = useRef();
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginLeft: "6vw",
        marginTop: "2rem",
        maxWidth: "100%",
        marginRight: "5.6vw",
      }}
    >
      <Box>
        <LinkedJobPopup
          showPopup={showLinkedPopup}
          hidePopup={() => setShowLinkedPopup(false)}
          title={"Link Active Orders"}
          heading={
            "Create & Link multiple Jobs for easily and quick accessibility"
          }
          FirstInputLabel={"Link Name"}
          SecondInputLabel={"Details"}
          opt={"(opt)"}
          SubmitBtn={"Link Jobs"}
          CancelBtn={"Cancel"}
        // handelSubmitBtn={}
        />
      </Box>
      <Box
        className="movable-box-parent-container"
        style={{
          width: "100%",
          backgroundColor: "#00966B",
          maxHeight: "40rem",
          overflowY: "scroll",
          // overflowY: 'hidden'
        }}
      >
        <AppBar
          className="movable-card-app-bar"
          position="static"
          style={{
            backgroundColor: "#F2F2F2",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: "10px",
          }}
        >
          <div className="tab-left-container">
            <Tabs
              className="tabs"
              value={value}
              onChange={handleChange}
              indicatorColor="prximary"
              textColor="inherit"
              // variant="fullWidth"
              aria-label="full width tabs example"
              hidden={false}
              visibleScrollbar={false}
              variant="scrollable"
              // scrollButtons="auto"
              scrollButtons={false}
              scrollbarWidth={false}
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#00966B",
                  color: "white",

                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "20px",
                },
                "& .MuiTab-root:first-child": {
                  borderTopLeftRadius: value === 0 ? "0" : "20px",
                  borderTopRightRadius: "20px",
                },
                "& .MuiTab-root:last-child": {
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "0",
                },
                marginRight: "20px",
              }}
            >
              <Tab
                onClick={() => {
                  setLinkJobBtn(true);
                }}
                className="tab-items"
                label="Active Orders"
                {...a11yProps(0)}
                sx={{
                  color: "black",
                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "0",
                  width: "10rem",
                }}
              />

              <Tab
                onClick={() => {
                  setLinkJobBtn(false);
                  setLinkJob(false);
                  setLinkJobBtnFirstClick(false);
                }}
                className="tab-items"
                label="Late"
                {...a11yProps(1)}
                sx={{
                  color: "black",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  width: "10rem",
                }}
              />
              <Tab
                onClick={() => {
                  setLinkJobBtn(false);
                  setLinkJob(false);
                  setLinkJobBtnFirstClick(false);
                }}
                className="tab-items"
                label="Delivered"
                {...a11yProps(2)}
                sx={{
                  color: "black",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  width: "10rem",
                }}
              />
              <Tab
                onClick={() => {
                  setLinkJobBtn(false);
                  setLinkJob(false);
                  setLinkJobBtnFirstClick(false);
                }}
                className="tab-items"
                label="Completed"
                {...a11yProps(3)}
                sx={{
                  color: "black",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  width: "10rem",
                }}
              />
              <Tab
                onClick={() => {
                  setLinkJobBtn(false);
                  setLinkJob(false);
                  setLinkJobBtnFirstClick(false);
                }}
                className="tab-items"
                label="Linked"
                {...a11yProps(4)}
                sx={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  color: "black",
                  width: "10rem",
                }}
              />
              <Tab
                onClick={() => {
                  setLinkJobBtn(false);
                  setLinkJob(false);
                  setLinkJobBtnFirstClick(false);
                }}
                className="tab-items"
                label="Cancelled"
                {...a11yProps(5)}
                sx={{
                  color: "black",

                  borderTopLeftRadius: "20px",
                  width: "10rem",
                }}
              />

              {tabImgLeft && (
                <img
                  className="selected-card-img-left"
                  src={InclineLeft}
                  alt=""
                  style={{
                    transform: `translateX(${count}px)`,
                  }}
                />
              )}
              {tabImgRight && (
                <img
                  className="selected-card-img"
                  src={Incline2}
                  alt=""
                  style={{
                    transform: `translateX(${count}px)`,
                  }}
                />
              )}
            </Tabs>
          </div>
          {linkJobBtn && (
            <div className="tab-right-container">
              <Box
                className="movable-card-link-job-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  color: "#00966B",
                  backgroundColor: "#FFFFFF",
                  // marginLeft: "17vw",
                  height: "30px",
                  width: "8rem",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                // onClick={() => setShowLinkedPopup(true)}
                onClick={handleLinkJob}
              >
                Link Jobs
              </Box>
            </div>
          )}
        </AppBar>
        {linkJob && (
          <div className="link-services-div">
            <div className="select-all-check-box-div">
              <img
                onClick={handleAllCheckBoxClick}
                className="movable-card-chek-box"
                src={allCheckBoxState ? checkBox : emptyCheckBox}
                alt=""
              // onClick={() => {
              //   cardRef.current.handleAllCheckBoxClick();
              // }}
              />
            </div>

            <div className="link-services-headings">
              {linkJob && <div className="all-text">All</div>}
              <div
                className={
                  linkJob
                    ? "select-job-text"
                    : "select-job-text select-job-text-update"
                }
              >
                Select Job You want to Link
              </div>
            </div>
          </div>
        )}

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  CardNavigation={props.CardNavigation}
                  // onClick={() => navigate("/")}
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus={item.Status}
                  OrderDate={item.Date}
                  OrderNumber={item.orderNumber}
                  StatusColor="37AFFF"
                  IsLinkJobClicked={linkJob}
                  allCheckBoxState={allCheckBoxState}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  CardNavigation={props.CardNavigation}
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus="Late"
                  OrderDate={item.Date}
                  OrderNumber={item.orderNumber}
                  StatusColor="FF6868"
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  CardNavigation={props.CardNavigation}
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus="Delivered"
                  OrderDate={item.Date}
                  OrderNumber={item.orderNumber}
                  StatusColor="1AC500"
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {TabCardData.map((item) => {

              return (
                <TabCard
                  CardNavigation={props.CardNavigation}
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus="Completed"
                  OrderDate={item.Date}
                  OrderNumber={item.orderNumber}
                  StatusColor="1AC500"
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            {TabCardData.map((item) => {

              return (
                <TabCard
                  CardNavigation={props.CardNavigation}
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus="INPROGRESS"
                  OrderDate={item.Date}
                  OrderNumber={item.orderNumber}
                  StatusColor="1AC500"
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            {TabCardData.map((item) => {
              return (
                <TabCard
                  CardNavigation={props.CardNavigation}
                  Image={item.image}
                  ProfileImage={item.profileImage}
                  ProfileName={item.profileName}
                  OrderBudget={item.Budget}
                  OrderStatus="Cancelled"
                  OrderDate={item.Date}
                  OrderNumber={item.orderNumber}
                  StatusColor="FF6868"
                />
              );
            })}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
};

export default BuyerTabs;
