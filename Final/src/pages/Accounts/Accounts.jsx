import React from 'react'
import Header from '../../components/Header'
import Box from './Box/Box'
import "./accounts.css"
import { GiShinyPurse } from "react-icons/gi"; 
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { TbPigMoney } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import LastTransaction from './Last/LastTransaction'; 
import { LuUser2 } from "react-icons/lu";
import { MdAppSettingsAlt } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import Cart from '../../components/Cart/Cart' 
import { FaPlaystation } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import SimpleBarChart from '../../components/Charts/SimpleBarChart'; 
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import ShoppingMarket from './Shop/ShoppingMarket';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Accounts() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "#1A16F3",
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false, 
      },
      {
        label: 'Sales 2024',
        data: [75, 69, 90, 91, 66, 65],
        backgroundColor: "#FCAA0B",
        // borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 120, 
        ticks: {
          callback: function (value) {
            return value + 20; 
          },
        },
      },
      x: {
        categoryPercentage: 0.5, 
        barPercentage: 0.5, 
        offset: true, 
      },
    },
  };
  return (
    <div>
      <Header all={"Accounts"} />
      <div style={{ background: "#f5f7fa" }}>
        <div className='data'>
          <Box word={"My Balance"} money={"$12,750"} mark={<GiShinyPurse />} background={"#FFF5D9"} color={"#FFBB38"} />
          <Box word={"Income"} money={"$5,600"} mark={<FaMoneyBillTrendUp />} background={"#E7EDFF"} color={"#396AFF"} />
          <Box word={"Expense"} money={"$3,460"} mark={<GrMoney />} background={"#FFE0EB"} color={"#FF82AC"} />
          <Box word={"Total Saving"} money={"$7,920"} mark={<TbPigMoney />} background={"#DCFAF8"} color={"#16DBCC"} />
        </div>
        <div className='medium'>
          <div>
            <p className='myCard'>Last Transaction</p>
            <div className='last'>
              <LastTransaction pic={<LuBellRing />} spo={"Spotify Subscription"} shop={"Shopping"} completed={"Pending"} money={"-$150"} moco={"#FE5C73"}/>
              <LastTransaction back={"#E7EDFF"} color={"#396AFF"} pic={<MdAppSettingsAlt />} spo={"Mobile Service"} shop={"Service"} completed={"Completed"} money={"-$340"} moco={"#FE5C73"}/>
              <LastTransaction back={"#FFE0EB"} color={"#FF82AC"} pic={<FaRegUser />} spo={"Emilly Wilson"} shop={"Transfer"} completed={"Completed"} money={"+$780"} moco={"#16DBAA"}/>
            </div>
          </div>
          <div>
            <div className='mind'>
              <p className='myCard'>My Card</p>
              <p className='seeAll'>See All</p>
            </div>
            <Cart background={"linear-gradient(107.38deg, #2D60FF 2.61%, #539BFF 101.2%)"}/>
          </div>
        </div>
        <div className='insane'>
          <div>
            <p className='myCard'>Debit & Credit Overview</p>
            <div className='grafik2'>
              <Bar data={data} options={options} />
            </div>
          </div>
          <div>
            <p className='myCard'>Invoices Sent</p>
            <div className='shopMarket'>
              <div>
                <ShoppingMarket color={"#16DBCC"} background={"#DCFAF8"} apple={<AiOutlineApple />} invoices={"Apple Store"} day={"5h ago"} cash={"$450"} />
                <ShoppingMarket color={"#FFBB38"} background={"#FFF5D9"} apple={<LuUser2 />} invoices={"Michael"} day={"2 days ago"} cash={"$160"} />
                <ShoppingMarket color={"#396AFF"} background={"#E7EDFF"} apple={<FaPlaystation />} invoices={"Playstation"} day={"5 days ago"} cash={"$1085"} />
                <ShoppingMarket color={"#FF82AC"} background={"#FFE0EB"} apple={<LuUser2 />} invoices={"William"} day={"10 days ago"} cash={"$90"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accounts