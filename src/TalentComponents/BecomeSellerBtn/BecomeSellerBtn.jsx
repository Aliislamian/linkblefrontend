import React from "react";
import { useNavigate } from "react-router-dom";
import "./BecomeSellerBtn.css";
const BecomeSellerBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="become-seller-btn">
      <div
        className="become-seller-left-btn"
        onClick={() => navigate(props.PrevBtnNavigation)}
      >
        {props.leftBtnText}
      </div>
      <button
        style={{ border: "none" }}
        type="submit"
        id={props.formId}
        // when we click this button, it shoud call the parent component's function
        onClick={props.formSubmit}
        className="become-seller-right-btn"
      // onClick={() => navigate(props.NextBtnNavigation)}
      >
        {props.rightBtnText}
      </button>
    </div >
  );
};

export default BecomeSellerBtn;
