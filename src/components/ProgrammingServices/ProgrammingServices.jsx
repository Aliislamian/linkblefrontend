import React, { useRef } from "react";
import "./ProgrammingServices.css";
import Navbar from "../MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import NextLogo from "../../images/NextLogo.png";
import PhpLogo from "../../images/PhpLogo.png";
import ReactLogo from "../../images/ReactLogo.png";
import PythonLogo from "../../images/PythonLogo.png";
import NodeLogo from "../../images/NodeLogo.png";
import JsLogo from "../../images/JsLogo.png";
import Json from "../../images/Json.png";

const ProgrammingServices = () => {
  const navRef = useRef();
  const servicesData = [
    {
      img: PhpLogo,
      name: "PHP",
    },
    {
      img: ReactLogo,
      name: "React",
    },
    {
      img: PythonLogo,
      name: "Python",
    },
    {
      img: NodeLogo,
      name: "Node",
    },
    {
      img: JsLogo,
      name: "Js",
    },
    {
      img: Json,
      name: "JSON",
    },
    {
      img: PythonLogo,
      name: "Python",
    },
    {
      img: NodeLogo,
      name: "Node",
    },
    {
      img: JsLogo,
      name: "Js",
    },
    {
      img: ReactLogo,
      name: "React",
    },
  ];
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

      <div className="programming-services-container">
        <div className="programming-services-top-container">
          <div className="programming-services-upper-text-div">
            <div className="programming-services-upper-text-heading">
              Programming services
            </div>
            <div className="programming-services-upper-text">
              It’s all 0’s and 1’s. Once you know you will wonder!
            </div>
          </div>
          <div className="programming-services-upper-logo">
            <img src={NextLogo} alt="next previous btn" />
          </div>
        </div>

        <div className="programming-services-parent-logo-container">
          {servicesData.map((service) => {
            return (
              <div
                className="programming-services-logo-container"
                key={service.name + "container"}
              >
                <div className="programming-services-logo-div">
                  <div className="programming-services-logo-wrapper">
                    <img src={service.img} alt={service.name + " Logo"} />
                  </div>
                </div>
                <div className="programming-services-logo-text">
                  {service.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingServices;
