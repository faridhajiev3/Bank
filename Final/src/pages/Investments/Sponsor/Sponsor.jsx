import React from 'react'
import "./sponsor.css"

function Sponsor({icon, apple, commerce, money, percentage, color, back, wordColor}) {
    return (
        <div className='sponsor'>
            <div className='apple2' style={{color:color, background:back}}>
                {icon}
            </div>
            <div>
                <p className='app'>{apple}</p>
                <p className='ret' >{commerce}</p>
            </div>
            <div>
                <p className='appleStore'>{money}</p>
                <p className='return'>Envestment Value</p>
            </div>
            <div>
                <p className='per' style={{color:wordColor}}>{percentage}</p>
                <p className='return'>Return Value</p>
            </div>
        </div>
    )
}

export default Sponsor