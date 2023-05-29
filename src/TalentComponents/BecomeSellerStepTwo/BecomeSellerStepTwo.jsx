import React, { useState, useRef, useEffect } from "react";
import "../BecomeSellerStepTwo/BecomeSellerStepTwo.css";
// import { useNavigate } from "react-router-dom";

import TalentNavbar from "../TalentNavbar/TalentNavbar";
import BecomeSellerBar from "../BecomeSellerBar/BecomeSellerBar";
import editGray from "../../images/editGray.png";
import dropDownWhite from "../../images/dropDownWhite.png";
import dollar from "../../images/Dollars.png";
import BecomeSellerBtn from "../BecomeSellerBtn/BecomeSellerBtn";
import newRequest from "../../utils/newRequest";
import { handleError } from "../../utils/handleError";
import { useNavigate } from "react-router-dom";
import BeatLoaderComponent from "../../utils/BeatLoaderComponent";
const BecomeSellerStepTwo = () => {
  const navigate = useNavigate();

  // get service id from local storage
  const [serviceId, setServiceId] = useState(localStorage.getItem("serviceId"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setServiceId(localStorage.getItem("serviceId"));
    console.log(serviceId);
    if (serviceId === null || serviceId === undefined || serviceId === "") {
      navigate("/seller-step-one");
    }
  }, []);

  const navRef = useRef();
  const [formData, setFormData] = useState({
    basic: {
      packageName: '',
      packageDetails: '',
      delivery: '',
      totalScreen: '',
      prototype: false,
      revisions: '',
      price: '',
    },
    standard: {
      packageName: '',
      packageDetails: '',
      delivery: '',
      totalScreen: '',
      prototype: false,
      revisions: '',
      price: '',
    },
    premium: {
      packageName: '',
      packageDetails: '',
      delivery: '',
      totalScreen: '',
      prototype: false,
      revisions: '',
      price: '',
    },
  });
  const handleInputChange = (event, packageType) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [packageType]: {
        ...prevState[packageType],
        [name]: value,
      },
    }));
  };
  const list1 = [
    {
      texareaName: "packageName",
      placeholder: "Package Name",
      package: "basic"
    }
    , {
      texareaName: "packageName",
      placeholder: "Package Name",
      package: "standard"
    }, {
      texareaName: "packageName",
      placeholder: "Package Name",
      package: "premium"
    }
  ]
  const list2 = [
    {
      texareaName: "packageDetails",
      placeholder: "Basic details about this offer",
      package: "basic"
    }
    , {
      texareaName: "packageDetails",
      placeholder: "Basic details about this offer",
      package: "standard"

    }, {
      texareaName: "packageDetails",
      placeholder: "Basic details about this offer",
      package: "premium"
    }
  ]
  const checkList = ['basic', 'standard', 'premium']
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setLoading(true);
    try {
      const response = await newRequest.post("/create-service/step-two/" + serviceId,
        {
          basic: {
            packageName: formData.basic.packageName,
            packageDetails: formData.basic.packageDetails,
            delivery: +formData.basic.delivery,
            totalScreen: +formData.basic.totalScreen,
            prototype: formData.basic.prototype,
            revisions: +formData.basic.revisions,
            price: +formData.basic.price,
          },
          standard: {
            packageName: formData.standard.packageName,
            packageDetails: formData.standard.packageDetails,
            delivery: +formData.standard.delivery,
            totalScreen: +formData.standard.totalScreen,
            prototype: formData.standard.prototype,
            revisions: +formData.standard.revisions,
            price: +formData.standard.price,
          },
          premium: {
            packageName: formData.premium.packageName,
            packageDetails: formData.premium.packageDetails,
            delivery: +formData.premium.delivery,
            totalScreen: +formData.premium.totalScreen,
            prototype: formData.premium.prototype,
            revisions: +formData.premium.revisions,
            price: +formData.premium.price,
          },
        }
      );
      // console.log(response);
      navigate("/seller-step-three");
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
          <BecomeSellerBar stepCount={2} />
        </div>
        <div
          className="become-seller-step-two-main-container"
          onClick={() => {
            navRef.current.handleOutsideClick();
          }}
        >
          <div className="seller-step-two-heading">Pricing Details</div>
          <div className="table-top-container">
            <table className="table-container">
              <tr>
                {" "}
                <th>SERVICES</th>
                <th>BASIC</th>
                <th>STANDARD</th>
                <th>PREMIUM</th>
              </tr>
              <tr className="become-seller-first-row">
                <td className="check1">
                  <div></div>
                </td>

                {list1.map((item) => {
                  return (
                    <SecondRowdata placeholder={item.placeholder}
                      name={item.texareaName}
                      package={item.package}
                      onChange={(e) => handleInputChange(e, item.package)}
                    />
                  )
                }
                )}
              </tr>
              <tr className="become-seller-second-row">
                <td className="check">
                  <div></div>
                </td>

                {list2.map((item) => {
                  return (
                    <SecondRowdata placeholder={item.placeholder} name={item.texareaName}
                      package='standard'
                      onChange={(e) => handleInputChange(e, item.package)}

                    />
                  )
                }
                )}

              </tr>
              <tr>
                <td>Delivery</td>
                <td>
                  <select
                    id="select-basic"
                    name="delivery"
                    className="become-seller-table-inner-btn"
                    value={formData.basic.delivery}
                    onChange={(e) => handleInputChange(e, "basic")}
                  >
                    <option value="">Delivery</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                  </select>
                </td>

                <td>
                  <select
                    id="select-standard"
                    name="delivery"
                    className="become-seller-table-inner-btn"
                    value={formData.standard.delivery}
                    onChange={(e) => handleInputChange(e, "standard")}
                  >
                    <option value="">Delivery</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                  </select>
                </td>

                <td>
                  <select
                    id="select-premium"
                    name="delivery"
                    className="become-seller-table-inner-btn"
                    value={formData.premium.delivery}
                    onChange={(e) => handleInputChange(e, "premium")}
                  >
                    <option value="">Delivery</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>Number of Screens</td>
                <td>
                  <select
                    name="totalScreen"
                    onChange={(e) => handleInputChange(e, "basic")}
                    value={formData.basic.totalScreen}

                    id="select-screen-basic" className="become-seller-table-inner-btn">
                    <option selected value="">Screens</option>
                    <option value="1">1 Screens</option>
                    <option value="2">2 Screens</option>
                    <option value="3">3 Screens</option>
                  </select>
                </td>
                <td>
                  <select
                    name="totalScreen"
                    onChange={(e) => handleInputChange(e, "standard")}
                    value={formData.standard.totalScreen}
                    id="select-screen-standard" className="become-seller-table-inner-btn">
                    <option selected value="">Screens</option>
                    <option value="1">1 Screen</option>
                    <option value="2">2 Screens</option>
                    <option value="3">3 Screens</option>
                  </select>
                </td>
                <td>
                  <select id="select-screen-premium"
                    name="totalScreen"
                    onChange={(e) => handleInputChange(e, "premium")}
                    value={formData.premium.totalScreen}
                    className="become-seller-table-inner-btn">
                    <option selected value="">Screens</option>
                    <option value="1">1 Screen</option>
                    <option value="2">2 Screens</option>
                    <option value="3">3 Screens</option>
                  </select>
                </td>
              </tr>
              <tr>
                {/* <td>Prototyping</td> */}
                {/* {checkList.map(() => {
                return (
                  <td>
                    <Checkbox />
                  </td>
                )
              }
              )} */}
              </tr>
              <tr>
                <td>Prototyping</td>
                {checkList.map((item, index) => {
                  return (
                    <td
                      key={index + "checkIcon1"}

                    >
                      <Checkbox
                        packageType={item}
                        formData={formData}
                        setFormData={setFormData}


                      />
                    </td>
                  )
                }
                )}
              </tr>
              <tr>
                <td>Revisions</td>
                <td>
                  <select


                    name="revisions"
                    value={formData.basic.revisions}
                    onChange={(e) => handleInputChange(e, "basic")}

                    id="select-revision-basic" className="become-seller-table-inner-btn">
                    <option selected value="">Select</option>
                    <option value="1">1 Revision</option>
                    <option value="2">2 Revisions</option>
                    <option value="3">3 Revisions</option>
                  </select>
                </td>
                <td>
                  <select
                    name="revisions"
                    value={formData.standard.revisions}
                    onChange={(e) => handleInputChange(e, "standard")}
                    id="select-revision-standard" className="become-seller-table-inner-btn">
                    <option selected value="">Select</option>
                    <option value="1">1 Revision</option>
                    <option value="2">2 Revisions</option>
                    <option value="3">3 Revisions</option>
                  </select>
                </td>
                <td>
                  <select

                    name="revisions"
                    value={formData.premium.revisions}
                    onChange={(e) => handleInputChange(e, "premium")}
                    id="select-menu" className="become-seller-table-inner-btn">
                    <option selected value="">Select</option>
                    <option value="1">1 Revision</option>
                    <option value="2">2 Revisions</option>
                    <option value="3">3 Revisions</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  <div className="become-seller-table-price-container">
                    <div className="become-seller-table-price-inner-container">
                      <div className="become-seller-table-price-inner-text">

                        <input type="number" placeholder="10" min="0"
                          onChange={(e) => handleInputChange(e, "basic")}
                          name="price"
                        />
                      </div>
                    </div>
                    <img src={dollar} alt="icon" />
                  </div>
                </td>

                <td>
                  <div className="become-seller-table-price-container">
                    <div className="become-seller-table-price-inner-container">
                      <div className="become-seller-table-price-inner-text">
                        <input type="number" placeholder="10" min="0"
                          name="price"

                          onChange={(e) => handleInputChange(e, "standard")}
                        />
                      </div>
                    </div>
                    <img src={dollar} alt="icon" />
                  </div>
                </td>

                <td>
                  <div className="become-seller-table-price-container">
                    <div className="become-seller-table-price-inner-container">
                      <div className="become-seller-table-price-inner-text">
                        <input type="number" placeholder="10" min="0"
                          name="price"
                          onChange={(e) => handleInputChange(e, "premium")}
                        />
                      </div>
                    </div>
                    <img src={dollar} alt="icon" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="become-seller-step-two-bottom-btn">
            <BecomeSellerBtn
              formSubmit={handleSubmit}
              leftBtnText={"Back"}
              rightBtnText={"Save & Continue"}
              PrevBtnNavigation={"/seller-step-one"}
              NextBtnNavigation={"/seller-step-three"}
            />
          </div>
        </div>
      </div >
    </>
  );
};

export default BecomeSellerStepTwo;




const SecondRowdata = (props) => {
  // this is for edit button in second row
  const [secodRowEditBtn, setSecodRowEditBtn] = useState(true);
  const handleSecondRowEditBtn = (e) => {
    setSecodRowEditBtn(false);
    e.target.style.fontWeight = "normal";

  }
  const handleSecondRowEditBtnRemove = (e) => {
    setSecodRowEditBtn(true)
    if (e.target.value === "") {
      e.target.style.fontWeight = "normal"
    }
    else {
      e.target.style.fontWeight = "bold"
    }
  }

  return (
    <td className="become-seller-table-td">
      <textarea placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        className="become-seller-inner-div"
        onFocus={handleSecondRowEditBtn}
        onBlur={handleSecondRowEditBtnRemove}



      />
      {secodRowEditBtn && <img src={editGray} alt="edit" />}
    </td>
  )
}
const Checkbox = ({ packageType, formData, setFormData }) => {
  const [checkbox, setCheckbox] = useState(false)

  const handleCheckbox = () => {
    setCheckbox(!checkbox);

    setFormData((prevState) => ({
      ...prevState,
      [packageType]: {
        ...prevState[packageType],
        prototype: !checkbox,
      },
    }));
  }

  return (
    <div onClick={handleCheckbox} style={{ backgroundColor: checkbox ? "#00966b" : "#f6f6f6" }} className="become-seller-table-select-icon"></div>
  )
}
