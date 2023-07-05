import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../BuyerNavbar/BuyerNavbar.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import NotificationIcon from "../../images/notification.png";
import AyazImage from "../../images/Ayaz.png";
import ToolTip from "../ToolTip/ToolTip";
import ProfileToolTip from "../ProfileToolTip/ProfileToolTip";
import avatar from "../../images/avatar.jpg";

import axios from "axios";
const Navbar = forwardRef((props, ref) => {
  const { setResults } = props;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [click, setClick] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [showProfileToolTip, setShowProfileToolTip] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleClick = () => {
    setClick(!click);
    setShowToolTip(false);
    setShowProfileToolTip(false);
  };

  useImperativeHandle(ref, () => ({
    handleOutsideClick() {
      setShowProfileToolTip(false);
      setShowToolTip(false);
    },
  }));
  const closeMobileMenu = () => setClick(false);

  const handleButtonClick = () => {
    if (searchQuery.trim() !== "") {
      // Call the API to perform the search
      axios
        .get(
          `https://linkablebackend-production-e3d2.up.railway.app/guest/search-services/${searchQuery}`
        )
        .then((response) => {
          // Handle the API response here
          console.log("Search results:", response.data);
          setResults(response.data);
        })
        .catch((error) => {

          // Handle the API error here
          console.error("Error searching services:", error);
        });
    }
  };

  const handleChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <div className="sub_navbar_logo_main">
            <img src={logo} alt="logo image" className="logo_navbar_css" />
          </div>
          <div className="Main_search_bar_buyer">
      <div className="Search_icon_main">
        <img src={search} alt="searchIcon" className="searchIcon_css" />
      </div>
      <div className="input_field_main">
        <input
          type="search"
          placeholder="Search for any service..."
          className="search_input_text_field"
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <button className="search-btn" onClick={handleButtonClick}>
        Get Started
      </button>
    </div>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{ color: "black" }}
            />
          </div>
        </div>
        <div className="middle">
          <ul
            className={
              click
                ? showProfileToolTip
                  ? "nav-menu active activeProToolTip"
                  : "nav-menu active"
                : "nav-menu"
            }
          >
            <li>
              <span

                className="nav-links-mobile"
              // onClick={closeMobileMenu}
              >
                <div className="mobile-profile">
                  <div className="ProfilePic_IconMain">
                    <img
                      onClick={() => setShowProfileToolTip(!showProfileToolTip)}
                      src={currentUser && currentUser.profileImg || avatar}
                      alt="icon"
                      className="ProfilePictureIcon"
                    />

                    <div className="active_dot"></div>
                    {showProfileToolTip && <ProfileToolTip />}
                  </div>
                </div>
              </span>
            </li>

            <li className="nav-item">
              <Link
                to="/buyerhome"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li
              className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            >
              <Link to="/chat" className="nav-links" onClick={closeMobileMenu}>
                Chat
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className="nav-item">
              <Link
                to="/buyerorders"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/preferences"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Preferences
              </Link>
            </li>
          </ul>
          <div className="right">
            <div className="NotificationIcon_main">
              <img
                src={NotificationIcon}
                alt="icon"
                className="NotificationIcon_css"
                onClick={() => {
                  setShowToolTip(!showToolTip);
                  setShowProfileToolTip(false);
                  setClick(false);
                }}
              />
              {showToolTip && <ToolTip />}
            </div>
            <div className="ProfilePic_IconMain navProfile">
              <img
                src={currentUser && currentUser.profileImg || avatar}
                alt="icon"
                className="ProfilePictureIcon "
                onClick={() => {
                  setShowProfileToolTip(!showProfileToolTip);
                  setShowToolTip(false);
                }}
              // onClick={() => setShowToolTip(!showToolTip)}
              />
              {showProfileToolTip && <ProfileToolTip />}
              {/* {showToolTip && <ToolTip />} */}

              <div className="active_dot"></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile_serach">
        <div className="mobile_search_bar_buyer" style={{ marginRight: "7vw" }}>
          <div className="mobile_input_field_main">
            <input
              type="search"
              placeholder="Search for any service..."
              className="mobile_search_input_text_field"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Navbar;
