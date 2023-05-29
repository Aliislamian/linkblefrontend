import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./proCarousel.css";
import { ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import MachineLearning from "../../images/MachineLearning.png";
import ProgrammingServices from "../../images/ProgrammingServices.png";
import Artificial from "../../images/Artificial.png";
import BlockChain from "../../images/BlockChain.png";
import Database from "../../images/Database.png";
import ProfessionalCard from "./ProfessionalCard";
import { useNavigate } from "react-router-dom";
// import "../ServicesCard/ServicesCard.css";
let slidesToShow = 5;
const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick, currentSlide } = props;

  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos
            style={{
              color: "green",
              fontSize: "30px",
              transform: "rotate(180deg)",
            }}
          />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  // console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: "green", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 5,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const ProMultiItemCarousel = (props) => {
  const navigate = useNavigate();
  console.log(props.CarouselAllServices);
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

  return (
    <div className="carousel" style={{ zIndex: "0" }}>
      <div className="carousel-text">
        <h1
          className={
            props.CarouselAllServices !== "null"
              ? "first-text"
              : "first-text carouselTitle"
          }
        >
          {props.CarouselTitle}
        </h1>
        <h1 className="second-text">
          {props.CarouselAllServices !== "null"
            ? props.CarouselAllServices
            : ""}
        </h1>
      </div>
      <Slider {...carouselProperties} style={{ zIndex: "0" }}>
        {Services.map((item) => {
          return (
            <ProfessionalCard
              data={item}
              // onClick={() => {
              //   navigate("./talent-about");
              // }}
              // onClick={() => navigate("/talent-about")}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ProMultiItemCarousel;

const Services = [
  {
    subject: "Machine Learning",
    image: MachineLearning,
  },
  {
    subject: "Programming Services",
    image: ProgrammingServices,
  },
  {
    subject: "Artificial Intelligence",
    image: Artificial,
  },
  {
    subject: "Block Chain",
    image: BlockChain,
  },
  {
    subject: "Database",
    image: Database,
  },
  {
    subject: "Programming Services",
    image: ProgrammingServices,
  },
  {
    subject: "Artificial Intelligence",
    image: Artificial,
  },
  {
    subject: "Block Chain",
    image: BlockChain,
  },
  {
    subject: "Artificial Intelligence",
    image: Artificial,
  },
  {
    subject: "Block Chain",
    image: BlockChain,
  },
  // {
  //   subject: 'Machine Learning',
  //   image: MachineLearning
  // },
];
