import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./success.css";

const Success = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(search);
    const payment_intent = params.get("payment_intent");

    useEffect(() => {
        const makeRequest = async () => {
            try {
                sessionStorage.setItem("payment_intent", payment_intent);
                // just save the payment intent in the session storage and navigate to the order requirements page
                setTimeout(() => {
                    navigate("/order-requirements");
                }, 2000);
            } catch (err) {
                console.log(err);
            }
        };

        makeRequest();
    }, []);

    return (
        <div className="success-container">
            Payment successful. You are being redirected to the orders page. Please do
            not close the page
        </div>
    );
};

export default Success;
