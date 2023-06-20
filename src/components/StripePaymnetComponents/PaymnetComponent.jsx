
import React, { useEffect, useRef, useState } from "react";
import "./PaymentComponent.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import Navbar from "../MyNav/Navbar";


const stripePromise = loadStripe(
    "pk_test_51Mx2FxDbLFHi3ZvJawX1KLUeeyAS7Ng4yuAsJzvAuqCMYVYHzMkh1jjzCbQeLPwXiwP3tB3BfYQ6auOWTY3ApP6l00fIyLwOpO"
);

const PaymnetComponent = () => {
    const navRef = useRef();
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(() => {
        const storedPlan = JSON.parse(sessionStorage.getItem('selectedPlan'));
        return storedPlan || {};
    });

    const [selectedPlanName, setSelectedPlanName] = useState(() => {
        const storedPlanName = JSON.parse(sessionStorage.getItem('planName'));
        return storedPlanName || '';
    });
    const [deliveryDate, setDeliveryDate] = useState("");

    useEffect(() => {
        function getFutureDate(deliveryDays) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + deliveryDays);

            const options = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            };

            return currentDate.toLocaleDateString('en-US', options);
        }

        const deliveryDays = selectedPlan.pricing[selectedPlanName].deliveryDays ? selectedPlan.pricing[selectedPlanName].deliveryDays : 0;
        const futureDate = getFutureDate(deliveryDays);

        setDeliveryDate(futureDate);
        if (!selectedPlan || !selectedPlanName) {
            navigate(-1);
        }
        console.log("selectedPlan", selectedPlan);
        console.log("selectedPlanName", selectedPlanName);


        const makeRequest = async () => {
            console.log("check" + deliveryDate);
            console.log("check" + futureDate);
            try {
                const res = await newRequest.post(
                    `/buyer/get-client-secret`,
                    {
                        DeliveryTime: futureDate,
                        package: selectedPlanName,
                        TermsAndContitions: true,
                        talentId: selectedPlan.user_id._id,
                        serviceId: selectedPlan._id,
                        category: selectedPlan.category,
                        subcategory: selectedPlan.subcategory,
                    }
                );
                console.log("resresresresresresres=========>>>>>>>", res);
                setClientSecret(res.data.clientSecret);
                console.log(res.data.orderId);
                let orderId = res.data.orderId;
                sessionStorage.setItem('orderId', orderId);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();


    }, [selectedPlan, selectedPlanName]);


    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
            <Navbar ref={navRef} />
            <div className="pay"
                onClick={() => {
                    navRef.current.handleOutsideClick();
                }}
            >

                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div >;
        </>)
};

export default PaymnetComponent;
