import React from 'react'
import "./cardList.css"

import { GoCreditCard } from "react-icons/go";
import { FaRegCreditCard } from "react-icons/fa";
import { MdPassword } from 'react-icons/md';

function CardList({type, password,names, color, back}) {
    return (
        <div className='cardList'>
            <div className='go' style={{color: color, background:back}}>
                <FaRegCreditCard />
            </div>
            <div>
                <p className='bananaStore'>Card Type</p>
                <p className='return'>Secondary</p>
            </div>
            <div>
                <p className='bananaStore'>Bank</p>
                <p className='return'>{type}</p>
            </div>
            <div className='bare'>
                <p className='bananaStore'>Card Number</p>
                <p className='return'>{password}</p>
            </div>
            <div className='bare'>
                <p className='bananaStore'>Namain Card</p>
                <p className='return'>{names}</p>
            </div>
            <div>
                <p className='view'>View Details</p>
            </div>
        </div>
    )
}

export default CardList