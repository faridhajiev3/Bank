import React from 'react'
import Cart from '../../components/Cart/Cart'
import "./dashboard.css"
import { CiCreditCard1 } from "react-icons/ci";
import SimpleBarChart from '../../components/Charts/SimpleBarChart';
import Statistics from '../../components/Charts/Pie/PieChart';
import SwiperData from './SwiperData';
import TinyLineChart from '../../components/Charts/Line/TinyLineChart';
import Header from '../../components/Header';
import { SlPaypal } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";

function Dashboard() { 
    return (  
        <div>
            <Header all={"Overview"} />
            <div style={{ background: "#f5f7fa" }}>
                <div className='carts'>
                    <div>
                        <p className='myCard'>My Cards</p>
                        <Cart ic={"FFFFFF80"} background={"linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)"}/>
                    </div>
                    <div>
                        <p className='seeAll'>See All</p>
                        <Cart ic={"#9199AF80"} background={"#fff"} color={"#343C6A"} />
                    </div>
                    <div>
                        <p className='myCard'>Recent Transaction</p>
                        <div className='recent'>
                            <div className='deposit'>
                                <CiCreditCard1 className='creditCart' />
                                <div className='wiss'>
                                    <p className='fromCart'>Deposit from my Card</p>
                                    <p className='januray'>28 January 2021 <span className='red'>-$850</span></p>
                                </div>
                            </div> 
                            <div className='deposit'>
                                <SlPaypal className='creditCart creditCart1' />
                                <div className='wiss'>
                                    <p className='fromCart'>Deposit Paypal</p>
                                    <p className='januray'>25 January 2021 <span className='green'>+$2,500</span></p>
                                </div>
                            </div>
                            <div className='deposit'>
                                <AiOutlineDollar className='creditCart creditCart2' />
                                <div className='wiss'>
                                    <p className='fromCart'>Jemi Wilson</p>
                                    <p className='januray'>21 January 2021 <span className='green'>+$5,400</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='charts'>
                    <div>
                        <p className='weeklyActivity'>Weekly Activity</p>
                        <div className='grafik1'>
                            <SimpleBarChart back={"#16DBCC"}/>
                        </div>
                    </div>
                    <div>
                        <p className='expenseStatistics'>Expense Statistics</p>
                        <Statistics />
                    </div>
                </div>
                <div className='endPage'>
                    <div>
                        <p className='quick'>Quick Transfer</p>
                        <div className='send'>
                            <div className='people'>
                                <SwiperData />
                            </div>
                            <div className='transfer'>
                                <p className='letter'>Write Amount</p>
                                <input className='sendmoney' type="number" placeholder='525.50' />
                                {/* <BsSend /> */}
                                <button className='sendButton'>Send</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='balanceHistory'>Balance History</p>
                        <TinyLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard