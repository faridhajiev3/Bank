import React from 'react'
import { FaBars } from "react-icons/fa";
import "./sidebar.css"
import { NavLink } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import { RxMagnifyingGlass } from "react-icons/rx";
import { useState } from 'react';
import { FaCreditCard } from "react-icons/fa";
import { LuBellDot } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <div className="container">
                <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>BankDash.</h1>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            {/* <FaCreditCard onClick={toggle} /> */}
                            <MdOutlineMenu onClick={toggle}/>
                            {/* <img onClick={toggle} style={{width:"36px", height:"36px"}} src="https://s3-alpha-sig.figma.com/img/05a8/19c3/67411690aa8c050192d3c313d1614713?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KbKaeWpyw-iXV72X8JT4A1yaTdUSS1dnCy-3aa3AcFsjZ6WDUzTwORFNIdsg1b4KUy2CQLWfV74brVsUTnFub6YyKw~nHHeSSMooB7uPXMHq5J2xWp8kNBGkTZZDWePebVLBRnXpv6xJ~7wDPtKJ~xtwddLqeIM9hgw~YcLGX1mjwByKXFyu-ai5j~afhKLiDt5tcDXw1fg9c4uD00dcob8gpUs9nmrZULt2CrhksfCLYri9YgNauvuFqMNaoB~~lH0ssI0UqRsvZV1K2a0WJN6YhFOKbCia0pIA3LcQkZtyeULhDGbL06l6Wbnnp5e-rp-Qmmwy2JMBVuzDV3kc6w__" alt="" /> */}
                        </div>
                    </div>
                    {
                        SidebarData.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </div >
    )
}

export default Sidebar