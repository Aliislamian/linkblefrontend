import React, { useRef, useState } from "react";
import "./About.css";
import Navbar from "../MyNav/Navbar";
import LinkebleLogo from "../../images/logo.png";
import dollar from "../../images/dollar.png";
import globe from "../../images/globe.png";
import LanguagePopUp from "../LanguagePopUp/LanguagePopUp";
import CurrencyPopUp from "../CurrencyPopUp/CurrencyPopUp";

const About = () => {
  const navRef = useRef();
  const [showLanguagePopUp,setShowLanguagePopUp]=useState(false)
  const [showCurrencyPopUp,setShowCurrencyPopUp]=useState(false)
  return (
    <div className="about-main-contianer">
     
      <Navbar ref={navRef} />
      <LanguagePopUp
        showLanguagePopUp={showLanguagePopUp}
        handleCrossIcon={() => setShowLanguagePopUp(false)}
      />
       <CurrencyPopUp
        showCurrencyPopUp={showCurrencyPopUp}
    
        handleCrossIcon={() => setShowCurrencyPopUp(false)}
      />
      <div
        className="about-background-img-container"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div
          className="about-background-img-heading"
          onClick={() => {
            navRef.current.handleOutsideClick();
          }}
        >
          Search the ultimate Freelance Service Providers
        </div>
        <div className="about-background-img-text">
          Encourage buyers to choose your Gig by featuring a variety of your
          work
        </div>
      </div>
      <div
        className="about-bottom-container"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="about-bottom-container-top-div">
          <div className="bottom-container-top-heading">Lorem Ipsum</div>
          <div className="bottom-container-top-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
            justo, scelerisque et euismod sit amet, eleifend quis magna.
          </div>
        </div>
        <div className="about-services-container">
          <div className="about-service-div">
            <div className="about-service-heading">24 Hour Support</div>
            <div className="about-service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
            </div>
          </div>
          <div className="about-service-div">
            <div className="about-service-heading">Lorem Ipsum</div>
            <div className="about-service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
            </div>
          </div>
          <div className="about-service-div">
            <div className="about-service-heading">Lorem Ipsum</div>
            <div className="about-service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
            </div>
          </div>
          <div className="about-service-div">
            <div className="about-service-heading">Lorem Ipsum</div>
            <div className="about-service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis magna.
            </div>
          </div>
        </div>
        <div className="about-services-paragraph">
          <div className="about-services-paragraph-heading">About Linkeble</div>
          <div className="about-services-paragraph-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
            justo, scelerisque et euismod sit amet, eleifend quis magna. Sed
            fringilla, est at volutpat sodales, nisl eros tristique sapien, ut
            gravida urna lorem a odio. Sed bibendum lacinia nisl, sit amet
            blandit velit porta ultrices. Pellentesque vehicula maximus augue,
            id consequat mi. Aenean eget justo mauris. Vivamus nec augue rutrum,
            porttitor ex a, aliquet lacus. Curabitur egestas tincidunt nunc et
            vestibulum. Vestibulum sit amet blandit massa, vel ornare lectus. Ut
            quis urna suscipit, pretium magna sed, tincidunt purus. Praesent non
            facilisis dui. Praesent blandit arcu velit, a placerat lorem
            interdum ac. Quisque sollicitudin, justo vitae fermentum commodo,
            orci nibh condimentum sapien, a tempus urna turpis id felis. Aliquam
            erat volutpat. Nam ac molestie nisi.
          </div>
        </div>
        <div className="about-main-footer">
          <div className="about-footer">
            <div className="about-logo-div">
              <img src={LinkebleLogo} alt="linkeble logo" />
            </div>
            <div className="about-copyright-div">
              Linkeble ® is a registered Trademark of Linkeble Technology
              Copyright © 2021 Linkeble Technology{" "}
            </div>
            <div className="about-options-div">
              <div className="about-options-inner-div">
                <div className="about-language-logo"
                onClick={()=>{
                    setShowLanguagePopUp(!showLanguagePopUp)
                }}
               
                >
                  <img src={globe} alt="globe logo" />
                </div>{" "}
                <div className="about-language-text">English</div>
              </div>
              <div className="about-options-inner-div"
               onClick={()=>{
                    setShowCurrencyPopUp(!showCurrencyPopUp)
                }}
              >
                <div className="about-currency-logo">
                  <img src={dollar} alt="dollar logo" />
                </div>{" "}
                <div className="about-currency-text">USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
