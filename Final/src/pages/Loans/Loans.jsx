import React from 'react'
import "./loans.css"
import Header from '../../components/Header'
import Box from '../Accounts/Box/Box'
import { GiShinyPurse } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { TbPigMoney } from "react-icons/tb";
import { LoansData, Total } from './Loans Data/LoansData';
function Loans() {
    return (
        <div>
            <Header all={"Loans"} />
            <div style={{ background: "#f5f7fa" }}>
                <div className='data'>
                    <Box size={"18px"} word={"Personal Loans"} money={"$50,000"} mark={<GiShinyPurse />} background={"#FFF5D9"} color={"#FFBB38"} />
                    <Box size={"18px"} word={"Corporate Loans"} money={"$100,000"} mark={<FaMoneyBillTrendUp />} background={"#E7EDFF"} color={"#396AFF"} />
                    <Box size={"18px"} word={"Business Loans"} money={"$500,000"} mark={<GrMoney />} background={"#FFE0EB"} color={"#FF82AC"} />
                    <Box size={"18px"} word={"Custom Loans"} money={"Choose Money"} mark={<TbPigMoney />} background={"#DCFAF8"} color={"#16DBCC"} />
                </div>
                <div>
                    <p className='pomni'>Active Loans Overview</p>
                    <div className='activeLoans'>
                        <table className='loansInfo'>
                            <thead>
                                <tr className='tr1'>
                                    <th className='loansTd'>SL No</th>
                                    <th className='loansTd'>Loan Money</th>
                                    <th className='loansTd'>Left to repay</th>
                                    <th className='loansTd'>Duration</th>
                                    <th className='loansTd'>Interest rate</th>
                                    <th className='loansTd'>Installment</th>
                                    <th className='loansTd'>Repay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    LoansData.map((item, index) => (
                                        <tr className='tr2' key={index}>
                                            <td className='loansTd'>{item.row}</td>
                                            <td className='loansTd'>{item.loanmoney}</td>
                                            <td className='loansTd'>{item.lefttorepay}</td>
                                            <td className='loansTd'>{item.duration}</td>
                                            <td className='loansTd'>{item.interestrate}</td>
                                            <td className='loansTd'>{item.installment}</td>
                                            <td className='loansTd btn'>{item.repay}</td>
                                        </tr>
                                    ))
                                }
                                {
                                    Total.map((item, index) => (
                                        <tr className='tr2' key={index}>
                                            <td className='loansTd r-d'>{item.row}</td>
                                            <td className='loansTd r-d'>{item.loanmoney}</td>
                                            <td className='loansTd r-d'>{item.lefttorepay}</td>
                                            <td className='loansTd r-d'>{item.duration}</td>
                                            <td className='loansTd r-d'>{item.interestrate}</td>
                                            <td className='loansTd r-d'>{item.installment}</td>
                                            <td className='loansTd r-d'>{item.repay}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='f'>
                        <table className='infoLoans'>
                            <thead>
                                <tr className='tr1'>
                                    <th className='loansTd'>Loan Money</th>
                                    <th className='loansTd'>Left to repay</th>
                                    <th className='loansTd'>Repay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    LoansData.map((item, index) => (
                                        <tr className='tr2' key={index}>
                                            <td className='loansTd'>{item.loanmoney}</td>
                                            <td className='loansTd'>{item.lefttorepay}</td>
                                            <td className='loansTd btn'>{item.repay}</td>
                                        </tr>
                                    ))
                                }
                                {
                                    Total.map((item, index) => (
                                        <tr className='tr2' key={index}>
                                            <td className='loansTd r-d'>{item.loanmoney}</td>
                                            <td className='loansTd r-d'>{item.lefttorepay}</td>
                                            <td className='loansTd r-d'>{item.repay}</td>
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

export default Loans