import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutMeCarousel.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import MachineLearning from "../../images/MachineLearning.png";
import ProgrammingServices from "../../images/ProgrammingServices.png";
import Artificial from "../../images/Artificial.png";
import BlockChain from "../../images/BlockChain.png";
import Database from "../../images/Database.png";
import one from "../../images/one.png";
import { useNavigate } from "react-router-dom";
// import ProfessionalCard from "./ProfessionalCard";
// import "../ServicesCard/ServicesCard.css";
let slidesToShow = 1;
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
              fontSize: "20px",
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
          <ArrowForwardIos style={{ color: "#00966b", fontSize: "20px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
};

const AboutMeCarousel = (props) => {
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
    <div className="talent-about-carousel-container" style={{ zIndex: "0" }}>
      <Slider
        {...carouselProperties}
        style={{ zIndex: "0" }}
        className="talent-about-slider"
      >
        {props.gigImages.map((img) => {
          {
            /* return <ProfessionalCard data={item} />; */
          }
          return <img key={img.imgUrl}
            onClick={() => navigate("/buyer-review")}
            src={img.imgUrl} alt="gig" className="about-me-carousel-img" />;
        })}
      </Slider>
    </div>
  );
};

export default AboutMeCarousel;

const GigImages = [
  {
    image: MachineLearning,
  },
  {
    image: ProgrammingServices,
  },
  {
    image: Artificial,
  },
  {
    image: BlockChain,
  },
  {
    image: Database,
  },
  {
    image: ProgrammingServices,
  },
  {
    image: Artificial,
  },
  {
    image: BlockChain,
  },
  {
    image: Artificial,
  },
  {
    image: BlockChain,
  },
];
