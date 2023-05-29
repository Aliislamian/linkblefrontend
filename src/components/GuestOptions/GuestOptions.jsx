import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../GuestOptions/GuestOptions.css'

const GuestOptions = () => {
    const navigate = useNavigate();
    return (
        <div className='main_guest_option'
            onClick={() => { navigate("/services") }}
        >
            <div className='options_div'>
                Data Science
            </div>
            <div className='options_div'>
                Programming services
            </div>
            <div className='options_div'>
                Artificial intelligence
            </div>
            <div className='options_div'>
                Blockchain
            </div>
            <div className='options_div'>
                ERP
            </div>
            <div className='options_div'>
                Cloud Engineering
            </div>
            <div className='options_div'>
                Meta Analysis
            </div>
            <div className='options_div'>
                Vibration analysis
            </div>
            <div className='options_div'>
                SCANA developer
            </div>
        </div>
    )
}

export default GuestOptions