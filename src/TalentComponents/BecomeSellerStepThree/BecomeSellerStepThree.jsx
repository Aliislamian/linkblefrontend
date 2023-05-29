import React, { useState, useRef, useEffect } from "react";
import "../BecomeSellerStepThree/BecomeSellerStepThree.css";
// import Select, { components } from "react-select";
import { useNavigate } from "react-router-dom";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import BecomeSellerBar from "../BecomeSellerBar/BecomeSellerBar";
import BecomeSellerBtn from "../BecomeSellerBtn/BecomeSellerBtn";
import plusicon from "../../images/plusicon.png";
import threeDots from "../../images/threeDots.png";
import newRequest from "../../utils/newRequest";
import { handleError } from "../../utils/handleError";
import BeatLoaderComponent from "../../utils/BeatLoaderComponent";

const BecomeSellerStepThree = () => {
  const navigate = useNavigate();
  const textAreaRef = useRef(null);
  // let dummyQuestion = "Kindly let me know complete app flow including wireframing";
  const navRef = useRef();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [wordCount, setWordCount] = useState(0);
  const [termsConditon, setTermsCondition] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.oderRequirementDetail.value);
    setQuestions([...questions, e.target.oderRequirementDetail.value]);
    textAreaRef.current.value = "";
  }
  const [serviceId, setServiceId] = useState(localStorage.getItem("serviceId"));

  useEffect(() => {
    setServiceId(localStorage.getItem("serviceId"));
    console.log(serviceId);
    if (serviceId === null || serviceId === undefined || serviceId === "") {
      navigate("/seller-step-one");
    }
  }, []);
  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await newRequest.post("/create-service/step-three/" + serviceId,
        {
          questions: questions,
        }
      );
      console.log(response);
      navigate("/seller-step-four");
    } catch (err) {
      handleError(err);
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <>
      <BeatLoaderComponent loading={loading} />
      <div style={{ marginBottom: "2rem" }}>
        <div>
          <TalentNavbar ref={navRef} />
        </div>
        <div
          onClick={() => {
            navRef.current.handleOutsideClick();
          }}
          className="seller-progress-bar-container"
        >
          <BecomeSellerBar stepCount={3} />
        </div>
        <div
          className="postedRequest_main"
          onClick={() => {
            navRef.current.handleOutsideClick();
          }}
        >
          <div className="become-seller-step-three-container">
            <div className="become-seller-step-three-inner-container">
              <div className="postedRequest_title">
                Add Question for buyers to get exactly what they want to be done
              </div>
              <div className="postedRequest_input_main">
                <form className="input_form_main" id="seller-question-id" onSubmit={handleFormSubmit}>
                  <div className="order-requirement-input-field-contianer">
                    <label
                      htmlFor="oderRequirementDetail"
                      className="order-requirement-input-field-label"
                    >
                      YOUR QUESTIONS
                    </label>
                    <br />
                    <div className="order-requirement-text-area-div">
                      <textarea ref={textAreaRef}
                        placeholder="Enter your questions details here"
                        onChange={(e) => setWordCount(e.target.value.length)}
                        name="oderRequirementDetail"
                        id="oderRequirementDetail"
                        cols="30"
                        rows="8"
                        maxLength={500}
                      ></textarea>
                      <div className="order-requirement-text-area-word-count">
                        <span style={{ color: "red" }}>{wordCount}/500</span>
                      </div>
                    </div>
                  </div>
                  {/* <button type="submit">subdfasdjlf</button> */}
                </form>
                <button type="submit" form="seller-question-id" className="become-seller-add-new-question-btn-container">
                  <img src={plusicon} alt="icon" />
                  <div className="become-seller-add-new-question-btn-text">
                    Add New Question
                  </div>
                </button>
                {questions.map((question) => {
                  return (
                    <div className="become-seller-add-new-question-container">
                      <div className="become-seller-add-new-question-text">
                        {question}
                      </div>
                      <img src={threeDots} alt="icon" />
                    </div>
                  );
                }
                )}
                {/* ***** check it ***** */}
                {/* <div className="seller-add-faq-heading">Also Add FAQ</div>
              <div className="become-seller-question-text">
                Which software you use to design Mobile apps UI/UX?
              </div>

              <div className="become-seller-add-answer-container">
                <input type="text" placeholder="FAQ details here" />
                <div className="become-seller-add-answer-btn"> ADD FAQ</div>
              </div> */}
                <div className="become-seller-step-three-btn-container">
                  <BecomeSellerBtn
                    formSubmit={handleSubmitBtn}
                    leftBtnText={"Cancel"}
                    rightBtnText={"Save & Continue"}
                    PrevBtnNavigation={"/seller-step-two"}
                    NextBtnNavigation={"/seller-step-four"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="postedRequest_main_two">
            <div className="seller_third_postedRequest_title">
              Information you need from buyers
            </div>
            <div className="paragraph_div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
              justo, scelerisque et euismod sit amet, eleifend quis magna.
              <br /> Sed fringilla, est at volutpat sodales, nisl eros tristique
              sapien, ut gravida urna lorem a odio. Sed bibendum lacinia nisl, sit
              amet blandit velit porta ultrices. Pellentesque vehicula maximus
              augue, id consequat mi. Aenean eget justo mauris. Vivamus nec augue
              rutrum, porttitor ex a, aliquet lacus. Curabitur egestas tincidunt
              nunc et vestibulum. Vestibulum sit amet blandit massa, vel ornare
              lectus. Ut quis urna suscipit, pretium magna sed, tincidunt purus.
              Praesent non facilisis dui. Praesent blandit arcu velit, a placerat
              lorem interdum ac. Quisque sollicitudin, justo vitae fermentum
              commodo, orci nibh condimentum sapien, a tempus urna turpis id
              felis. Aliquam erat volutpat. Nam ac molestie nisi. Pellentesque
              sodales dui sed massa porta, a volutpat nisl consequat.
              <br />
              Praesent blandit arcu velit, a placerat lorem interdum ac. Quisque
              sollicitudin, justo vitae fermentum commodo, orci nibh condimentum
              sapien, a tempus urna turpis id felis. Aliquam erat volutpat. Nam ac
              molestie nisi. Pellentesque sodales dui sed massa porta, a volutpat
              nisl consequat.
              <br />
              <br />
              Praesent blandit arcu velit, a placerat lorem interdum ac. Quisque
              sollicitudin, justo vitae fermentum commodo, orci nibh condimentum
              sapien, a tempus urna turpis id felis. Aliquam erat volutpat. Nam ac
              molestie nisi. Pellentesque sodales dui sed massa porta, a volutpat
              nisl consequat.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeSellerStepThree;
