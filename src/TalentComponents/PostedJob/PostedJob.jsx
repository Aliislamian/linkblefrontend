import React, { useRef } from "react";
import "./PostedJob.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import SubmitCardImage1 from "../../images/submitcardimg1.png";
import { useNavigate } from "react-router-dom";
import postedJobImg from "../../images/postedJobImg.png";
import CloudImageTwo from "../../images/submitcardimg3.png";
import DocumentIcon from "../../images/attachfileselectedicon.png";

const PostedJob = () => {
  const navigate = useNavigate();
  const navRef = useRef();
  const TableData = [
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
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
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem  sit",
      attachment: "App.flow.txt",
      budget: "$ 250",
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
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 490",
      Delivery: "1 Decade",
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
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 150",
      Delivery: "26 days",
      btnText: "View Request",
    },
    {
      postedDate: "Dec 02, 2021",
      jobDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis masd sit",
      attachment: "App.flow.txt",
      budget: "$ 150",
      Delivery: "26 days",
      btnText: "View Request",
    },
  ];

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div>
        <TalentNavbar ref={navRef} />
      </div>
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="main_postJob">
          <div className="main_main_sumbmit_card">
            <div className="main_above_div">
              <text className="main_text_css">
                Hey Alexa Beck! Hire some one?
              </text>
              <img
                src={SubmitCardImage1}
                alt="image"
                className="main_submit_card_image_css"
              />
            </div>
            <div className="main_below_container">
              <div
                className="check-buyer-request-btn"
                onClick={() => navigate("/buyer-profile-list")}
              >
                Submit Request Now
              </div>
            </div>
          </div>
          <div className="card_second_main">
            <div className="txt_n_btn_main">
              <div className="text_div">Services You may need to order</div>
              <div
                className="posted-job-explore-btn"
                onClick={() => navigate("/buyer-requests")}
              >
                Check Jobs
              </div>
            </div>
            <div className="cloud_images_div">
              <div className="cloud-image-one-div">
                <img
                  src={postedJobImg}
                  className="cloud_images_css posted-job-img"
                  style={{ width: "200px" }}
                />
              </div>
              <div className="cloud-image-two-div">
                <img src={CloudImageTwo} className="cloud_images_css" />
              </div>
            </div>
          </div>
        </div>

        <div className="table_full_main_div">
          <table className="post-job-description"
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
                  className="td_heading_css posted-job-detail"
                  style={{
                    padding: 1,
                    height: 40,
                    width: "40%",
                    paddingLeft: "20px",
                  }}
                >
                  Job Details
                </td>
                <td
                  className="td_heading_css"
                  style={{ padding: 5, height: 40, width: "10%" }}
                >
                  Attachments
                </td>
                <td
                  className="td_heading_css"
                  style={{ padding: 5, height: 40, width: "10%" }}
                >
                  BUDGET
                </td>
                <td
                  className="td_heading_css"
                  style={{ padding: 5, height: 40, width: "10%" }}
                >
                  Dlivery
                </td>
              </tr>
              {TableData.map((item) => {
                return (
                  <tr
                    className="table_tr"
                    style={{ padding: 1, height: 65, width: "100%" }}
                  >
                    <td
                      style={{ padding: 15, height: 65, width: "10%" }}
                      className="table-data"
                    >
                      {item.postedDate}
                    </td>
                    <td
                      style={{ padding: 15, height: 40, width: "10%" }}
                      className="table-data posted-job-detail"
                    >
                      {item.jobDetails}
                    </td>
                    <td style={{ width: "10" }} className="table-data">
                      <div className="attachment_td_row">
                        <img
                          src={DocumentIcon}
                          alt="icon"
                          className="document_icon"
                        />
                        <text
                          className="attachment_text"
                          style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            paddingLeft: "10px",
                          }}
                        >
                          {item.attachment}
                        </text>
                      </div>
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </span>
    </div>
  );
};

export default PostedJob;
