import React from 'react'
import "./bankServices.css"

function BankServices({ icon, main, color, back }) {
    return (
        <div className='bankList'>
            <div className='miniBank'>
                <div className='life' style={{color:color, background:back}}>
                    {icon}
                </div>
                <div>
                    <p className='darkk'>{main}</p>
                    <p className='grayy'>It is a long established </p>
                </div>
            </div>
            <div>
                <p className='dark'>Lorem Ipsum</p>
                <p className='gray'>Many publishing</p>
            </div>
            <div>
                <p className='dark'>Lorem Ipsum</p>
                <p className='gray'>Many publishing</p>
            </div>
            <div>
                <p className='dark'>Lorem Ipsum</p>
                <p className='gray'>Many publishing</p>
            </div>
            <div>
                <button className='btnDetails'>View Details</button>
            </div>
        </div>
    )
}

export default BankServices