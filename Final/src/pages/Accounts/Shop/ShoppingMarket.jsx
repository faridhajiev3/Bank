import React from 'react'
import { AiOutlineApple } from "react-icons/ai";
import "./shoppingMarket.css"
function ShoppingMarket({apple, invoices, day, cash, color, background}) {
    return (
        <div className='sent'>
            <div className='apple' style={{background:background, color:color}}>
                {apple}
            </div>
            <div className='store'>
                <p className='invoices'>{invoices}</p>
                <p className='day'>{day}</p>
            </div>
            <p className='cash'>{cash}</p>
        </div> 
    )
}

export default ShoppingMarket 