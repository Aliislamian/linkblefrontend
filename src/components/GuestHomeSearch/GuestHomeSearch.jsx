import React from "react";
import "../GuestHomeSearch/GuestHomeSearch.css";
import freelancer from "../../images/freelancer.png";
import search from "../../images/search.png";

const GuestHomeSearch = () => {

  const handleButtonClick = () => {
    const searchInput = document.querySelector('.search_input_text_field');
    const searchQuery = searchInput.value;
    console.log('Searching for:', searchQuery);
  };


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
        <div className="Main_search_bar_buyer">
            <div className="Search_icon_main">
              <img src={search} alt="searchIcon" className="searchIcon_css" />
            </div>
            <div className="input_field_main">
              <input
                type="search"
                placeholder="Search for any service..."
                className="search_input_text_field"
              />
            </div>
            <button className="search-btn" onClick={handleButtonClick}>Get Started</button>

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
