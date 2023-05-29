import React from "react";
import "../ModeSelectPopup/ModeSelectPopup.css";
import CrossIcon from "../../images/crossicon.png";
import LeftArrow from "../../images/leftarrow.png";

const ModeSelectPopup = (props) => {
  return (
    <>
      {props.showModePopup && (
        <div className="mode_main_div">
          <div className="sub_main_mode_div">
            <div className="cross_icon_main_div">
              <img
                src={CrossIcon}
                alt="cross_icon"
                className="mode_cross_icon_css"
                onClick={() => props.handleCrossIcon()}
              />
            </div>
            <div className="continue_as_div">Continue as!</div>
            <div className="buyer_btn" onClick={() => props.handleBuyer()}>
              <div className="buyer_text_div">Buyer</div>
              <div className="leftArrow_div">
                <img src={LeftArrow} alt="image" className="leftArrow_css" />
              </div>
            </div>
            <div className="talent_btn">
              <div
                className="buyer_text_div"
                onClick={() => props.handleTalent()}
              >
                Talent
              </div>
              <div className="leftArrow_div">
                <img src={LeftArrow} alt="image" className="leftArrow_css" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModeSelectPopup;
