import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "../../components/BuyerNavbar/BuyerNavbar.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import avatar from "../../images/avatar.jpg";
import NotificationIcon from "../../images/notification.png";
import AyazImage from "../../images/Ayaz.png";
import ToolTip from "../../components/ToolTip/ToolTip";
import ProfileToolTip from "../ProfileToolTip/ProfileToolTip";
import newRequest from "../../utils/newRequest";
const TalentNavbar = forwardRef((props, ref) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [click, setClick] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [showProfileToolTip, setShowProfileToolTip] = useState(false);
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

  const handleButtonClick = () => {
    const searchInput = document.querySelector('.search_input_text_field');
    const searchQuery = searchInput.value;
    console.log('Searching for:', searchQuery);
  };

  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="left">
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              EPIC
              <i class="fab fa-firstdraft" />
            </Link> */}
          <div
            className="sub_navbar_logo_main"
            onClick={() => navigate("/talent-gig-earning-info")}
          >
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
              />
            </div>
            <button className="search-btn" onClick={handleButtonClick}>Get Started</button>

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
            <li className="talent-navbar-first-option">
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
                    {showProfileToolTip && <ProfileToolTip mode="talent" />}
                  </div>
                </div>
              </span>
            </li>

            <li className="nav-item">
              <Link
                to="/talent-gig-earning-info"
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
              <Link
                to="/talent-chat"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Chat
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className="nav-item">
              <Link
                to="/talent-manage-account"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/manage-gigs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/earning"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Earnings
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
              {showProfileToolTip && <ProfileToolTip mode="talent" />}
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

export default TalentNavbar;
