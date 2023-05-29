import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/five.png";
import CardServices from "./Card";
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

const MultiItemCarousel = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {

    if (props.gigsData) {

      // let DisplayData = props.gigsData.services.map((service) => {

      //   // create a new array of objects with subject as service.title and image as service.servicesImages[0] 
      //   // and push it to the array

      //   let obj = {
      //     subject: service.title,
      //     image: service.servicesImages[0] ? service.servicesImages[0].imgUrl : "",
      //     id: service._id
      //   }
      //   return obj;
      // })
      // if (DisplayData.length > 0) {
      setServicesData(props.gigsData.services);

      // }

    }

  }, [props.gigsData])


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

        {

          servicesData.length > 0 ? servicesData.map((item) => {
            return <CardServices data={item} />;
          }) : Services.map((item) => {
            return <CardServices data={item} />;
          })}

      </Slider>
    </div>
  );
};

export default MultiItemCarousel;

const Services = [
  // {
  //   subject: "Develops Mobile Apps for Android and IOS",
  //   image: one,
  // },
  // {
  //   subject: "Mobile Application  UI/UX XD or Figma Design",
  //   image: two,
  // },
  // {
  //   subject: "Machine Learning Projects in Python",
  //   image: three,
  // },
  // {
  //   subject: "Design & develop Modern Website",
  //   image: four,
  // },
  // {
  //   subject: "Native iOS Development",
  //   image: five,
  // },
  // {
  //   subject: "Native iOS Development",
  //   image: two,
  // },
  // {
  //   subject: "Native iOS Development",
  //   image: four,
  // },
  // {
  //   subject: "Native iOS Development",
  //   image: one,
  // },
  // {
  //   subject: "Native iOS Development",
  //   image: five,
  // },
  // {
  //   subject: "Native iOS Development",
  //   image: three,
  // },
];
