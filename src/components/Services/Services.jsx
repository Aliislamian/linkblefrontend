import React from 'react'
import { useRef } from 'react'
import GuestOptions from '../GuestOptions/GuestOptions'
import Navbar from "../../components/MyNav/Navbar";
import ServicesCardComponent from '../ServicesCardComponent/ServicesCardComponent'
import "./Services.css"
const Services = () => {
    const navRef = useRef();
    return <div>
        <div>
            <Navbar ref={navRef} />
        </div>
        <span
            onClick={() => {
                navRef.current.handleOutsideClick();
            }}
        >
            <div>
                <GuestOptions />
            </div>
            <div className="services-main-container">

                <ServicesCardComponent
                    title={"Programming services"}
                    subTitle={"Top rated services a head!"}
                />
            </div>

        </span>

    </div>

}

export default Services