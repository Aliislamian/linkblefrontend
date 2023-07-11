import React, { useEffect, useState } from "react";
import "../ServicesCardComponent/ServicesCardComponent.css";
import CardServices from "../ServicesCardComponent/Card";
import six from "../../images/six.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import ten from "../../images/ten.png";
import eleven from "../../images/eleven.png";
import twelve from "../../images/twelve.png";
import thirteen from "../../images/thirteen.png";
import fourteen from "../../images/fourteen.png";
import fifteen from "../../images/fifteen.png";

const ServicesCardComponent = ({ title, subTitle, gigsData }) => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {

    if (gigsData) {
      setGigs(gigsData.services.slice(0, 10) || []);
    }


  }, [gigsData]);


  const Services = [
    {
      subject: "expert mixing and mastering engineer",
      image: six,
    },
    {
      subject: "engaging article or blog post",
      image: seven,
    },
    {
      subject: "SEO and ranking your Sites/Channel",
      image: eight,
    },
    {
      subject: "create original business poster for digital marketing",
      image: nine,
    },
    {
      subject: "trumpet section to ensure your song is a hit",
      image: ten,
    },
    {
      subject: "Programming in python",
      image: eleven,
    },
    {
      subject: "Proofread and Editing website",
      image: twelve,
    },
    {
      subject: "Pro Logo Designing",
      image: thirteen,
    },
    {
      subject: "Microcontroller Programming ",
      image: fourteen,
    },
    {
      subject: "WordPress Bug Fixer and Developer",
      image: fifteen,
    },
  ];

  return (
    <div className="main_suggested_card">
      <div
        className="sub_main_suggested_card"
        style={{
          display: subTitle == "Recently viewed Services" ? "flex" : "",
          flexDirection: subTitle == "Recently viewed Services" ? "column" : "",
        }}
      >
        <div className="services_text">{title}</div>
        <div className="Sub_title_heading">{subTitle}</div>
      </div>
      <div className="suggested_card_div">
        {gigs.length > 0 ? gigs.map((item) => {
          return <CardServices data={item} />;
        }) :
          Services.map((item) => {
            return <CardServices data={item} />;
          })
        }
      </div>
    </div>
  );
};

export default ServicesCardComponent;