import React, { useEffect, useRef, useState } from "react";
import "./OrderRequirement.css";
import Navbar from "../MyNav/Navbar";
import StepsProgressBar from "../StepsProgressBar/StepsProgressBar";
import AttachFileIcon from "../../images/attachfileicon.png";
import AttachFileSubmitIcon from "../../images/attachfileselectedicon.png";
import CrossIcon from "../../images/cross.png";
import tickMarkGray from "../../images/grayTickMark.png";
import tickMarkGreen from "../../images/tickMarkGreen.png";
import one from "../../images/one.png";
import StarIcon from "@material-ui/icons/Star";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import CustomSnakebar from "../../utils/CustomSnakebar";
import BeatLoaderComponent from "../../utils/BeatLoaderComponent";

const OrderRequirement = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [termsConditon, setTermsCondition] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(() => {
    const storedPlan = JSON.parse(sessionStorage.getItem('selectedPlan'));
    return storedPlan || {}; // Initialize with an empty object if it's null or undefined
  });
  
  const [deliveryDate, setDeliveryDate] = useState("");

  const [selectedPlanName, setSelectedPlanName] = useState(() => {
    const storedPlanName = JSON.parse(sessionStorage.getItem('planName'));
    return storedPlanName || '';
  });
  const resetSnakeBarMessages = () => {
    setError(null);
  };
  const [payment_intent, setPaymentIntent] = useState(() => {
    try {
      const storedPaymentIntent = sessionStorage.getItem("payment_intent")

      return storedPaymentIntent || null;
    } catch (error) {
      console.error("Invalid JSON string in sessionStorage: ", error);
      return null;
    }
  });
  console.log("payment_intex" + payment_intent);
  const handleFileRemove = (e, value) => {
    setUploadedFile(
      uploadedFile.filter((item) => {
        return item !== value;
      })
    );
    setCompleteUploadedFile(
      completeUploadedFile.filter((item) => {
        return item.name !== value;
      })
    );
  };
  const [uploadedFile, setUploadedFile] = useState([]);
  const [completeUploadedFile, setCompleteUploadedFile] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [orderId, setOrderId] = useState(() => {
    const storedOrderId = sessionStorage.getItem("orderId");
    return storedOrderId || null;
  });
  const handleUploadedOnChange = (e) => {
    setUploadedFile([...uploadedFile, e.target.files[0].name]);
    setCompleteUploadedFile([...completeUploadedFile, e.target.files[0]]);
    console.log("CompleteUploadedFile:", completeUploadedFile);
    setIsFilePicked(true);
  };
  useEffect(() => {
    console.log("orderId:", orderId);
    if (orderId === null) {
      navigate("/order-placement-detail");
    }
  }, [orderId]);

  useEffect(() => {
    function getFutureDate(deliveryDays) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + deliveryDays);

      const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };

      return currentDate.toLocaleDateString('en-US', options);
    }

    const deliveryDays = selectedPlan.pricing[selectedPlanName].deliveryDays ? selectedPlan.pricing[selectedPlanName].deliveryDays : 0;
    const futureDate = getFutureDate(deliveryDays);
    console.log(futureDate);
    setDeliveryDate(futureDate);
    if (!selectedPlan || !selectedPlanName) {
      navigate("/order-placement-detail");
    }
    console.log(selectedPlan);
    console.log(selectedPlanName);
  }, [selectedPlan, selectedPlanName]);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a FormData object to hold the data
    const formData = new FormData();
    formData.append('title', title /* Title value from the form */);
    formData.append('details', details /* Details value from the form */);
    formData.append('orderId', orderId /* Order ID value */);
    formData.append('paymentIntentId', payment_intent);

    // Attach the files to the FormData object
    completeUploadedFile.forEach((file) => {
      formData.append('attachments', file);
    });


    try {
      // Send a request to the API
      const response = await newRequest.post('/buyer/place-order', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // Handle successful order update
        console.log(response.data);
        sessionStorage.removeItem('orderId');
        navigate('/orderdetails');
      } else {
        // Handle non-successful order update
        console.error('Error updating order:', response.statusText);
      }
    } catch (error) {
      // Handle errors from the API call
      console.error('Error updating order:', error);

      // Extract the error message from the response data
      const errorMessage = error.response && error.response.data
        ? error.response.data
        : 'Something went wrong';

      setError(errorMessage);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BeatLoaderComponent loading={loading} />


      <div>
        {error && <CustomSnakebar message={error} severity="error" onClose={resetSnakeBarMessages} />}

        <Navbar ref={navRef} />
        <span
          onClick={() => {
            navRef.current.handleOutsideClick();
          }}
        >
          <div className="order-requirement-container">
            <div className="order-requirement-step-progress-bar-div">
              <StepsProgressBar stepCount="three" />
            </div>
            <div className="order-requirement-inner-container">
              <form
                onSubmit={handleOrderSubmit}
                className="order-requirement-form-container">
                <div className="order-requirement-form-heading">
                  <h2>Submit complete Design Requirements</h2>
                </div>

                <div className="order-requirement-input-field-contianer">
                  <label
                    htmlFor="oderRequirementTitle"
                    className="order-requirement-input-field-label"
                  >
                    Project Title (Optional)
                  </label>
                  <br />
                  <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="order-requirement-input-field"
                    placeholder="30 Max Characters"
                  />
                </div>
                <div className="order-requirement-input-field-contianer">
                  <label
                    htmlFor="oderRequirementDetail"
                    className="order-requirement-input-field-label"
                  >
                    Project Details
                  </label>
                  <br />
                  <div className="order-requirement-text-area-div">
                    <textarea
                      onChange={(e) => {
                        setWordCount(e.target.value.length);
                        setDetails(e.target.value)
                      }}
                      name="oderRequirementDetail"
                      id="oderRequirementDetail"
                      cols="30"
                      rows="8"
                      maxLength={3000}
                    ></textarea>
                    <div className="order-requirement-text-area-word-count">
                      <span>{wordCount}/3000</span>
                    </div>
                  </div>
                </div>
                <div className="order-requirement-add-file-btn-parent-container">
                  <div
                    className="order-requirement-add-file-btn-container"

                  >
                    <input
                      onChange={(e) => handleUploadedOnChange(e)}
                      type="file"
                      id="file"
                      className="inputtypefile"
                      name="attachments"
                    // accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, png, jpg"
                    />
                    <img
                      src={AttachFileIcon}
                      alt="icon"
                      className="attach_icon"
                    />
                    <label for="file" className="attachfile_label">
                      Attach files
                    </label>
                  </div>
                  {uploadedFile.map((value) => {
                    return (
                      <div className="order-requirement-added-file-cotainer">
                        <img
                          src={AttachFileSubmitIcon}
                          alt="icon"
                          className="attachSubmitIcon_css"
                        />

                        <span
                          style={{
                            paddingLeft: "10px",
                            width: "20rem",
                            // backgroundColor: "coral",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                          }}
                        >
                          {/* {isFilePicked ? uploadedFile : "Document.txt"} */}
                          {value}
                        </span>
                        <img
                          src={CrossIcon}
                          alt="icon"
                          className="order-requirement-crossIcon_css"
                          onClick={(e) => {
                            handleFileRemove(e, value);
                          }}
                        />
                      </div>
                    );
                  })}
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
                    <p>
                      All the info provided are complete & Accurate to my
                      knowledge. By placing the order I agree with Linkeble
                      <strong> Terms & Conditions</strong>
                    </p>
                  </div>
                </div>
                <div className="order-requirement-place-order-btn-container">
                  <button type="submit"
                    disabled={!termsConditon}
                    // ligth gray color if disabled
                    style={{ backgroundColor: !termsConditon && "#e0e0e0" }}
                    className="order-requirement-place-order-btn"
                  // onClick={() => {
                  //   // navigate("/orderdetails");
                  // }}
                  >
                    Place Order now
                  </button>
                </div>
              </form>
              <div className="order-requirement-card-container">
                <div className="order-requirement-card">
                  <div className="order-requirement-card-inner-container">
                    <div className="gig-img-and-review-container">
                      <div className="payment-gig-img-div">
                        <img src={selectedPlan.servicesImages && selectedPlan.servicesImages[0].imgUrl ? selectedPlan.servicesImages[0].imgUrl : ""}
                          alt="gig image"
                        // style={{ width: "200px", height: "100px", objectFit: "cover" }}

                        />

                      </div>
                      <div className="payment-gig-review-container">
                        <div className="payment-gig-heading">
                          {selectedPlan.title ? selectedPlan.title : ""}

                        </div>
                        <div className="payment-gig-review-star-container">
                          {/* <div className="order-detail-info-rating-star-div"> */}
                          <div className="payment-rating-star-div">
                            <StarIcon
                              style={{ color: "gold", fontSize: "20px" }}
                              className="payment-stars"
                            />
                            <StarIcon
                              style={{ color: "gold", fontSize: "20px" }}
                              className="payment-stars"
                            />
                            <StarIcon
                              style={{ color: "gold", fontSize: "20px" }}
                              className="payment-stars"
                            />
                            <StarIcon
                              style={{ color: "gold", fontSize: "20px" }}
                              className="payment-stars"
                            />
                            <StarIcon
                              style={{ color: "gold", fontSize: "20px" }}
                              className="payment-stars"
                            />
                          </div>
                          <div className="payment-rating-reviews-number">
                            <h2>5 (28)</h2>
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="payment-order-card-row">
                      <div className="order-requirement-card-gig-title">
                        {selectedPlan.title ? selectedPlan.title : ""}
                      </div>
                      <div className="payment-order-card-order-price">
                        $  {selectedPlan.pricing[selectedPlanName].price ? selectedPlan.pricing[selectedPlanName].price : ""}

                      </div>
                    </div>
                    <div
                      className="payment-order-card-row"
                      style={{ borderBottom: "1px solid var(--text-color)" }}
                    >
                      <div className="payment-premium-package-container">
                        <div className="payment-premium-package-heading">
                          {selectedPlanName} Package
                        </div>
                        <div className="order-requirement-revision-heading">
                          {selectedPlan.pricing[selectedPlanName].revisions ? selectedPlan.pricing[selectedPlanName].revisions : ""} Revision

                        </div>
                      </div>
                      <div className="payment-order-card-order-price">
                        $  {selectedPlan.pricing[selectedPlanName].price ? selectedPlan.pricing[selectedPlanName].price : ""}

                      </div>
                    </div>

                    <div className="order-completion-requirements-contianer">
                      <p>Network Integration</p>
                      <p>App Deployment</p>
                      <p>AI Model Integrations</p>
                      <p>Ads Integration</p>
                      <p>Network Integration</p>
                      <p>Optimise Performance</p>
                      <p>Optimise Performance</p>
                      <p>Optimise Performance</p>
                      <p>Optimise Performance</p>
                      <p>AI Model Integrations</p>
                      <div className="order-completion-requirements-div">
                        <p>Status</p>
                        <p>Incomplete</p>
                      </div>
                      <div className="order-completion-requirements-div">
                        <p>Order</p>
                        <p># FO2C8DEB9AZ2</p>
                      </div>
                      <div className="order-completion-requirements-div">
                        <p>Delivery Date</p>
                        <p>25 October, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </span >
      </div >
    </>
  );
};

export default OrderRequirement;
