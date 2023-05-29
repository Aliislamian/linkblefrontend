import React from 'react'
import './TalentEarning.css'
import { useRef } from "react";
import TalentNavbar from "../TalentNavbar/TalentNavbar";

import earningGraph from "../../images/earningGraph.PNG";
import payapl from "../../images/payapl.png";
import stripe from "../../images/stripe.png";
import bank from "../../images/bank.png";
import BuyerFooter from '../../components/BuyerFooter/BuyerFooter';
const TalentEarning = () => {
    const navRef = useRef();
    return (
        <div >
            <div>
                <TalentNavbar ref={navRef} />
            </div>
            <span
                onClick={() => {
                    navRef.current.handleOutsideClick();
                }}
            >
                <div className="talent-earnign-main-container">


                    <div className="talent-earning-overview-hadings-container">
                        <div className="talent-earning-overview-left-heading">
                            Earning & Overview

                        </div>
                        <div className="talent-earning-overview-right-heading">
                            Expected earnings: $0

                        </div>
                    </div>
                    <div className="talent-earning-overview-main-container">
                        <div className="talent-earning-overview-main-text">
                            Overview
                            {/* <TalentEarningGoal /> */}
                        </div>
                        <div className="talent-earning-overview-container">

                            <TalentEarningGoal text={"Personal Balance"} value={'$ 2830'} />
                            <TalentEarningGoal text={"Earning in Nov"} value={'$ 830'} />
                            <TalentEarningGoal text={"Pending Clearance"} value={'$ 300'} />
                        </div>
                        <div className="talent-earning-overview-container">

                            <TalentEarningGoal text={"Active Order"} value={'2 ($360)'} />
                            <TalentEarningGoal text={"Ave. selling price"} value={'$ 540'} />
                            <TalentEarningGoal text={"Cancelled Orders"} value={'0 (-$0)'} />
                        </div>

                        <div className="talent-earning-graph">
                            <img src={earningGraph} alt="graph" />
                        </div>
                        <div className="withdrawing-option-container">
                            <div className="withdrawing-option-container-text">
                                WITHDRAW BALANCE VIA
                            </div>
                            <div className="withdrawing-option-inner-container">
                                <div className="withdrawing-single-option-container">
                                    <div className="withdrawing-paypal-option-container-img">
                                        <span
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "white",
                                                borderRadius: "50%",
                                                width: "80px",
                                                height: "80px",

                                            }}
                                        >

                                            <img
                                                style={{ width: "50px", height: "50px" }}
                                                src={stripe} alt="stripe" />
                                        </span>
                                    </div>
                                    <div className="withdrawing-paypal-container-text">
                                        Stipe Account
                                    </div>
                                </div>
                                <div className="withdrawing-single-option-container">
                                    <div className="withdrawing-ingle-option-container-img">
                                        <img src={bank} alt="bank" />
                                    </div>
                                    <div className="withdrawing-paypal-container-text">
                                        Bank Transfer
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
                <BuyerFooter />
            </span >
        </div >
    )
}

export default TalentEarning


export const TalentEarningGoal = (props) => {
    return (
        <div className="talent-next-level-requirement-container">
            <div className="talent-next-level-requirement-text">
                {props.text}
            </div>
            <div className="talent-next-level-requirement-inner-container">
                <div className="talent-next-level-requirement-dot"></div>
                <div className="talent-next-level-requirement-inner-text">
                    {props.value}
                </div>
            </div>
        </div>
    )
}