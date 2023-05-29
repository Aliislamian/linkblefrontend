import React from 'react'
import cross3 from "../../images/cross3.png";
import one from "../../images/one.png";
import "./TalentServices.css"
import { IconButton } from "@material-ui/core";
// import BlueBackgroundTick from "../../images/BlueBackgroundTick.png";
import StarIcon from "@material-ui/icons/Star";
import { useState } from 'react';
import HeartICon from "../../images/HeartICon.png";
import LikedCardIcon from "../../images/LikedCardIcon.png";
const TalentServices = () => {
    const services = [1, 2, 4, 5, 6, 7]
    return (
        <>
            {
                services.map(() => {
                    return TalentService();


                })
            }
        </>
    )
}

const TalentService = () => {
    const [favouriteIconState, setFavouriteIconState] = useState(false);
    return < div className="talent-services-img-and-review-container" >
        <IconButton
            onClick={(e) => {
                e.stopPropagation();
                setFavouriteIconState(!favouriteIconState);
            }}
            className="talent-services-heart-icon"
            aria-label="add to favorites"
            style={{ marginLeft: "2rem", color: "white" }}
        >
            <img
                style={{ width: "20px", height: "20px" }}
                src={!favouriteIconState ? HeartICon : LikedCardIcon}
                alt="heart icon"
            />
        </IconButton>
        <div className="talent-services-gig-img-div">
            <img src={one} alt="gig" />
        </div>
        <div className="payment-gig-review-container">
            <div className="talent-services-gig-heading">
                Develop Mobile Apps Android & iOS
            </div>
            <div className="payment-gig-review-star-container">
                {/* <div className="order-detail-info-rating-star-div"> */}
                <div className="payment-rating-star-div">
                    <StarIcon
                        style={{ color: "gold", fontSize: "20px" }}
                        className="payment-stars"
                    />
                    <StarIcon
                        style={{ color: "gold", fontSize: "20px" }}
                        className="payment-stars"
                    />
                    <StarIcon
                        style={{ color: "gold", fontSize: "20px" }}
                        className="payment-stars"
                    />
                    <StarIcon
                        style={{ color: "gold", fontSize: "20px" }}
                        className="payment-stars"
                    />
                    <StarIcon
                        style={{ color: "gold", fontSize: "20px" }}
                        className="payment-stars"
                    />
                </div>
                <div className="payment-rating-reviews-number">
                    <h2 style={{ color: "black", fontSize: "1rem" }}>
                        5 (28)
                    </h2>
                </div>
                {/* </div> */}
            </div>
        </div>

        <div className="talent-services-starting-price-heading">
            From $10
        </div>
    </div >
}
export default TalentServices