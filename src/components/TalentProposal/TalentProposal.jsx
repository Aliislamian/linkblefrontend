import React, { useRef } from "react";
import "../PostJob/PostJob.css";
import "./TalentProposal.css";
import Navbar from "../MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import DeleteIcon from "../../images/BlackDeleteIcon.png";
import PlusIcon from "../../images/greenPlusIcon.png";
import ProfileImg from "../../images/tabprofileimg1.png";

const TalentProposal = () => {
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
    <div className="talent-proposal-parent-div">
      <Navbar ref={navRef} />
      <GuestOptions
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      />
      <div
        className="proposal-main-container"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="proposal-top-container">
          <div className="proposal-top-text">Talent Proposal</div>
          <div className="proposal-top-btn-div">
            <div className="proposal-delete-btn-div">
              <div className="proposal-delete-icon">
                <img src={DeleteIcon} alt="delete icon" />
              </div>
              <div className="proposal-delete-text">Delete this Request</div>
            </div>
            <div className="proposal-post-request-btn-div">
              <div className="proposal-plus-icon">
                <img src={PlusIcon} alt="plus icon" />
              </div>
              <div className="proposal-post-request-text">Post New Request</div>
            </div>
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
                Talent
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
                Job Details
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
              <td
                className="td_heading_css td-propsal-budget"
                style={{
                  padding: 5,
                  height: 40,
                  width: "10%",
                  paddingLeft: "35px",
                }}
              >
                Action
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
                    <div className="view_request_div">Contact</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TalentProposal;
