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

const ServicesCardComponent = ({ title, subTitle, gigsData, results }) => {
  console.log("jkdsahkadhkashdkjashdkajsh----", results);
  const [gigs, setGigs] = useState([]);
  console.log(gigs);
  useEffect(() => {
    if (gigsData) {
      setGigs(gigsData.services.slice(0, 12) || []);
    }
  }, [gigsData]);

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
        {gigs.length > 0 ?
         gigs.map((item) => {
          return <CardServices data={item} />;
        }) 
        :
        results.map((item, index) => (
          <CardServices data={item} searching={true} key={index} />
        ))
        }
      </div>
    </div>
  );
};

export default ServicesCardComponent;
