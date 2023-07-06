import React, { useState } from "react";
import "../GuestHomeSearch/GuestHomeSearch.css";
import freelancer from "../../images/freelancer.png";
import search from "../../images/search.png";
import axios from "axios";

const GuestHomeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleButtonClick = () => {
    if (searchQuery.trim() !== "") {
      // Call the API to perform the search
      axios
        .get(
          `https://linkablebackend-production-e3d2.up.railway.app/guest/search-services/${searchQuery}`
        )
        .then((response) => {
          // Handle the API response here
          console.log("Search results:", response.data);
          setSearchResults(response.data);
        })
        .catch((error) => {

          // Handle the API error here
          console.error("Error searching services:", error);
        });
    }
  };

  const handleChange = (value) => {
    setSearchQuery(value);
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
          value={searchQuery}
          onChange={(e) => handleChange(e.target.value)}
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
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GuestHomeSearch;
