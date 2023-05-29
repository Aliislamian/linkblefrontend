import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  CardMedia,
  Avatar,
  Box,
  Typography,
  Input,
} from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import CrossIcon from "../../images/cross3.png";
import { TextareaAutosize } from "@mui/material";
import "../LinkedJobPopup/LinkedJobPopup.css";
import { Navigate, useNavigate } from "react-router-dom";

const LinkedJobPopup = ({
  showPopup,
  hidePopup,
  title,
  heading,
  FirstInputLabel,
  SecondInputLabel,
  opt,
  SubmitBtn,
  CancelBtn,
  Navigation,
  // handelSubmitBtn,
}) => {
  const navigate = useNavigate();
  return (
    <div className="post-job-main-parent-container">
      <Dialog
        className="post-job-main-dialoge"
        open={showPopup}
        PaperProps={{ style: { borderRadius: 30 } }}
        onClose={() => hidePopup()}
      >
        <Box
          className="job-popup-cross-icon"
          onClick={() => hidePopup()}
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src={CrossIcon} style={{ width: "25px", cursor: "pointer" }} />
        </Box>
        <Box style={{ padding: "0px 1.25vw 0px 1.25vw" }}>
          <DialogTitle
            className="linked-job-title"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-2rem",
              fontSize: "1.4rem",
              fontFamily: "Roboto",
            }}
          >
            {title}
          </DialogTitle>
          <DialogContent>
            <Box
              className="job-pop-up-heading"
              style={{
                color: "black",
                fontSize: "1.2rem",

                fontFamily: "Roboto",
                textAlign: "center",
              }}
            >
              {heading}
              {/* <br />
              accessibility */}
            </Box>
          </DialogContent>
          <DialogContent>
            <Box
              className="linked-job-first-input-label"
              style={{
                paddingBottom: "10px",
                fontSize: "1.2rem",
                fontFamily: "Roboto",
              }}
            >
              {FirstInputLabel}
            </Box>
            <input
              className="input_placeholder linked-job-first-input"
              style={{
                // width: "100%",
                borderRadius: "40px",
                // paddingLeft: "20px",
                border: ".2px solid lightgrey",
                outline: "none",
                minHeight: "7vh",
                fontSize: "1rem",
                color: "grey",
                fontFamily: "Roboto",
              }}
              maxLength="50"
              placeholder="Add, App development"
            />
            <Box
              className="linked-job-second-input-label"
              style={{
                paddingBottom: "10px",
                paddingTop: "10px",
                fontSize: "1.2rem",
                color: "black",
                fontFamily: "Roboto",
              }}
            >
              {SecondInputLabel}
              <span
                style={{
                  color: "grey",
                  fontFamily: "Roboto",
                  fontSize: "1.2rem",
                }}
              >
                {opt}
              </span>
            </Box>
            <textarea
              style={{
                width: "29vw",
                minHeight: "12vh",
                borderRadius: "20px",
                padding: "1rem",
                resize: "none",
                outline: "none",
                border: ".2px solid lightgrey",
                color: "grey",
                fontSize: "1rem",
                fontFamily: "Roboto",
              }}
              className="input_placeholder linked-job-second-input"
              maxLength="300"
              placeholder="Details, for your list..."
            />
          </DialogContent>
          <DialogContent
            className="link-job-btn-div"
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: "10vw",
              // justifyContent: "space-between",
              // paddingLeft: "30px",
              marginBottom: "1.5rem",
            }}
          >
            <Box
              className="link-job-btn"
              onClick={() => {
                hidePopup();
                navigate(Navigation);
              }}
              style={{
                padding: "10px 35px 10px 35px",
                backgroundColor: "#00966B",
                color: "white",
                borderRadius: "22px",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "Roboto",
                flexWrap: "wrap",
              }}
            // onClick={() => handelSubmitBtn()}
            // onClick={() => hidePopup()}
            >
              {SubmitBtn}
            </Box>
            <Box
              className="link-job-cancel-btn"
              style={{
                backgroundColor: "#F6F6F6",
                padding: "10px 50px 10px 50px",
                borderRadius: "22px",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "Roboto",
                marginLeft: "1rem",
              }}
              onClick={() => hidePopup()}
            >
              {CancelBtn}
            </Box>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
};

export default LinkedJobPopup;
