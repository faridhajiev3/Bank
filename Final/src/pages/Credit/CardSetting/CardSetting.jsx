import React from 'react'
import "./cardSetting.css"

function CardSetting({icon, letter, info, color, back}) {
    return (
        <div className='set'>
            <div className='block' style={{color:color, background:back}}>
                {icon}
            </div>
            <div className='appre'>
                <p className='l'>{letter}</p>
                <p className='i'>{info}</p>
            </div>
        </div>
    )
}

export default CardSetting