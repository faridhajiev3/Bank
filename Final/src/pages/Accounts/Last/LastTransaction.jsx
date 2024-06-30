import React from 'react'
import "./lastTransaction.css"
import { LuBellRing } from "react-icons/lu";
function LastTransaction({pic, spo, shop, completed, color, back, money, moco}) {
    return (
        <div>
            <div className='la'>
                <div className='bell' style={{color:color, background:back}}>
                    {pic}
                </div>
                <div className='two'>
                    <p className='the'>{spo} <span className='span'>25 Jan 2021</span></p>
                </div>
                <p className='report'>{shop}</p>
                <p className='report'>1234 ****</p>
                <p className='report'>{completed}</p>
                <p className='profit' style={{color:moco}}>{money}</p>
            </div>
        </div> 
    )
}

export default LastTransaction