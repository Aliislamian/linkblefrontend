import React, { useRef } from "react";
import "./PrivacyPolicy.css";
import Navbar from "../MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import BlackEmailIcon from "../../images/BlackEmailIcon.png";
import BlackAddressIcon from "../../images/BlackAddressIcon.png";
import BlackPhoneIcon from "../../images/blackPhoneIcon.png";

const PrivacyPolicy = () => {
  const navRef = useRef();
  return (
    <div>
      <Navbar ref={navRef} />
      <div
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />
      </div>
      <div
        className="privacy-parent-container"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="privacy-date-div">Last update: December 28, 2021</div>
        <div className="privacy-terms-div">
          <div className="privacy-terms-heading-div privacy-heading">
            Linkeble Privacy Policy
          </div>
          <div className="privacy-terms-text-div">
            <div className="privacy-term-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.
            </div>
          </div>
          <div className="privacy-terms-heading-div privacy-heading">
            The short version
          </div>
          <div className="privacy-terms-text-div">
            <div className="privacy-term-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.
            </div>
          </div>
          <div className="privacy-terms-heading-div privacy-heading">
            The longer version
          </div>
          <div className="privacy-terms-text-div">
            <div className="privacy-term-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.
            </div>
          </div>
          <div className="privacy-terms-heading-div privacy-heading">
            Information We Collect
          </div>
          <div className="privacy-terms-text-div">
            <div className="privacy-term-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis magna justo, scelerisque et euismod sit amet, eleifend quis
              magna.
            </div>
          </div>
          <div className="privacy-terms-heading-div privacy-heading">
            Cookies
          </div>
          <div className="privacy-terms-text-div">
            <div className="privacy-term-text">
              We use cookies and similar technologies (such as web beacons,
              pixels, tags, and scripts) to improve and personalize your
              experience, provide our services, analyze website performance and
              for marketing purposes. To learn more about how we and our third
              party service providers use cookies and your control over these
              Cookies
            </div>
          </div>
        </div>

        <div className="privacy-get-in-touch-div">
          <div className="privacy-get-in-touch-heading-div">
            Get in touch with Us!
          </div>
          <div className="privacy-get-in-touch-text-div">
            We love to hear from you. Out customer representative will always
            help you.
          </div>
        </div>
        <div className="privacy-contact-info-div">
          <div className="privacy-contact-email-div privacy-contact-info-inner-div">
            <div className="privacy-contact-info-icon-div">
              <img
                src={BlackEmailIcon}
                alt="email icon"
                className="privacy-contact-email-icon"
              />
            </div>
            <div className="privacy-contact-info-heading">Chat to us</div>
            <div className="privacy-contact-info-text">
              Leave a message to our team here.
            </div>
            <div className="privacy-contact-info-text-two">
              support@linkeble.info
            </div>
          </div>
          <div className="privacy-contact-address-div privacy-contact-info-inner-div">
            <div className="privacy-contact-info-icon-div">
              <img
                src={BlackAddressIcon}
                alt="email icon"
                className="privacy-contact-address-icon"
              />
            </div>
            <div className="privacy-contact-info-heading">Our Office</div>
            <div className="privacy-contact-info-text">
              Visit us and say Hello to us.
            </div>
            <div className="privacy-contact-info-text-two">
              100 ST, Near Ware House USA.
            </div>
          </div>
          <div className="privacy-contact-phone-div privacy-contact-info-inner-div">
            <div className="privacy-contact-info-icon-div">
              <img
                src={BlackPhoneIcon}
                alt="email icon"
                className="privacy-contact-phone-icon"
              />
            </div>
            <div className="privacy-contact-info-heading">Phone</div>
            <div className="privacy-contact-info-text">
              Mon-Fri From 8 AM to 5PM GMT{" "}
            </div>
            <div className="privacy-contact-info-text-two">
              +1-345-8722-891{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
