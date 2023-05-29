import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import one from "../../images/one.png";

const CardServices = ({ data }) => {
  const [show, setShow] = useState();
  const [favouriteIconState, setFavouriteIconState] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [startingPrice, setStartingPrice] = useState(null)
  const callBack = () => { };
  const navigate = useNavigate();
  useEffect(() => {
    let img = data.servicesImages && data.servicesImages[0] && data.servicesImages[0].imgUrl || one
    let price = data.pricing && data.pricing.basic && data.pricing.basic.price || 0;
    setImgSrc(img)
    setStartingPrice(price)
  }, [data.servicesImages])
  return (
    <div className="card"
      key={data._id}
      onClick={() => navigate(`/talent-about?id=${data._id}`)}
    >
      <Card
        className="card-container non-carousel-cards "
        // style={{}}
        style={{
          // marginRight: "2.5vw",
          width: "240px",
          height: "320px",
          borderRadius: "8px",
          marginLeft: "1vw",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box
          className="card-lower-box"
          style={{
            backgroundColor: "#00966B",
            height: "175px",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography
              className="niche-desc"
              variant="body2"
              style={{ color: "white", fontSize: ".8rem" }}
            >
              {data.title}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "25px",
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
              onClick={(e) => {
                e.stopPropagation();
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
              }}
            >
              From ${startingPrice}
            </Typography>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          height="230"
          image={imgSrc}
          alt="Paella dish"
        />
      </Card>
    </div>
  );
};

export default CardServices;
