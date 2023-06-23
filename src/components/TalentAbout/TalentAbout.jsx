import React, { useEffect, useRef, useState } from "react";
import "./TalentAbout.css";
import Navbar from "../../components/MyNav/Navbar";
import GuestOptions from "../GuestOptions/GuestOptions";
import TalentAboutMeCard from "../TalentAboutMeCard/TalentAboutMeCard";
import StarIcon from "@material-ui/icons/Star";
// import Faq from "react-faq-component";

import AboutMeCarousel from "../AboutMeCarousel/AboutMeCarousel";
import topArrowIcon from "../../images/topArrowIcon.png";
// import TalentAboutData from "./TalentAboutData";
// import ServicesCardComponent from "../ServicesCardComponent/ServicesCardComponent";
// import Footer from "../Footer/Footer";
import BuyerFooter from "../BuyerFooter/BuyerFooter";
import MultiItemCarousel from "../ServicesCard/MultiItemCrousel";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const TalentAbout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [planName, setPlanName] = useState('basic');
  const navRef = useRef();


  const faqData = [
    {
      question: "Which software you use to design Mobile apps UI/UX?",
      answer:
        "I mostly use Adobe XD & Photoshop - FIGMA - but if you have any other preferences then you can let me know :)Thanks ",
    },
    {
      question: "Which software you use to design Mobile apps UI/UX?",
      answer:
        "I mostly use Adobe XD & Photoshop - FIGMA - but if you have any other preferences then you can let me know :)Thanks I mostly use Adobe XD & Photoshop - FIGMA - but if you have any other p I mostly use Adobe XD & Photoshop - FIGMA - but if you have any other p ",
    },
  ];
  const navigate = useNavigate();
  const { isLoading: isLoadingApi1, error: errorApi1, data: dataApi1, refetch: refetchApi1 } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get("/get-service-details/" + id).then
        ((res) => {
          return res.data
        }),
  })

  const { isLoading: isLoadingApi2, error: errorApi2, data: dataApi2, refetch: refetchApi2 } = useQuery({
    queryKey: ['allServices'],
    queryFn: () =>
      newRequest.get("/guest/all-services").then
        ((res) => res.data),

  })

  if (isLoadingApi1 || isLoadingApi2) return <div>Loading...</div>
  if (errorApi1 || errorApi2) return <div>Error: {(errorApi1 || errorApi2).message}</div>

  const handleChooseClick = (data, planName) => {

    // append plan name to data
    console.log("data-=-=-=-=-=-=-=-=-=",data)

    // save data in session storage

    sessionStorage.setItem('planName', JSON.stringify(planName))
    sessionStorage.setItem('selectedPlan', JSON.stringify(data))
    // navigate to checkout page
    navigate("/order-placement-detail")
  }

  return (
    <div>
      <Navbar ref={navRef} />
      <span
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <GuestOptions />

        <div className="talent-about-container">
          <div className="talent-about-inner-container">
            <div className="talent-about-me-card-container">
              <TalentAboutMeCard userData={dataApi1} />
            </div>
            <div className="talent-about-carousel">
              <div
                className="talent-about-carousel-top-text-container"
                onClick={() => navigate("/buyer-review")}
              >
                <div className="talent-about-carousel-top-text-heading">
                  {dataApi1.title}
                </div>
                <div className="talent-about-rating-container">
                  <div className="talent-about-carousel-star-container">
                    <StarIcon
                      style={{ color: "gold", fontSize: "20px" }}
                      className="talent-about-stars"
                    />
                    <StarIcon
                      style={{ color: "gold", fontSize: "20px" }}
                      className="talent-about-stars"
                    />
                    <StarIcon
                      style={{ color: "gold", fontSize: "20px" }}
                      className="talent-about-stars"
                    />
                    <StarIcon
                      style={{ color: "gold", fontSize: "20px" }}
                      className="talent-about-stars"
                    />
                    <StarIcon
                      style={{ color: "gold", fontSize: "20px" }}
                      className="talent-about-stars"
                    />
                  </div>
                  <div className="talent-about-carousel-review-number">
                    {dataApi1.review}
                  </div>
                </div>

              </div>
              <div
                style={{ cursor: "pointer" }}
                className="talent-about-carousel-div"
              >
                <AboutMeCarousel gigImages={dataApi1.servicesImages} />
              </div>
              <div className="talent-about-carousel-bottom-heading">
                About Service
              </div>
              <div className="talent-about-carousel-bottom-text">
                {dataApi1.description}
              </div>
            </div>
            <div className="talent-about-price-container">
              <div className="talent-about-price-inner-container">
                <div className="talent-about-package-headings-container">
                  <div className="talent-about-package-heading"
                    onClick={() => setPlanName('basic')}
                  >Basic</div>
                  <div className="talent-about-package-heading"
                    onClick={() => setPlanName('standard')}
                  >Standard</div>
                  <div className="talent-about-package-heading"
                    onClick={() => setPlanName('premium')}
                  >Premium</div>
                </div>
                <div className="talent-about-price">
                  {dataApi1.pricing[planName].price} <br />
                  Dollars
                </div>

                <div className="talent-about-price-services-container">
                  <div className="talent-about-price-services-heading">
                    Package Name
                  </div>
                  <div className="talent-about-price-services-offer">
                    {dataApi1.pricing[planName].packageName}
                  </div>
                </div>
                <div className="talent-about-price-services-container">
                  <div className="talent-about-price-services-heading">
                    Package Details
                  </div>
                  <div className="talent-about-price-services-offer">
                    {dataApi1.pricing[planName].packageDetails}
                  </div>
                </div>
                <div className="talent-about-price-services-container">
                  <div className="talent-about-price-services-heading">
                    Total Screen
                  </div>
                  <div className="talent-about-price-services-offer">
                    {dataApi1.pricing[planName].totalScreen}
                  </div>
                </div>
                <div className="talent-about-price-services-container">
                  <div className="talent-about-price-services-heading">
                    Delivery Time
                  </div>
                  <div className="talent-about-price-services-offer">
                    {dataApi1.pricing[planName].delivery}
                  </div>
                </div>
                <div className="talent-about-price-services-container">
                  <div className="talent-about-price-services-heading">
                    Revisions
                  </div>
                  <div className="talent-about-price-services-offer">
                    {dataApi1.pricing[planName].revisions}
                  </div>
                </div>
                <div className="talent-about-price-btn-container">
                  <button
                    className="talent-about-price-btn"
                    onClick={() => {
                      // navigate("/order-placement-detail");
                      handleChooseClick(dataApi1, planName)
                    }}
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="talent-about-faq-heading" style={{ fontWeight: "600" }}>FAQ</h1>
          {faqData.map(({ question, answer }) => {
            return <FaqContainer question={question} answer={answer} />;
          })}
        </div>
        <MultiItemCarousel
          gigsData={dataApi2}
          CarouselTitle="Services You may also like"
          CarouselAllServices="null"
        />
        <MultiItemCarousel
          gigsData={dataApi2}
          // CarouselTitle="null"
          CarouselAllServices="null"
        />
        <BuyerFooter />
      </span >
    </div >
  );
};

export default TalentAbout;

export const FaqContainer = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const heightRef = useRef(null);
  const [answerHeight, setAnswerHeight] = useState("0px");
  const handleQuestionClick = async () => {
    setIsAnswerVisible(!isAnswerVisible);
    // setAnswerHeight(
    //   isAnswerVisible ? `${heightRef.current.scrollHeight}px` : "0px"
    // );
    !isAnswerVisible
      ? setAnswerHeight(`${heightRef.current.scrollHeight}px`)
      : setAnswerHeight("0px");
  };
  return (
    <div className="talent-about-faq-container">
      <div
        className="talent-about-question-container"
        onClick={handleQuestionClick}
      >
        <div className="talent-about-question">{question}</div>
        <img
          style={{ transform: !isAnswerVisible && "rotate(180deg)" }}
          src={topArrowIcon}
          alt="arrow icon"
          className="talent-about-question-faq-icon"
        />
      </div>

      <div
        ref={heightRef}
        className="talent-about-answer-container-answer"
        style={{ height: `${answerHeight}` }}
      >
        {answer}
      </div>
    </div>
  );
};
