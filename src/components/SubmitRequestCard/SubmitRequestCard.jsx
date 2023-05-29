import React from "react";
import "../SubmitRequestCard/SubmitRequestCard.css";
import { useNavigate } from "react-router-dom";

const SubmitRequestCard = ({
  text1,
  imageCardone,
  btntextCardone,
  text2,
  imageCardtwo,
  btntextCardtwo,
  text3,
  imageCardthree,
  btntextCardthree,
  Navigation1,
  Navigation2,
  Navigation3,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "100%",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div className="main_sumbmit_card">
          <div className="above_div">
            <text className="text_css">{text1}</text>
            <img
              src={imageCardone}
              alt="image"
              className="submit_card_image_css"
            />
          </div>
          <div className="below_div" onClick={() => navigate(Navigation1)}>
            {btntextCardone}
          </div>
        </div>
        <div className="main_sumbmit_card">
          <div className="above_div">
            <text className="text_css">{text2}</text>
            <img
              src={imageCardtwo}
              alt="image"
              className="submit_card_image_css"
            />
          </div>
          <div className="below_div" onClick={() => navigate(Navigation2)}>
            {btntextCardtwo}
          </div>
        </div>
        <div className="main_sumbmit_card">
          <div className="above_div">
            <text className="text_css">{text3}</text>
            <img
              src={imageCardthree}
              alt="image"
              className="submit_card_image_css"
            />
          </div>
          <div className="below_div" onClick={() => navigate(Navigation3)}>
            {btntextCardthree}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitRequestCard;
