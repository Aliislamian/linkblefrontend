import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  CardMedia,
  IconButton,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import "../ServicesCard/ServicesCard.css";
import logo from "../../images/download.png";
import StarIcon from "@material-ui/icons/Star";
import BuyerFooter from "../BuyerFooter/BuyerFooter";
import HeartICon from "../../images/HeartICon.png";
import LikedCardIcon from "../../images/LikedCardIcon.png";

const CardServices = ({ data }) => {
  const [show, setShow] = useState();
  const [favouriteIconState, setFavouriteIconState] = useState(false);

  const callBack = () => {};

  return (
    <div className="card preference-list-card">
      <Card
        className="card-container non-carousel-cards "
        // style={{}}
        style={{
          // marginRight: "2.5vw",
          width: "240px",
          height: "280px",
          borderRadius: "8px",
          marginLeft: "2vw",
        }}
      >
        <Box
          className="card-lower-box"
          style={{
            backgroundColor: "#00966B",
            height: "145px",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <CardContent style={{ paddingBottom: "0px" }}>
            <Typography
              className="niche-desc"
              variant="body2"
              style={{
                color: "white",
                fontSize: ".8rem",
                height: "2rem",
                padding: 0,
                marginTop: 10,
              }}
            >
              {data.subject}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "5px",
                marginRight: "1rem",
              }}
            >
              <div style={{ marginLeft: "8px" }}>
                <StarIcon style={{ color: "gold", fontSize: "medium" }} />
                <StarIcon style={{ color: "gold", fontSize: "medium" }} />
                <StarIcon style={{ color: "gold", fontSize: "medium" }} />
                <StarIcon style={{ color: "gold", fontSize: "medium" }} />
                <StarIcon style={{ color: "gold", fontSize: "medium" }} />
              </div>
              <div
                style={{
                  fontSize: "small",
                  display: "flex",
                  alignSelf: "center",
                  color: "white",
                  marginLeft: "3px",
                }}
              >
                {"5(11)"}
              </div>
            </div>
            <IconButton
              onClick={() => {
                setFavouriteIconState(!favouriteIconState);
              }}
              className="heart-icon"
              aria-label="add to favorites"
              style={{ marginLeft: "2rem", color: "white" }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                src={!favouriteIconState ? HeartICon : LikedCardIcon}
                alt="heart icon"
              />
            </IconButton>
          </CardActions>
          <CardActions>
            <Typography
              style={{
                color: "white",
                fontSize: "1.3rem",
                verticalAlign: "bottom",
                display: "flex",
                color: "white",
                marginLeft: "10px",
                paddingTop: "0px",
              }}
            >
              From $10
            </Typography>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          height="230"
          image={data.image}
          alt="Paella dish"
        />
      </Card>
    </div>
  );
};

export default CardServices;
