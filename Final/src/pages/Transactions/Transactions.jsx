import React from 'react'
import Cart from '../../components/Cart/Cart'
import Header from '../../components/Header'
import "./transactions.css"
import EmptyBar from './BarChart/EmptyBar'
import { TransactionsData } from './TransactionsData'

function Transactions() {

  return (
    <div>
      <Header all={"Transactions"} />
      <div style={{ background: "#f5f7fa" }}>
        <div className='firstPage' >
          <div>
            <p className='myCard'>My Cards</p>
            <Cart background={"linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)"} />
          </div>
          <div>
            <p className='seeAll'>+ Add Card</p>
            <Cart background={"#fff"} color={"#343C6A"} />
          </div>
          <div>
            <p className='myCard'>My Expense</p>
            <EmptyBar />
          </div>
        </div>
        <div className='twoPage'>
          <p className='myCard'>Recent Transactions</p>
          <table className='tranData'>
            <thead>
              <tr className='tr11'>
                <th className='loansTdT'>Description</th>
                <th className='loansTdT'>Transaction ID</th>
                <th className='loansTdT'>Type</th>
                <th className='loansTdT'>Card</th>
                <th className='loansTdT'>Date</th>
                <th className='loansTdT'>Amount</th>
                <th className='loansTdT'>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {
                TransactionsData.map((item, index) => (
                  <tr key={index} className='tr12'>
                    <td className='loansTdT special'><span className='iconSize'>{item.icon}</span> {item.description}</td>
                    <td className='loansTdT'>{item.transaction}</td>
                    <td className='loansTdT'>{item.type}</td>
                    <td className='loansTdT'>{item.card}</td>
                    <td className='loansTdT'>{item.date}</td>
                    <td className='loansTdT'>{item.amount}</td>
                    <td className='loansTdT btn1'>{item.receipt}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className='res'>
            <table className='littleData'>
              <thead>
                <tr className='tr11'>
                  <th className='loansTdT'>Description</th>
                  <th className='loansTdT'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  TransactionsData.map((item, index) => (
                    <tr key={index} className='tr12'>
                      <td className='loansTdT special'><span className='iconSize'>{item.icon}</span> {item.description}</td>
                      <td className='loansTdT'>{item.amount}</td>
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

export default Transactions