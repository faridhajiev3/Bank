import React from 'react'
import "./investments.css"
import Header from '../../components/Header'
import Box from '../Accounts/Box/Box'
import { TbMoneybag } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import LineChart from './Fist/LineChart';
import Revenue from './Fist/Revenue';
import Sponsor from './Sponsor/Sponsor';
import { Stock } from './Stock/StockData';   


function Investments() {
    return (
        <div>
            <Header all={"Investments"} />
            <div style={{ background: "#f5f7fa" }}>
                <div className='data1'>
                    <Box width={"350px"} height={"120px"} word={"Total Invested Amount"} money={"$150,000"} mark={<TbMoneybag />} background={"#DCFAF8"} color={"#16DBCC"} size={"20px"} />
                    <Box width={"350px"} height={"120px"} word={"Number of Investments"} money={"1,250"} mark={<TbReportMoney />} background={"#FFE0EB"} color={"#FF82AC"} size={"20px"} />
                    <Box width={"350px"} height={"120px"} word={"Rate of Return"} money={"+5.80%"} mark={<MdOutlineRecycling />} background={"#E7EDFF"} color={"#396AFF"} size={"20px"} />
                </div>
                <div className='mediumChart'>
                    <div>
                        <p className='myCard'>Yearly Total Investment</p>
                        <div className='lineChart'>
                            <LineChart />
                        </div>
                    </div>
                    <div>
                        <p className='myCard'>Monthly Revenue</p>
                        <div className='lineChart'>
                            <Revenue />
                        </div>
                    </div>
                </div>
                <div className='hardChart'>
                    <div>
                        <p className='myCard'>My Investment</p>
                        <div>
                            <Sponsor color={"#FF82AC"} back={"#FFE0EB"} icon={<FaApple />} apple={"Apple Store"} commerce={"E-commerce, Marketplace"} money={"$54,000"} percentage={"+16%"} wordColor={"#16DBAA"} />
                            <Sponsor color={"#4471FF"} back={"#E7EDFF"} icon={<FaGoogle />} apple={"Samsung Mobile"} commerce={"E-commerce, Marketplace"} money={"$25,300"} percentage={"-4%"} wordColor={"#FE5C73"} />
                            <Sponsor color={"#FFBB38"} back={"#FFF5D9"} icon={<SiTesla />} apple={"Tesla Motors"} commerce={"E-commerce, Marketplace"} money={"$8,200"} percentage={"+25%"} wordColor={"#16DBAA"} />
                        </div>
                    </div>
                    <div>
                        <p className='myCard'>Trending Stock</p>
                        <table className='table'>
                            <thead>
                                <tr className='tr1'>
                                    <th className='stockTd'>SL No</th>
                                    <th className='stockTd'>Name</th>
                                    <th className='stockTd'>Price</th>
                                    <th className='stockTd'>Return</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Stock.map((item, index) => (
                                        <tr className='tr2' key={index}>
                                            <td className='stockTd'>{item.row}</td>
                                            <td className='stockTd'>{item.name}</td>
                                            <td className='stockTd'>{item.price}</td>
                                            <td className='stockTd'>{item.return}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investments