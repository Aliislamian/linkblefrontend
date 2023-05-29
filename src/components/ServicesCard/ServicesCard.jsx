import React, { useRef, useState, useEffect } from "react";
import "../ServicesCard/ServicesCard.css";
import "./carousel.css";
import CardServices from "./Card";
import RightIcon from "../../images/righticom.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/five.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const ServicesCard = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  const Services = [
    {
      subject: "Develops Mobile Apps for Android and IOS",
      image: one,
    },
    {
      subject: "Mobile Application  UI/UX XD or Figma Design",
      image: two,
    },
    {
      subject: "Machine Learning Projects in Python",
      image: three,
    },
    {
      subject: "Design & develop Modern Website",
      image: four,
    },
    {
      subject: "Native iOS Development",
      image: five,
    },
    {
      subject: "Native iOS Development",
      image: two,
    },
    {
      subject: "Native iOS Development",
      image: four,
    },
    {
      subject: "Native iOS Development",
      image: one,
    },
    {
      subject: "Native iOS Development",
      image: five,
    },
    {
      subject: "Native iOS Development",
      image: three,
    },
  ];
  const navigate = useNavigate();
  return (
    <div
      className="main_services_card"
      // onClick={() => navigate("/talent-about")}
    >
      <div className="services_card">
        <Slider {...carouselProperties}>
          {Services.map((item) => {
            return <CardServices data={item} />;
          })}
        </Slider>
      </div>

      <div className="right_icon">
        <img src={RightIcon} alt="Right Icon" className="icon_inside" />
      </div>
    </div>
  );
};

export default ServicesCard;
