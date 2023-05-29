// import React from "react";
// import "./BecomeSellerBar.css";
// const BecomeSellerBar = () => {
//   return <div>BecomeSel lerBar</div>;
// };

// export default BecomeSellerBar;

import React from "react";
import "./BecomeSellerBar.css";
const BecomeSellerBar = (props) => {
  return (
    <div className="seller-steps-progress-bar">
      <div className="seller-progress-bar-step">
        <div
          className="seller-progress-bar-step-one-number step-progress-bar-background"
          style={{
            backgroundColor: props.stepCount > 0 ? "#00966b" : "#919191",
          }}
        >
          1
        </div>
        <div
          className="seller-progress-bar-step-text"
          style={{
            color: props.stepCount > 0 ? "#00966b" : "#919191",
          }}
        >
          <span style={{ marginRight: 5 }}>Overview</span>
        </div>
      </div>
      <div className="step-progress-bar-line">
        <hr
          style={{
            backgroundColor: props.stepCount > 0 ? "#00966b" : "#919191",
            boder:
              props.stepCount > 0 ? "1px solid #00966b" : "1px solid #919191",
          }}
        />
      </div>
      <div className="seller-progress-bar-step">
        <div
          className="seller-progress-bar-step-two-number step-progress-bar-background"
          style={{
            backgroundColor: props.stepCount > 1 ? "#00966b" : "#919191",
          }}
        >
          2
        </div>
        <div
          className="seller-progress-bar-step-text"
          style={{
            color: props.stepCount > 1 ? "#00966b" : "#919191",
          }}
        >
          Pricing
        </div>
      </div>
      <div className="step-progress-bar-line">
        <hr
          style={{
            backgroundColor: props.stepCount > 2 ? "#00966b" : "#919191",
            boder:
              props.stepCount === "three"
                ? "1px solid #00966b"
                : "1px solid #919191",
          }}
        />
      </div>
      <div className="seller-progress-bar-step">
        <div
          className="seller-progress-bar-step-three-number step-progress-bar-background"
          style={{
            backgroundColor: props.stepCount > 2 ? "#00966b" : "#919191",
            border: props.stepCount > 2 && "1 px solid #00966b",
          }}
        >
          3
        </div>
        <div
          className="seller-progress-bar-step-text"
          style={{
            color: props.stepCount > 2 ? "#00966b" : "#919191",
          }}
        >
          <span style={{ marginRight: 5 }}>Place</span>
          <span>Requirments</span>
        </div>
      </div>
      <div className="step-progress-bar-line">
        <hr
          style={{
            backgroundColor: props.stepCount > 3 ? "#00966b" : "#919191",
            boder:
              props.stepCount === "three"
                ? "1px solid #00966b"
                : "1px solid #919191",
          }}
        />
      </div>
      <div className="seller-progress-bar-step">
        <div
          className="seller-progress-bar-step-three-number step-progress-bar-background"
          style={{
            backgroundColor: props.stepCount > 3 ? "#00966b" : "#919191",
            border: props.stepCount > 3 && "1 px solid #00966b",
          }}
        >
          4
        </div>
        <div
          className="seller-progress-bar-step-text"
          style={{
            color: props.stepCount > 3 ? "#00966b" : "#919191",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>Mock</span>
            <span> -</span>
            <span style={{ marginRight: 5 }}> up</span>
            <span> Design</span>
          </div>
        </div>
      </div>
      <div className="step-progress-bar-line">
        <hr
          style={{
            backgroundColor: props.stepCount > 4 ? "#00966b" : "#919191",
            boder:
              props.stepCount === "three"
                ? "1px solid #00966b"
                : "1px solid #919191",
          }}
        />
      </div>
      <div className="seller-progress-bar-step">
        <div
          className="seller-progress-bar-step-three-number step-progress-bar-background"
          style={{
            backgroundColor: props.stepCount > 4 ? "#00966b" : "#919191",
            border: props.stepCount > 4 && "1 px solid #00966b",
          }}
        >
          5
        </div>
        <div
          className="seller-progress-bar-step-text"
          style={{
            color: props.stepCount > 4 ? "#00966b" : "#919191",
          }}
        >
          <span style={{ marginRight: 5 }}>Publish</span>
        </div>
      </div>
    </div>
  );
};

export default BecomeSellerBar;
