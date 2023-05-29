import React, { useRef, useState } from "react";
import topArrowIcon from "../../images/topArrowIcon.png";
import "../TalentNavbar/TalentNavbar.jsx";
import TalentNavbar from "../TalentNavbar/TalentNavbar.jsx";
import "./AccountSecurity.css";
import AttachFileIcon from "../../images/attachfileicon.png";
import AttachFileSubmitIcon from "../../images/attachfileselectedicon.png";
import CrossIcon from "../../images/cross.png";
import accountSecurity from "../../images/accountSecurity.PNG";
import TalentBtn from "../TalentBtn/TalentBtn";
import { useNavigate } from "react-router-dom";
const AccountSecurity = () => {
  const navRef = useRef();

  const handleFileRemove = (e, value) => {
    setUploadedFile(
      uploadedFile.filter((item) => {
        return item !== value;
      })
    );
  };
  const [uploadedFile, setUploadedFile] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const handleUploadedOnChange = (e) => {
    setUploadedFile([...uploadedFile, e.target.files[0].name]);
    setIsFilePicked(true);
  };
  const navigate = useNavigate();
  return (
    <div>
      <TalentNavbar ref={navRef} />

      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="account-security-container">
          <div className="account-security-top-container">
            <div
              className="account-security-back-btn-container"
              style={{ cursor: "pointer" }}
            >
              <img src={topArrowIcon} alt="arrow icon" />
              <div
                className="account-security-back-btn-text"
                onClick={() => navigate(-1)}
              >
                back
              </div>
            </div>
            <div className="account-security-right-text">
              Account & Security
            </div>
          </div>

          <div className="account-security-bottom-container">
            <div className="account-security-bottom-left-container">
              <label htmlFor="accountSecuritySubject">
                {/* <div className="account-security-subject-input"></div> */}
                Subject
              </label>
              <br />
              <input
                type="text"
                name="accountSecuritySubject"
                className="account-security-subject-input"
                placeholder="Enter Subject here"
              />
              <br />
              <br />
              <label htmlFor="accountSecurityDetail">
                {/* <div className="account-security-subject-input"></div> */}
                Details
              </label>
              <br />

              <textarea
                className="account-security-detail-input"
                name="accountSecurityDetail"
                id="accountSecurityDetail"
                cols="30"
                placeholder="Enter details of your inquiry "
                rows="10"
              ></textarea>

              {/* ///  used from order requirement page */}
              <div className="order-requirement-add-file-btn-parent-container">
                <div
                  className="order-requirement-add-file-btn-container"
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
                  <label
                    for="file"
                    className="attachfile_label"
                    style={{ fontSize: "1rem" }}
                  >
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
              {/* ///  used from order requirement page */}
              <div className="account-security-btn">
                <TalentBtn
                  text="Submit Service Request"
                  TalentBtnNavigation={"/talent-gig-earning-info"}
                />
              </div>
            </div>

            <div className="account-security-bottom-right-container">
              <div className="account-security-img">
                <img src={accountSecurity} alt="account security" />
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default AccountSecurity;
