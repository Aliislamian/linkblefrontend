import React, { useState, useRef, useEffect } from "react";
import "../BecomeSellerStepFour/BecomeSellerStepFour.css";
// import Select, { components } from "react-select";
// import { useNavigate } from "react-router-dom";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import BecomeSellerBar from "../BecomeSellerBar/BecomeSellerBar";
import BecomeSellerBtn from "../BecomeSellerBtn/BecomeSellerBtn";
import AttachFileIcon from "../../images/attachfileicon.png";
import AttachFileSubmitIcon from "../../images/attachfileselectedicon.png";
import cross from "../../images/cross.png";
import FileAdd from "../../images/FileAdd.png";
import CrossIcon from "../../images/cross.png";
import tickMarkGray from "../../images/grayTickMark.png";
import tickMarkGreen from "../../images/tickMarkGreen.png";
import one from "../../images/one.png";
import addFile from "../../images/addFile.png";
import newRequest from "../../utils/newRequest";
import { handleError } from "../../utils/handleError";
import { useNavigate } from "react-router-dom";
import CustomSnakebar from "../../utils/CustomSnakebar";
import BeatLoaderComponent from "../../utils/BeatLoaderComponent";

const BecomeSellerStepFour = () => {
  const navigate = useNavigate();

  const navRef = useRef();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const resetSnakeBarMessages = () => {
    setError(null);
    setMessage(null);

  };

  const [termsConditon, setTermsCondition] = useState(false);
  const handleFileRemove = (e, value, type) => {
    if (type === "img") {
      setUploadedImg(
        uploadedImg.filter((item) => {
          return item !== value;
        })
      );
    }
    if (type === "file") {
      setUploadedFile(
        uploadedFile.filter((item) => {
          return item !== value;
        })
      );
    }
  };
  const [uploadedFile, setUploadedFile] = useState([]);
  const [uploadedImg, setUploadedImg] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const handleUploadedOnChange = (e, type) => {
    if (type === "img") {
      setUploadedImg([...uploadedImg, e.target.files[0]]);
      setIsFilePicked(true);
    }
    if (type === "file") {
      setUploadedFile([...uploadedFile, e.target.files[0]]);
      setIsFilePicked(true);
    }
  };

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
    const formData = new FormData();
    console.log(uploadedImg);
    console.log(uploadedFile);
    // formData.append("servicesImages", uploadedImg);

    // formData.append("serviceDocuments", uploadedFile);


    uploadedImg.forEach((image) => formData.append('servicesImages', image));
    uploadedFile.forEach((doc) => formData.append('serviceDocuments', doc));
    console.log(formData);
    try {
      const response = await newRequest.post("/create-service/step-four/" + serviceId,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }

      );
      // setMessage(response?.data?.message ?? "User deleted successfully");
      setMessage("Service Created Successfully")

      console.log(response);
      navigate("/seller-step-five");
    } catch (err) {
      console.log(err);
      setError(error.response && error.response.data && error.response.data.message ?
        error.response.data.message
        : "An error occurred while processing your request. Please try again later.");

      handleError(err);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BeatLoaderComponent loading={loading} />

      <div style={{ marginBottom: "2rem" }}>
        {message && <CustomSnakebar message={message} severity="success" onClose={resetSnakeBarMessages} />}
        {error && <CustomSnakebar message={error} severity="error" onClose={resetSnakeBarMessages} />}
        <div>
          <TalentNavbar ref={navRef} />
        </div>
        <div
          onClick={() => {
            navRef.current.handleOutsideClick();
          }}
          className="seller-progress-bar-container"
        >
          <BecomeSellerBar stepCount={4} />
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
                Add Best Mock-ups of your services to Impress Buyers
              </div>
              <div className="postedRequest_title">
                Service Mock-up Designs ({uploadedImg.length}/ 3){" "}
              </div>
              <div className="postedRequest_sub_title">
                Get noticed by the right buyers with visual examples of your
                services.
              </div>

              <div className="become-seller-step-four-add-file-container">
                <div className="order-requirement-add-file-btn-parent-container">
                  <input
                    type="file"
                    disabled={uploadedImg.length === 3 ? true : false}
                    id="SellerAddFileId"
                    style={{ display: "none" }}
                    onChange={(e) => handleUploadedOnChange(e, "img")}
                  />
                  <label
                    htmlFor="SellerAddFileId"
                    className="become-seller-add-file-icon-container"
                  >
                    <img src={addFile} alt="add file" />
                    <div className="become-seller-add-file-icon-text">
                      Drag & Drop Photo
                    </div>
                    <div className="become-seller-add-file-icon-sub-text">
                      Browse File
                    </div>
                  </label>
                  {uploadedImg.map((value) => {

                    return (
                      <div
                        className="become-seller-add-img-container"
                        onClick={(e) => {
                          handleFileRemove(e, value, "img");
                        }}
                      >
                        <img
                          // show the image uploaded in src
                          src=
                          {value && URL.createObjectURL(value)}
                          alt="uploaded image" />

                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="postedRequest_title">
                Document ({uploadedFile.length} / 3){" "}
              </div>
              <div className="become-seller-step-four-add-file-container">
                <div className="order-requirement-add-file-btn-parent-container">
                  <input
                    disabled={uploadedFile.length === 3 ? true : false}
                    type="file"
                    id="SellerAddDocFile"
                    style={{ display: "none" }}
                    onChange={(e) => handleUploadedOnChange(e, "file")}
                  />
                  <label
                    htmlFor="SellerAddDocFile"
                    className="become-seller-add-file-icon-container"
                  >
                    <img src={addFile} alt="add file" />
                    <div className="become-seller-add-file-icon-text">
                      Drag & Drop Photo
                    </div>
                    <div className="become-seller-add-file-icon-sub-text">
                      Browse File
                    </div>
                  </label>
                  {uploadedFile.map((value) => {
                    return (
                      <div className="become-seller-add-file-container">
                        <img
                          src={FileAdd}
                          alt="icon"
                          className="become-seller-add-file"
                        />
                        <img
                          onClick={(e) => {
                            handleFileRemove(e, value, "file");
                          }}
                          src={cross}
                          alt="icon"
                          className="become-seller-add-file-cross"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="order-requirement-terms-container">
                <div
                  className="order-requirement-terms-tick-icon"
                  onClick={() => {
                    setTermsCondition(!termsConditon);
                  }}
                >
                  <img
                    src={!termsConditon ? tickMarkGray : tickMarkGreen}
                    alt="tick icon"
                  />
                </div>
                <div className="order-requirement-terms-text">
                  <p style={{ fontSize: ".8rem" }}>
                    All the info provided are complete & Accurate to my knowledge.
                    By placing the order I agree with Linkeble
                    <strong> Terms & Conditions</strong>
                  </p>
                </div>
              </div>
              <div className="postedRequest_input_main">
                <div className="become-seller-step-three-btn-container">
                  <BecomeSellerBtn
                    formSubmit={handleSubmitBtn}
                    leftBtnText={"Cancel"}
                    rightBtnText={"Save & Continue"}
                    PrevBtnNavigation={"/seller-step-three"}
                    NextBtnNavigation={"/seller-step-five"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="postedRequest_main_two">
            <div className="seller_third_postedRequest_title">
              Encourage buyers to choose your Gig by featuring a variety of your
              work
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

export default BecomeSellerStepFour;
