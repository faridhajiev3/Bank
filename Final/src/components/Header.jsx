import React from 'react'
import "./header.css"

import { CiSettings } from "react-icons/ci";
import { LuBellDot } from "react-icons/lu";
function Header({all}) {
    return (
        <div className='header'>
            <p className='over'>{all}</p>
            <div className='hed'>
                <input type="text" className='search' placeholder='Search for something'/>
                <CiSettings className='settings'/>
                <LuBellDot className='dot'/>
                {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fuser-picture_21104&psig=AOvVaw1nFEjwmUabj0rCFbTfDtGX&ust=1716655653484000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDYx-PepoYDFQAAAAAdAAAAABAJ" alt="" /> */}
            </div>
        </div>
    )
}

export default Header