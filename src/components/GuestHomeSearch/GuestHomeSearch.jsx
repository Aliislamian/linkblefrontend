import React from "react";
import "../GuestHomeSearch/GuestHomeSearch.css";
import freelancer from "../../images/freelancer.png";
import search from "../../images/search.png";

const GuestHomeSearch = () => {
  return (
    <div className="intro_main_guestHome">
      <div className="intro_sub_main_guestHome_one">
        <div className="search_text_div">
          <h2 className="intro_search_text">
            Search the ultimate freelance service providers
          </h2>
        </div>
        <p className="guest_search_below_Search_tag">
          Hire professional Freelancer World Wide
        </p>
        <div className="guest_home_search_container">
          <div className="intro_search_icon">
            <img
              src={search}
              alt="search icon"
              className="intro_search_icon_image"
            />
          </div>
          {/* <div className="search_input"> */}
          <input
            type="search"
            placeholder="Search for any service..."
            className="into_search_input_text"
          />
          {/* </div> */}
          <div className="intro_search_button">
            <text>Get Started</text>
          </div>
        </div>
        <div className="intro_main_top_services">
          <div className="top_services">Top Services:</div>

          <div className="intro_top_services_suggestions">Data Sceince</div>
          <div className="intro_top_services_suggestions">Block Chain</div>
          <div className="intro_top_services_suggestions">Al/ML</div>
          <div className="intro_top_services_suggestions">Programming</div>
        </div>
      </div>
      <div className="intro_sub_main_guestHome_two">
        <img
          src={freelancer}
          alt="freelancer"
          className="intro_freelancer_image"
        />
      </div>
    </div>
  );
};

export default GuestHomeSearch;
