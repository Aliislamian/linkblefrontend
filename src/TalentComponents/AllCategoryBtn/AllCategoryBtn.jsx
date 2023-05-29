import React from "react";
import "./AllCategoryBtn.css";
import topicon from "../../images/topicon.png";
import { useState } from "react";

const AllCategoryBtn = (props) => {
  const [categoryList, setCategoryList] = useState(false);

  return (
    <div
      className="all-category-btn-container"
      onClick={() => {
        setCategoryList(!categoryList);
      }}
    >
      <div className="buyer-profile-all-categories-btn-container">
        <div className="buyer-profile-all-categories-btn-text">
          All Categories
        </div>
        <div className="buyer-profile-all-categories-btn-icon">
          <img src={topicon} alt="arrow icon" />
        </div>
      </div>

      {props.categoryList && (
        <div className="all-category-list">
          <div className="category-list-items">UI UX Design</div>
          <div className="category-list-items">UI UX Design</div>
          <div className="category-list-items">UI UX Design</div>
          <div className="category-list-items">UI UX Design</div>
        </div>
      )}
    </div>
  );
};

export default AllCategoryBtn;
