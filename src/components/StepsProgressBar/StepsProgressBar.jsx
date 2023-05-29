import React from "react";
import "./StepsProgressBar.css";
const StepsProgressBar = (props) => {
  return (
    <div className="steps-progress-bar">
      <div className="progress-bar-step">
        <div
          className="progress-bar-step-one-number step-progress-bar-background"
          style={{
            backgroundColor:
              props.stepCount === "one" ||
              props.stepCount === "two" ||
              props.stepCount === "three"
                ? "#00966b"
                : "#919191",
          }}
        >
          1
        </div>
        <div
          className="progress-bar-step-text"
          style={{
            color:
              props.stepCount === "one" ||
              props.stepCount === "two" ||
              props.stepCount === "three"
                ? "#00966b"
                : "#919191",
          }}
        >
          <span style={{ marginRight: 5 }}>Order</span>
          <span>Details</span>
        </div>
      </div>
      <div className="step-progress-bar-line">
        <hr
          style={{
            backgroundColor: "#00966b",
            boder: "1px solid #00966b",
          }}
        />
      </div>
      <div className="progress-bar-step">
        <div
          className="progress-bar-step-two-number step-progress-bar-background"
          style={{
            backgroundColor:
              props.stepCount === "two" || props.stepCount === "three"
                ? "#00966b"
                : "#919191",
          }}
        >
          2
        </div>
        <div
          className="progress-bar-step-text"
          style={{
            color:
              props.stepCount === "two" || props.stepCount === "three"
                ? "#00966b"
                : "#919191",
          }}
        >
          Payment
        </div>
      </div>
      <div className="step-progress-bar-line">
        <hr
          style={{
            backgroundColor:
              props.stepCount === "three" ? "#00966b" : "#919191",
            boder:
              props.stepCount === "three"
                ? "1px solid #00966b"
                : "1px solid #919191",
          }}
        />
      </div>
      <div className="progress-bar-step">
        <div
          className="progress-bar-step-three-number step-progress-bar-background"
          style={{
            backgroundColor:
              props.stepCount === "three" ? "#00966b" : "#919191",
            border: props.stepCount === "three" && "1 px solid #00966b",
          }}
        >
          3
        </div>
        <div
          className="progress-bar-step-text"
          style={{
            color: props.stepCount === "three" ? "#00966b" : "#919191",
          }}
        >
          <span style={{ marginRight: 5 }}>Place</span>
          <span>Order</span>
        </div>
      </div>
    </div>
  );
};

export default StepsProgressBar;
