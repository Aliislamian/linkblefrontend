import React from "react";
import "../LanguagePopUp/LanguagePopUp.css";
import CrossIcon from "../../images/crossicon.png";
import Tick from "../../images/tick.png";
import { useState } from "react";
import { Dialog } from "@material-ui/core";
const languagesList = [
  "English (English)",
  "Lwo (Acholi)",
  "Arfikaans (Arfikaans)",
  "German (Deutsch)",
  "French (François)",
  "Spanish (Español)",
  "Italian (Italiano)",
  "Romanian (Română)",
  "Portuguese (Português)",
  "Swedish (Svenska)",
  "Danish (Dansk)",
  "Urdu (اردو)",
];
const LanguagePopUp = (props) => {
  const [number, setNumber] = useState(1);
  let count = 0;
  const HandleClick = (e, index) => {
    // console.log(index + " " + number);
    setNumber(index + 1);
  };
  return (
    <Dialog
      className="signup-parent-div"
      open={props.showLanguagePopUp}
      onClose={props.handleCrossIcon}
      fullScreen={true}
      fullWidth={true}
    >
      <div className="lan_main_div">
        <div className="sub-main-lan-div">
          <div className="lang_cross_icon_main_div">
            <img
              src={CrossIcon}
              alt="cross_icon"
              className="mode_cross_icon_css"
              onClick={() => props.handleCrossIcon()}
            />
          </div>
          <div className="lang-div">
            <div className="lang-heading">Select Languages</div>
          </div>

          <div className="lang-list-div">
            {languagesList.map((language, index) => {
              count++;
              return (
                <div
                  className="lang-list-item"
                  key={index + "lang"}
                  onClick={(e) => HandleClick(e, index)}
                >
                  <div className="lang-text">{language}</div>
                  {count === number && (
                    <div className="tick-contianer">
                      <img className="tick-img" src={Tick} alt="Tick icon" />
                    </div>
                  )}
                </div>
              );
            })}

            <div
              className="lang-save-btn"
              // onClick={() => props.handleSendCode()}
            >
              <div className="save-btn-text">Save</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default LanguagePopUp;
