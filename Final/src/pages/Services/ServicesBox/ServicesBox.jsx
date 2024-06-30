import React from 'react'
import "./servicesBox.css"
import { FaShieldHeart } from "react-icons/fa6";
function ServicesBox({icon, insu, pro, color, back}) {
    return (
        <div className='ins'>
            <div className='in'>
                <div className='im' style={{color:color, background:back}}>
                {icon}
                </div>
                <div>
                    <p className='myBalan'>{insu}</p>
                    <p className='num'>{pro}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesBox