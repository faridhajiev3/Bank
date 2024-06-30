import React from 'react'
import Header from '../../components/Header'
import Cart from '../../components/Cart/Cart'
import "./creditCards.css"
import Doughnutt from './PieChart/Doughnut'
import CardList from './CardList/CardList'
import NewCard from './NewCard/NewCard'
import CardSetting from './CardSetting/CardSetting'
import { MdAppBlocking } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { TfiApple } from "react-icons/tfi";

function CreditCards() {
    return (  
        <div>
            <Header all={"Credit Cards"} />
            <div style={{ background: "#f5f7fa" }}>
                <p className='ponni'>My Cards</p>
                <div className='credit'>
                    <Cart background={"linear-gradient(107.38deg, #2D60FF 2.61%, #539BFF 101.2%)"} />
                    <Cart background={"linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)"} />
                    <Cart background={"#fff"} color={"#343C6A"} />
                </div>
                <div className='mediumList'>
                    <div>
                        <p className='myCard'>Card Expense Statistics</p>
                        <div>
                            <Doughnutt />
                        </div>
                    </div>
                    <div>
                        <p className='myCard'>Card List</p>
                        <div className='list'>
                            <CardList type={"DBL Bank"} password={"**** **** 5600"} names={"William"} />
                            <CardList color={"#FF82AC"} back={"#FFE0EB"} type={"BRC Bank"} password={"**** **** 4300"} names={"Michel"} />
                            <CardList color={"#FFBB38"} back={"#FFF5D9"} type={"ABM Bank"} password={"**** **** 7560"} names={"Edward"} />
                        </div>
                    </div>
                </div>
                <div className='hardList'>
                    <div>
                        <p className='myCard'>Add New Card</p>
                        <div>
                            <NewCard />
                        </div>
                    </div>
                    <div>
                        <p className='myCard'>Card Setting</p>
                        <div className='setting'>
                            <CardSetting icon={<MdAppBlocking />} letter={"Block Card"} info={"Instantly block your card"} />
                            <CardSetting color={"#396AFF"} back={"#E7EDFF"} icon={<FaLock />} letter={"Change Pin Code"} info={"Choose another pin code"} />
                            <CardSetting color={"#FF82AC"} back={"#FFE0EB"} icon={<FaGoogle />} letter={"Add to Google Pay"} info={"Withdraw without any card"} />
                            <CardSetting color={"#16DBCC"} back={"#DCFAF8"} icon={<TfiApple />} letter={"Add to Apple Pay"} info={"Withdraw without any card"} />
                            <CardSetting color={"#16DBCC"} back={"#DCFAF8"} icon={<TfiApple />} letter={"Add to Apple Store"} info={"Withdraw without any card"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCards