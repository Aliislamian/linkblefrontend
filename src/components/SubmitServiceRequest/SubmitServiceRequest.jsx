import React, { useState, useRef } from "react";
import "../SubmitServiceRequest/SubmitServiceRequest.css";
import Navbar from "../../components/MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import AttachFileIcon from "../../images/attachfileicon.png";
import AttachFileSubmitIcon from "../../images/attachfileselectedicon.png";
import CrossIcon from "../../images/cross.png";
import CategoryIcon from "../../images/categoryicon.png";
import SubCategoryIcon from "../../images/subcategoryicon.png";
import Select, { components } from "react-select";
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";
const SubmitServiceRequest = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const navRef = useRef();
  const handleUploadedOnChange = (e) => {
    setUploadedFile([...uploadedFile, e.target.files[0].name]);
    setIsFilePicked(true);
  };

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  const options = [
    {
      value: "Afghanistan",
      label: "Afghanistan",
    },
    {
      value: "Pakistan",
      label: "Pakistan",
    },
    {
      value: "South Africa",
      label: "South Africa",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "South Asia",
      label: "South Asia",
    },
    {
      value: "Sweeden",
      label: "Sweeden",
    },
    {
      value: "India",
      label: "India",
    },
    {
      value: "China",
      label: "China",
    },
    {
      value: "BanglaDesh",
      label: "BanglaDesh",
    },
    {
      value: "South Korea",
      label: "South Korea",
    },
  ];
  const handleFileRemove = (e, value) => {
    setUploadedFile(
      uploadedFile.filter((item) => {
        return item !== value;
      })
    );
  };
  

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div>
        <Navbar ref={navRef} />
      </div>
      <div
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />
      </div>
      <div
        className="postedRequest_main"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="postedRequest_main_one">
          <div className="postedRequest_title">
            Post for the Service You need!
          </div>
          <div className="postedRequest_input_main">
            <form className="input_form_main">
              <label style={{ paddingBottom: "7px" }}>Project Title</label>
              <input
                type="text"
                placeholder="30 Max Characters"
                className="inputText_css"
                maxLength="30"
              />
              <label style={{ paddingTop: "1.2rem", paddingBottom: "7px" }}>
                Project Details
              </label>
              <textarea
                maxLength="3000"
                placeholder="looking for service..."
                className="textArea_input_css"
              ></textarea>
              <div
                className="attach-file-div"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="inputType_file_main_css"
                  onChange={(e) => handleUploadedOnChange(e)}
                >
                  <input
                    type="file"
                    id="file"
                    className="inputtypefile"
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
                    <div className="preview_main_div">
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
                        className="crossIcon_css"
                        onClick={(e) => {
                          handleFileRemove(e, value);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="dropdown_category_main">
                <img
                  src={CategoryIcon}
                  alt="icon"
                  className="category_icon_css"
                />
                <Input type="select" className="select_css">
                  <option>Select Project Category</option>
                  {options.map((item) => {
                    return <option className="options">{item.label}</option>;
                  })}
                </Input>
              </div>
              <div className="dropdown_sub_category_main">
                <img
                  src={SubCategoryIcon}
                  alt="icon"
                  className="sub_category_icon_css"
                />
                <Input type="select" className="select_css">
                  <option>Select Project Sub Category</option>
                  {options.map((item) => {
                    return <option>{item.label}</option>;
                  })}
                </Input>
              </div>
              <div className="delivery_time_main">
                <label style={{ paddingBottom: "7px" }}>Delivery Time</label>
                <input
                  type="text"
                  placeholder="Enter Delivery time in Days"
                  className="inputText_css"
                />
              </div>
              <div className="delivery_time_main">
                <label style={{ paddingBottom: "7px" }}>Project Budget</label>
                <input
                  type="text"
                  placeholder="Add Project Budget"
                  className="inputText_css"
                />
              </div>
            </form>
            <div className="submit_service_request__btn_div" 
             onClick={() => navigate("/buyerhome")}
            >
              <div className="submit_service_request__btn">
                Submit Service Request
                <ReactTooltip />
              </div>
            </div>
          </div>
        </div>
        <div className="postedRequest_main_two">
          <div className="second_postedRequest_title">
            Tell services providers what you want to done?
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
  );
};

export default SubmitServiceRequest;
