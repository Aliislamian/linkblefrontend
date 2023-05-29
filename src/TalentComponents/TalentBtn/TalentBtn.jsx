import React from "react";
import { useNavigate } from "react-router-dom";
import "./TalentBtn.css";

const TalentBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="talent-btn-container"
      
    >
      <button onClick={() => navigate(props.TalentBtnNavigation)}>{props.text}</button>
    
    </div>
  );
};

export default TalentBtn;
