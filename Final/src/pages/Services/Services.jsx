import React from 'react'
import "./services.css"
import Header from '../../components/Header'
import Box from '../Accounts/Box/Box'
import { FaShieldHeart } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import BankServices from './ServicesList/BankServices';
import ServicesBox from './ServicesBox/ServicesBox';
import { FaShoppingBag } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Services() { 
    return (
        <div>
            <Header all={"Services"} />
            <div style={{ background: "#f5f7fa" }}>
                <div className='datata'>
                    <ServicesBox icon={<FaShieldHeart/>} insu={"Life Insurance"} pro={"Unlimited protection"}/>
                    <ServicesBox color={"#FFBB38"} back={"#FFF5D9"} icon={<GiShoppingBag />} insu={"Shopping"} pro={"Buy. Think. Grow."}/>
                    <ServicesBox color={"#16DBCC"} back={"#DCFAF8"} icon={<IoShieldCheckmark />} insu={"Safety"} pro={"We are your allies"}/>
                </div>
                <div>
                    <p className='bankservicesList'>Bank Services List</p>
                    <div className='businessList'>
                        <BankServices icon={<GiReceiveMoney/>} main={"Business loans"}/>
                        <BankServices color={"#FFBB38"} back={"#FFF5D9"} icon={<FaShoppingBag />} main={"Checking accounts"}/>
                        <BankServices icon={<IoBarChart />} main={"Savings accounts"}/> 
                        <BankServices color={"#396AFF"} back={"#E7EDFF"} icon={<FaUser />} main={"Debit and credit cards"}/>
                        <BankServices color={"#16DBCC"} back={"#DCFAF8"} icon={<IoShieldCheckmark />} main={"Life Insurance"}/>
                        <BankServices icon={<GiReceiveMoney/>} main={"Business loans"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services