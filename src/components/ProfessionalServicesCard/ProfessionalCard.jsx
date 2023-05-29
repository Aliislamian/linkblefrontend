import React from "react";
import {
  Card,
  // Box,
  Typography,
  CardMedia,
  // IconButton,
  // CardActions,
  // CardContent,
  // Avatar,
} from "@material-ui/core";
// import logo from "../../images/MachineLearning.png";
import { useNavigate } from "react-router-dom";

const ProfessionalCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/talent-about")}>
      <Card
        className="card-container"
        style={{
          width: "240px",
          height: "320px",
          borderRadius: "8px",
          marginLeft: "1vw",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        // style={{
        //   width: "17rem",
        //   height: "24rem",
        //   borderRadius: "8px",
        //   marginLeft: "2rem",
        //   justifyContent: "center",
        //   display: "flex",
        // }}
      >
        <Typography
          className="niche-desc"
          variant="body2"
          style={{
            color: "white",
            position: "absolute",
            display: "flex",
            paddingTop: "1rem",
            paddingLeft: "1rem",
            fontSize: "1.2rem",
            fontWeight: "500",
          }}
        >
          {data.subject}
        </Typography>
        <CardMedia
          component="img"
          height="100%"
          image={data.image}
          alt="image"
        />
      </Card>
    </div>
  );
};

export default ProfessionalCard;
