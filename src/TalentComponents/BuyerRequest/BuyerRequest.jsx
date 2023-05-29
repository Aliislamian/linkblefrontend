import React, { useRef } from "react";
import "../../components/PostJob/PostJob.css";
import "./BuyerRequest.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import ProfileImg from "../../images/tabprofileimg1.png";
import file from "../../images/apk-file.png";
import topArrowIcon from "../../images/backArrow.png";
import graySearch from "../../images/graySearch.png";
import AllCategoryBtn from "../AllCategoryBtn/AllCategoryBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BuyerRequest = () => {
  const navRef = useRef();
  const [categoryList, setCategoryList] = useState(false);
  const TableData = [
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      file: true,

      budget: "$ 50",
      Delivery: "2 days",
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet",
      attachment: "App.flow.txt",
      budget: "$ 450",
      Delivery: "1 day",
      file: false,
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem  sit",
      attachment: "App.flow.txt",
      budget: "$ 250",
      file: false,
      Delivery: "24 hour",
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 800",
      Delivery: "1 Year",
      btnText: "View Request",
      file: false,
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 490",
      Delivery: "1 Decade",
      file: false,
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 750",
      Delivery: "7 days",
      btnText: "View Request",
      file: false,
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 150",
      Delivery: "26 days",
      file: true,
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 150",
      Delivery: "26 days",
      file: false,
      btnText: "View Request",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="talent-proposal-parent-div">
      <TalentNavbar ref={navRef} />
      {/* <GuestOptions
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      /> */}
      <div
        className="proposal-main-container"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="buyer-request-search-container">
          <div className="buyer-profile-list-top-left-container">
            <div
              onClick={() => navigate(-1)}
              className="account-security-back-btn-container"
              style={{ cursor: "pointer" }}
            >
              <img
                src={topArrowIcon}
                alt="arrow icon"
                style={{ transform: "rotate(0deg)" }}
              />
              <div className="account-security-back-btn-text">Back</div>
            </div>
            <div className="buyer-profile-list-search-container">
              <label htmlFor="buyerProfileListSerach">
                {" "}
                <img src={graySearch} alt="icon" />
              </label>
              <input
                type="text"
                placeholder="Search for service here..."
                name="buyerProfileListSerach"
                id="buyerProfileListSerach"
              />
            </div>
          </div>
        </div>
        <div className="proposal-top-container">
          <div className="proposal-top-text">BUYER REQUESTS</div>
          <div className="proposal-top-btn-div">
            {/* <AllCategoryBtn /> */}
            <span
              onClick={() => {
                setCategoryList(!categoryList);
              }}
            >
              <AllCategoryBtn categoryList={categoryList} />
            </span>
          </div>
        </div>
      </div>

      <div
        className="table_full_main_div"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <table
          style={{
            border: "none",
            marginTop: 20,
            borderCollapse: "collapse",
          }}
          responsive
          size="lg"
          striped
        >
          <tbody className="table_css">
            <tr style={{ padding: 1, height: 40, width: "100%" }}>
              <td
                className="td_heading_css"
                style={{ padding: 5, height: 40, width: "10%" }}
              >
                Posted On
              </td>
              <td
                className="td_heading_css profile-talent-heading"
                style={{ padding: 5, height: 40, width: "10%" }}
              >
                Buyer
              </td>
              <td
                className="td_heading_css post-job-desc"
                style={{
                  padding: 1,
                  height: 40,
                  width: "40%",
                  paddingLeft: "20px",
                }}
              >
                Service Request Offer
              </td>

              <td
                className="td_heading_css td-propsal-budget"
                style={{ padding: 5, height: 40, width: "10%" }}
              >
                BUDGET
              </td>
              <td
                className="td_heading_css td-propsal-budget"
                style={{ padding: 5, height: 40, width: "10%" }}
              >
                Dlivery
              </td>
              {/* <td
                className="td_heading_css td-propsal-budget"
                style={{
                  padding: 5,
                  height: 40,
                  width: "10%",
                  paddingLeft: "35px",
                }}
              >
                Action
              </td> */}
            </tr>
            {TableData.map((item) => {
              return (
                <tr
                  className="table_tr"
                  style={{
                    padding: 1,
                    height: 65,
                    width: "100%",
                    backgroundColor: "white",
                  }}
                >
                  <td
                    style={{ padding: 15, height: 65, width: "10%" }}
                    className="table-data"
                  >
                    {item.postedDate}
                  </td>

                  <td style={{ width: "10" }} className="table-data">
                    <div className="proposal-talent-profile-main-div">
                      <div className="proposal-talent-profile-div">
                        <img src={ProfileImg} alt="profile image" />
                      </div>
                      <div className="proposal-talent-profile-name-div">
                        Helena Linda
                      </div>
                    </div>
                  </td>
                  <td
                    style={{ padding: 15, height: 40, width: "10%" }}
                    className="table-data post-job-desc"
                  >
                    {item.jobDetails}

                    {item.file && (
                      <div className="buyer-request-file-container">
                        <img
                          src={file}
                          alt=""
                          className="buyer-request-file-img"
                        />
                        <div className="buyer-request-file-name">
                          Linkeble apk
                        </div>
                      </div>
                    )}
                  </td>
                  <td
                    style={{ padding: 15, height: 40, width: "10%" }}
                    className="table-data"
                  >
                    {item.budget}
                  </td>
                  <td
                    style={{ padding: 15, height: 40, width: "10%" }}
                    className="table-data"
                  >
                    {item.Delivery}
                  </td>
                  <td
                    style={{ padding: 15, height: 40, width: "10%" }}
                    className="table-data"
                  >
                    <div className="view_request_div">SEND OFFER</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default BuyerRequest;
