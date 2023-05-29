import React from "react";
import "../CurrencyPopUp/CurrencyPopUp.css";
import CrossIcon from "../../images/crossicon.png";
import Tick from "../../images/tick.png";
import { useState } from "react";
import { Dialog } from "@material-ui/core";

const currencyList = [
  {
    currencyName: "United States Dollar",
    currencyUnit: "USD - US$",
  },
  {
    currencyName: "Euro",
    currencyUnit: "EUR - €",
  },
  {
    currencyName: "British Pound",
    currencyUnit: "GBP - £",
  },
  {
    currencyName: "Australian Dollar",
    currencyUnit: "AUD - A$",
  },
  {
    currencyName: "Canadian Dollar",
    currencyUnit: "CAD - CA$",
  },
  {
    currencyName: "Israeli Shekel",
    currencyUnit: "ILS - ₪",
  },
];
const CurrencyPopUp = (props) => {
  const [number, setNumber] = useState(1);
  let count = 0;
  const HandleClick = (e, index) => {
    console.log(index + " " + number);
    setNumber(index + 1);
  };
  return (
    <Dialog
      className="signup-parent-div"
      open={props.showCurrencyPopUp}
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
            <div className="lang-heading">Choose a currency</div>
          </div>

          <div className="lang-list-div">
            {currencyList.map((currency, index) => {
              count++;
              return (
                <div
                  className="Currency-list-item"
                  key={index + "currency"}
                  onClick={(e) => HandleClick(e, index)}
                >
                  <div className="currency-text-div">
                    <div className="lang-text">{currency.currencyName}</div>
                    <div className="lang-text">{currency.currencyUnit}</div>
                  </div>
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
export default CurrencyPopUp;
