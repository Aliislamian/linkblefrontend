import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import puase from "../../images/puase.png";

import "./ManageGigs.css";
const SelectBox = (props) => {
  const [singleBoxState, setSingleBoxState] = useState(false);

  const handleSingleboxClick = (props) => {
    setSingleBoxState(!singleBoxState);
  };

  useEffect(() => {
    setSingleBoxState(props.boxState);
  }, [props.boxState]);
  return props.manageGigMethod === "pauseGig" ? (
    <div className="pause-gig-icon" style={{paddingLeft:"17px"}}>
      <img src={puase} alt="icon" />
    </div>
  ) : (
    <div
      onClick={handleSingleboxClick}
      className={
        !singleBoxState
          ? "manage-gig-select-box"
          : "manage-gig-select-box manage-gig-select-box-active"
      }
    ></div>
  );
};

export default SelectBox;
